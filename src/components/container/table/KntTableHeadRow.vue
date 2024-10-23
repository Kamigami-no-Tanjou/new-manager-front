<script setup>
defineProps({
  actions: {
    type: Number,
    required: false,
    default: 0
  }
});
</script>

<template>
  <tr>
    <slot></slot>

    <th v-for="action in actions" :key="action" class="px-6 py-3 text-center"></th>
  </tr>
</template>
