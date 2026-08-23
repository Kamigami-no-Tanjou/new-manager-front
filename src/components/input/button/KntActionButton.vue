<script setup>
const emit = defineEmits(['click']);

function click() {
  emit('click');
}
</script>

<template v-slot="action">
  <button
    @click="click()"
    class="inline-flex items-center gap-1 justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg antialiased hover:bg-blue-800 focus:ring-4 focus:outline-hidden focus:ring-blue-500/25 dark:bg-blue-600 dark:hover:bg-blue-600/90 dark:focus:ring-blue-500/25"
  >
    <slot />
  </button>
</template>
