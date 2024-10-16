<script setup>
import { inject, onMounted } from 'vue';
import Tab from '@/classes/Tab.js';

const props = defineProps({
  tabId: {
    type: String,
    required: true,
  },
  tabName: {
    type: String,
    required: true,
  }
});
const selectedTabId = inject('selectedTab');

onMounted(() => {
  inject('registerTab')(new Tab(props.tabName, props.tabId));
});
</script>

<template>
  <div v-if="tabId === selectedTabId">
    <slot></slot>
  </div>
</template>
