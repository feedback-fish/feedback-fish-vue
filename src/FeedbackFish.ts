export const FeedbackFish = {
  mounted() {
    // Inject script in $nextTick to make sure the entire app has mounted
    this.$nextTick(() => {
      const ffScript = document.createElement("script");
      ffScript.setAttribute(
        "src",
        `https://feedback.fish/ff.js?pid=${this.$props.projectId}`
      );
      ffScript.defer = true;
      document.body.appendChild(ffScript);
    });
  },
  props: {
    projectId: String
  },
  render: function () {
    return null;
  }
};

