# @feedback-fish/vue

The [Feedback Fish](https://feedback.fish) widget for Vue apps.

## Usage

```html
<template>
  <FeedbackFish projectId="..." />
  <button 
    data-feedback-fish
    data-feedback-fish-userid="user@example.org"
  >
    Send feedback
  </button>
</template>

<script>
import { FeedbackFish } from "@feedback-fish/vue";

export default {
  name: "App",
  components: {
    FeedbackFish,
  },
};
</script>
```

## License

Licensed under the MIT license.