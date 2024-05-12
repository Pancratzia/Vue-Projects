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

app.directive("custom-font", {
  beforeMount: (el, binding) => {
    let fw = "normal";

    if (binding.modifiers.bold) {
      fw = "bold";
    } else if (binding.modifiers.thin) {
      fw = "300";
    } else if (binding.modifiers.bolder) {
      fw = "bolder";
    }

    el.style.fontWeight = fw;

    if (binding.modifiers.lineThrough) {
      el.style.textDecoration = "line-through";
    } else if (binding.modifiers.underline) {
      el.style.textDecoration = "underline";
    } else if (binding.modifiers.overline) {
      el.style.textDecoration = "overline";
    }
  },
});

app.mount("#app");
