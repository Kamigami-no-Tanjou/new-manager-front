<script setup>
defineProps({
  to: {
    type: String,
    required: true
  }
});
</script>

<template v-slot="action">
  <RouterLink
    :to="to"
    class="inline-flex items-center justify-center w-full mt-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg antialiased hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500/25 dark:bg-blue-600 dark:hover:bg-blue-600/90 dark:focus:ring-blue-500/25"
  >
    <slot />
  </RouterLink>
</template>
