Vue.createApp({
  data() {
    return {
      stickies: []
    };
  },

  mounted() {
    this.stickies = [
      { id: 1, text: "Test note 1" },
      { id: 2, text: "Another note" }
    ];
  }
}).mount("#app");
