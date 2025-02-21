<script setup lang="ts">
import { onMounted, ref } from "vue";
import { SymmetricalLogTransform, symmLinspace } from "../symmetrical_log";
import { PlaybackControlProps } from "../types";

const {
} = withDefaults(defineProps<PlaybackControlProps>(), {
  modelValue: 1,
  maxPower: 3,
  paused: true,
  max: null,

});

const symLog = new SymmetricalLogTransform(10);
</script>
