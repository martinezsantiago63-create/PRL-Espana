const PRLAudio = {
  synth: typeof window !== "undefined" && "speechSynthesis" in window ? window.speechSynthesis : null,
  utterance: null,
  audioElement: null,
  isAudioFile: false,
  isPaused: false,
  isPlaying: false,
  currentText: "",
  currentTitle: "",
  currentEpisodeId: null,
  chunks: [],
  currentChunkIndex: 0,
  rate: 1.0,
  pitch: 1.0,
  onStateChange: null,
  keepAliveTimer: null,
  watchdogTimer: null,
  onEndCallback: null,

  init() {
    if (this.synth) {
      if (typeof this.synth.onvoiceschanged !== "undefined") {
        this.synth.onvoiceschanged = () => {
          this.getBestVoice();
        };
      }
      try {
        this.synth.getVoices();
      } catch (e) {}
    }
  },

  getBestVoice() {
    if (!this.synth) return null;
    let voices = [];
    try {
      voices = this.synth.getVoices() || [];
    } catch (e) {
      return null;
    }
    if (!voices || voices.length === 0) return null;

    // Prefer high quality Spanish voices (Castilian Spain or Argentina/Latin)
    return (
      voices.find(v => (v.lang === "es-ES" || v.lang === "es_ES") && !v.localService) ||
      voices.find(v => v.lang === "es-ES" || v.lang === "es_ES") ||
      voices.find(v => v.lang.startsWith("es-ES")) ||
      voices.find(v => v.lang.startsWith("es-AR")) ||
      voices.find(v => v.lang.startsWith("es")) ||
      voices[0]
    );
  },

  setRate(newRate) {
    this.rate = parseFloat(newRate) || 1.0;
    if (this.isAudioFile && this.audioElement) {
      this.audioElement.playbackRate = this.rate;
    } else if (this.isPlaying && !this.isPaused) {
      clearTimeout(this.watchdogTimer);
      if (this.synth) {
        try { this.synth.cancel(); } catch (e) {}
      }
      if (window._prlActiveUtterances) {
        window._prlActiveUtterances.clear();
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

    // Protect dots in numbers and common abbreviations to prevent unnatural cuts
    let protectedText = clean
      .replace(/(\d)\.(\d)/g, "$1_DOT_$2")
      .replace(/\b(art|arts|núm|ej|pág|págs|dr|dra|sr|sra|d|dña)\./gi, "$1_DOT_");

    // Match sentences keeping punctuation attached
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
        // Subsplit long sentences by commas or colons
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

    // Filter to ensure every chunk contains actual spoken letters/numbers
    const filtered = initialChunks.filter(c => /[a-zA-Z0-9áéíóúÁÉÍÓÚñÑçÇàèòÀÈÒïüÏÜ]/.test(c));

    // Merge fragments that are too short (< 20 chars) with adjacent chunks for fluent narration
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
    this.detener();

    this.currentText = texto;
    this.currentTitle = titulo || "Audio de Estudio PRL";
    this.currentEpisodeId = episodeId || null;
    this.onEndCallback = onEndCallback || null;

    // Detect if real MP3 podcast file exists for this episode (NotebookLM support)
    if (episodeId) {
      const audioUrl = `audio/podcasts/${episodeId}.mp3`;
      const testAudio = new Audio();
      let hasStarted = false;

      testAudio.oncanplay = () => {
        if (!hasStarted && this.currentEpisodeId === episodeId) {
          hasStarted = true;
          this.audioElement = testAudio;
          this.isAudioFile = true;
          this.isPlaying = true;
          this.isPaused = false;
          testAudio.playbackRate = this.rate;

          testAudio.ontimeupdate = () => {
            this.notifyState();
          };

          testAudio.onended = () => {
            this.finalizar();
          };

          testAudio.onerror = () => {
            if (!this.isPlaying || this.isAudioFile) {
              this.iniciarSintesisVoz(texto);
            }
          };

          testAudio.play().catch(() => {
            this.iniciarSintesisVoz(texto);
          });
          this.notifyState();
        }
      };

      testAudio.onerror = () => {
        if (!hasStarted) {
          this.iniciarSintesisVoz(texto);
        }
      };

      setTimeout(() => {
        if (!hasStarted && this.isPlaying && !this.audioElement) {
          this.iniciarSintesisVoz(texto);
        }
      }, 350);

      testAudio.src = audioUrl;
      this.isPlaying = true;
      return;
    }

    this.iniciarSintesisVoz(texto);
  },

  iniciarSintesisVoz(texto) {
    if (!this.synth) {
      alert("Tu navegador no soporta la reproducción de audio por voz artificial.");
      return;
    }
    this.isAudioFile = false;
    this.audioElement = null;

    const parsedChunks = this.splitTextIntoChunks(texto);
    this.chunks = parsedChunks.length > 0 ? parsedChunks : [texto.trim()];
    this.currentChunkIndex = 0;
    this.isPlaying = true;
    this.isPaused = false;

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
    const chunkText = this.chunks[chunkIndex];
    if (!chunkText || !chunkText.trim()) {
      this.currentChunkIndex++;
      this.speakCurrentChunk();
      return;
    }

    const utter = new SpeechSynthesisUtterance(chunkText);
    this.utterance = utter;
    utter.rate = this.rate;
    utter.pitch = this.pitch;
    utter.lang = "es-ES";

    const voice = this.getBestVoice();
    if (voice) {
      utter.voice = voice;
    }

    if (!window._prlActiveUtterances) {
      window._prlActiveUtterances = new Set();
    }
    window._prlActiveUtterances.add(utter);

    clearTimeout(this.watchdogTimer);
    const estimatedDurationMs = Math.max(7000, Math.round((chunkText.length / 8) * 1000 + 4000));
    this.watchdogTimer = setTimeout(() => {
      if (this.isPlaying && !this.isPaused && this.currentChunkIndex === chunkIndex) {
        console.warn("PRLAudio: Watchdog timeout on chunk", chunkIndex, "advancing...");
        window._prlActiveUtterances.delete(utter);
        this.currentChunkIndex++;
        this.speakCurrentChunk();
        this.notifyState();
      }
    }, estimatedDurationMs);

    utter.onend = () => {
      clearTimeout(this.watchdogTimer);
      window._prlActiveUtterances.delete(utter);

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
      window._prlActiveUtterances.delete(utter);

      if (e.error === "canceled" || e.error === "interrupted") {
        return;
      }

      console.warn("PRLAudio speech error:", e.error, "Advancing chunk:", chunkIndex);
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
      console.error("PRLAudio synth.speak error:", err);
      clearTimeout(this.watchdogTimer);
      window._prlActiveUtterances.delete(utter);
      this.currentChunkIndex++;
      this.speakCurrentChunk();
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
  },

  pausar() {
    if (this.isAudioFile && this.audioElement) {
      if (this.isPaused) {
        this.isPaused = false;
        this.audioElement.play().catch(() => {});
      } else {
        this.isPaused = true;
        this.audioElement.pause();
      }
      this.notifyState();
      return;
    }

    if (!this.synth) return;

    if (this.isPaused) {
      this.isPaused = false;
      this.speakCurrentChunk();
      this.notifyState();
    } else if (this.isPlaying) {
      this.isPaused = true;
      clearTimeout(this.watchdogTimer);
      try {
        this.synth.cancel();
      } catch (e) {}
      if (window._prlActiveUtterances) {
        window._prlActiveUtterances.clear();
      }
      this.notifyState();
    }
  },

  detener() {
    clearTimeout(this.watchdogTimer);
    clearInterval(this.keepAliveTimer);
    if (this.audioElement) {
      try {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
      } catch (e) {}
      this.audioElement = null;
    }
    this.isAudioFile = false;

    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    if (window._prlActiveUtterances) {
      window._prlActiveUtterances.clear();
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
    if (this.isAudioFile && this.audioElement && this.audioElement.duration) {
      return Math.min(100, Math.round((this.audioElement.currentTime / this.audioElement.duration) * 100));
    }
    if (!this.chunks || this.chunks.length === 0) return 0;
    return Math.min(100, Math.round((this.currentChunkIndex / this.chunks.length) * 100));
  },

  estaReproduciendo() {
    return this.isPlaying && !this.isPaused;
  },

  notifyState() {
    if (typeof this.onStateChange === "function") {
      try {
        this.onStateChange({
          isPlaying: this.isPlaying,
          isPaused: this.isPaused,
          isAudioFile: this.isAudioFile,
          title: this.currentTitle,
          episodeId: this.currentEpisodeId,
          progress: this.getProgress(),
          rate: this.rate
        });
      } catch (e) {
        console.error("PRLAudio onStateChange error:", e);
      }
    }

    this.updateMiniPlayerUI();
  },

  updateMiniPlayerUI() {
    const mini = document.getElementById("podcastMiniPlayer");
    if (!mini) return;

    if (!this.isPlaying && !this.isPaused) {
      mini.classList.add("hidden");
      return;
    }

    mini.classList.remove("hidden");
    const titleEl = mini.querySelector(".mini-player-title");
    const playBtn = mini.querySelector(".mini-player-play-btn");
    const barEl = mini.querySelector(".mini-player-progress-fill");
    const rateEl = mini.querySelector(".mini-player-rate");

    if (titleEl) titleEl.textContent = this.currentTitle || "Reproduciendo...";
    if (playBtn) playBtn.textContent = this.isPaused ? "▶️" : "⏸️";
    if (barEl) barEl.style.width = this.getProgress() + "%";
    if (rateEl) rateEl.textContent = `${this.rate}x`;
  }
};

if (typeof window !== "undefined") {
  PRLAudio.init();
}
