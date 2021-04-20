export const computedMixin = {
  data() {
    return {
      message2: "",
      soru3: "videosinif.com",
    };
  },

  computed: {
    getReverse2: function() {
      return this.message2
        .split("")
        .reverse()
        .join("");
    },
    getWordNumber2: function() {
      return this.soru3 + "(" + this.soru3.length + ")";
    },
  },
};
