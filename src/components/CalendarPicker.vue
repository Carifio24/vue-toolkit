<template>
  <VueDatePicker
    v-bind="props"
    class="mx-2 cds__date-picker"
    ref="calendar"
    @open="keyboardHandlers.onOpen"
    @closed="keyboardHandlers.onClosed"
    @update-month-year="keyboardHandlers.onMonthChange"
  >
    <template #action-buttons>
      <button
        class="dp__action_button dp__action-cancel"
        type="button"
        @click="() => {
          emit('cancel');
          calendar?.closeMenu();
        }"
      >
        Cancel
      </button>
      <button
        class="dp__action_button dp__action-latest"
        @click="onLatestClicked"
        :disabled="!allowedDates"
        elevation="0"
        size="sm"
      >
        Latest
      </button>
    </template>
  </VueDatePicker>
</template>

<script setup lang="ts">
import { VueDatePicker, type RootProps } from '@vuepic/vue-datepicker';
import { createCalendarPickerKeyboardHandlers } from "../date_picker_keyboard";
import { useTemplateRef } from 'vue';

const calendar = useTemplateRef("calendar");
const keyboardHandlers = createCalendarPickerKeyboardHandlers(calendar.value);

interface CalendarPickerProps extends RootProps {};

const props = withDefaults(defineProps<CalendarPickerProps>(), {
  weekStart: 0,
  sixWeeks: true,
  timeConfig: () => ({ enableTimePicker: false }),
  teleport: true,
  arrowNavigation: true,
  inputAttrs: () => ({ clearable: false }),
});

const emit = defineEmits<{
  (event: "cancel"): void;
  (event: "latest", date: Date | null): void;
}>();

function onLatestClicked() {
  const date = props.allowedDates ? new Date(props.allowedDates[props.allowedDates.length - 1]) : null;
  emit("latest", date);
  keyboardHandlers.closeAfterSelection();
}
</script>

<style scoped>
button.dp__action-latest {
  color: white;
  background: var(--dp-primary-color);
}

button.dp__action-latest[disabled] {
  background: var(--dp-disabled-color);
  color: #ccc;
  
}

.cds__date-picker {
  --dp-border-color: rgba(255, 255,255, 0.7);
  --dp-border-color-hover: white;
 --dp-border-color-focus: white;
}


.dp__menu {
  border: 1px solid rgb(var(--v-theme-surface-variant), 0.9);
}
</style>
