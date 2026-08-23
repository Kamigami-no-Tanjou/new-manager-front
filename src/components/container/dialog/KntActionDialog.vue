<script setup>
import { onMounted } from 'vue';

import KntH5 from '@/components/text/heading/KntH5.vue';
import KntActionDialogCloseButton from './KntActionDialogCloseButton.vue';

const emit = defineEmits(['register-dialog', 'close-dialog']);
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  dialogId: {
    type: String,
    required: true
  }
});

function closeDialog() {
  emit('close-dialog');
}

onMounted(() => {
  emit('register-dialog', document.getElementById(props.dialogId));
});
</script>

<template>
  <dialog :id="dialogId" @click="closeDialog()" class="max-w-3xl w-11/12 m-auto p-4 bg-white rounded-lg shadow-xl transition-all transition-discrete duration-300 ease-out opacity-0 scale-95 dark:bg-gray-800 backdrop:bg-gray-900/0 backdrop:transition-all backdrop:transition-discrete backdrop:duration-300 backdrop:ease-out open:backdrop:bg-gray-900/50 open:backdrop:backdrop-blur open:dark:backdrop:bg-gray-900/80 open:opacity-100 open:scale-100 starting:open:opacity-0 starting:open:scale-95 starting:open:backdrop:bg-gray-900/0">
    <div @click.stop>
      <div class="flex justify-between items-center pb-4 mb-4 border-b dark:border-gray-600">
        <KntH5 :text="title" unmargined thick />
        <KntActionDialogCloseButton @close-dialog="closeDialog()" />
      </div>

      <slot />

      <div class="flex items-center mt-4">
        <slot name="action" />
      </div>
    </div>
  </dialog>
</template>
