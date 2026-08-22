<script setup>
defineProps({
  to: {
    type: Object,
    required: true
  }
});
</script>

<template v-slot="action">
  <RouterLink
    :to="to"
    class="flex items-center gap-3 p-2 lg:text-base text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <slot />
  </RouterLink>
</template>
