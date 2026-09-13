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
  },
  tabIconUri: {
    type: String,
    required: false,
  },
});
const selectedTabId = inject('selectedTab');

onMounted(() => {
  inject('registerTab')(new Tab(props.tabName, props.tabId, props.tabIconUri));
});
</script>

<template>
  <div v-if="tabId === selectedTabId">
    <slot></slot>
  </div>
</template>
