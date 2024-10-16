<script setup>
import KntH4 from '@/components/text/heading/KntH4.vue';

defineProps({
  title: {
    type: String,
    required: false,
    default: null
  },
  imageURI: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: false,
    default: null
  },
  imageAlt: {
    type: String,
    required: false,
    default: ''
  }
});
</script>

<template>
  <div
    class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600"
  >
    <RouterLink v-if="imageLink !== null" :to="imageLink">
      <img class="rounded-t-lg w-full" :src="imageURI" :alt="imageAlt" />
    </RouterLink>
    <img v-else class="rounded-t-lg w-full" :src="imageURI" :alt="imageAlt" />

    <div class="p-2">
      <slot v-if="title === null" name="title" />
      <KntH4 v-else :text="title" />

      <slot /><!-- Content slot -->

      <slot name="action" />
    </div>
  </div>
</template>
