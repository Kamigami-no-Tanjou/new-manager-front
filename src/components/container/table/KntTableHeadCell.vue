<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  fixedSize: {
    type: Number,
    required: false,
    default: null,
  }
})

const baseHeadCellStyles = "px-6 py-3 text-center";
</script>

<template>
  <th :class="baseHeadCellStyles" :style="fixedSize ? `width: ${fixedSize*100/12}%` : ''">
    <slot></slot>
  </th>
</template>
