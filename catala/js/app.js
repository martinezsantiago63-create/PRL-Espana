const CatalaApp = {
  currentView: "frases",
  currentEpisodeId: null,

  init() {
    CatalaAudio.init();
    this.setupNavigation();
    this.setupAudioListeners();
    this.renderFrasesView();
    this.renderPodcastView();
    this.renderDiccionariView();
    this.renderCuadernilloView();
  },

  setupNavigation() {
    document.querySelectorAll(".nav-item").forEach(item => {
      item.addEventListener("click", () => {
        document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
        document.querySelectorAll(".view-section").forEach(v => v.classList.remove("active"));

        item.classList.add("active");
        const targetView = item.dataset.view;
        this.currentView = targetView;

        const viewEl = document.getElementById(targetView + "View");
        if (viewEl) viewEl.classList.add("active");

        if (targetView === "flashcards") {
          this.initFlashcards();
        }
      });
    });
  },

  setupAudioListeners() {
    CatalaAudio.onStateChange = (state) => {
      // Update Main Podcast Box
      const playBtn = document.getElementById("mainPodcastPlayBtn");
      const progressFill = document.getElementById("mainPodcastProgressFill");
      const statusText = document.getElementById("mainPodcastStatusText");

      if (playBtn) {
        playBtn.textContent = state.isPlaying && !state.isPaused ? "⏸️ Pausar" : "▶️ Reproducir";
      }
      if (progressFill) {
        progressFill.style.width = state.progress + "%";
      }
      if (statusText) {
        statusText.textContent = state.isPlaying 
          ? (state.isPaused ? "En pausa" : "Reproduciendo lección bilingüe...") 
          : "Listo para reproducir";
      }

      // Update Mini Player
      const miniPlayer = document.getElementById("floatingMiniPlayer");
      const miniTitle = document.getElementById("miniPlayerTitle");
      const miniPlayBtn = document.getElementById("miniPlayerPlayBtn");

      if (miniPlayer) {
        if (state.isPlaying) {
          miniPlayer.classList.remove("hidden");
          if (miniTitle) miniTitle.textContent = state.title;
          if (miniPlayBtn) miniPlayBtn.textContent = state.isPaused ? "▶️" : "⏸️";
        } else {
          miniPlayer.classList.add("hidden");
        }
      }

      // Update card buttons
      document.querySelectorAll(".play-ep-btn").forEach((btn) => {
        const epId = btn.dataset.epId;
        const isCurrent = epId === state.episodeId;
        btn.textContent = isCurrent && state.isPlaying && !state.isPaused ? "⏸️ Pausar" : "▶️ Reproducir";
      });
    };

    // Mini player controls
    const miniPlayBtn = document.getElementById("miniPlayerPlayBtn");
    if (miniPlayBtn) {
      miniPlayBtn.addEventListener("click", () => CatalaAudio.pausar());
    }
    const miniStopBtn = document.getElementById("miniPlayerStopBtn");
    if (miniStopBtn) {
      miniStopBtn.addEventListener("click", () => CatalaAudio.detener());
    }
  },

  /* ===== VISTA 1: FRASES DESGLOSSADES ===== */
  renderFrasesView() {
    const container = document.getElementById("frasesContainer");
    if (!container || typeof DATA_CATALA_FRASES === "undefined") return;

    let html = "";
    DATA_CATALA_FRASES.forEach(cat => {
      html += `
        <div style="margin-bottom: 36px;">
          <h3 style="color: var(--accent); font-size: 1.35rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
            <span>${cat.icono}</span> ${cat.categoria}
          </h3>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            ${cat.frases.map(f => `
              <div class="frase-card" data-frase-id="${f.id}">
                <div class="frase-header">
                  <div>
                    <div class="frase-catala">«${f.catala}»</div>
                    <div class="frase-castella">👉 ${f.castella}</div>
                    <div class="frase-pron">Pronunciación: ${f.pron}</div>
                  </div>
                  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <button class="btn btn-speak speak-frase-btn" data-text="${f.catala}">🔊 Escuchar en Catalán</button>
                    <button class="btn btn-mic mic-frase-btn" data-expected="${f.catala}">🎤 Probar Pronunciación</button>
                    <button class="btn btn-secondary copy-frase-btn" data-frase-id="${f.id}">📋 Copiar Desglose</button>
                  </div>
                </div>

                <div style="margin-bottom: 8px; font-weight: 700; font-size: 0.88rem; color: #38bdf8;">
                  🔍 Desglose Palabra por Palabra:
                </div>
                <div class="desglossament-grid">
                  ${f.desglossament.map(d => `
                    <div class="desglos-item">
                      <div class="desglos-cat">${d.cat}</div>
                      <div class="desglos-es">${d.es}</div>
                      <div class="desglos-gram">${d.gram}</div>
                      ${d.fon ? `<div style="font-size: 0.75rem; color: #94a3b8; margin-top: 4px; font-style: italic;">Tip: ${d.fon}</div>` : ''}
                    </div>
                  `).join('')}
                </div>

                ${f.consellFonetica ? `
                  <div class="fonetica-tip">
                    💡 <strong>Ojo en Vic y Cataluña Central:</strong> ${f.consellFonetica}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    // Attach speech events
    container.querySelectorAll(".speak-frase-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        CatalaAudio.parlarCatala(btn.dataset.text);
      });
    });

    // Attach mic events
    container.querySelectorAll(".mic-frase-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        this.activarMicrofono(btn.dataset.expected, btn);
      });
    });

    // Attach copy events
    container.querySelectorAll(".copy-frase-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.fraseId;
        let found = null;
        DATA_CATALA_FRASES.forEach(c => c.frases.forEach(f => { if (f.id === id) found = f; }));
        if (found) {
          const txt = `=== FRASSE EN CATALÀ: «${found.catala}» ===\nEn castellano: ${found.castella}\nPronunciación: ${found.pron}\n\nDesglose Palabra por Palabra:\n` +
            found.desglossament.map(d => `• ${d.cat} = ${d.es} (${d.gram})`).join('\n') +
            `\n\nConsejo: ${found.consellFonetica || ''}`;
          this.copiarAlCuadernillo(txt, `Frase «${found.catala}»`);
        }
      });
    });
  },

  /* ===== RECONOCIMIENTO DE VOZ ===== */
  activarMicrofono(expectedText, btnElement) {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Tu navegador no soporta reconocimiento de voz. Usa Google Chrome o Microsoft Edge.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "ca-ES";
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    btnElement.textContent = "🎙️ Escuchando...";
    btnElement.disabled = true;

    recognition.start();

    recognition.onresult = (event) => {
      const cleanExpected = expectedText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/['"]/g, "").replace(/\s+/g, " ").trim();
      let bestMatch = false;
      let spokenText = event.results[0][0].transcript;

      for (let i = 0; i < event.results[0].length; i++) {
        const spoken = event.results[0][i].transcript.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/['"]/g, "").replace(/\s+/g, " ").trim();
        if (spoken === cleanExpected || cleanExpected.includes(spoken) || spoken.includes(cleanExpected)) {
          bestMatch = true;
          spokenText = event.results[0][i].transcript;
          break;
        }
        const expectedWords = cleanExpected.split(" ");
        const spokenWords = spoken.split(" ");
        let matches = 0;
        expectedWords.forEach(w => { if (spokenWords.some(sw => sw.includes(w) || w.includes(sw))) matches++; });
        if (matches / expectedWords.length >= 0.6) {
          bestMatch = true;
          spokenText = event.results[0][i].transcript;
          break;
        }
      }

      this.mostrarModalPronunciacion(expectedText, spokenText, bestMatch);
      btnElement.textContent = bestMatch ? "✅ ¡Muy bien!" : "⚠️ Casi";
      setTimeout(() => {
        btnElement.textContent = "🎤 Probar Pronunciación";
        btnElement.disabled = false;
      }, 2500);
    };

    recognition.onerror = () => {
      btnElement.textContent = "❌ Error mic";
      setTimeout(() => {
        btnElement.textContent = "🎤 Probar Pronunciación";
        btnElement.disabled = false;
      }, 2000);
    };

    recognition.onend = () => {
      btnElement.disabled = false;
    };
  },

  mostrarModalPronunciacion(expected, spoken, isSuccess) {
    let modal = document.getElementById("pronModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "pronModal";
      modal.style.position = "fixed";
      modal.style.bottom = "24px";
      modal.style.right = "24px";
      modal.style.maxWidth = "400px";
      modal.style.width = "90%";
      modal.style.background = "#1e293b";
      modal.style.border = "2px solid " + (isSuccess ? "#10b981" : "#f59e0b");
      modal.style.borderRadius = "12px";
      modal.style.padding = "20px";
      modal.style.boxShadow = "0 10px 25px rgba(0,0,0,0.6)";
      modal.style.zIndex = "99999";
      document.body.appendChild(modal);
    }

    modal.style.display = "block";
    modal.style.borderColor = isSuccess ? "#10b981" : "#f59e0b";

    modal.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <span style="font-weight: bold; font-size: 1rem; color: ${isSuccess ? '#10b981' : '#f59e0b'};">
          ${isSuccess ? "🎉 ¡Molt bé! Pronunciación Correcta" : "⚠️ Casi (Requiere Ajuste)"}
        </span>
        <button id="closePronModal" style="background: none; border: none; font-size: 1.2rem; color: #94a3b8; cursor: pointer;">&times;</button>
      </div>

      <div style="font-size: 0.9rem; margin-bottom: 6px; color: #94a3b8;">
        🎯 <strong>Modelo en Catalán:</strong> <span style="color: #f8fafc; font-weight: 600;">"${expected}"</span>
      </div>

      <div style="font-size: 0.9rem; margin-bottom: 12px; color: #94a3b8;">
        🎙️ <strong>El sistema escuchó:</strong> <span style="color: ${isSuccess ? '#10b981' : '#f87171'}; font-weight: 600;">"${spoken}"</span>
      </div>

      <div style="background: #0f172a; padding: 10px 12px; border-radius: 8px; font-size: 0.84rem; color: #cbd5e1; margin-bottom: 14px; border-left: 3px solid ${isSuccess ? '#10b981' : '#f59e0b'};">
        ${isSuccess 
          ? "👏 ¡Excelente! El reconocedor en catalán captó tu frase con claridad. En Vic te entenderían perfectamente."
          : "💡 Fíjate en los sonidos vocálicos o en la 'X' y la 'NY'. Escucha el modelo y prueba de nuevo."}
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button id="listenModelPronBtn" class="btn btn-secondary" style="font-size: 0.82rem; padding: 6px 12px;">🔊 Escuchar Modelo</button>
      </div>
    `;

    document.getElementById("closePronModal").addEventListener("click", () => {
      modal.style.display = "none";
    });

    document.getElementById("listenModelPronBtn").addEventListener("click", () => {
      CatalaAudio.parlarCatala(expected);
    });

    clearTimeout(this._pronTimeout);
    this._pronTimeout = setTimeout(() => {
      if (modal) modal.style.display = "none";
    }, 8000);
  },

  /* ===== VISTA 2: PODCAST BILINGÜE ===== */
  renderPodcastView() {
    const listEl = document.getElementById("podcastList");
    if (!listEl || typeof DATA_CATALA_PODCAST === "undefined") return;

    const episodes = DATA_CATALA_PODCAST;
    this.currentEpisodeId = this.currentEpisodeId || episodes[0].id;
    const currentEp = episodes.find(e => e.id === this.currentEpisodeId) || episodes[0];

    // Update main player card
    const titleEl = document.getElementById("mainPodcastTitle");
    const metaEl = document.getElementById("mainPodcastMeta");
    const descEl = document.getElementById("mainPodcastDesc");
    const transcriptEl = document.getElementById("mainPodcastTranscript");

    if (titleEl) titleEl.textContent = `Episodio ${currentEp.numero}: ${currentEp.titulo}`;
    if (metaEl) metaEl.textContent = `⏱️ ${currentEp.duracion} · 🎙️ Desglose Guiado`;
    if (descEl) descEl.textContent = currentEp.descripcion;
    if (transcriptEl) transcriptEl.textContent = currentEp.guion;

    // Render list
    listEl.innerHTML = episodes.map(ep => {
      const isActive = ep.id === this.currentEpisodeId;
      return `
        <div class="episode-card ${isActive ? 'active-ep' : ''}" data-ep-id="${ep.id}">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
              <span style="font-size: 1.4rem;">${ep.icono}</span>
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent); background: var(--accent-light); padding: 2px 8px; border-radius: 4px;">${ep.duracion}</span>
            </div>
            <h4 style="font-size: 1.05rem; color: #fbbf24; margin-bottom: 6px;">${ep.titulo}</h4>
            <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.4;">${ep.descripcion}</p>
          </div>
          <div style="display: flex; gap: 8px; margin-top: 10px;">
            <button class="btn btn-primary play-ep-btn" data-ep-id="${ep.id}" style="flex: 1; padding: 6px 10px; font-size: 0.82rem;">
              ${CatalaAudio.isPlaying && CatalaAudio.currentEpisodeId === ep.id ? "⏸️ Pausar" : "▶️ Reproducir"}
            </button>
            <button class="btn btn-secondary copy-ep-btn" data-ep-id="${ep.id}" style="padding: 6px 10px; font-size: 0.82rem;" title="Copiar guión al cuadernillo">📋</button>
          </div>
        </div>
      `;
    }).join('');

    // Setup main player controls
    const mainPlayBtn = document.getElementById("mainPodcastPlayBtn");
    if (mainPlayBtn) {
      mainPlayBtn.onclick = () => {
        if (CatalaAudio.isPlaying && CatalaAudio.currentEpisodeId === currentEp.id) {
          CatalaAudio.pausar();
        } else if (CatalaAudio.isPaused && CatalaAudio.currentEpisodeId === currentEp.id) {
          CatalaAudio.pausar();
        } else {
          CatalaAudio.reproducirTexto(currentEp.guion, currentEp.titulo, currentEp.id);
        }
      };
    }

    const mainStopBtn = document.getElementById("mainPodcastStopBtn");
    if (mainStopBtn) {
      mainStopBtn.onclick = () => CatalaAudio.detener();
    }

    const speedSelect = document.getElementById("mainPodcastSpeed");
    if (speedSelect) {
      speedSelect.onchange = (e) => CatalaAudio.setRate(e.target.value);
    }

    const copyGuionBtn = document.getElementById("mainPodcastCopyBtn");
    if (copyGuionBtn) {
      copyGuionBtn.onclick = () => {
        this.copiarAlCuadernillo(`=== PODCAST CATALÀ PAS A PAS: ${currentEp.titulo} ===\n\n${currentEp.guion}`, `Guión ${currentEp.titulo}`);
      };
    }

    const toggleTranscriptBtn = document.getElementById("toggleTranscriptBtn");
    if (toggleTranscriptBtn) {
      toggleTranscriptBtn.onclick = () => {
        const box = document.getElementById("mainPodcastTranscript");
        if (box) box.style.display = box.style.display === "none" ? "block" : "none";
      };
    }

    // List item buttons
    listEl.querySelectorAll(".play-ep-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const epId = btn.dataset.epId;
        const targetEp = episodes.find(e => e.id === epId);
        if (!targetEp) return;

        if (CatalaAudio.currentEpisodeId === epId && CatalaAudio.isPlaying && !CatalaAudio.isPaused) {
          CatalaAudio.pausar();
        } else if (CatalaAudio.currentEpisodeId === epId && CatalaAudio.isPaused) {
          CatalaAudio.pausar();
        } else {
          this.currentEpisodeId = epId;
          const titleEl = document.getElementById("mainPodcastTitle");
          const metaEl = document.getElementById("mainPodcastMeta");
          const transcriptBox = document.getElementById("mainPodcastTranscript");
          if (titleEl) titleEl.textContent = targetEp.titulo;
          if (metaEl) metaEl.textContent = `⏱️ ${targetEp.duracion} · 🏷️ ${targetEp.categoria}`;
          if (transcriptBox) transcriptBox.innerHTML = targetEp.guion.replace(/\n/g, '<br>');

          CatalaAudio.reproducirTexto(targetEp.guion, targetEp.titulo, targetEp.id);
        }
      });
    });

    listEl.querySelectorAll(".copy-ep-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const epId = btn.dataset.epId;
        const targetEp = episodes.find(e => e.id === epId);
        if (targetEp) {
          this.copiarAlCuadernillo(`=== PODCAST CATALÀ PAS A PAS: ${targetEp.titulo} ===\n\n${targetEp.guion}`, `Guión ${targetEp.titulo}`);
        }
      });
    });
  },

  /* ===== VISTA 3: DICCIONARIO TEMÁTICO ===== */
  renderDiccionariView(query) {
    const grid = document.getElementById("diccionariGrid");
    if (!grid || typeof DATA_CATALA_DICCIONARI === "undefined") return;

    const q = (query || "").toLowerCase();
    const filtered = DATA_CATALA_DICCIONARI.filter(item => 
      !q || 
      item.catala.toLowerCase().includes(q) || 
      item.castella.toLowerCase().includes(q) || 
      item.categoria.toLowerCase().includes(q)
    );

    grid.innerHTML = filtered.map(item => `
      <div class="diccionari-card">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
            <span style="font-size: 1.15rem; font-weight: 700; color: #fbbf24;">${item.catala}</span>
            <span style="font-size: 0.72rem; color: #38bdf8; background: rgba(56, 189, 248, 0.15); padding: 2px 6px; border-radius: 4px;">${item.categoria}</span>
          </div>
          <div style="font-size: 0.95rem; color: #e2e8f0; margin-bottom: 4px;">👉 ${item.castella}</div>
          <div style="font-size: 0.8rem; color: #94a3b8; font-style: italic; margin-bottom: 8px;">Pronunciación: [${item.pron}]</div>
          ${item.exemple ? `<div style="font-size: 0.82rem; color: #a7f3d0; background: #0f172a; padding: 6px 8px; border-radius: 4px;">«${item.exemple}»</div>` : ''}
        </div>
        <div style="display: flex; gap: 6px; margin-top: 12px; justify-content: flex-end;">
          <button class="btn btn-speak speak-word-btn" data-text="${item.catala}" style="padding: 4px 10px; font-size: 0.8rem;">🔊</button>
          <button class="btn btn-mic mic-word-btn" data-expected="${item.catala}" style="padding: 4px 10px; font-size: 0.8rem;">🎤</button>
        </div>
      </div>
    `).join('');

    const searchInput = document.getElementById("diccionariSearchInput");
    if (searchInput && !searchInput.dataset.initialized) {
      searchInput.dataset.initialized = "true";
      searchInput.addEventListener("input", (e) => {
        this.renderDiccionariView(e.target.value);
      });
    }

    grid.querySelectorAll(".speak-word-btn").forEach(btn => {
      btn.addEventListener("click", () => CatalaAudio.parlarCatala(btn.dataset.text));
    });

    grid.querySelectorAll(".mic-word-btn").forEach(btn => {
      btn.addEventListener("click", () => this.activarMicrofono(btn.dataset.expected, btn));
    });
  },

  /* ===== VISTA 4: FLASHCARDS ===== */
  initFlashcards() {
    const cardEl = document.getElementById("flashcardEl");
    if (!cardEl || typeof DATA_CATALA_DICCIONARI === "undefined") return;

    this._flashcardIndex = 0;
    this._shuffledFlashcards = [...DATA_CATALA_DICCIONARI].sort(() => Math.random() - 0.5);
    this.renderCurrentFlashcard();

    const flipBtn = document.getElementById("flipFlashcardBtn");
    if (flipBtn) flipBtn.onclick = () => this.flipFlashcard();

    const nextBtn = document.getElementById("nextFlashcardBtn");
    if (nextBtn) nextBtn.onclick = () => {
      this._flashcardIndex = (this._flashcardIndex + 1) % this._shuffledFlashcards.length;
      this.renderCurrentFlashcard();
    };

    const prevBtn = document.getElementById("prevFlashcardBtn");
    if (prevBtn) prevBtn.onclick = () => {
      this._flashcardIndex = (this._flashcardIndex - 1 + this._shuffledFlashcards.length) % this._shuffledFlashcards.length;
      this.renderCurrentFlashcard();
    };

    const speakBtn = document.getElementById("speakFlashcardBtn");
    if (speakBtn) speakBtn.onclick = () => {
      const item = this._shuffledFlashcards[this._flashcardIndex];
      if (item) CatalaAudio.parlarCatala(item.catala);
    };
  },

  renderCurrentFlashcard() {
    const cardEl = document.getElementById("flashcardEl");
    const countEl = document.getElementById("flashcardCount");
    if (!cardEl || !this._shuffledFlashcards) return;

    const item = this._shuffledFlashcards[this._flashcardIndex];
    this._isCardFlipped = false;

    if (countEl) {
      countEl.textContent = `Tarjeta ${this._flashcardIndex + 1} de ${this._shuffledFlashcards.length}`;
    }

    cardEl.innerHTML = `
      <div style="font-size: 0.82rem; color: var(--accent); margin-bottom: 8px;">CATALÀ (Toca para girar)</div>
      <div style="font-size: 1.8rem; font-weight: 800; color: #fbbf24; margin-bottom: 8px;">${item.catala}</div>
      <div style="font-size: 0.9rem; color: #94a3b8; font-style: italic;">[${item.pron}]</div>
    `;
  },

  flipFlashcard() {
    const cardEl = document.getElementById("flashcardEl");
    if (!cardEl || !this._shuffledFlashcards) return;

    const item = this._shuffledFlashcards[this._flashcardIndex];
    this._isCardFlipped = !this._isCardFlipped;

    if (this._isCardFlipped) {
      cardEl.innerHTML = `
        <div style="font-size: 0.82rem; color: #10b981; margin-bottom: 8px;">EN CASTELLANO</div>
        <div style="font-size: 1.5rem; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">${item.castella}</div>
        ${item.exemple ? `<div style="font-size: 0.85rem; color: #a7f3d0; background: #0f172a; padding: 6px 12px; border-radius: 4px;">«${item.exemple}»</div>` : ''}
      `;
    } else {
      this.renderCurrentFlashcard();
    }
  },

  /* ===== VISTA 5: CUADERNILLO D'APUNTS ===== */
  renderCuadernilloView() {
    const list = document.getElementById("notesList");
    if (!list) return;

    const notes = CatalaStorage.getNotes();
    if (notes.length === 0) {
      list.innerHTML = `<p style="color: var(--text-secondary); font-size: 0.9rem;">Todavía no guardaste apuntes. Podés escribir tus notas abajo o copiar lecciones completas con el botón 📋.</p>`;
    } else {
      list.innerHTML = notes.map(n => `
        <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 14px 18px; margin-bottom: 12px; position: relative;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.78rem; color: var(--accent);">
            <span>📅 ${n.date}</span>
            <button class="delete-note-btn" data-id="${n.id}" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 1rem;">&times;</button>
          </div>
          <div style="font-size: 0.92rem; white-space: pre-line; color: var(--text-primary);">${n.text}</div>
        </div>
      `).join('');

      list.querySelectorAll(".delete-note-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          CatalaStorage.deleteNote(btn.dataset.id);
          this.renderCuadernilloView();
        });
      });
    }

    const saveBtn = document.getElementById("saveNoteBtn");
    const input = document.getElementById("noteInput");
    if (saveBtn && input && !saveBtn.dataset.initialized) {
      saveBtn.dataset.initialized = "true";
      saveBtn.addEventListener("click", () => {
        const val = input.value.trim();
        if (val) {
          CatalaStorage.saveNote(val);
          input.value = "";
          this.renderCuadernilloView();
          this.mostrarToastCuadernillo("Nota personal");
        }
      });
    }
  },

  copiarAlCuadernillo(texto, titulo) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(() => {
        this.mostrarToastCuadernillo(titulo);
      }).catch(() => {
        this.fallbackCopiar(texto, titulo);
      });
    } else {
      this.fallbackCopiar(texto, titulo);
    }
  },

  fallbackCopiar(texto, titulo) {
    const ta = document.createElement("textarea");
    ta.value = texto;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      this.mostrarToastCuadernillo(titulo);
    } catch (e) {
      alert("Copia el texto manualmente.");
    }
    document.body.removeChild(ta);
  },

  mostrarToastCuadernillo(titulo) {
    let toast = document.querySelector(".toast-cuadernillo");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast-cuadernillo";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `📋 <strong>${titulo || "Ficha"}</strong> copiada al portapapeles.<br><span style="font-size:0.82rem; opacity:0.9;">¡Lista para transcribir a tu cuaderno!</span>`;
    toast.style.display = "block";
    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      if (toast) toast.style.display = "none";
    }, 3500);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  CatalaApp.init();
});
