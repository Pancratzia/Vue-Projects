import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.directive("font-size", {
  beforeMount: (el) => {
    el.style.fontSize = `26px`;
  },
});

app.directive("custom-font-size", {
  beforeMount: (el, binding) => {
    el.style.fontSize = `${binding.value}px`;
  },
});

app.directive("custom-color", {
  beforeMount: (el, binding) => {
    let color = "purple";
    switch (binding.arg) {
      case "red":
        color = "red";
        break;
      case "blue":
        color = "blue";
        break;
      case "yellow":
        color = "yellow";
        break;
      case "green":
        color = "green";
        break;
    }

    el.style.color = color;
  },
});

app.mount("#app");
