import { onMounted } from 'vue'

export const FeedbackFish = {
  props: {
    projectId: String
  },
  setup(props: { projectId: string; }) {
    onMounted(() => {
      const ffScript = document.createElement("script");
      ffScript.setAttribute(
        "src",
        `https://feedback.fish/ff.js?pid=${props.projectId}`
      );
      ffScript.defer = true;
      document.head.appendChild(ffScript);
    })
  },
  render() {
    return null
  }
}
