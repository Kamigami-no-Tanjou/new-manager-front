<script setup>
import { ref, provide } from 'vue';

const selectedTab = defineModel();
const tabs = ref ([]);

provide('registerTab', (tab) => {
  tabs.value.push(tab);
});
provide('selectedTab', selectedTab);

const tabButtonStyle = "flex inline-block p-4 leading-8";
const unselectedTabButtonStyle = " hover:border-b-2 hover:border-gray-300 text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:border-gray-400 dark:hover:text-gray-300";
const selectedTabButtonStyle = " border-b-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500";
</script>

<template>
  <div class="w-full">
    <div class="mb-4 mx-1.5 border-b border-gray-200 dark:border-gray-700">
      <ul role="tablist" class="flex flex-wrap -mb-px text-sm font-medium text-center">
        <li v-for="tab in tabs" :key="tab.tabId" class="mr-2">
          <button
            @click="selectedTab = tab.tabId"
            :class="tabButtonStyle + ((selectedTab === tab.tabId)? selectedTabButtonStyle: unselectedTabButtonStyle)"
          >
            {{ tab.label }}
          </button>
        </li>
      </ul>
    </div>

    <div class="p-4 rounded-lg bg-gray-100 dark:bg-gray-800" role="tabpanel">
      <slot></slot>
    </div>
  </div>
</template>
