Vue.createApp({
  data() {
    return {
      stickies: [],
      storageKey: "stickies-app"
    };
  },

  mounted() {
    // Load saved notes when app starts
    this.loadFromStorage();
  },

  methods: {
    addStickie() {
      const id =
        (typeof crypto !== "undefined" && crypto.randomUUID)
          ? crypto.randomUUID()
          : String(Date.now() + Math.random());

      this.stickies.push({ id, text: "" });
    },

    deleteStickie(id) {
      this.stickies = this.stickies.filter(s => s.id !== id);
    },

    clearAll() {
      if (confirm("Delete all notes?")) {
        this.stickies = [];
        localStorage.removeItem(this.storageKey);
      }
    },

    charCount(text) {
      return (text ?? "").length;
    },

    // Commit 4 — Save notes
    saveToStorage() {
      localStorage.setItem(this.storageKey, JSON.stringify(this.stickies));
    },

    // Commit 4 — Load notes
    loadFromStorage() {
      const saved = localStorage.getItem(this.storageKey);

      if (saved) {
        this.stickies = JSON.parse(saved);
      } else {
        this.stickies = [];
      }
    }
  },

  // Deep watcher: auto-save whenever notes or text changes
  watch: {
    stickies: {
      handler() {
        this.saveToStorage();
      },
      deep: true
    }
  }
}).mount("#app");
