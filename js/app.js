const App = {
  currentView: "dashboard",
  currentSection: null,
  currentItem: null,

  init() {
    this.bindEvents();
    this.updateProgressBadges();
    this.renderDashboard();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
  },

  bindEvents() {
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.addEventListener("click", () => {
        const section = item.dataset.section;
        if (section) this.navigateTo(section);
      });
    });

    document.getElementById("searchInput").addEventListener("input", (e) => {
      this.handleSearch(e.target.value);
    });

    document.getElementById("searchInput").addEventListener("focus", () => {
      const val = document.getElementById("searchInput").value;
      if (val.length >= 2) this.handleSearch(val);
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-container")) {
        document.getElementById("searchResults").classList.add("hidden");
      }
    });

    document.getElementById("menuToggle").addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("open");
    });

    document.getElementById("themeToggle").addEventListener("click", () => {
      this.toggleTheme();
    });

    document.getElementById("quickNoteBtn").addEventListener("click", () => {
      document.getElementById("quickNotePanel").classList.toggle("hidden");
      const saved = PRLStorage.get("quickNote") || "";
      document.getElementById("quickNoteText").value = saved;
    });

    document.getElementById("closeQuickNote").addEventListener("click", () => {
      document.getElementById("quickNotePanel").classList.add("hidden");
    });

    document.getElementById("saveQuickNote").addEventListener("click", () => {
      const text = document.getElementById("quickNoteText").value;
      PRLStorage.set("quickNote", text);
      document.getElementById("quickNotePanel").classList.add("hidden");
    });

    document.getElementById("chatToggleBtn").addEventListener("click", () => {
      document.getElementById("chatPanel").classList.toggle("hidden");
    });
    document.getElementById("closeChatBtn").addEventListener("click", () => {
      document.getElementById("chatPanel").classList.add("hidden");
    });
    document.getElementById("chatSendBtn").addEventListener("click", () => this.enviarPreguntaChat());
    document.getElementById("chatInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.enviarPreguntaChat();
    });

    const savedTheme = PRLStorage.get("theme") || "auto";
    this.applyThemePreference();
  },

  navigateTo(view, data) {
    this.currentView = view;

    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));

    const navItem = document.querySelector(`.nav-item[data-section="${view}"]`);
    if (navItem) navItem.classList.add("active");

    document.getElementById("sidebar").classList.remove("open");

    const specialViews = ["checklist","vocabulario","calculadora","quiz","comunidades","mercado","comparativa","cursos-insst","guias-descargables"];

    switch (view) {
      case "dashboard":
        document.getElementById("dashboard").classList.add("active");
        this.renderDashboard();
        break;
      case "timeline":
        document.getElementById("timelineView").classList.add("active");
        this.renderTimeline();
        break;
      case "favorites":
        document.getElementById("favoritesView").classList.add("active");
        this.renderFavorites();
        break;
      case "settings":
        document.getElementById("settingsView").classList.add("active");
        this.renderSettings();
        break;
      case "checklist":
        document.getElementById("checklistView").classList.add("active");
        this.renderChecklist();
        break;
      case "vocabulario":
        document.getElementById("vocabularioView").classList.add("active");
        this.renderVocabulario();
        break;
      case "calculadora":
        document.getElementById("calculadoraView").classList.add("active");
        this.renderCalculadora();
        break;
      case "quiz":
        document.getElementById("quizView").classList.add("active");
        this.renderQuiz();
        break;
      case "comunidades":
        document.getElementById("comunidadesView").classList.add("active");
        this.renderComunidades();
        break;
      case "mercado":
        document.getElementById("mercadoView").classList.add("active");
        this.renderMercado();
        break;
      case "comparativa":
        document.getElementById("comparativaView").classList.add("active");
        this.renderComparativa();
        break;
      case "cursos-insst":
        document.getElementById("cursosInsstView").classList.add("active");
        this.renderCursosINSST();
        break;
      case "guias-descargables":
        document.getElementById("guiasDescargablesView").classList.add("active");
        this.renderGuiasDescargables();
        break;
      case "review":
        document.getElementById("reviewView").classList.add("active");
        this.renderReview();
        break;
      case "profesor":
        document.getElementById("profesorView").classList.add("active");
        this.renderProfesor();
        break;
      case "catala":
        document.getElementById("catalaView").classList.add("active");
        this.renderCatala();
        break;
      default:
        if (data) {
          this.showItemDetail(view, data);
        } else {
          this.showSection(view);
        }
        break;
    }

    document.getElementById("contentArea").scrollTop = 0;
  },

  showSection(sectionId) {
    const section = PRL_DATA.sections.find((s) => s.id === sectionId);
    if (!section) return;

    this.currentSection = sectionId;
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    const viewEl = document.getElementById("sectionView");
    viewEl.classList.add("active");

    const pct = PRLStorage.getCompletionPercentage(sectionId);

    let html = `
      <div class="section-header">
        <h2>${section.icon} ${section.title}</h2>
        <p>${section.description}</p>
        <div class="section-progress-bar">
          <div class="progress-bar"><div class="progress-fill" style="width: ${pct}%"></div></div>
          <span>${pct}% completado</span>
        </div>
      </div>
    `;

    section.categories.forEach((cat) => {
      html += `
        <div class="category-block">
          <h3 class="category-title">${cat.title}</h3>
          <div class="item-list">
            ${cat.items.map((item) => this.renderItemCard(item)).join("")}
          </div>
        </div>
      `;
    });

    viewEl.innerHTML = html;
    this.bindItemEvents(viewEl);
  },

  renderItemCard(item) {
    const completed = PRLStorage.isCompleted(item.id);
    const favorite = PRLStorage.isFavorite(item.id);

    return `
      <div class="item-card ${completed ? "completed" : ""}" data-item-id="${item.id}">
        <div class="item-check ${completed ? "checked" : ""}" data-check-id="${item.id}">✓</div>
        <div class="item-info">
          <div class="item-title">${item.title}</div>
        </div>
        <span class="item-type-badge" data-type="${item.status}">${item.status}</span>
        <button class="item-fav ${favorite ? "active" : ""}" data-fav-id="${item.id}">${favorite ? "⭐" : "☆"}</button>
      </div>
    `;
  },

  bindItemEvents(container) {
    container.querySelectorAll(".item-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".item-check") || e.target.closest(".item-fav")) return;
        const itemId = card.dataset.itemId;
        this.navigateTo(itemId, { fromSection: this.currentSection });
      });
    });

    container.querySelectorAll(".item-check").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const itemId = btn.dataset.checkId;
        const isCompleted = PRLStorage.isCompleted(itemId);
        PRLStorage.setProgress(itemId, !isCompleted);
        this.updateItemCard(itemId);
        this.updateProgressBadges();
        if (this.currentSection) {
          this.updateSectionProgress(this.currentSection);
        }
      });
    });

    container.querySelectorAll(".item-fav").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const itemId = btn.dataset.favId;
        PRLStorage.toggleFavorite(itemId);
        btn.classList.toggle("active");
        btn.textContent = PRLStorage.isFavorite(itemId) ? "⭐" : "☆";
      });
    });
  },

  updateItemCard(itemId) {
    const completed = PRLStorage.isCompleted(itemId);
    const card = document.querySelector(`.item-card[data-item-id="${itemId}"]`);
    if (!card) return;

    card.classList.toggle("completed", completed);
    const check = card.querySelector(".item-check");
    check.classList.toggle("checked", completed);
  },

  updateSectionProgress(sectionId) {
    const pct = PRLStorage.getCompletionPercentage(sectionId);
    const bar = document.querySelector(`.section-progress-bar .progress-fill`);
    const text = document.querySelector(`.section-progress-bar span`);
    if (bar) bar.style.width = pct + "%";
    if (text) text.textContent = pct + "% completado";
  },

  showItemDetail(itemId, context) {
    let item = null;
    let sectionId = context?.fromSection;

    for (const section of PRL_DATA.sections) {
      for (const cat of section.categories) {
        const found = cat.items.find((i) => i.id === itemId);
        if (found) {
          item = found;
          if (!sectionId) sectionId = section.id;
          break;
        }
      }
      if (item) break;
    }

    if (!item) return;

    this.currentItem = itemId;
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    const viewEl = document.getElementById("itemView");
    viewEl.classList.add("active");

    const completed = PRLStorage.isCompleted(itemId);
    const favorite = PRLStorage.isFavorite(itemId);
    const notes = PRLStorage.getNotes(itemId);

    let html = `
      <button class="back-btn" id="backBtn">← Volver</button>
      <div class="detail-header">
        <h2>${item.title}</h2>
        <div class="detail-meta">
          <span class="item-type-badge" data-type="${item.status}">${item.status}</span>
          <span class="item-type-badge" data-type="${item.type}">${item.type.replace("-", " ")}</span>
        </div>
        <div class="detail-actions">
          <button class="btn ${completed ? "btn-success" : "btn-primary"}" id="toggleCompleteBtn">
            ${completed ? "✓ Completado" : "Marcar como completado"}
          </button>
          <button class="btn" id="toggleFavBtn">
            ${favorite ? "⭐ En Favoritos" : "☆ Agregar a Favoritos"}
          </button>
        </div>
      </div>

      <div class="detail-section">
        <h3>📋 Resumen</h3>
        <p>${this.highlightArticles(item.summary)}</p>
      </div>

      ${item.keyPoints.length > 0 ? `
        <div class="detail-section">
          <h3>🔑 Puntos Clave</h3>
          <ul class="key-points-list">
            ${item.keyPoints.map((kp) => `<li>${this.highlightArticles(kp)}</li>`).join("")}
          </ul>
        </div>
      ` : ""}

      ${item.relations.length > 0 ? `
        <div class="detail-section">
          <h3>🔗 Relaciones</h3>
          <div class="relations-list">
            ${item.relations.map((r) => {
              const relatedItem = this.findRelatedItem(r, item.id);
              if (relatedItem) {
                return `<span class="relation-tag clickable" data-related-id="${relatedItem.id}" title="Ver: ${relatedItem.title}">${r}</span>`;
              }
              return `<span class="relation-tag">${r}</span>`;
            }).join("")}
          </div>
        </div>
      ` : ""}

      ${item.usefulLinks.length > 0 ? `
        <div class="detail-section">
          <h3>🌐 Enlaces Útiles</h3>
          <div class="links-list">
            ${item.usefulLinks.map((l) => `<a href="${l.url}" target="_blank" rel="noopener" class="link-item">🔗 ${l.text}</a>`).join("")}
          </div>
        </div>
      ` : ""}

      ${item.comoLoUso ? `
        <div class="detail-section" style="background: linear-gradient(135deg, var(--accent-light), var(--bg-card)); border: 1px solid var(--accent); border-radius: var(--radius); padding: 20px;">
          <h3>🛠️ Cómo lo uso yo como técnico</h3>
          <p style="font-size: 0.92rem; line-height: 1.7; color: var(--text-primary);">${item.comoLoUso}</p>
        </div>
      ` : ""}

      <div class="detail-section">
        <h3>📝 Tus Notas</h3>
        <textarea class="notes-area" id="notesArea" placeholder="Escribí tus notas, resúmenes, ideas... pegá artículos del BOE y explicalos fácil...">${notes}</textarea>
        <button class="btn btn-primary" id="saveNotesBtn" style="margin-top: 8px;">Guardar Notas</button>
        <div id="explicacionArea"></div>
      </div>
    `;

    viewEl.innerHTML = html;

    document.getElementById("backBtn").addEventListener("click", () => {
      if (context?.fromSection) {
        this.navigateTo(context.fromSection);
      } else {
        this.navigateTo("dashboard");
      }
    });

    document.getElementById("toggleCompleteBtn").addEventListener("click", () => {
      const nowCompleted = !PRLStorage.isCompleted(itemId);
      PRLStorage.setProgress(itemId, nowCompleted);
      this.updateProgressBadges();
      this.showItemDetail(itemId, context);
    });

    document.getElementById("toggleFavBtn").addEventListener("click", () => {
      PRLStorage.toggleFavorite(itemId);
      this.showItemDetail(itemId, context);
    });

    document.getElementById("saveNotesBtn").addEventListener("click", () => {
      const text = document.getElementById("notesArea").value;
      PRLStorage.setNotes(itemId, text);
      const btn = document.getElementById("saveNotesBtn");
      btn.textContent = "✓ Guardado";
      setTimeout(() => (btn.textContent = "Guardar Notas"), 1500);

      const area = document.getElementById("explicacionArea");
      if (!area) return;
      const explicaciones = this.buscarExplicaciones(text, itemId);
      if (explicaciones.length === 0) {
        area.innerHTML = "";
        return;
      }
      let html = `<div style="margin-top: 16px; padding: 16px; background: linear-gradient(135deg, #0d1117 0%, #161b22 100%); border: 1px solid #58a6ff; border-radius: var(--radius);">
        <h4 style="color: #58a6ff; margin-bottom: 12px;">🧠 Explicación Simple</h4>`;
      explicaciones.forEach((exp) => {
        html += `<div style="margin-bottom: 14px; padding: 12px; background: rgba(88,166,255,0.08); border-radius: 8px; border-left: 3px solid #58a6ff;">
          <div style="font-weight: 700; color: #f0f6fc; margin-bottom: 6px;">${exp.titulo}</div>
          <div style="color: #c9d1d9; font-size: 0.88rem; line-height: 1.6; margin-bottom: 8px;">${exp.simple}</div>
          <div style="color: #58a6ff; font-size: 0.82rem; font-style: italic;">💡 ${exp.consejo}</div>
        </div>`;
      });
      html += `</div>`;
      area.innerHTML = html;
    });

    const savedNotes = document.getElementById("notesArea").value;
    if (savedNotes) {
      const area = document.getElementById("explicacionArea");
      if (area) {
        const explicaciones = this.buscarExplicaciones(savedNotes, itemId);
        if (explicaciones.length > 0) {
          let html = `<div style="margin-top: 16px; padding: 16px; background: linear-gradient(135deg, #0d1117 0%, #161b22 100%); border: 1px solid #58a6ff; border-radius: var(--radius);">
            <h4 style="color: #58a6ff; margin-bottom: 12px;">🧠 Explicación Simple</h4>`;
          explicaciones.forEach((exp) => {
            html += `<div style="margin-bottom: 14px; padding: 12px; background: rgba(88,166,255,0.08); border-radius: 8px; border-left: 3px solid #58a6ff;">
              <div style="font-weight: 700; color: #f0f6fc; margin-bottom: 6px;">${exp.titulo}</div>
              <div style="color: #c9d1d9; font-size: 0.88rem; line-height: 1.6; margin-bottom: 8px;">${exp.simple}</div>
              <div style="color: #58a6ff; font-size: 0.82rem; font-style: italic;">💡 ${exp.consejo}</div>
            </div>`;
          });
          html += `</div>`;
          area.innerHTML = html;
        }
      }
    }

    viewEl.querySelectorAll(".relation-tag.clickable").forEach((tag) => {
      tag.addEventListener("click", () => {
        const relatedId = tag.dataset.relatedId;
        this.navigateTo(relatedId, { fromSection: this.currentSection });
      });
    });
  },

  findRelatedItem(relationText, currentItemId) {
    const q = relationText.toLowerCase();
    for (const section of PRL_DATA.sections) {
      for (const cat of section.categories) {
        for (const item of cat.items) {
          if (item.id === currentItemId) continue;
          const matchTitle = item.title.toLowerCase().includes(q);
          const matchSummary = item.summary.toLowerCase().includes(q);
          if (matchTitle || matchSummary) return item;
        }
      }
    }
    const keywordMap = {
      "ohsas": "iso-45001-2018",
      "iso 14001": "iso-14001",
      "iso 9001": "iso-9001",
      "rd 39/1997": "rd-39-1997",
      "rd 396/2006": "rd-396-2006-espacios-confinados",
      "ley 31/1995": "ley-31-1995"
    };
    for (const [key, itemId] of Object.entries(keywordMap)) {
      if (q.includes(key)) {
        for (const section of PRL_DATA.sections) {
          for (const cat of section.categories) {
            const found = cat.items.find((i) => i.id === itemId);
            if (found) return found;
          }
        }
      }
    }
    return null;
  },

  buscarExplicaciones(text, itemId) {
    if (!text || typeof EXPLICACIONES_ARTICULOS === "undefined") return [];
    const lower = text.toLowerCase();
    const encontradas = [];
    const claves = Object.keys(EXPLICACIONES_ARTICULOS);
    claves.forEach((key) => {
      if (lower.includes(key)) {
        encontradas.push(EXPLICACIONES_ARTICULOS[key]);
      }
    });
    if (encontradas.length === 0) {
      const patterns = [
        /art[íi]?culo\s+(\d+)/gi,
        /art\.?\s*(\d+)/gi,
        /artículo\s+(\d+)/gi
      ];
      const numeros = new Set();
      patterns.forEach((pat) => {
        let m;
        while ((m = pat.exec(lower)) !== null) {
          numeros.add(m[1]);
        }
      });
      const itemIdLower = itemId.toLowerCase();
      if (itemIdLower.includes("ley-31")) {
        numeros.forEach((n) => {
          const key = "art. " + n;
          if (EXPLICACIONES_ARTICULOS[key] && !encontradas.includes(EXPLICACIONES_ARTICULOS[key])) {
            encontradas.push(EXPLICACIONES_ARTICULOS[key]);
          }
        });
      }
    }
    return encontradas;
  },

  highlightArticles(text) {
    if (!text) return "";
    return text
      .replace(/(Art\.?\s*\d+[\w\-\/\.]*)/g, '<span class="article-ref">$1</span>')
      .replace(/(Artículo\s*\d+[\w\-\/\.]*)/g, '<span class="article-ref">$1</span>')
      .replace(/(RD\s*\d+\/\d+)/g, '<span class="article-ref">$1</span>')
      .replace(/(Ley\s*\d+\/\d+)/g, '<span class="article-ref">$1</span>')
      .replace(/(ISO\s*\d+)/g, '<span class="article-ref">$1</span>')
      .replace(/(OHSAS\s*\d+)/g, '<span class="article-ref">$1</span>');
  },

  toggleTheme() {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    document.getElementById("themeToggle").textContent = isLight ? "🌙" : "☀️";
    PRLStorage.set("theme", isLight ? "light" : "dark");
  },

  applyThemePreference() {
    const saved = PRLStorage.get("theme") || "auto";
    if (saved === "auto") {
      const hour = new Date().getHours();
      const isLight = hour >= 7 && hour < 19;
      document.body.classList.toggle("light", isLight);
      document.getElementById("themeToggle").textContent = isLight ? "🌙" : "☀️";
    } else if (saved === "light") {
      document.body.classList.add("light");
      document.getElementById("themeToggle").textContent = "🌙";
    } else {
      document.body.classList.remove("light");
      document.getElementById("themeToggle").textContent = "☀️";
    }
  },

  setTheme(mode) {
    PRLStorage.set("theme", mode);
    this.applyThemePreference();
  },

  async enviarPreguntaChat() {
    const input = document.getElementById("chatInput");
    const messages = document.getElementById("chatMessages");
    const texto = input.value.trim();
    if (!texto) return;

    messages.innerHTML += `<div class="chat-msg usuario"><div class="chat-bubble">${texto}</div></div>`;
    input.value = "";

    messages.innerHTML += `<div class="chat-msg profesor" id="chatLoading"><div class="chat-bubble"><div class="chat-loading"><span></span><span></span><span></span></div></div></div>`;
    messages.scrollTop = messages.scrollHeight;

    try {
      const resultado = await AIProfesor.preguntar(texto);
      const loadingEl = document.getElementById("chatLoading");
      if (loadingEl) loadingEl.remove();

      const fuenteLabel = resultado.fuente === "gemini" ? "🌐 Gemini AI"
        : resultado.fuente === "base-local" ? "📚 Base de conocimiento"
        : "⚠️ Fallback local";

      messages.innerHTML += `<div class="chat-msg profesor">
        <div class="chat-bubble">${resultado.respuesta}
          <div class="chat-fuente ${resultado.fuente}">${fuenteLabel}</div>
        </div>
      </div>`;
    } catch (err) {
      const loadingEl = document.getElementById("chatLoading");
      if (loadingEl) loadingEl.remove();
      messages.innerHTML += `<div class="chat-msg profesor"><div class="chat-bubble">Ups, algo salió mal. Probá de nuevo.</div></div>`;
    }

    messages.scrollTop = messages.scrollHeight;
  },

  renderDashboard() {
    const progress = PRLStorage.getProgress();
    const favorites = PRLStorage.getFavorites();

    let totalItems = 0;
    let completedItems = 0;

    PRL_DATA.sections.forEach((section) => {
      section.categories.forEach((cat) => {
        cat.items.forEach((item) => {
          totalItems++;
          if (progress[item.id]?.completed) completedItems++;
        });
      });
    });

    document.getElementById("statTotal").textContent = totalItems;
    document.getElementById("statCompleted").textContent = completedItems;
    document.getElementById("statPending").textContent = totalItems - completedItems;
    document.getElementById("statFavorites").textContent = favorites.length;

    const overallPct = PRLStorage.getOverallProgress();
    document.getElementById("overallProgressFill").style.width = overallPct + "%";
    document.getElementById("overallProgressText").textContent = overallPct + "% completado";

    const miniTimeline = document.getElementById("miniTimeline");
    miniTimeline.innerHTML = PRL_DATA.timeline.map((phase) => {
      const status = PRLStorage.getTimelinePhase(phase.id);
      return `
        <div class="timeline-mini-item">
          <div class="phase-dot ${status}"></div>
          <span>${phase.title}</span>
        </div>
      `;
    }).join("");

    const overview = document.getElementById("sectionsOverview");
    const tools = [
      { id: "checklist", icon: "✅", title: "Checklist Homologación" },
      { id: "vocabulario", icon: "📖", title: "Vocabulario AR→ES" },
      { id: "calculadora", icon: "🧮", title: "Calculadora Riesgos" },
      { id: "quiz", icon: "❓", title: "Autoevaluación" },
      { id: "review", icon: "🧠", title: "Repaso por Tema" },
      { id: "comparativa", icon: "🔄", title: "AR vs España" },
      { id: "cursos-insst", icon: "🎓", title: "Cursos INSST" },
      { id: "guias-descargables", icon: "📥", title: "Guías INSST" },
      { id: "comunidades", icon: "👥", title: "Comunidades PRL" },
      { id: "mercado", icon: "💼", title: "Mercado Laboral" }
    ];

    overview.innerHTML = `
      <div id="repasoHoyCard"></div>
      <h3>Secciones de Estudio</h3>
      <div class="section-cards">
        ${PRL_DATA.sections.map((section) => {
          const pct = PRLStorage.getCompletionPercentage(section.id);
          const circumference = 2 * Math.PI * 20;
          const offset = circumference - (pct / 100) * circumference;
          return `
            <div class="section-card" data-section="${section.id}">
              <div class="progress-ring-container">
                <div class="progress-ring">
                  <svg viewBox="0 0 50 50">
                    <circle class="ring-bg" cx="25" cy="25" r="20"></circle>
                    <circle class="ring-fill" cx="25" cy="25" r="20"
                      stroke-dasharray="${circumference}"
                      stroke-dashoffset="${offset}"></circle>
                  </svg>
                  <span class="ring-label">${pct}%</span>
                </div>
              </div>
              <div class="section-card-title">${section.title}</div>
            </div>
          `;
        }).join("")}
      </div>
      <h3 style="margin-top: 20px;">Herramientas</h3>
      <div class="section-cards">
        ${tools.map((t) => `
          <div class="section-card" data-section="${t.id}">
            <div class="section-card-icon">${t.icon}</div>
            <div class="section-card-title">${t.title}</div>
          </div>
        `).join("")}
      </div>
    `;

    overview.querySelectorAll(".section-card").forEach((card) => {
      card.addEventListener("click", () => {
        this.navigateTo(card.dataset.section);
      });
    });

    const dueItems = PRLStorage.getItemsDueForReview();
    const repasoCard = document.getElementById("repasoHoyCard");
    if (repasoCard && dueItems.length > 0) {
      repasoCard.innerHTML = `
        <div style="margin-bottom: 20px; padding: 16px; background: linear-gradient(135deg, rgba(88,166,255,0.1), rgba(31,111,235,0.05)); border: 1px solid #58a6ff; border-radius: var(--radius); cursor: pointer;" onclick="App.navigateTo('review')">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div>
              <h3 style="margin: 0 0 4px;">📚 Repaso de Hoy</h3>
              <p style="margin: 0; color: var(--text-secondary); font-size: 0.88rem;">Tenés <strong>${dueItems.length}</strong> temas pendientes de repaso por repetición espaciada</p>
            </div>
            <div style="font-size: 1.5rem;">→</div>
          </div>
        </div>`;
    }
  },

  renderTimeline() {
    const viewEl = document.getElementById("timelineView");
    const statusOptions = ["pendiente", "en-progreso", "completada"];
    const statusLabels = { "pendiente": "Pendiente", "en-progreso": "En Progreso", "completada": "Completada" };

    let html = `
      <div class="timeline-header">
        <h2>📅 Plan de Estudio 2026-2028</h2>
        <p style="color: var(--text-secondary); margin-top: 6px;">Tu ruta de preparación para ejercer como técnico de PRL en España</p>
      </div>
      <div class="timeline-phases">
        ${PRL_DATA.timeline.map((phase) => {
          const currentStatus = PRLStorage.getTimelinePhase(phase.id);
          return `
            <div class="phase-card ${currentStatus}">
              <div class="phase-card-header">
                <div>
                  <h3>${phase.title}</h3>
                  <div class="phase-period">${phase.period}</div>
                </div>
                <select class="phase-status-select" data-phase="${phase.id}" style="
                  background: var(--bg-primary);
                  color: var(--text-primary);
                  border: 1px solid var(--border);
                  border-radius: var(--radius-sm);
                  padding: 4px 8px;
                  font-size: 0.78rem;
                  cursor: pointer;
                ">
                  ${statusOptions.map((s) => `<option value="${s}" ${s === currentStatus ? "selected" : ""}>${statusLabels[s]}</option>`).join("")}
                </select>
              </div>
              <div class="phase-topics">
                ${phase.topics.map((t) => `<span class="phase-topic">${t}</span>`).join("")}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    viewEl.innerHTML = html;

    viewEl.querySelectorAll(".phase-status-select").forEach((sel) => {
      sel.addEventListener("change", () => {
        PRLStorage.setTimelinePhase(sel.dataset.phase, sel.value);
        this.renderTimeline();
      });
    });
  },

  renderFavorites() {
    const viewEl = document.getElementById("favoritesView");
    const favorites = PRLStorage.getFavorites();

    if (favorites.length === 0) {
      viewEl.innerHTML = `
        <div class="favorites-empty">
          <div class="empty-icon">⭐</div>
          <h3>Sin favoritos aún</h3>
          <p style="margin-top: 8px; color: var(--text-muted);">Marcá estrella en cualquier tema para verlo aquí</p>
        </div>
      `;
      return;
    }

    let html = `<h2 style="margin-bottom: 20px;">⭐ Tus Favoritos</h2><div class="item-list">`;

    favorites.forEach((favId) => {
      for (const section of PRL_DATA.sections) {
        for (const cat of section.categories) {
          const item = cat.items.find((i) => i.id === favId);
          if (item) {
            html += this.renderItemCard(item);
          }
        }
      }
    });

    html += "</div>";
    viewEl.innerHTML = html;
    this.bindItemEvents(viewEl);
  },

  renderSettings() {
    const viewEl = document.getElementById("settingsView");
    const overallPct = PRLStorage.getOverallProgress();
    const favorites = PRLStorage.getFavorites();
    const notes = PRLStorage.get("notes") || {};

    let html = `
      <h2 style="margin-bottom: 20px;">⚙️ Configuración</h2>

      <div class="settings-section">
        <h3>📊 Datos de la App</h3>
        <div class="setting-row">
          <div>
            <div class="setting-label">Progreso total</div>
            <div class="setting-desc">${overallPct}% completado</div>
          </div>
        </div>
        <div class="setting-row">
          <div>
            <div class="setting-label">Favoritos guardados</div>
            <div class="setting-desc">${favorites.length} temas marcados</div>
          </div>
        </div>
        <div class="setting-row">
          <div>
            <div class="setting-label">Notas escritas</div>
            <div class="setting-desc">${Object.keys(notes).length} temas con notas</div>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <h3>💾 Respaldo de Datos</h3>
        <div class="setting-row">
          <div>
            <div class="setting-label">Exportar datos (JSON)</div>
            <div class="setting-desc">Descargá un archivo JSON con todo tu progreso, notas y favoritos</div>
          </div>
          <button class="btn btn-primary" id="exportBtn">Exportar JSON</button>
        </div>
        <div class="setting-row">
          <div>
            <div class="setting-label">Exportar notas (TXT)</div>
            <div class="setting-desc">Descargá todas tus notas como texto plano para imprimir o compartir</div>
          </div>
          <button class="btn" id="exportNotesBtn">Exportar Notas</button>
        </div>
        <div class="setting-row">
          <div>
            <div class="setting-label">Importar datos</div>
            <div class="setting-desc">Cargá un archivo JSON de respaldo anterior</div>
          </div>
          <button class="btn" id="importBtn">Importar</button>
          <input type="file" id="importFile" accept=".json" style="display:none;">
        </div>
      </div>

      <div class="settings-section">
        <h3>🗑️ Zona de Peligro</h3>
        <div class="setting-row">
          <div>
            <div class="setting-label">Borrar todos los datos</div>
            <div class="setting-desc">Esto eliminará todo tu progreso, notas y favoritos permanentemente</div>
          </div>
          <button class="btn btn-danger" id="resetBtn">Borrar Todo</button>
        </div>
      </div>

      <div class="settings-section">
        <h3>ℹ️ Acerca de</h3>
        <div class="setting-row">
          <div>
            <div class="setting-label">PRL España - Estudio y Organización</div>
            <div class="setting-desc">Versión 1.1 | Toda la información se guarda localmente en tu navegador</div>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <h3>🎨 Tema</h3>
        <div class="setting-row">
          <div>
            <div class="setting-label">Apariencia</div>
            <div class="setting-desc">Claro, oscuro o automático (según hora del día)</div>
          </div>
          <div style="display: flex; gap: 6px;">
            <button class="btn theme-opt" data-theme="light">☀️ Claro</button>
            <button class="btn theme-opt" data-theme="dark">🌙 Oscuro</button>
            <button class="btn theme-opt" data-theme="auto">🔄 Auto</button>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <h3>🤖 IA del Profesor</h3>
        <div class="setting-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
          <div>
            <div class="setting-label">API Key de Google Gemini</div>
            <div class="setting-desc">Gratis en <a href="https://aistudio.google.com/apikey" target="_blank" style="color: var(--accent);">aistudio.google.com/apikey</a>. Sin key, el chat usa la base local.</div>
          </div>
          <div style="display: flex; gap: 8px;">
            <input type="password" id="apiKeyInput" class="chat-input" style="flex:1;" placeholder="Pegá tu API key acá..." value="${typeof AIProfesor !== 'undefined' ? AIProfesor.getApiKey() : ''}" />
            <button class="btn btn-primary" id="saveApiKeyBtn">Guardar</button>
          </div>
          <div id="apiKeyStatus" style="font-size: 0.82rem; color: ${typeof AIProfesor !== 'undefined' && AIProfesor.hasApiKey() ? 'var(--success)' : 'var(--text-muted)'};">
            ${typeof AIProfesor !== 'undefined' && AIProfesor.hasApiKey() ? '✅ API key configurada — Chat con IA activado' : '⚠️ Sin API key — Chat usa solo base local'}
          </div>
        </div>
      </div>

      <div class="settings-section">
        <h3>📊 Historial de Simulacros</h3>
        <div id="quizHistoryArea">${this.renderQuizHistory()}</div>
      </div>
    `;

    viewEl.innerHTML = html;

    document.getElementById("exportBtn").addEventListener("click", () => {
      const data = PRLStorage.exportData();
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `prl-espana-backup-${new Date().toISOString().split("T")[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    document.getElementById("exportNotesBtn").addEventListener("click", () => {
      const notes = PRLStorage.get("notes") || {};
      let text = "MIS NOTAS - PRL España\n";
      text += "========================\n\n";
      for (const section of PRL_DATA.sections) {
        for (const cat of section.categories) {
          for (const item of cat.items) {
            if (notes[item.id]) {
              text += `[${section.title} > ${cat.title}]\n`;
              text += `${item.title}\n`;
              text += `${notes[item.id]}\n`;
              text += "---\n\n";
            }
          }
        }
      }
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `prl-notas-${new Date().toISOString().split("T")[0]}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    });

    document.getElementById("importBtn").addEventListener("click", () => {
      document.getElementById("importFile").click();
    });

    document.getElementById("importFile").addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const success = PRLStorage.importData(reader.result);
        if (success) {
          alert("Datos importados correctamente. Recargando...");
          location.reload();
        } else {
          alert("Error al importar. Verificá que el archivo sea válido.");
        }
      };
      reader.readAsText(file);
    });

    document.getElementById("resetBtn").addEventListener("click", () => {
      if (confirm("¿Estás seguro? Se borrarán TODOS tus datos permanentemente.")) {
        PRLStorage.resetAll();
        alert("Datos borrados. Recargando...");
        location.reload();
      }
    });

    viewEl.querySelectorAll(".theme-opt").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.setTheme(btn.dataset.theme);
        this.renderSettings();
      });
    });

    document.getElementById("saveApiKeyBtn").addEventListener("click", () => {
      const key = document.getElementById("apiKeyInput").value.trim();
      AIProfesor.setApiKey(key);
      document.getElementById("apiKeyStatus").innerHTML = key.length > 10
        ? '✅ API key guardada — Chat con IA activado'
        : '⚠️ Sin API key — Chat usa solo base local';
      document.getElementById("apiKeyStatus").style.color = key.length > 10 ? 'var(--success)' : 'var(--text-muted)';
    });
  },

  renderQuizHistory() {
    const history = PRLStorage.getQuizHistory();
    if (history.length === 0) {
      return '<p style="font-size: 0.85rem; color: var(--text-muted);">No hay simulacros aún. Andá a Autoevaluación → Simulacro para hacer uno.</p>';
    }
    let html = '<div style="display: flex; flex-direction: column; gap: 8px;">';
    history.slice(0, 10).forEach((h) => {
      const pct = Math.round((h.correct / h.total) * 100);
      const color = pct >= 70 ? "var(--success)" : pct >= 50 ? "var(--warning)" : "var(--danger)";
      const date = new Date(h.date).toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
      html += `<div style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: var(--bg-primary); border-radius: var(--radius-sm); border: 1px solid var(--border);">
        <span style="font-size: 0.82rem; color: var(--text-muted); min-width: 110px;">${date}</span>
        <span style="font-weight: 700; color: ${color};">${h.correct}/${h.total} (${pct}%)</span>
        <span style="font-size: 0.8rem; color: var(--text-secondary);">${h.correct === h.total ? "¡Perfecto!" : pct >= 70 ? "¡Bien!" : "Seguí estudiando"}</span>
      </div>`;
    });
    html += '</div>';
    return html;
  },

  updateProgressBadges() {
    PRL_DATA.sections.forEach((section) => {
      const badge = document.querySelector(`.nav-badge[data-badge="${section.id}"]`);
      if (!badge) return;

      const pct = PRLStorage.getCompletionPercentage(section.id);
      if (pct === 100) {
        badge.textContent = "✓";
        badge.setAttribute("data-progress", "100");
      } else if (pct > 0) {
        badge.textContent = pct + "%";
        badge.removeAttribute("data-progress");
      } else {
        badge.textContent = "";
        badge.removeAttribute("data-progress");
      }
    });

    const overallPct = PRLStorage.getOverallProgress();
    document.getElementById("overallProgressFill").style.width = overallPct + "%";
    document.getElementById("overallProgressText").textContent = overallPct + "% completado";
  },

  getChecklistProgress() {
    const checked = PRLStorage.get("checklist") || {};
    let total = 0;
    let completed = 0;
    CHECKLIST_HOMOLOGACION.forEach((cat) => {
      cat.items.forEach((item) => {
        total++;
        if (checked[item.id]) completed++;
      });
    });
    return { total, completed, pct: total === 0 ? 0 : Math.round((completed / total) * 100) };
  },

  renderChecklist() {
    const viewEl = document.getElementById("checklistView");
    const checked = PRLStorage.get("checklist") || {};
    const { total, completed, pct } = this.getChecklistProgress();

    let html = `
      <h2 style="margin-bottom: 6px;">✅ Checklist de Homologación</h2>
      <p style="color: var(--text-secondary); margin-bottom: 16px;">Todos los documentos y trámites que necesitás completar</p>
      <div class="checklist-progress-header">
        <div class="progress-bar"><div class="progress-fill" style="width: ${pct}%"></div></div>
        <span>${completed}/${total} (${pct}%)</span>
      </div>
    `;

    CHECKLIST_HOMOLOGACION.forEach((cat) => {
      html += `
        <div class="checklist-category">
          <h3 class="checklist-category-title">${cat.category}</h3>
          ${cat.items.map((item) => `
            <div class="checklist-item ${checked[item.id] ? "checked" : ""}" data-checklist-id="${item.id}">
              <div class="checklist-check ${checked[item.id] ? "checked" : ""}">✓</div>
              <span class="checklist-text">${item.text}</span>
            </div>
          `).join("")}
        </div>
      `;
    });

    html += `
      <div style="margin-top: 20px; display: flex; gap: 10px;">
        <button class="btn btn-primary" id="exportChecklistBtn">Exportar Checklist</button>
      </div>
    `;

    viewEl.innerHTML = html;

    viewEl.querySelectorAll(".checklist-item").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.dataset.checklistId;
        const cl = PRLStorage.get("checklist") || {};
        if (cl[id]) {
          delete cl[id];
        } else {
          cl[id] = { checked: true, date: new Date().toISOString() };
        }
        PRLStorage.set("checklist", cl);
        this.renderChecklist();
      });
    });

    document.getElementById("exportChecklistBtn")?.addEventListener("click", () => {
      const cl = PRLStorage.get("checklist") || {};
      let text = "CHECKLIST HOMOLOGACIÓN - PRL España\n";
      text += "====================================\n\n";
      CHECKLIST_HOMOLOGACION.forEach((cat) => {
        text += `${cat.category}\n`;
        cat.items.forEach((item) => {
          const mark = cl[item.id] ? "✓" : "○";
          text += `  ${mark} ${item.text}\n`;
        });
        text += "\n";
      });
      text += `Progreso: ${completed}/${total} (${pct}%)\n`;
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "checklist-homologacion.txt";
      a.click();
      URL.revokeObjectURL(url);
    });
  },

  renderVocabulario() {
    const viewEl = document.getElementById("vocabularioView");

    let html = `
      <h2 style="margin-bottom: 6px;">📖 Vocabulario Argentino → Español Peninsular</h2>
      <p style="color: var(--text-secondary); margin-bottom: 16px;">Términos técnicos que cambian entre Argentina y España</p>
      <div class="vocab-search">
        <input type="text" id="vocabSearch" placeholder="Buscar término...">
      </div>
      <div id="vocabTableContainer">
        ${this.buildVocabTable(VOCABULARIO_AR_ES)}
      </div>
    `;

    viewEl.innerHTML = html;

    document.getElementById("vocabSearch").addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = VOCABULARIO_AR_ES.filter((v) =>
        v.ar.toLowerCase().includes(q) ||
        v.es.toLowerCase().includes(q) ||
        v.context.toLowerCase().includes(q)
      );
      document.getElementById("vocabTableContainer").innerHTML = this.buildVocabTable(filtered);
    });
  },

  buildVocabTable(data) {
    if (data.length === 0) {
      return '<p style="color: var(--text-muted); text-align: center; padding: 20px;">Sin resultados</p>';
    }
    return `
      <table class="vocab-table">
        <thead>
          <tr>
            <th>Argentina</th>
            <th></th>
            <th>España Peninsular</th>
            <th>Contexto</th>
          </tr>
        </thead>
        <tbody>
          ${data.map((v) => `
            <tr>
              <td class="vocab-ar">${v.ar}</td>
              <td class="vocab-arrow">→</td>
              <td class="vocab-es">${v.es}</td>
              <td class="vocab-context">${v.context}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  },

  renderCalculadora() {
    const viewEl = document.getElementById("calculadoraView");

    const sevOptions = [
      { val: 1, label: "1 - Inapreciable (sin lesión)", desc: "Sin lesión, sin pérdida de tiempo" },
      { val: 2, label: "2 - Leve (lesión menor)", desc: "Lesiones menores, primeros auxilios" },
      { val: 3, label: "3 - Grave (lesión con baja)", desc: "Lesiones con baja temporal" },
      { val: 4, label: "4 - Muy grave (lesión permanente)", desc: "Incapacidad permanente parcial" },
      { val: 5, label: "5 - Extrema (muerte o incapacidad total)", desc: "Muerte o incapacidad permanente total" }
    ];

    const probOptions = [
      { val: 1, label: "1 - Improbable", desc: "Excepcional, muy poco posible" },
      { val: 2, label: "2 - Poco probable", desc: "Podría ocurrir en circunstancias especiales" },
      { val: 3, label: "3 - Posible", desc: "Podría ocurrir en algún momento" },
      { val: 4, label: "4 - Probable", desc: "Ocurrirá probablemente" },
      { val: 5, label: "5 - Casi seguro", desc: "Ocurrirá en la mayoría de circunstancias" }
    ];

    const measures = {
      low: "Riesgo BAJO: Aplicar medidas preventivas generales. Seguimiento periódico.",
      medium: "Riesgo MEDIO: Establecer medidas correctivas en plazo determinado. Vigilancia.",
      high: "Riesgo ALTO: Medidas urgentes. Evaluar paralización si es necesario.",
      "very-high": "Riesgo MUY ALTO: Paralización inmediata hasta implementar controles efectivos."
    };

    let html = `
      <h2 style="margin-bottom: 6px;">🧮 Calculadora de Riesgos</h2>
      <p style="color: var(--text-secondary); margin-bottom: 20px;">Matriz de valoración de riesgos 5×5 (Severidad × Probabilidad)</p>
      <div class="calc-container">
        <div class="calc-panel">
          <h3>Parametros de Evaluación</h3>
          <div class="calc-select-group">
            <label>Severidad del daño</label>
            <select id="calcSev">
              ${sevOptions.map((o) => `<option value="${o.val}">${o.label}</option>`).join("")}
            </select>
          </div>
          <div class="calc-select-group">
            <label>Probabilidad de ocurrencia</label>
            <select id="calcProb">
              ${probOptions.map((o) => `<option value="${o.val}">${o.label}</option>`).join("")}
            </select>
          </div>
          <div class="calc-result" id="calcResult">
            <div class="calc-result-number risk-low">5</div>
            <div class="calc-result-label">Riesgo Bajo</div>
            <div class="calc-result-description">${measures.low}</div>
          </div>
        </div>
        <div class="calc-panel">
          <h3>Matriz 5×5</h3>
          <div class="calc-matrix" id="calcMatrix"></div>
        </div>
      </div>
    `;

    viewEl.innerHTML = html;

    const renderMatrix = (sev, prob) => {
      const matrixEl = document.getElementById("calcMatrix");
      let mhtml = '<div class="calc-matrix-cell"></div>';
      for (let p = 1; p <= 5; p++) {
        mhtml += `<div class="calc-matrix-cell calc-matrix-header">P${p}</div>`;
      }

      for (let s = 5; s >= 1; s--) {
        mhtml += `<div class="calc-matrix-cell calc-matrix-label">S${s}</div>`;
        for (let p = 1; p <= 5; p++) {
          const score = s * p;
          let cls = "calc-matrix-low";
          if (score >= 10) cls = "calc-matrix-medium";
          if (score >= 15) cls = "calc-matrix-high";
          if (score >= 20) cls = "calc-matrix-very-high";

          const isCurrent = s === sev && p === prob;
          mhtml += `<div class="calc-matrix-cell ${cls} ${isCurrent ? "calc-matrix-current" : ""}">${score}</div>`;
        }
      }
      matrixEl.innerHTML = mhtml;
    };

    const updateCalc = () => {
      const sev = parseInt(document.getElementById("calcSev").value);
      const prob = parseInt(document.getElementById("calcProb").value);
      const score = sev * prob;

      let cls, level, desc;
      if (score < 5) { cls = "risk-low"; level = "Riesgo BAJO"; desc = measures.low; }
      else if (score < 10) { cls = "risk-low"; level = "Riesgo BAJO"; desc = measures.low; }
      else if (score < 15) { cls = "risk-medium"; level = "Riesgo MEDIO"; desc = measures.medium; }
      else if (score < 20) { cls = "risk-high"; level = "Riesgo ALTO"; desc = measures.high; }
      else { cls = "risk-very-high"; level = "Riesgo MUY ALTO"; desc = measures["very-high"]; }

      document.getElementById("calcResult").innerHTML = `
        <div class="calc-result-number ${cls}">${score}</div>
        <div class="calc-result-label">${level}</div>
        <div class="calc-result-description">${desc}</div>
      `;

      renderMatrix(sev, prob);
    };

    document.getElementById("calcSev").addEventListener("change", updateCalc);
    document.getElementById("calcProb").addEventListener("change", updateCalc);
    updateCalc();
  },

  renderQuiz(sectionFilter) {
    const viewEl = document.getElementById("quizView");
    const sections = Object.keys(QUIZZES);
    const currentSection = sectionFilter || sections[0];

    const mergedQuizzes = {};
    for (const key of sections) {
      mergedQuizzes[key] = [...(QUIZZES[key] || [])];
      if (QUIZZES_EXTRA[key]) {
        mergedQuizzes[key] = mergedQuizzes[key].concat(QUIZZES_EXTRA[key]);
      }
    }
    const questions = mergedQuizzes[currentSection] || [];

    const sectionLabels = {
      "marco-normativo": "⚖️ Marco Normativo",
      "guias-insst": "📚 Guías INSST",
      "normas-iso": "🌐 Normas ISO",
      "homologacion": "🎓 Homologación",
      "idioma": "🗣️ Idioma"
    };

    const quizState = PRLStorage.get("quizState") || {};
    const sectionState = quizState[currentSection] || {};

    let html = `
      <h2 style="margin-bottom: 6px;">❓ Autoevaluación</h2>
      <p style="color: var(--text-secondary); margin-bottom: 16px;">Probá tu conocimiento sobre cada tema</p>
      <div style="margin-bottom: 16px;">
        <button class="btn btn-primary" id="startSimulacroBtn">🎯 Simulacro (20 preguntas, 20 min)</button>
      </div>
      <div class="quiz-section-selector">
        ${sections.map((s) => `
          <button class="quiz-section-btn ${s === currentSection ? "active" : ""}" data-quiz-section="${s}">
            ${sectionLabels[s] || s}
          </button>
        `).join("")}
      </div>
    `;

    let correct = 0;
    let answered = 0;

    questions.forEach((q, idx) => {
      const userAnswer = sectionState[q.id];
      const isAnswered = userAnswer !== undefined;
      const isCorrect = userAnswer === q.correct;

      if (isAnswered) {
        answered++;
        if (isCorrect) correct++;
      }

      html += `
        <div class="quiz-card" data-quiz-id="${q.id}">
          <div class="quiz-question-num">Pregunta ${idx + 1} de ${questions.length}</div>
          <div class="quiz-question">${q.question}</div>
          <div class="quiz-options">
            ${q.options.map((opt, oidx) => {
              let cls = "";
              if (isAnswered) {
                if (oidx === q.correct) cls = "correct";
                else if (oidx === userAnswer && !isCorrect) cls = "incorrect";
              }
              return `
                <div class="quiz-option ${cls}" data-quiz-qid="${q.id}" data-quiz-oidx="${oidx}" ${isAnswered ? 'style="pointer-events: none;"' : ''}>
                  <div class="option-letter">${String.fromCharCode(65 + oidx)}</div>
                  <span>${opt}</span>
                </div>
              `;
            }).join("")}
          </div>
          <div class="quiz-explanation ${isAnswered ? "show" : ""}">${q.explanation}</div>
        </div>
      `;
    });

    if (answered > 0) {
      const scorePct = Math.round((correct / answered) * 100);
      html = `
        <div class="quiz-score" style="margin-bottom: 20px;">
          <div class="quiz-score-number">${correct}/${answered}</div>
          <div class="quiz-score-label">${scorePct}% de aciertos</div>
        </div>
      ` + html;
    }

    viewEl.innerHTML = html;

    viewEl.querySelectorAll(".quiz-section-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.renderQuiz(btn.dataset.quizSection);
      });
    });

    const simBtn = document.getElementById("startSimulacroBtn");
    if (simBtn) simBtn.addEventListener("click", () => this.startSimulacro());

    viewEl.querySelectorAll(".quiz-option:not([style])").forEach((opt) => {
      opt.addEventListener("click", () => {
        const qid = opt.dataset.quizQid;
        const oidx = parseInt(opt.dataset.quizOidx);

        const qs = PRLStorage.get("quizState") || {};
        if (!qs[currentSection]) qs[currentSection] = {};
        qs[currentSection][qid] = oidx;
        PRLStorage.set("quizState", qs);

        this.renderQuiz(currentSection);
      });
    });
  },

  startSimulacro() {
    const allQ = [];
    const sections = Object.keys(QUIZZES);
    for (const key of sections) {
      const qs = [...(QUIZZES[key] || [])];
      if (QUIZZES_EXTRA[key]) qs.push(...QUIZZES_EXTRA[key]);
      qs.forEach((q) => allQ.push(q));
    }
    const shuffled = allQ.sort(() => Math.random() - 0.5).slice(0, 20);
    const viewEl = document.getElementById("quizView");
    let current = 0;
    let correct = 0;
    let timeLeft = 20 * 60;
    let timerInterval;

    const renderSimQ = () => {
      if (current >= shuffled.length || timeLeft <= 0) {
        clearInterval(timerInterval);
        const pct = Math.round((correct / shuffled.length) * 100);
        PRLStorage.addQuizHistory({ correct, total: shuffled.length, date: new Date().toISOString() });
        viewEl.innerHTML = `
          <div style="text-align: center; padding: 30px;">
            <h2>🎯 Simulacro Finalizado</h2>
            <div class="quiz-score" style="margin: 20px auto;">
              <div class="quiz-score-number">${correct}/${shuffled.length}</div>
              <div class="quiz-score-label">${pct}% de aciertos</div>
            </div>
            <p style="color: var(--text-secondary); margin-bottom: 20px;">${pct >= 70 ? "¡Excelente! Estás listo para el examen." : pct >= 50 ? "¡Bien! Seguí practicando." : "Seguí estudiando. Repasá los temas que fallaste."}</p>
            <button class="btn btn-primary" onclick="App.renderQuiz()">Volver a Autoevaluación</button>
          </div>`;
        return;
      }

      const q = shuffled[current];
      const min = Math.floor(timeLeft / 60);
      const sec = timeLeft % 60;

      viewEl.innerHTML = `
        <div style="margin-bottom: 16px; padding: 12px; background: ${timeLeft < 120 ? 'var(--danger-light)' : 'var(--bg-card)'}; border: 1px solid ${timeLeft < 120 ? 'var(--danger)' : 'var(--border)'}; border-radius: var(--radius); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-weight: 700;">🎯 Simulacro</span>
          <span style="font-size: 1.2rem; font-weight: 700; color: ${timeLeft < 120 ? 'var(--danger)' : 'var(--text-primary)'};">⏱️ ${min}:${sec.toString().padStart(2, '0')}</span>
          <span style="color: var(--text-secondary);">${current + 1} / ${shuffled.length}</span>
        </div>
        <div class="quiz-card">
          <div class="quiz-question-num">Pregunta ${current + 1} de ${shuffled.length}</div>
          <div class="quiz-question">${q.question}</div>
          <div class="quiz-options">
            ${q.options.map((opt, oidx) => `
              <div class="quiz-option sim-option" data-oidx="${oidx}">
                <div class="option-letter">${String.fromCharCode(65 + oidx)}</div>
                <span>${opt}</span>
              </div>
            `).join("")}
          </div>
          <div class="quiz-explanation" id="simExplanation">${q.explanation}</div>
        </div>`;

      viewEl.querySelectorAll(".sim-option").forEach((opt) => {
        opt.addEventListener("click", () => {
          const oidx = parseInt(opt.dataset.oidx);
          const isCorrect = oidx === q.correct;
          if (isCorrect) correct++;

          viewEl.querySelectorAll(".sim-option").forEach((o, i) => {
            o.style.pointerEvents = "none";
            if (i === q.correct) o.classList.add("correct");
            else if (i === oidx && !isCorrect) o.classList.add("incorrect");
          });

          document.getElementById("simExplanation").classList.add("show");
          setTimeout(() => { current++; renderSimQ(); }, 1800);
        });
      });
    };

    timerInterval = setInterval(() => { timeLeft--; renderSimQ(); }, 1000);
    renderSimQ();
  },

  renderComunidades() {
    const viewEl = document.getElementById("comunidadesView");

    const typeIcons = {
      "Institución oficial": "🏛️",
      "Asociación profesional": "👥",
      "Foro online": "💬",
      "Red social": "📱",
      "Colegio profesional": "🎓",
      "Portal de empleo": "💼"
    };

    let html = `
      <h2 style="margin-bottom: 6px;">👥 Comunidades y Recursos PRL</h2>
      <p style="color: var(--text-secondary); margin-bottom: 20px;">Foros, asociaciones y recursos para conectarte con profesionales de PRL en España</p>
      ${COMUNIDADES_PRL.map((c) => `
        <div class="comunidad-card">
          <div class="comunidad-icon">${typeIcons[c.type] || "🔗"}</div>
          <div class="comunidad-info">
            <div class="comunidad-name">${c.name}</div>
            <div class="comunidad-type">${c.type}</div>
            <div class="comunidad-desc">${c.description}</div>
          </div>
          <a href="${c.url}" target="_blank" rel="noopener" class="comunidad-link">Visitar</a>
        </div>
      `).join("")}
    `;

    viewEl.innerHTML = html;
  },

  renderMercado() {
    const viewEl = document.getElementById("mercadoView");
    const data = MERCADO_LABORAL;

    let html = `
      <h2 style="margin-bottom: 6px;">💼 Mercado Laboral de PRL en España</h2>
      <p style="color: var(--text-secondary); margin-bottom: 20px;">Sueldos, sectores, comunidades autónomas y consejos para insertarte</p>

      <div class="mercado-section">
        <h3>💰 Rangos Salariales</h3>
        ${data.sueldos.map((s) => `
          <div class="sueldo-card">
            <div>
              <div class="sueldo-position">${s.position}</div>
              <div class="sueldo-note">${s.note}</div>
            </div>
            <div class="sueldo-amount">${s.salary}</div>
          </div>
        `).join("")}
      </div>

      <div class="mercado-section">
        <h3>🗺️ Demanda por Comunidad Autónoma</h3>
        ${data.comunidades.map((c) => {
          let demandCls = "media";
          if (c.demand === "Muy alta") demandCls = "muy-alta";
          else if (c.demand === "Alta") demandCls = "alta";
          else if (c.demand === "Media-Alta") demandCls = "media-alta";
          return `
            <div class="comunidad-laboral-card">
              <div>
                <div class="comunidad-laboral-name">${c.name}</div>
                <div class="comunidad-laboral-note">${c.companies}</div>
                <div class="comunidad-laboral-note">${c.note}</div>
              </div>
              <div class="comunidad-laboral-demand ${demandCls}">${c.demand}</div>
            </div>
          `;
        }).join("")}
      </div>

      <div class="mercado-section">
        <h3>🏭 Sectores con Mayor Demanda</h3>
        <div style="display: flex; flex-wrap: wrap;">
          ${data.sectores.map((s) => {
            let chipColor = "var(--text-muted)";
            if (s.demand === "Muy alta") chipColor = "var(--success)";
            else if (s.demand === "Alta") chipColor = "var(--accent)";
            else if (s.demand === "Media-Alta") chipColor = "var(--warning)";
            return `
              <div class="sector-chip">
                <span>${s.sector}</span>
                <span class="sector-demand" style="background: ${chipColor}22; color: ${chipColor};">${s.demand}</span>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <div class="mercado-section">
        <h3>📋 Requisitos Comunes</h3>
        ${data.requisitos.map((r) => `
          <div class="requisito-item">${r}</div>
        `).join("")}
      </div>

      <div class="mercado-section">
        <h3>💡 Consejos para Insertarte</h3>
        ${data.consejos.map((c) => `
          <div class="consejo-item">${c}</div>
        `).join("")}
      </div>
    `;

    viewEl.innerHTML = html;
  },

  renderComparativa() {
    const viewEl = document.getElementById("comparativaView");

    let html = `
      <h2 style="margin-bottom: 6px;">🔄 Comparativa: Argentina vs España</h2>
      <p style="color: var(--text-secondary); margin-bottom: 20px;">Diferencias clave entre la normativa de PRL de ambos países</p>
      <div style="overflow-x: auto;">
        <table class="vocab-table">
          <thead>
            <tr>
              <th style="width: 20%;">Aspecto</th>
              <th style="width: 40%;">🇦🇷 Argentina</th>
              <th style="width: 40%;">🇪🇸 España</th>
            </tr>
          </thead>
          <tbody>
            ${COMPARATIVA_AR_ES.map((row) => `
              <tr>
                <td style="font-weight: 600; color: var(--text-primary);">${row.aspecto}</td>
                <td>
                  <div style="font-weight: 500; color: var(--warning); margin-bottom: 4px;">${row.argentina.norma}</div>
                  <div style="font-size: 0.82rem; color: var(--text-secondary);">${row.argentina.detalle}</div>
                </td>
                <td>
                  <div style="font-weight: 500; color: var(--success); margin-bottom: 4px;">${row.espana.norma}</div>
                  <div style="font-size: 0.82rem; color: var(--text-secondary);">${row.espana.detalle}</div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;

    viewEl.innerHTML = html;
  },

  renderCursosINSST() {
    const viewEl = document.getElementById("cursosInsstView");

    const topicLabels = {
      "ergonomia": "Ergonomía",
      "higiene-industrial": "Higiene Industrial",
      "general": "General",
      "seguridad": "Seguridad",
      "psicosociologia": "Psicosociología",
      "agentes-biologicos": "Agentes Biológicos",
      "agentes-quimicos": "Agentes Químicos",
      "evaluacion": "Evaluación de Riesgos",
      "epi": "EPIs"
    };

    let html = `
      <h2 style="margin-bottom: 6px;">🎓 Cursos Gratuitos del INSST</h2>
      <p style="color: var(--text-secondary); margin-bottom: 8px;">Formación gratuita del Instituto Nacional de Seguridad y Salud en el Trabajo. Inscribite online desde Argentina.</p>
      <p style="color: var(--text-muted); font-size: 0.82rem; margin-bottom: 20px;">🔗 Agenda completa: <a href="https://www.insst.es/formacion" target="_blank" style="color: var(--accent);">insst.es/formacion</a></p>

      <div class="quiz-section-selector" id="cursoFilter">
        <button class="quiz-section-btn active" data-filter="todos">Todos</button>
        <button class="quiz-section-btn" data-filter="online">Online</button>
        <button class="quiz-section-btn" data-filter="presencial">Presencial</button>
      </div>

      <div id="cursosList">
        ${CURSOS_INSST.map((curso) => `
          <div class="comunidad-card" data-cursos-modality="${curso.modality.toLowerCase().includes('online') ? (curso.modality.toLowerCase().includes('presencial') ? 'mixto' : 'online') : 'presencial'}">
            <div class="comunidad-icon">🎓</div>
            <div class="comunidad-info">
              <div class="comunidad-name">${curso.title}</div>
              <div class="comunidad-type">${topicLabels[curso.topic] || curso.topic}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 4px;">
                <div>📍 ${curso.center} | ⏱ ${curso.duration} | 📅 ${curso.date}</div>
                <div style="margin-top: 2px;">Modalidad: <strong>${curso.modality}</strong> ${curso.free ? '| <span style="color: var(--success);">Gratuito</span>' : ''}</div>
              </div>
            </div>
            <a href="${curso.inscription}" target="_blank" rel="noopener" class="comunidad-link">Inscribirse</a>
          </div>
        `).join("")}
      </div>
    `;

    viewEl.innerHTML = html;

    viewEl.querySelectorAll("#cursoFilter .quiz-section-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        viewEl.querySelectorAll("#cursoFilter .quiz-section-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;

        viewEl.querySelectorAll("#cursosList .comunidad-card").forEach((card) => {
          if (filter === "todos") {
            card.style.display = "";
          } else if (filter === "online") {
            card.style.display = card.dataset.cursosModality === "online" ? "" : "none";
          } else if (filter === "presencial") {
            card.style.display = (card.dataset.cursosModality === "presencial" || card.dataset.cursosModality === "mixto") ? "" : "none";
          }
        });
      });
    });
  },

  renderGuiasDescargables() {
    const viewEl = document.getElementById("guiasDescargablesView");

    let html = `
      <h2 style="margin-bottom: 6px;">📥 Guías Técnicas del INSST</h2>
      <p style="color: var(--text-secondary); margin-bottom: 8px;">Documentos oficiales gratuitos para descargar. Son la referencia técnica para la evaluación de riesgos.</p>
      <p style="color: var(--text-muted); font-size: 0.82rem; margin-bottom: 20px;">🔗 Catálogo completo: <a href="https://www.insst.es/especificas" target="_blank" style="color: var(--accent);">insst.es/especificas</a></p>
    `;

    GUIAS_INSST_LINKS.forEach((guia) => {
      html += `
        <div class="comunidad-card">
          <div class="comunidad-icon">📄</div>
          <div class="comunidad-info">
            <div class="comunidad-name">${guia.title}</div>
            <div class="comunidad-type">${guia.code}</div>
            <div class="comunidad-desc">${guia.description}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Tamaño: ${guia.size} | Publicación gratuita</div>
          </div>
          <a href="${guia.download}" target="_blank" rel="noopener" class="comunidad-link">Descargar PDF</a>
        </div>
      `;
    });

    html += `
      <div style="margin-top: 24px; padding: 16px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius);">
        <h3 style="font-size: 1rem; margin-bottom: 8px; color: var(--text-secondary);">💡 Consejo</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
          Descargá todas las guías y guardalas en una carpeta en tu celular o PC. Cuando llegues a España vas a tenerlas como referencia práctica. Las más importantes son:
        </p>
        <ul style="margin-top: 8px; padding-left: 20px; color: var(--text-secondary); font-size: 0.88rem;">
          <li><strong>Directrices para evaluación de riesgos</strong> - La base de todo</li>
          <li><strong>Guía de agentes químicos</strong> - Muy relevante para saneamiento</li>
          <li><strong>Guía de agentes biológicos</strong> - Fundamental para tu especialidad</li>
          <li><strong>Manual de ergonomía en PYME</strong> - Útil para pymes</li>
        </ul>
      </div>
    `;

    viewEl.innerHTML = html;
  },

  renderReview(sectionFilter) {
    const viewEl = document.getElementById("reviewView");
    const sections = PRL_DATA.sections;
    const currentSectionId = sectionFilter || sections[0].id;
    const section = sections.find((s) => s.id === currentSectionId);
    if (!section) return;

    let allItems = [];
    section.categories.forEach((cat) => {
      cat.items.forEach((item) => allItems.push(item));
    });

    const reviewState = PRLStorage.get("reviewState") || {};
    const sectionReview = reviewState[currentSectionId] || { index: 0, correct: 0, wrong: 0, answers: {} };
    const idx = Math.min(sectionReview.index, allItems.length - 1);
    const currentItem = allItems[idx];

    let html = `
      <h2 style="margin-bottom: 6px;">🧠 Repaso por Tema</h2>
      <p style="color: var(--text-secondary); margin-bottom: 16px;">Elegí una sección y repasá los conceptos clave. Respondé si lo sabés o no, y al final ves tu puntaje.</p>

      <div class="quiz-section-selector" style="flex-wrap: wrap;">
        ${sections.map((s) => `
          <button class="review-topic-btn ${s.id === currentSectionId ? 'active' : ''}" data-review-section="${s.id}">
            ${s.icon} ${s.title}
          </button>
        `).join("")}
      </div>

      <div class="review-stats">
        <span>✅ Sabidos: <strong>${sectionReview.correct}</strong></span>
        <span>❌ No sabidos: <strong>${sectionReview.wrong}</strong></span>
        <span>📝 ${idx + 1} de ${allItems.length}</span>
      </div>

      <div class="review-progress-bar">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${Math.round(((idx + 1) / allItems.length) * 100)}%"></div>
        </div>
      </div>
    `;

    if (currentItem) {
      html += `
        <div class="review-question-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.78rem; color: var(--text-muted);">${currentItem.type.replace("-", " ")} - ${currentItem.status}</span>
          </div>
          <h3 style="font-size: 1.05rem; margin-bottom: 12px;">${currentItem.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 8px;">${currentItem.summary}</p>

          <div id="reviewAnswer" class="review-answer">
            <h4 style="margin-bottom: 8px;">🔑 Puntos Clave:</h4>
            <ul style="padding-left: 18px; margin-bottom: 8px;">
              ${currentItem.keyPoints.slice(0, 5).map((kp) => `<li style="margin-bottom: 4px; font-size: 0.85rem;">${kp}</li>`).join("")}
            </ul>
            ${currentItem.comoLoUso ? `
              <div class="info-box" style="margin-top: 10px;">
                <strong>🛠️ Cómo lo uso:</strong> ${currentItem.comoLoUso}
              </div>
            ` : ""}
          </div>

          <div class="review-controls">
            <button id="reviewShowAnswer" class="btn">Mostrar Respuesta</button>
          </div>
          <div class="review-controls" id="reviewResultBtns" style="display: none;">
            <button class="correct" data-review-result="correct">✅ Lo sabía</button>
            <button class="wrong" data-review-result="wrong">❌ No lo sabía</button>
          </div>
        </div>
      `;

      if (idx >= allItems.length - 1) {
        const total = sectionReview.correct + sectionReview.wrong;
        const score = total > 0 ? Math.round((sectionReview.correct / total) * 100) : 0;
        html += `
          <div class="review-question-card" style="text-align: center; border-color: var(--success);">
            <h3 style="font-size: 1.2rem; margin-bottom: 8px;">🏁 ¡Repaso completado!</h3>
            <div class="quiz-score-number" style="font-size: 2rem; margin: 12px 0;">${sectionReview.correct}/${total}</div>
            <div class="quiz-score-label">${score}% de conocimiento</div>
            <p style="color: var(--text-secondary); margin-top: 10px; font-size: 0.88rem;">
              ${score >= 80 ? "¡Muy bien! Dominás este tema." : score >= 50 ? "Básico, repasá los puntos que fallaste." : "Necesitás estudiar más este tema. Volve a leer los resúmenes."}
            </p>
            <button class="btn btn-primary" id="reviewResetBtn" style="margin-top: 12px;">🔄 Repetir Repaso</button>
          </div>
        `;
      }
    }

    viewEl.innerHTML = html;

    viewEl.querySelectorAll(".review-topic-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const rs = PRLStorage.get("reviewState") || {};
        rs[btn.dataset.reviewSection] = { index: 0, correct: 0, wrong: 0, answers: {} };
        PRLStorage.set("reviewState", rs);
        this.renderReview(btn.dataset.reviewSection);
      });
    });

    const showBtn = document.getElementById("reviewShowAnswer");
    if (showBtn) {
      showBtn.addEventListener("click", () => {
        document.getElementById("reviewAnswer").classList.add("show");
        showBtn.style.display = "none";
        document.getElementById("reviewResultBtns").style.display = "flex";
      });
    }

    viewEl.querySelectorAll("[data-review-result]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const result = btn.dataset.reviewResult;
        const rs = PRLStorage.get("reviewState") || {};
        if (!rs[currentSectionId]) rs[currentSectionId] = { index: 0, correct: 0, wrong: 0, answers: {} };
        const sr = rs[currentSectionId];

        if (result === "correct") sr.correct++;
        else sr.wrong++;

        sr.answers[currentItem.id] = result;
        sr.index = idx + 1;
        PRLStorage.set("reviewState", rs);
        this.renderReview(currentSectionId);
      });
    });

    const resetBtn = document.getElementById("reviewResetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        const rs = PRLStorage.get("reviewState") || {};
        rs[currentSectionId] = { index: 0, correct: 0, wrong: 0, answers: {} };
        PRLStorage.set("reviewState", rs);
        this.renderReview(currentSectionId);
      });
    }
  },

  handleSearch(query) {
    const resultsEl = document.getElementById("searchResults");
    if (query.length < 2) {
      resultsEl.classList.add("hidden");
      return;
    }
    const q = query.toLowerCase();
    const results = [];

    PRL_DATA.sections.forEach((section) => {
      section.categories.forEach((cat) => {
        cat.items.forEach((item) => {
          const matchTitle = item.title.toLowerCase().includes(q);
          const matchSummary = item.summary.toLowerCase().includes(q);
          const matchPoints = item.keyPoints.some((kp) => kp.toLowerCase().includes(q));
          if (matchTitle || matchSummary || matchPoints) {
            results.push({ item, section: section.title, sectionId: section.id, type: "study" });
          }
        });
      });
    });

    if (typeof VOCABULARIO !== "undefined") {
      VOCABULARIO.forEach((v) => {
        if (v.argentina.toLowerCase().includes(q) || v.espana.toLowerCase().includes(q) || (v.nota && v.nota.toLowerCase().includes(q))) {
          results.push({ vocab: v, type: "vocab" });
        }
      });
    }

    if (typeof CHECKLIST_HOMOLOGACION !== "undefined") {
      CHECKLIST_HOMOLOGACION.forEach((c) => {
        if (c.text.toLowerCase().includes(q)) {
          results.push({ check: c, type: "checklist" });
        }
      });
    }

    if (results.length === 0) {
      resultsEl.innerHTML = `<div class="search-result-item"><div class="result-title">Sin resultados para "${query}"</div></div>`;
    } else {
      let html = "";
      const studyResults = results.filter((r) => r.type === "study");
      const vocabResults = results.filter((r) => r.type === "vocab");
      const checkResults = results.filter((r) => r.type === "checklist");

      if (studyResults.length > 0) {
        html += `<div class="search-result-category">📚 Estudio</div>`;
        html += studyResults.slice(0, 8).map((r) => `
          <div class="search-result-item" data-item-id="${r.item.id}" data-section-id="${r.sectionId}">
            <div class="result-title">${r.item.title}</div>
            <div class="result-section">${r.section} - ${r.item.type.replace("-", " ")}</div>
          </div>
        `).join("");
      }

      if (vocabResults.length > 0) {
        html += `<div class="search-result-category">📖 Vocabulario</div>`;
        html += vocabResults.slice(0, 5).map((r) => `
          <div class="search-result-item vocab-result" data-argentina="${r.vocab.argentina}" data-espana="${r.vocab.espana}">
            <div class="result-title">${r.vocab.argentina} → ${r.vocab.espana}</div>
            <div class="result-section">Vocabulario AR→ES <span class="result-type-badge vocab">${r.vocab.categoria || ""}</span></div>
          </div>
        `).join("");
      }

      if (checkResults.length > 0) {
        html += `<div class="search-result-category">✅ Checklist Homologación</div>`;
        html += checkResults.slice(0, 5).map((r) => `
          <div class="search-result-item checklist-result">
            <div class="result-title">${r.check.text}</div>
            <div class="result-section">Checklist <span class="result-type-badge checklist">${r.check.categoria || ""}</span></div>
          </div>
        `).join("");
      }

      resultsEl.innerHTML = html;
    }

    resultsEl.classList.remove("hidden");

    resultsEl.querySelectorAll(".search-result-item[data-item-id]").forEach((el) => {
      el.addEventListener("click", () => {
        resultsEl.classList.add("hidden");
        document.getElementById("searchInput").value = "";
        this.navigateTo(el.dataset.itemId, { fromSection: el.dataset.sectionId });
      });
    });

    resultsEl.querySelectorAll(".vocab-result").forEach((el) => {
      el.addEventListener("click", () => {
        resultsEl.classList.add("hidden");
        document.getElementById("searchInput").value = "";
        this.navigateTo("vocabulario");
      });
    });

    resultsEl.querySelectorAll(".checklist-result").forEach((el) => {
      el.addEventListener("click", () => {
        resultsEl.classList.add("hidden");
        document.getElementById("searchInput").value = "";
        this.navigateTo("checklist");
      });
    });
  },

  renderProfesor(moduloFilter) {
    const viewEl = document.getElementById("profesorView");
    const lecciones = PROFESOR_LECCIONES;
    const modulos = PROFESOR_MODULOS;
    const currentModulo = moduloFilter || "all";
    const completadas = PRLStorage.get("profesorCompletadas") || [];

    const filtered = currentModulo === "all" ? lecciones : lecciones.filter((l) => l.modulo.toLowerCase() === currentModulo);

    let html = `
      <div class="profesor-header">
        <div class="profesor-avatar">👨‍🏫</div>
        <h2>Tu Profesor de PRL</h2>
        <p>Lecciones como si estuvieras en una facultad española. Explicaciones prácticas, casos reales.</p>
      </div>

      <div class="modulo-tabs">
        <button class="modulo-tab ${currentModulo === "all" ? "active" : ""}" data-modulo="all">Todos</button>
        ${modulos.map((m) => `
          <button class="modulo-tab ${currentModulo === m.id ? "active" : ""}" data-modulo="${m.id}">
            ${m.icono} ${m.titulo}
          </button>
        `).join("")}
      </div>

      <div style="margin-bottom: 16px; padding: 12px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--text-secondary);">
        📊 Progreso: <strong>${completadas.length}</strong> de <strong>${lecciones.length}</strong> lecciones completadas
        <div class="progress-bar" style="margin-top: 6px;">
          <div class="progress-fill" style="width: ${Math.round((completadas.length / lecciones.length) * 100)}%"></div>
        </div>
      </div>
    `;

    filtered.forEach((l) => {
      const isCompleted = completadas.includes(l.id);
      html += `
        <div class="leccion-card" data-leccion="${l.id}">
          <div class="leccion-icon">${l.icono}</div>
          <div class="leccion-title">${l.titulo} ${isCompleted ? '<span class="leccion-completada-badge">✅ Completada</span>' : ""}</div>
          <div class="leccion-meta">
            <span>📖 ${l.modulo}</span>
            <span>⏱️ ${l.duracion}</span>
            <span>📝 ${l.objetivos.length} objetivos</span>
          </div>
        </div>
      `;
    });

    viewEl.innerHTML = html;

    viewEl.querySelectorAll(".modulo-tab").forEach((btn) => {
      btn.addEventListener("click", () => this.renderProfesor(btn.dataset.modulo));
    });

    viewEl.querySelectorAll(".leccion-card").forEach((card) => {
      card.addEventListener("click", () => this.openLeccion(card.dataset.leccion));
    });
  },

  openLeccion(leccionId) {
    const viewEl = document.getElementById("profesorView");
    const leccion = PROFESOR_LECCIONES.find((l) => l.id === leccionId);
    if (!leccion) return;

    const completadas = PRLStorage.get("profesorCompletadas") || [];
    const preguntasState = PRLStorage.get("profesorPreguntas") || {};

    let html = `
      <div class="leccion-container">
        <button class="back-btn" id="backToProfesor">← Volver a lecciones</button>
        <h2 style="margin: 16px 0 4px;">${leccion.icono} ${leccion.titulo}</h2>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 16px;">📖 ${leccion.modulo} · ⏱️ ${leccion.duracion}</p>

        <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 14px; margin-bottom: 20px;">
          <h4 style="font-size: 0.88rem; margin-bottom: 8px;">🎯 Objetivos de esta lección:</h4>
          <ul style="padding-left: 18px; font-size: 0.85rem; color: var(--text-secondary);">
            ${leccion.objetivos.map((o) => `<li style="margin-bottom: 4px;">${o}</li>`).join("")}
          </ul>
        </div>
    `;

    leccion.secciones.forEach((sec, idx) => {
      switch (sec.tipo) {
        case "narrativa":
          html += `<div class="seccion-narrativa">${sec.contenido}</div>`;
          break;
        case "concepto-clave":
          html += `<div class="seccion-concepto"><h4>📌 ${sec.titulo}</h4><div style="white-space: pre-line; line-height: 1.8;">${sec.contenido}</div></div>`;
          break;
        case "ejemplo":
          html += `<div class="seccion-ejemplo"><h4>🔍 ${sec.titulo}</h4><div style="white-space: pre-line; line-height: 1.8;">${sec.contenido}</div></div>`;
          break;
        case "comparativa":
          html += `<div class="seccion-comparativa"><h4 style="margin-bottom: 8px;">🔄 ${sec.titulo}</h4><div style="white-space: pre-line; line-height: 1.7;">${sec.contenido}</div></div>`;
          break;
        case "resumen":
          html += `<div class="seccion-resumen"><h4 style="margin-bottom: 8px;">📋 Resumen de la lección</h4>${sec.contenido}</div>`;
          break;
        case "pregunta":
          const pKey = `${leccionId}-${idx}`;
          const pState = preguntasState[pKey];
          html += `
            <div class="seccion-pregunta">
              <h4>❓ Pregunta</h4>
              <p style="font-size: 0.92rem; margin-bottom: 4px;">${sec.pregunta}</p>
              <div class="pregunta-opciones" data-pkey="${pKey}" data-correcta="${sec.correcta}">
                ${sec.opciones.map((opt, oidx) => {
                  let cls = "";
                  if (pState !== undefined) {
                    if (oidx === sec.correcta) cls = "correcta";
                    else if (oidx === pState && pState !== sec.correcta) cls = "incorrecta";
                  }
                  return `<div class="pregunta-opcion ${cls}" data-oidx="${oidx}" ${pState !== undefined ? 'style="pointer-events:none;"' : ''}>${String.fromCharCode(65 + oidx)}) ${opt}</div>`;
                }).join("")}
              </div>
              <div class="pregunta-explicacion ${pState !== undefined ? "show" : ""}">${sec.explicacion}</div>
            </div>
          `;
          break;
      }
    });

    if (!completadas.includes(leccionId)) {
      html += `
        <div style="text-align: center; margin: 20px 0;">
          <button class="btn btn-success" id="markLeccionComplete" style="padding: 12px 32px; font-size: 1rem;">
            ✅ Marcar lección como completada
          </button>
        </div>
      `;
    } else {
      html += `<div style="text-align: center; margin: 20px 0; padding: 12px; background: var(--success-light); border-radius: var(--radius-sm); color: var(--success); font-weight: 600;">✅ Lección completada</div>`;
    }

    html += `
      <div class="leccion-nav">
        <button id="prevLeccion">← Lección anterior</button>
        <button id="nextLeccion">Siguiente lección →</button>
      </div>
    </div>`;

    viewEl.innerHTML = html;

    document.getElementById("backToProfesor").addEventListener("click", () => this.renderProfesor());

    const completeBtn = document.getElementById("markLeccionComplete");
    if (completeBtn) {
      completeBtn.addEventListener("click", () => {
        const c = PRLStorage.get("profesorCompletadas") || [];
        if (!c.includes(leccionId)) c.push(leccionId);
        PRLStorage.set("profesorCompletadas", c);
        this.openLeccion(leccionId);
      });
    }

    viewEl.querySelectorAll(".pregunta-opcion:not([style])").forEach((opt) => {
      opt.addEventListener("click", () => {
        const pkey = opt.closest(".pregunta-opciones").dataset.pkey;
        const correcta = parseInt(opt.closest(".pregunta-opciones").dataset.correcta);
        const selected = parseInt(opt.dataset.oidx);
        const ps = PRLStorage.get("profesorPreguntas") || {};
        ps[pkey] = selected;
        PRLStorage.set("profesorPreguntas", ps);
        this.openLeccion(leccionId);
      });
    });

    const idx = PROFESOR_LECCIONES.findIndex((l) => l.id === leccionId);
    const prevBtn = document.getElementById("prevLeccion");
    const nextBtn = document.getElementById("nextLeccion");
    if (prevBtn) {
      prevBtn.disabled = idx === 0;
      prevBtn.addEventListener("click", () => { if (idx > 0) this.openLeccion(PROFESOR_LECCIONES[idx - 1].id); });
    }
    if (nextBtn) {
      nextBtn.disabled = idx === PROFESOR_LECCIONES.length - 1;
      nextBtn.addEventListener("click", () => { if (idx < PROFESOR_LECCIONES.length - 1) this.openLeccion(PROFESOR_LECCIONES[idx + 1].id); });
    }
  },

  renderCatala() {
    const viewEl = document.getElementById("catalaView");

    const categorias = {};
    CATALA_VOCABULARIO.forEach((v) => {
      if (!categorias[v.categoria]) categorias[v.categoria] = [];
      categorias[v.categoria].push(v);
    });

    let html = `
      <div class="catala-header">
        <h2>🗣️ Catalán para PRL</h2>
        <p>Vocabulario y frases esenciales para trabajar en Cataluña. Muchas empresas en Barcelona exigen catalán.</p>
      </div>

      <div style="margin-bottom: 20px; padding: 16px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius);">
        <h4 style="margin-bottom: 8px;">💡 Consejo del profesor</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
          No necesitás ser fluent en catalán para empezar a trabajar. Pero sí necesitás entender las señales de seguridad, las frases básicas de emergencia, y poder comunicarte con los trabajadores. Empezá por vocabulario de seguridad, que es lo más urgente.
        </p>
      </div>

      <div style="margin-bottom: 16px;">
        <button class="catala-practica-btn" id="startFlashcards">🃏 Practicar con Flashcards</button>
        <button class="catala-practica-btn" id="startCatalaQuiz" style="margin-left: 8px;">❓ Quiz de Catalán</button>
      </div>

      <div id="catalaFlashcardArea"></div>
      <div id="catalaQuizArea"></div>
    `;

    const iconos = {
      "General": "📋", "Equipamiento": "🦺", "Espacios Confinados": "⚠️", "Evaluación": "🔍",
      "Formación": "📚", "Riesgos": "☢️", "Inspección": "🔎", "Emergencias": "🚨",
      "Documentación": "📄", "Puesto de trabajo": "🏗️", "Organización": "👥",
      "Frases": "💬", "Números": "🔢", "Señales": "🚦"
    };

    Object.entries(categorias).forEach(([cat, items]) => {
      html += `
        <div class="catala-categoria">
          <h3>${iconos[cat] || "📌"} ${cat}</h3>
          <div class="vocab-catala-grid">
            ${items.map((v) => `
              <div class="vocab-catala-item">
                <span class="catala-word">${v.catala}</span>
                <button class="catala-speak-btn" data-text="${v.catala.replace(/"/g, '&quot;')}" title="Escuchar pronunciación">🔊</button>
                <button class="catala-mic-btn" data-expected="${v.catala.replace(/"/g, '&quot;')}" title="Decí la palabra y te digo si está bien">🎤</button>
                ${v.pron ? `<span class="catala-pron">${v.pron}</span>` : ""}
                <span class="castella-word">${v.castella}</span>
              </div>
              ${v.nota ? `<div style="grid-column: 1/-1; font-size: 0.72rem; color: var(--text-muted); padding: 0 14px; margin-top: -4px;">${v.nota}</div>` : ""}
            `).join("")}
          </div>
        </div>
      `;
    });

    if (CATALA_CONCEPTES) {
      html += `<h3 style="margin-top: 20px; margin-bottom: 12px;">📖 Conceptos Clave</h3>`;
      CATALA_CONCEPTES.forEach((c) => {
        html += `<div class="catala-concepte"><h4>${c.titulo}</h4><div>${c.contingut}</div></div>`;
      });
    }

    viewEl.innerHTML = html;

    let flashcardIndex = 0;
    const flashcards = [...CATALA_VOCABULARIO].sort(() => Math.random() - 0.5);

    document.getElementById("startFlashcards").addEventListener("click", () => {
      flashcardIndex = 0;
      this.showFlashcard(flashcardIndex, flashcards);
    });

    document.getElementById("startCatalaQuiz").addEventListener("click", () => {
      this.showCatalaQuiz();
    });

    viewEl.querySelectorAll(".catala-speak-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const text = btn.dataset.text;
        if ("speechSynthesis" in window) {
          window.speechSynthesis.cancel();
          const utter = new SpeechSynthesisUtterance(text);
          utter.lang = "ca-ES";
          utter.rate = 0.8;
          const voices = window.speechSynthesis.getVoices();
          const caVoice = voices.find((v) => v.lang.startsWith("ca"));
          if (caVoice) utter.voice = caVoice;
          window.speechSynthesis.speak(utter);
          btn.textContent = "🗣️";
          setTimeout(() => { btn.textContent = "🔊"; }, 1500);
        }
      });
    });

    viewEl.querySelectorAll(".catala-mic-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
          btn.textContent = "❌";
          setTimeout(() => { btn.textContent = "🎤"; }, 2000);
          return;
        }
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = "ca-ES";
        recognition.interimResults = false;
        recognition.maxAlternatives = 3;
        btn.textContent = "🎙️";
        btn.disabled = true;
        recognition.start();

        recognition.onresult = (event) => {
          const expected = btn.dataset.expected.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/['"]/g, "").replace(/\s+/g, " ").trim();
          let bestMatch = false;
          for (let i = 0; i < event.results[0].length; i++) {
            const spoken = event.results[0][i].transcript.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/['"]/g, "").replace(/\s+/g, " ").trim();
            if (spoken === expected || expected.includes(spoken) || spoken.includes(expected)) {
              bestMatch = true;
              break;
            }
            const expectedWords = expected.split(" ");
            const spokenWords = spoken.split(" ");
            let matches = 0;
            expectedWords.forEach((w) => { if (spokenWords.some((sw) => sw.includes(w) || w.includes(sw))) matches++; });
            if (matches / expectedWords.length >= 0.7) { bestMatch = true; break; }
          }

          if (bestMatch) {
            btn.textContent = "✅";
            btn.style.background = "var(--success-light)";
          } else {
            const spoken = event.results[0][0].transcript;
            btn.textContent = "⚠️";
            btn.title = "Dijiste: " + spoken;
            btn.style.background = "var(--danger-light)";
          }
          setTimeout(() => { btn.textContent = "🎤"; btn.style.background = ""; btn.disabled = false; }, 2500);
        };

        recognition.onerror = (event) => {
          btn.textContent = "❌";
          setTimeout(() => { btn.textContent = "🎤"; btn.disabled = false; }, 2000);
        };

        recognition.onend = () => {
          btn.disabled = false;
        };
      });
    });
  },

  showFlashcard(idx, flashcards) {
    const area = document.getElementById("catalaFlashcardArea");
    if (idx >= flashcards.length) {
      area.innerHTML = `<div style="text-align: center; padding: 20px; background: var(--success-light); border-radius: var(--radius);"><h3>✅ ¡Práctica completada!</h3><p style="margin-top: 8px;">Repasaste ${flashcards.length} palabras</p></div>`;
      return;
    }
    const v = flashcards[idx];
    area.innerHTML = `
      <div class="catala-flashcard" id="flashcard">
        <div class="flashcard-word">${v.catala} <button class="catala-speak-btn flashcard-speak" data-text="${v.catala.replace(/"/g, '&quot;')}" title="Escuchar">🔊</button></div>
        ${v.pron ? `<div class="flashcard-pron">${v.pron}</div>` : ""}
        <div class="flashcard-translation">${v.castella}</div>
        <div class="flashcard-hint">Tocá para ver la traducción (${idx + 1}/${flashcards.length})</div>
      </div>
      <div class="catala-controls">
        <button class="btn" id="fcPrev" ${idx === 0 ? "disabled" : ""}>← Anterior</button>
        <button class="btn btn-primary" id="fcNext">Siguiente →</button>
      </div>
    `;
    document.getElementById("flashcard").addEventListener("click", (e) => {
      if (e.target.closest(".catala-speak-btn")) return;
      document.getElementById("flashcard").classList.toggle("revealed");
    });
    document.getElementById("fcNext").addEventListener("click", () => this.showFlashcard(idx + 1, flashcards));
    document.getElementById("fcPrev").addEventListener("click", () => { if (idx > 0) this.showFlashcard(idx - 1, flashcards); });

    area.querySelectorAll(".flashcard-speak").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if ("speechSynthesis" in window) {
          window.speechSynthesis.cancel();
          const utter = new SpeechSynthesisUtterance(btn.dataset.text);
          utter.lang = "ca-ES";
          utter.rate = 0.8;
          const voices = window.speechSynthesis.getVoices();
          const caVoice = voices.find((v) => v.lang.startsWith("ca"));
          if (caVoice) utter.voice = caVoice;
          window.speechSynthesis.speak(utter);
        }
      });
    });

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(v.catala);
      utter.lang = "ca-ES";
      utter.rate = 0.8;
      const voices = window.speechSynthesis.getVoices();
      const caVoice = voices.find((v) => v.lang.startsWith("ca"));
      if (caVoice) utter.voice = caVoice;
      window.speechSynthesis.speak(utter);
    }
  },

  showCatalaQuiz() {
    const area = document.getElementById("catalaQuizArea");
    const shuffled = [...CATALA_VOCABULARIO].sort(() => Math.random() - 0.5).slice(0, 10);
    let score = 0;
    let current = 0;

    const renderQuestion = () => {
      if (current >= shuffled.length) {
        area.innerHTML = `
          <div class="catala-quiz-area">
            <h3>Quiz completado</h3>
            <div class="quiz-score-number">${score}/${shuffled.length}</div>
            <div class="quiz-score-label">${Math.round((score / shuffled.length) * 100)}% de aciertos</div>
            <button class="btn btn-primary" id="repeatCatalaQuiz" style="margin-top: 12px;">🔄 Repetir Quiz</button>
          </div>
        `;
        document.getElementById("repeatCatalaQuiz").addEventListener("click", () => this.showCatalaQuiz());
        return;
      }

      const q = shuffled[current];
      const wrongOptions = CATALA_VOCABULARIO.filter((v) => v.castella !== q.castella).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [{ text: q.castella, correct: true }, ...wrongOptions.map((w) => ({ text: w.castella, correct: false }))].sort(() => Math.random() - 0.5);

      area.innerHTML = `
        <div class="catala-quiz-area">
          <h4>Pregunta ${current + 1} de ${shuffled.length}</h4>
          <p style="font-size: 1rem; margin: 12px 0;">¿Cómo se dice en castellano?</p>
          <p style="font-size: 1.3rem; font-weight: 700; color: var(--accent); margin-bottom: 12px;">${q.catala}</p>
          <div class="pregunta-opciones">
            ${options.map((opt, oidx) => `
              <div class="pregunta-opcion" data-catala-correct="${opt.correct}" data-catala-oidx="${oidx}">
                ${String.fromCharCode(65 + oidx)}) ${opt.text}
              </div>
            `).join("")}
          </div>
          <p style="margin-top: 8px; font-size: 0.8rem; color: var(--text-muted);">${q.nota || ""}</p>
        </div>
      `;

      area.querySelectorAll(".pregunta-opcion").forEach((opt) => {
        opt.addEventListener("click", () => {
          if (opt.dataset.catalaCorrect === "true") {
            opt.classList.add("correcta");
            score++;
          } else {
            opt.classList.add("incorrecta");
            area.querySelector(`[data-catala-correct="true"]`).classList.add("correcta");
          }
          area.querySelectorAll(".pregunta-opcion").forEach((o) => o.style.pointerEvents = "none");
          setTimeout(() => { current++; renderQuestion(); }, 1200);
        });
      });
    };

    renderQuestion();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
});
