<script setup>
import { ref, provide } from 'vue';

import KntContainer from '@/components/container/KntContainer.vue';

const selectedTab = defineModel();
const emit = defineEmits(['tab-switch']);
const tabs = ref ([]);

provide('registerTab', (tab) => {
  tabs.value.push(tab);
});
provide('selectedTab', selectedTab);

function switchTab(tab) {
  if (tab.tabId === selectedTab.value) return;

  selectedTab.value = tab.tabId;
  emit('tab-switch', tab);
}

const tabButtonStyle = "flex inline-block p-4 leading-8 rounded-t-lg cursor-pointer";
const unselectedTabButtonStyle = " hover:border-b-2 hover:border-gray-300 text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:border-gray-400 dark:hover:text-gray-300";
const selectedTabButtonStyle = " border-b-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500";
</script>

<template>
  <div class="flex flex-col flex-1 lg:block lg:h-fit w-full">
    <div class="hidden lg:block mb-4 mx-1.5 border-b border-gray-200 dark:border-gray-700">
      <ul role="tablist" class="flex flex-wrap -mb-px text-sm font-medium text-center">
        <li v-for="tab in tabs" :key="tab.tabId" class="mr-2">
          <button
            @click="switchTab(tab)"
            :class="tabButtonStyle + ((selectedTab === tab.tabId)? selectedTabButtonStyle: unselectedTabButtonStyle)"
          >
            <img v-if="tab.iconUri" :src="tab.iconUri" class="inline-block size-6 mr-2" />
            {{ tab.label }}
          </button>
        </li>
      </ul>
    </div>

    <KntContainer>
      <template #mobile><slot name="mobile"></slot></template>
      <template #desktop><slot name="desktop"></slot></template>
    </KntContainer>
  </div>
</template>
