<script setup>
import { TabsPosition } from '@/enums/TabsPosition.js';
import { ref, provide } from 'vue';

const selectedTab = defineModel();
defineProps({
  tabsPosition: {
    type: String,
    required: false,
    default: TabsPosition.Top
  },
});
const tabs = ref([]);

provide('registerTab', (tab) => {
  tabs.value.push(tab);
});
provide('selectedTab', selectedTab);

const tabContainerStyle = "flex text-sm font-medium divide-x divide-gray-200 border-gray-200 " +
                          "dark:divide-gray-600 dark:border-gray-600";
const tabButtonStyle = "w-full p-4 hover:bg-gray-100 dark:hover:bg-gray-600";
const selectedTabButtonStyle = " text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500";
const unselectedTabButtonStyle = " text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300";
</script>

<template>
  <div
    class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600"
  >
    <ul
      v-if="tabsPosition === TabsPosition.Top"
      :class="tabContainerStyle +  ' rounded-t-lg border-b'"
      role="tablist"
    >
      <li v-for="tab in tabs" :key="tab.tabId" class="w-full">
        <button
          @click="selectedTab = tab.tabId"
          :class="(tabButtonStyle) + ((selectedTab === tab.tabId)? selectedTabButtonStyle: unselectedTabButtonStyle) + ((tab === tabs[0])? ' rounded-tl-lg': '') + ((tab === tabs[tabs.length-1])? ' rounded-tr-lg': '')"
        >
          {{ tab.label }}
        </button>
      </li>
    </ul>


    <div class="p-2">
      <slot></slot>
    </div>


    <ul
      v-if="tabsPosition === TabsPosition.Bottom"
      :class="tabContainerStyle + ' rounded-b-lg border-t'"
      role="tablist"
    >
      <li v-for="tab in tabs" :key="tab.tabId" class="w-full">
        <button
          @click="selectedTab = tab.tabId"
          :class="(tabButtonStyle) + ((selectedTab === tab.tabId)? selectedTabButtonStyle: unselectedTabButtonStyle) + ((tab === tabs[0])? ' rounded-bl-lg': '') + ((tab === tabs[tabs.length-1])? ' rounded-br-lg': '')"
        >
          {{ tab.label }}
        </button>
      </li>
    </ul>
  </div>
</template>
