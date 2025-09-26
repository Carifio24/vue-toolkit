<template>
  <v-card class="rating-root">
    <v-card-title>{{ question }}</v-card-title>
    <v-window
      :items="['Rating', 'Comments']"
      v-model="step"
    >
      <v-window-item value="0">
        <div class="rating-icon-row">
          <slot
            v-for="rating in Object.keys(ratingIcons)"
            :rating="rating"
            name="item"
          >
            <DefaultRatingItem
              :rating="rating as UserExperienceRating"
              :base-color="baseColor"
              icon-size="3x"
              @select="currentRating = rating as UserExperienceRating"
            />
          </slot>
        </div>
      </v-window-item>
      <v-window-item value="1">
        <div class="rating-icon-row">
          <slot
            v-for="rating in Object.keys(ratingIcons)"
            :rating="rating"
            name="item"
          >
            <DefaultRatingItem
              :rating="rating as UserExperienceRating"
              :base-color="baseColor"
              :selected="currentRating === rating"
              icon-size="3x"
              @select="currentRating = rating as UserExperienceRating"
            />
          </slot>
        </div>
        <VTextarea
          v-model="comments"
          class="comments-box"
          :placeholder="commentPlaceholder"
          auto-grow
          max-rows="4"
          density="compact"
          width="100%"
        >
        </VTextarea>
        <v-btn
          @click="emit('finish')"
        >
          Finish
        </v-btn>
      </v-window-item>
    </v-window>

    <notifications group="rating-submission" position="center bottom" classes="rating-notification"/>
  </v-card>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/naming-convention */
import { computed, ref, watch } from "vue";
import { useTheme } from "vuetify";
import type { UserExperienceProps } from "../types";
import { DEFAULT_RATING_COLORS, type UserExperienceRating } from "../utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFaceGrinStars,
  faFaceSmile,
  faFaceMeh,
  faFaceFrownOpen,
  faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";

import { VCard, VTextarea, VWindow } from "vuetify/components";
import DefaultRatingItem from "./DefaultRatingItem.vue";

const { current: currentTheme } = useTheme();

const props = withDefaults(defineProps<UserExperienceProps>(), {
  ratingColors: () => DEFAULT_RATING_COLORS,
  question: "How would you rate your experience?",
  commentPlaceholder: "Tell us any comments you have about this story",
  iconSize: "5x",
});

const emit = defineEmits<{
  (event: "comments", comments: string): void;
  (event: "rating", rating: UserExperienceRating): void;
  (event: "finish"): void;
}>();

library.add(faFaceGrinStars);
library.add(faFaceSmile);
library.add(faFaceMeh);
library.add(faFaceFrownOpen);
library.add(faFaceFrown);

const ratingIcons: Record<UserExperienceRating, [string, string]> = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "very_bad": ["fa-face-frown", "red"],
  "poor": ["fa-face-frown-open", "orange"],
  "medium": ["fa-face-meh", "goldenrod"],
  "good": ["fa-face-smile", "lightgreen"],
  "excellent": ["fa-face-grin-stars", "green"],
};

const step = ref(0);

const currentRating = ref<UserExperienceRating | null>(null);
const baseColor = computed(() => props.baseColor ?? (currentTheme.value.dark ? 'white' : 'black'));
const comments = ref<string | null>(null);

watch(currentRating, (rating: UserExperienceRating | null) => {
  if (rating) {
    if (step.value === 0) {
      step.value += 1;
    }
    emit("rating", rating);
  }
});

watch(comments, (text: string | null) => {
  if (text) {
    emit("comments", text);
  }
});

</script>

<style lang="less">
.rating-root {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 5px;
}

.rating-icon-row {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
}

.rating {
  transition: color 0.1s;
}

.selected {
  border-radius: 50%;
  box-shadow: 0 0 0 5px silver;
}

.rating-notification {
  border-radius: 5px;
  font-size: calc(1.1 * var(--default-font-size));
  padding: 1em;
  color: white;

  &.success {
    background-color: #9a009a;
  }
  &.error {
    background-color: #b30000;
  }
}

.comments-box {
  margin: auto;
}
</style>
