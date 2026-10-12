const PRLStorage = {
  PREFIX: "prl_espana_",

  get(key) {
    try {
      const raw = localStorage.getItem(this.PREFIX + key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  remove(key) {
    localStorage.removeItem(this.PREFIX + key);
  },

  getProgress() {
    return this.get("progress") || {};
  },

  setProgress(itemId, completed) {
    const progress = this.getProgress();
    if (completed) {
      progress[itemId] = { completed: true, date: new Date().toISOString() };
    } else {
      delete progress[itemId];
    }
    this.set("progress", progress);
  },

  isCompleted(itemId) {
    const progress = this.getProgress();
    return !!progress[itemId]?.completed;
  },

  getOverallProgress() {
    const progress = this.getProgress();
    let total = 0;
    let completed = 0;

    if (typeof PRL_DATA !== "undefined" && PRL_DATA.sections) {
      PRL_DATA.sections.forEach((section) => {
        section.categories.forEach((cat) => {
          cat.items.forEach((item) => {
            total++;
            if (progress[item.id]?.completed) completed++;
          });
        });
      });
    }

    return total === 0 ? 0 : Math.round((completed / total) * 100);
  },

  getGlobalCompletion() {
    return this.getOverallProgress();
  },

  exportBackup() {
    const backup = {
      version: "2026.1",
      exportedAt: new Date().toISOString(),
      data: {}
    };

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith(this.PREFIX) || key === "prl_gemini_key" || key === "prl_gemini_model")) {
        backup.data[key] = localStorage.getItem(key);
      }
    }

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `prl-espana-backup-${dateStr}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  importBackup(jsonString) {
    try {
      const backup = JSON.parse(jsonString);
      if (!backup || !backup.data) return false;

      Object.keys(backup.data).forEach(key => {
        localStorage.setItem(key, backup.data[key]);
      });
      return true;
    } catch {
      return false;
    }
  },

  getExamHistory() {
    return this.get("exam_history") || [];
  },

  saveExamResult(result) {
    const history = this.getExamHistory();
    history.unshift({
      id: Date.now(),
      date: new Date().toLocaleString('es-ES'),
      score: result.score,
      correctas: result.correctas,
      total: result.total,
      passed: result.passed
    });
    this.set("exam_history", history.slice(0, 30));
  },

  clearExamHistory() {
    this.remove("exam_history");
  },

  getRiskEvaluations() {
    return this.get("risk_evaluations") || [];
  },

  saveRiskEvaluation(evalObj) {
    const list = this.getRiskEvaluations();
    list.unshift({
      id: Date.now(),
      date: new Date().toLocaleDateString('es-ES'),
      puesto: evalObj.puesto || "Puesto General",
      peligro: evalObj.peligro || "Evaluación de Riesgo",
      sev: evalObj.sev,
      prob: evalObj.prob,
      score: evalObj.score,
      level: evalObj.level,
      desc: evalObj.desc
    });
    this.set("risk_evaluations", list.slice(0, 50));
  },

  deleteRiskEvaluation(id) {
    const list = this.getRiskEvaluations().filter(item => item.id !== id);
    this.set("risk_evaluations", list);
  },

  getCompletionPercentage(sectionId) {
    if (typeof PRL_DATA === "undefined" || !PRL_DATA.sections) return 0;
    const section = PRL_DATA.sections.find((s) => s.id === sectionId);
    if (!section) return 0;
    const progress = this.getProgress();
    let total = 0;
    let completed = 0;
    section.categories.forEach((cat) => {
      cat.items.forEach((item) => {
        total++;
        if (progress[item.id]?.completed) completed++;
      });
    });
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  },

  getFavorites() {
    return this.get("favorites") || [];
  },

  isFavorite(itemId) {
    const favorites = this.getFavorites();
    return favorites.includes(itemId);
  },

  toggleFavorite(itemId) {
    let favorites = this.getFavorites();
    if (favorites.includes(itemId)) {
      favorites = favorites.filter((id) => id !== itemId);
    } else {
      favorites.push(itemId);
    }
    this.set("favorites", favorites);
  },

  getNotes(itemId) {
    const notes = this.get("notes") || {};
    return notes[itemId] || "";
  },

  setNotes(itemId, text) {
    const notes = this.get("notes") || {};
    if (text && text.trim()) {
      notes[itemId] = text.trim();
    } else {
      delete notes[itemId];
    }
    this.set("notes", notes);
  },

  getTimelinePhase(phaseId) {
    const phases = this.get("timeline_phases") || {};
    return phases[phaseId] || "not-started";
  },

  setTimelinePhase(phaseId, status) {
    const phases = this.get("timeline_phases") || {};
    phases[phaseId] = status;
    this.set("timeline_phases", phases);
  },

  getItemsDueForReview() {
    const progress = this.getProgress();
    const due = [];
    if (typeof PRL_DATA !== "undefined" && PRL_DATA.sections) {
      PRL_DATA.sections.forEach((section) => {
        section.categories.forEach((cat) => {
          cat.items.forEach((item) => {
            if (progress[item.id]?.completed) {
              due.push(item);
            }
          });
        });
      });
    }
    return due;
  },

  getQuizHistory() {
    return this.get("quiz_history") || [];
  },

  addQuizHistory(entry) {
    const history = this.getQuizHistory();
    history.unshift(entry);
    this.set("quiz_history", history.slice(0, 50));
  },

  exportData() {
    return JSON.stringify(this.exportBackup());
  },

  importData(dataStr) {
    return this.importBackup(dataStr);
  },

  resetAll() {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && key.startsWith(this.PREFIX)) {
        localStorage.removeItem(key);
      }
    }
  }
};
