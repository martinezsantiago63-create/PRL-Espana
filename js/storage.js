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

  getCompletionPercentage(sectionId) {
    const progress = this.getProgress();
    const section = PRL_DATA.sections.find((s) => s.id === sectionId);
    if (!section) return 0;

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

  getOverallProgress() {
    const progress = this.getProgress();
    let total = 0;
    let completed = 0;

    PRL_DATA.sections.forEach((section) => {
      section.categories.forEach((cat) => {
        cat.items.forEach((item) => {
          total++;
          if (progress[item.id]?.completed) completed++;
        });
      });
    });

    return total === 0 ? 0 : Math.round((completed / total) * 100);
  },

  getNotes(itemId) {
    const notes = this.get("notes") || {};
    return notes[itemId] || "";
  },

  setNotes(itemId, text) {
    const notes = this.get("notes") || {};
    if (text.trim()) {
      notes[itemId] = text;
    } else {
      delete notes[itemId];
    }
    this.set("notes", notes);
  },

  getTimelinePhase(phaseId) {
    const timeline = this.get("timeline") || {};
    return timeline[phaseId] || "pendiente";
  },

  setTimelinePhase(phaseId, status) {
    const timeline = this.get("timeline") || {};
    timeline[phaseId] = status;
    this.set("timeline", timeline);
  },

  getFavorites() {
    return this.get("favorites") || [];
  },

  toggleFavorite(itemId) {
    const favorites = this.getFavorites();
    const idx = favorites.indexOf(itemId);
    if (idx === -1) {
      favorites.push(itemId);
    } else {
      favorites.splice(idx, 1);
    }
    this.set("favorites", favorites);
  },

  isFavorite(itemId) {
    return this.getFavorites().includes(itemId);
  },

  getSearchHistory() {
    return this.get("searchHistory") || [];
  },

  addSearchTerm(term) {
    const history = this.getSearchHistory();
    const filtered = history.filter((t) => t !== term);
    filtered.unshift(term);
    this.set("searchHistory", filtered.slice(0, 20));
  },

  exportData() {
    const data = {
      progress: this.getProgress(),
      notes: this.get("notes") || {},
      timeline: this.get("timeline") || {},
      favorites: this.getFavorites(),
      spacedRepetition: this.get("spacedRepetition") || {},
      quizHistory: this.get("quizHistory") || [],
      exportDate: new Date().toISOString(),
      version: "1.1"
    };
    return JSON.stringify(data, null, 2);
  },

  importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.progress) this.set("progress", data.progress);
      if (data.notes) this.set("notes", data.notes);
      if (data.timeline) this.set("timeline", data.timeline);
      if (data.favorites) this.set("favorites", data.favorites);
      if (data.spacedRepetition) this.set("spacedRepetition", data.spacedRepetition);
      if (data.quizHistory) this.set("quizHistory", data.quizHistory);
      return true;
    } catch {
      return false;
    }
  },

  getSpacedRepetition() {
    return this.get("spacedRepetition") || {};
  },

  getSRItem(itemId) {
    const sr = this.getSpacedRepetition();
    return sr[itemId] || null;
  },

  setSRItem(itemId, correct) {
    const sr = this.getSpacedRepetition();
    const now = Date.now();
    const DAY = 86400000;
    const intervals = [1, 3, 7, 14, 30];
    const current = sr[itemId] || { box: 0, nextReview: 0, lastReview: 0 };

    let newBox;
    if (correct) {
      newBox = Math.min(current.box + 1, 4);
    } else {
      newBox = 0;
    }

    sr[itemId] = {
      box: newBox,
      nextReview: now + intervals[newBox] * DAY,
      lastReview: now
    };
    this.set("spacedRepetition", sr);
  },

  getItemsDueForReview() {
    const sr = this.getSpacedRepetition();
    const now = Date.now();
    const due = [];
    const allItems = [];

    PRL_DATA.sections.forEach((section) => {
      section.categories.forEach((cat) => {
        cat.items.forEach((item) => {
          allItems.push(item);
        });
      });
    });

    allItems.forEach((item) => {
      const data = sr[item.id];
      if (!data) {
        due.push({ ...item, priority: 0 });
      } else if (data.nextReview <= now) {
        due.push({ ...item, priority: 4 - data.box });
      }
    });

    due.sort((a, b) => b.priority - a.priority);
    return due;
  },

  getQuizHistory() {
    return this.get("quizHistory") || [];
  },

  addQuizHistory(result) {
    const history = this.getQuizHistory();
    history.unshift(result);
    this.set("quizHistory", history.slice(0, 50));
  },

  resetAll() {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(this.PREFIX))
      .forEach((k) => localStorage.removeItem(k));
  }
};
