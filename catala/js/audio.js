const CatalaAudio = {
  synth: typeof window !== "undefined" && "speechSynthesis" in window ? window.speechSynthesis : null,
  isPaused: false,
  isPlaying: false,
  currentText: "",
  currentTitle: "",
  currentEpisodeId: null,
  chunks: [],
  currentChunkIndex: 0,
  rate: 1.0,
  onStateChange: null,
  keepAliveTimer: null,
  watchdogTimer: null,
  onEndCallback: null,

  init() {
    if (this.synth) {
      if (typeof this.synth.onvoiceschanged !== "undefined") {
        this.synth.onvoiceschanged = () => {
          this.getCatalanVoice();
          this.getSpanishVoice();
        };
      }
      try { this.synth.getVoices(); } catch (e) {}
    }
  },

  getCatalanVoice() {
    if (!this.synth) return null;
    let voices = [];
    try { voices = this.synth.getVoices() || []; } catch (e) { return null; }
    return voices.find(v => v.lang.startsWith("ca")) || null;
  },

  getSpanishVoice() {
    if (!this.synth) return null;
    let voices = [];
    try { voices = this.synth.getVoices() || []; } catch (e) { return null; }
    if (!voices || voices.length === 0) return null;
    return (
      voices.find(v => (v.lang === "es-ES" || v.lang === "es_ES") && !v.localService) ||
      voices.find(v => v.lang === "es-ES" || v.lang === "es_ES") ||
      voices.find(v => v.lang.startsWith("es-ES")) ||
      voices.find(v => v.lang.startsWith("es")) ||
      voices[0]
    );
  },

  setRate(newRate) {
    this.rate = parseFloat(newRate) || 1.0;
    if (this.isPlaying && !this.isPaused) {
      clearTimeout(this.watchdogTimer);
      if (this.synth) {
        try { this.synth.cancel(); } catch (e) {}
      }
      if (window._catalaActiveUtterances) {
        window._catalaActiveUtterances.clear();
      }
      setTimeout(() => {
        if (this.isPlaying && !this.isPaused) {
          this.speakCurrentChunk();
        }
      }, 60);
    }
    this.notifyState();
  },

  splitTextIntoChunks(texto, maxChunkLen = 130) {
    if (!texto) return [];

    let clean = texto
      .replace(/<[^>]*>/g, " ")
      .replace(/[#*`_~]/g, "")
      .replace(/[«»"]/g, "")
      .replace(/\r\n/g, "\n")
      .replace(/\t/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (!clean) return [];

    let protectedText = clean
      .replace(/(\d)\.(\d)/g, "$1_DOT_$2")
      .replace(/\b(art|arts|núm|ej|pág|págs|dr|dra|sr|sra|d|dña)\./gi, "$1_DOT_");

    const rawSentences = protectedText.match(/[^.!?\n;]+(?:[.!?\n;]+|$)/g) || [protectedText];
    const initialChunks = [];
    let current = "";

    for (let s of rawSentences) {
      s = s.replace(/_DOT_/g, ".").trim();
      if (!s) continue;

      if (s.length > maxChunkLen) {
        if (current.trim().length > 0) {
          initialChunks.push(current.trim());
          current = "";
        }
        const parts = s.match(/[^,:]+(?:[,:]+|$)/g) || [s];
        for (let p of parts) {
          p = p.trim();
          if (!p) continue;
          if ((current + " " + p).length <= maxChunkLen) {
            current = current ? current + " " + p : p;
          } else {
            if (current.trim().length > 0) initialChunks.push(current.trim());
            if (p.length > maxChunkLen) {
              const words = p.split(/\s+/);
              let wCurrent = "";
              for (const w of words) {
                if ((wCurrent + " " + w).length <= maxChunkLen) {
                  wCurrent = wCurrent ? wCurrent + " " + w : w;
                } else {
                  if (wCurrent.trim()) initialChunks.push(wCurrent.trim());
                  wCurrent = w;
                }
              }
              current = wCurrent;
            } else {
              current = p;
            }
          }
        }
      } else {
        if ((current + " " + s).length <= maxChunkLen) {
          current = current ? current + " " + s : s;
        } else {
          if (current.trim().length > 0) initialChunks.push(current.trim());
          current = s;
        }
      }
    }

    if (current.trim().length > 0) {
      initialChunks.push(current.trim());
    }

    const filtered = initialChunks.filter(c => /[a-zA-Z0-9áéíóúÁÉÍÓÚñÑçÇàèòÀÈÒïüÏÜ·]/.test(c));

    if (filtered.length <= 1) return filtered;
    const merged = [];
    let buffer = "";

    for (let i = 0; i < filtered.length; i++) {
      const c = filtered[i];
      if (buffer) {
        buffer += " " + c;
        if (buffer.length >= 20 || i === filtered.length - 1) {
          merged.push(buffer);
          buffer = "";
        }
      } else {
        if (c.length < 20 && i < filtered.length - 1) {
          buffer = c;
        } else if (c.length < 20 && i === filtered.length - 1 && merged.length > 0) {
          merged[merged.length - 1] += " " + c;
        } else {
          merged.push(c);
        }
      }
    }

    if (buffer) {
      if (merged.length > 0) {
        merged[merged.length - 1] += " " + buffer;
      } else {
        merged.push(buffer);
      }
    }

    return merged;
  },

  reproducirTexto(texto, titulo, episodeId, onEndCallback) {
    if (!this.synth) {
      alert("Tu navegador no soporta reproducción de voz.");
      return;
    }

    this.detener();

    this.currentText = texto;
    this.currentTitle = titulo || "Audio Català Pas a Pas";
    this.currentEpisodeId = episodeId || null;

    const parsedChunks = this.splitTextIntoChunks(texto);
    this.chunks = parsedChunks.length > 0 ? parsedChunks : [texto.trim()];
    this.currentChunkIndex = 0;
    this.isPlaying = true;
    this.isPaused = false;
    this.onEndCallback = onEndCallback || null;

    this.startKeepAlive();
    this.speakCurrentChunk();
    this.notifyState();
  },

  speakCurrentChunk() {
    if (!this.isPlaying || this.currentChunkIndex >= this.chunks.length) {
      this.finalizar();
      return;
    }

    if (!this.synth) return;

    if (this.synth.paused) {
      try { this.synth.resume(); } catch (e) {}
    }

    const chunkIndex = this.currentChunkIndex;
    const chunk = this.chunks[chunkIndex];
    if (!chunk || !chunk.trim()) {
      this.currentChunkIndex++;
      this.speakCurrentChunk();
      return;
    }

    const utter = new SpeechSynthesisUtterance(chunk);
    utter.rate = this.rate;
    utter.lang = "es-ES";

    const esVoice = this.getSpanishVoice();
    if (esVoice) utter.voice = esVoice;

    if (!window._catalaActiveUtterances) {
      window._catalaActiveUtterances = new Set();
    }
    window._catalaActiveUtterances.add(utter);

    clearTimeout(this.watchdogTimer);
    const estimatedDurationMs = Math.max(7000, Math.round((chunk.length / 8) * 1000 + 4000));
    this.watchdogTimer = setTimeout(() => {
      if (this.isPlaying && !this.isPaused && this.currentChunkIndex === chunkIndex) {
        console.warn("CatalaAudio: Watchdog timeout on chunk", chunkIndex, "advancing...");
        window._catalaActiveUtterances.delete(utter);
        this.currentChunkIndex++;
        this.speakCurrentChunk();
        this.notifyState();
      }
    }, estimatedDurationMs);

    utter.onend = () => {
      clearTimeout(this.watchdogTimer);
      window._catalaActiveUtterances.delete(utter);

      if (this.isPlaying && !this.isPaused && this.currentChunkIndex === chunkIndex) {
        this.currentChunkIndex++;
        if (this.currentChunkIndex < this.chunks.length) {
          this.speakCurrentChunk();
        } else {
          this.finalizar();
        }
        this.notifyState();
      }
    };

    utter.onerror = (e) => {
      clearTimeout(this.watchdogTimer);
      window._catalaActiveUtterances.delete(utter);

      if (e.error === "canceled" || e.error === "interrupted") {
        return;
      }

      console.warn("CatalaAudio speech error:", e.error, "Advancing chunk:", chunkIndex);
      if (this.isPlaying && !this.isPaused && this.currentChunkIndex === chunkIndex) {
        this.currentChunkIndex++;
        setTimeout(() => {
          if (this.isPlaying && !this.isPaused) {
            this.speakCurrentChunk();
            this.notifyState();
          }
        }, 50);
      }
    };

    try {
      this.synth.speak(utter);
    } catch (err) {
      console.error("CatalaAudio synth.speak error:", err);
      clearTimeout(this.watchdogTimer);
      window._catalaActiveUtterances.delete(utter);
      this.currentChunkIndex++;
      this.speakCurrentChunk();
    }
  },

  parlarCatala(frase, onEnd) {
    if (!this.synth) return;
    try { this.synth.cancel(); } catch (e) {}

    const utter = new SpeechSynthesisUtterance(frase);
    utter.rate = 0.85;
    utter.lang = "ca-ES";

    const caVoice = this.getCatalanVoice();
    if (caVoice) utter.voice = caVoice;

    if (!window._catalaActiveUtterances) {
      window._catalaActiveUtterances = new Set();
    }
    window._catalaActiveUtterances.add(utter);

    utter.onend = () => {
      window._catalaActiveUtterances.delete(utter);
      if (onEnd) onEnd();
    };
    utter.onerror = (e) => {
      window._catalaActiveUtterances.delete(utter);
      if (e.error !== "canceled" && onEnd) onEnd();
    };

    this.synth.speak(utter);
  },

  pausar() {
    if (!this.synth) return;

    if (this.isPaused) {
      this.isPaused = false;
      this.speakCurrentChunk();
      this.notifyState();
    } else if (this.isPlaying) {
      this.isPaused = true;
      clearTimeout(this.watchdogTimer);
      try { this.synth.cancel(); } catch(e) {}
      if (window._catalaActiveUtterances) {
        window._catalaActiveUtterances.clear();
      }
      this.notifyState();
    }
  },

  detener() {
    clearTimeout(this.watchdogTimer);
    clearInterval(this.keepAliveTimer);
    if (this.synth) {
      try { this.synth.cancel(); } catch (e) {}
    }
    if (window._catalaActiveUtterances) {
      window._catalaActiveUtterances.clear();
    }
    this.isPlaying = false;
    this.isPaused = false;
    this.currentChunkIndex = 0;
    this.chunks = [];
    this.notifyState();
  },

  finalizar() {
    this.detener();
    if (typeof this.onEndCallback === "function") {
      const cb = this.onEndCallback;
      this.onEndCallback = null;
      try { cb(); } catch (e) {}
    }
    this.notifyState();
  },

  getProgress() {
    if (!this.chunks || this.chunks.length === 0) return 0;
    return Math.min(100, Math.round((this.currentChunkIndex / this.chunks.length) * 100));
  },

  notifyState() {
    if (typeof this.onStateChange === "function") {
      try {
        this.onStateChange({
          isPlaying: this.isPlaying,
          isPaused: this.isPaused,
          title: this.currentTitle,
          episodeId: this.currentEpisodeId,
          progress: this.getProgress()
        });
      } catch (e) {
        console.error("CatalaAudio onStateChange error:", e);
      }
    }
  },

  startKeepAlive() {
    clearInterval(this.keepAliveTimer);
    this.keepAliveTimer = setInterval(() => {
      if (this.synth && this.isPlaying && !this.isPaused) {
        if (this.synth.paused) {
          try { this.synth.resume(); } catch (e) {}
        }
      }
    }, 4000);
  }
};

if (typeof window !== "undefined") {
  CatalaAudio.init();
}
