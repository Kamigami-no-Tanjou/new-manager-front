<script setup>
import KntH4 from '@/components/heading/KntH4.vue'

defineProps({
  title: {
    type: String,
    required: false,
    default: null
  }
})
</script>

<template>
  <div
    class="w-full p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600"
  >
    <slot v-if="title === null" name="title" />
    <KntH4 v-else :text="title" />

    <slot /><!-- Content slot -->

    <slot name="action" />
  </div>
</template>
