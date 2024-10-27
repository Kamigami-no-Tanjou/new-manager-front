<script setup>
import { HomeIcon } from '@heroicons/vue/20/solid/index.js';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline/index.js';

import Breadcrumb from '@/classes/Breadcrumb.js';

defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
    validator: (value) => value.every((itm) => itm instanceof Breadcrumb)
  },
  mobileBreadcrumb: {
    type: Breadcrumb,
    required: false
  }
});
</script>

<template>
  <nav class="flex mb-12 lg:mb-4 antialiased">
    <ol class="hidden items-center space-x-3 lg:inline-flex">
      <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.text"
          class="inline-flex items-center font-medium text-gray-700 text-sm dark:text-gray-400"
      >
        <ChevronRightIcon v-if="breadcrumb !== breadcrumbs[0]" class="mr-3 w-4 h-4 stroke-[3.5px] text-gray-400" />
        <RouterLink v-if="breadcrumb.link != null" :to="breadcrumb.link"
                    class="inline-flex items-center hover:text-blue-600 dark:hover:text-white"
        >
          <HomeIcon v-if="breadcrumb === breadcrumbs[0]" class="mr-3 w-4 h-4" /> {{ breadcrumb.text }}
        </RouterLink>
        <span v-else class="text-gray-500 dark:text-gray-400">{{ breadcrumb.text }}</span>
      </li>
    </ol>

    <RouterLink :to="mobileBreadcrumb.link"
                class="inline-flex items-center text-sm font-medium text-gray-700 lg:hidden hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
    >
      <ChevronLeftIcon class="mx-2.5 w-4 h-4 stroke-[3.5px]" /> {{ mobileBreadcrumb.text }}
    </RouterLink>
  </nav>
</template>
