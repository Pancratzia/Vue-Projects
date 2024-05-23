import { ref, onMounted, onUnmounted } from "vue";

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function updateCursorPosition(event: MouseEvent) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", updateCursorPosition);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", updateCursorPosition);
  });

  return { x, y };
}
