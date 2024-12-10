<script setup lang="ts">
import { defineProps } from "vue";
import { MapBoxFeatureCollection, MapBoxFeature, textForMapboxFeature } from '../mapbox';
import { LocationSearchProps } from "../types";


defineEmits();

const props = withDefaults(defineProps<LocationSearchProps>(), {
  searchProvider: async (_text: string) => null,
  modelValue: true,
  stayOpen: false,
  accentColor: "white",
  compact: false,
  theme: "dark",
  buttonSize: "1x",
  bgColor: "white",
  persistSelected: false,
});
</script>
