<script setup>
import { Size } from '@/enums/Size.js';

const emit = defineEmits(['click']);
defineProps({
  size: {
    type: String,
    required: false,
    default: Size.Normal
  },
});

function click() {
  emit('click');
}

const smallButtonStyle = "inline-flex items-center justify-center p-1.5 text-sm text-gray-400 bg-transparent rounded-lg anitaliased hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600";
const normalButtonStyle = "inline-flex items-center justify-center p-2 text-sm text-gray-500 rounded-lg anitaliased hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600";
const largeButtonStyle = normalButtonStyle;
</script>

<template>
  <button
    @click="click()"
    :class="size === Size.Small ? smallButtonStyle
      : size === Size.Large ? largeButtonStyle
      : normalButtonStyle"
  >
    <slot />
  </button>
</template>
