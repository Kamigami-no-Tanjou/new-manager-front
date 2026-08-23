<script setup>
import { XMarkIcon } from '@heroicons/vue/16/solid/index.js';

import { Size } from '@/enums/Size.js';
import KntIconButton from '@/components/input/button/KntIconButton.vue';

const emit = defineEmits(['close-dialog']);

function close() {
  emit('close-dialog');
}
</script>

<template>
  <KntIconButton :size="Size.Small" @click="close()">
    <XMarkIcon class="size-5" />
  </KntIconButton>
</template>
