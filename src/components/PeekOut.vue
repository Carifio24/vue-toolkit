<template>
  <transition name="slide-in" class="peek-out">
    <div v-if="visible" class="peek-out-container" :style="css">
      <button @click="hide" class="close-btn">&times;</button>
      <slot></slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "center" | "bottom";
type Position = Exclude<`${Vertical} ${Horizontal}`, "center center">;

interface PeekOutProps {
  hideButton?: boolean;
  position: Position;
}

const props = withDefaults(defineProps<PeekOutProps>(), {
  hideButton: true, 
});

const css = computed(() => {
  const style: Record<string, string | number> = {};
  const [vertical, horizontal] = props.position.split(" ") as [Vertical, Horizontal];
  switch (horizontal) {
  case "left":
    style["left"] = 0;
    break;
  case "right":
    style["right"] = 0;
    break;
  case "center":
    style["left"] = "50%";
  }

  switch (vertical) {
  case "top":
    style["top"] = 0;
    break;
  case "bottom":
    style["bottom"] = 0;
    break;
  case "center":
    style["top"] = "50%";
  }

  return style;
});

const visible = ref(false);

function show() {
  visible.value = true;
}

function hide() {
  visible.value = false;
}

// Expose the show and hide methods to the parent component
defineExpose({
  show,
  hide,
});
</script>

<style scoped>
.peek-out-container {
  position: fixed;
  width: 300px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 0.5s ease;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(100%); /* Adjust for left/top/bottom */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
