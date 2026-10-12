const CatalaStorage = {
  KEYS: {
    NOTES: "catala_notes_v1",
    PROGRESS: "catala_progress_v1",
    FAVORITES: "catala_favorites_v1"
  },

  getNotes() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.NOTES)) || [];
    } catch (e) {
      return [];
    }
  },

  saveNote(note) {
    const notes = this.getNotes();
    notes.unshift({
      id: "note-" + Date.now(),
      date: new Date().toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
      text: note
    });
    localStorage.setItem(this.KEYS.NOTES, JSON.stringify(notes));
    return notes;
  },

  deleteNote(id) {
    let notes = this.getNotes();
    notes = notes.filter(n => n.id !== id);
    localStorage.setItem(this.KEYS.NOTES, JSON.stringify(notes));
    return notes;
  },

  clearNotes() {
    localStorage.removeItem(this.KEYS.NOTES);
  }
};
