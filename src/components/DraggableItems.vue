<template>
  <draggable
    v-model="items"
    :class="['draggable-container', containerClass ?? '']"
    :handle="handleClass"
    :item-key="(item: T) => key(item)"
  >
    <template #item="{ element }">
      <div
        :class="['draggable-row', rowClass ?? '']"
      >
        <div
          :class="['drag-handle', handleClass ?? '']"
          role="button"
          tabindex="0"
          :data-layer-grip="element"
          :aria-label="`Reorder ${name(element)}`"
          @keydown="onGripKeydown($event, element)"
        >
          <slot
            name="handle"
            :item="element"
          >
            <FontAwesomeIcon :icon="gripIcon" />
          </slot>
          <slot
            name="item"
            :item="element"
          >
          </slot>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts" generic="T">
import { nextTick } from "vue";
import draggable from "vuedraggable";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { DraggableItemsProps } from "../types";

library.add(faGripVertical);

const items = defineModel<T[]>({
  required: true,
});

const emit = defineEmits<{
  (event: "change", order: T[]): void;
}>();

const props = withDefaults(defineProps<DraggableItemsProps<T>>(), {
  handleClass: null,
  containerClass: null,
  rowClass: null,
  gripIcon: "fa-grip-vertical",
});

// Reordering by keyboard. Up/Down move the focused layer one place in the list,
// the same thing dragging its grip does, and go through the same displayOrder
// setter so the map layer order follows.
//
// Focus has to be handed back by hand: reordering re-renders the list and the
// grip the user was holding is destroyed, which would drop focus to <body>
// after a single press and make repeated arrows impossible. data-layer-grip is
// how we find the new element for the layer that just moved.
function moveLayer(item: T, delta: number) {
  const order = items.value.slice();
  const from = order.indexOf(item);
  const to = from + delta;
  if (from < 0 || to < 0 || to >= order.length) {
    return;
  }
  order.splice(to, 0, ...order.splice(from, 1));
  items.value = order;
  emit("change", items.value);
  nextTick(() => {
    document.querySelector<HTMLElement>(`[data-layer-grip="${item}"]`)?.focus();
  });
}

function onGripKeydown(event: KeyboardEvent, item: T) {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    moveLayer(item, -1);
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    moveLayer(item, 1);
  }
}
</script>

<style scoped lang="less">
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-left: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: fit-content;
}

li {
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
  cursor: move;
  margin: 10px 0;
}

.drag-handle {
  /* A Font Awesome icon takes its size from font-size, and at the 20pt this
     used to carry, the grip drew 23x27 -- much bigger than the mdi-menu it
     replaced, which was held down by size="x-small". The handle is sized by
     its glyph, so this figure sets the width of the grip column too: 17px is
     20% up from the 14px it was, widening the column by the same 20%. */
  font-size: 17px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* The handle is the first thing in the row, so its left edge sat 14px from
     the inside of the card and the focus ring, which wants 17px, spilled past
     it. Shrinking the glyph alone does not help -- that moves the right edge,
     not the left -- so the handle is nudged inwards to make the room. */
  margin-left: 5px;
}

.drag-handle:hover {
  cursor: grab;
}

.draggable-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.draggable-row {
  background: #404040;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}
</style>
