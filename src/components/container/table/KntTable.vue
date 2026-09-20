<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  fixed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const baseTableStyles = 'w-full text-sm text-left text-gray-500 dark:text-gray-400';
const fixedTableStyles = ' table-fixed';
</script>

<template>
  <div class="rounded-lg overflow-hidden shadow-sm">
    <table :class="baseTableStyles + (props.fixed ? fixedTableStyles : '')">
      <slot></slot>
    </table>
  </div>
</template>
