<script setup>
import { Bars3BottomLeftIcon } from '@heroicons/vue/20/solid';

import { Size } from '@/enums/Size.js';
import KntIconButton from '@/components/input/button/KntIconButton.vue';

const emit = defineEmits(['open-drawer']);

function open() {
  emit('open-drawer');
}
</script>

<template>
  <div>
    <KntIconButton :size="Size.Normal" @click="open()">
      <Bars3BottomLeftIcon class="size-6" />
    </KntIconButton>
  </div>
</template>
