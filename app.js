Vue.createApp({
  data() {
    return {
      stickies: []
    };
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
      // Commit 3: you can keep this simple for now
      this.stickies = [];
    },

    charCount(text) {
      return (text ?? "").length;
    }
  }
}).mount("#app");