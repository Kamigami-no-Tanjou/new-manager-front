<script setup>
import { XMarkIcon } from '@heroicons/vue/16/solid/index.js';

import { Size } from '@/enums/Size.js';
import KntIconButton from '@/components/input/button/KntIconButton.vue';

const emit = defineEmits(['close-drawer']);

function close() {
  emit('close-drawer');
}
</script>

<template>
  <div class="absolute top-2.5 right-2.5">
    <KntIconButton :size="Size.Small" @click="close()">
      <XMarkIcon class="size-5" />
    </KntIconButton>
  </div>
</template>
