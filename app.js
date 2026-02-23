Vue.createApp({
  data() {
    return {
      stickies: [],
      storageKey: "stickies-app"
    };
  },

  mounted() {
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
      this.stickies = this.stickies.filter((s) => s.id !== id);
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

    saveToStorage() {
      localStorage.setItem(this.storageKey, JSON.stringify(this.stickies));
    },

    loadFromStorage() {
      const saved = localStorage.getItem(this.storageKey);
      this.stickies = saved ? JSON.parse(saved) : [];
    }
  },

  watch: {
    stickies: {
      handler() {
        this.saveToStorage();
      },
      deep: true
    }
  }
}).mount("#app");

