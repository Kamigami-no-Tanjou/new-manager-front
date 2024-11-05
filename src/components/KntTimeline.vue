<script setup>
import { PlusCircleIcon, ExclamationCircleIcon, XCircleIcon } from '@heroicons/vue/20/solid/index.js';
import TimelineItem from '@/classes/TimelineItem.js';

defineProps({
  middleElements: {
    type: Array,
    required: false,
    default: () => [],
    validator: (value) => value.every((itm) => itm instanceof TimelineItem)
  },
  firstElement: {
    type: TimelineItem,
    required: false,
    default: null
  },
  lastElement: {
    type: TimelineItem,
    required: false,
    default: null
  }
});
</script>

<template>
  <ol class="lg:flex lg:justify-between">
    <li
      v-if="firstElement !== null"
      class="flex lg:flex-col w-full"
    >
      <div class="lg:flex">
        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-gray-100 dark:bg-blue-900 sm:ring-8 dark:ring-gray-800 shrink-0">
          <PlusCircleIcon class="size-4 text-blue-800 dark:text-blue-300" />
        </div>
        <div class="w-0.5 lg:w-full h-8 lg:h-0.5 mt-2 lg:mt-2.5 ml-2.5 lg:ml-2 bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div class="ml-2 lg:ml-0 lg:mt-2">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ firstElement.label }}</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ firstElement.date }}</time>
      </div>
    </li>

    <li
      v-for="item in middleElements"
      :key="item.label"
      class="flex lg:flex-col w-full"
    >
      <div class="lg:flex">
        <div class="hidden lg:block w-full h-0.5 mt-2.5 bg-gray-200 dark:bg-gray-700"></div>
        <div class="z-10 flex items-center justify-center w-6 h-6 mt-2 lg:mt-0 bg-blue-100 rounded-full ring-0 ring-gray-100 dark:bg-blue-900 sm:ring-8 dark:ring-gray-800 shrink-0">
          <ExclamationCircleIcon class="size-4 text-blue-800 dark:text-blue-300" />
        </div>
        <div class="w-0.5 lg:w-full h-8 lg:h-0.5 mt-2 lg:mt-2.5 ml-2.5 lg:ml-2 bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div class="ml-2 lg:ml-0 mt-2">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white lg:text-center">{{ item.label }}</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:text-center">{{ item.date }}</time>
      </div>
    </li>

    <li
      v-if="lastElement !== null"
      class="flex lg:flex-col w-full"
    >
      <div class="lg:flex">
        <div class="hidden lg:block w-full h-0.5 mt-2.5 -ml-2 bg-gray-200 dark:bg-gray-700"></div>
        <div class="z-10 flex items-center justify-center w-6 h-6 mt-2 lg:mt-0 bg-blue-100 rounded-full ring-0 ring-gray-100 dark:bg-blue-900 sm:ring-8 dark:ring-gray-800 shrink-0">
          <XCircleIcon class="size-4 text-blue-800 dark:text-blue-300" />
        </div>
      </div>
      <div class="ml-2 mt-2">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white lg:text-right">{{ lastElement.label }}</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:text-right">{{ lastElement.date }}</time>
      </div>
    </li>
  </ol>
</template>
