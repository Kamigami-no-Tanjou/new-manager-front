<script setup>
import {
  UsersIcon,
  BookmarkIcon,
  SparklesIcon,
  MapPinIcon,
  TagIcon,
  VariableIcon,
  BoltIcon,
  CheckBadgeIcon
} from '@heroicons/vue/24/solid/index.js';
import KntH5 from '@/components/heading/KntH5.vue';
import KntSmallText from '@/components/text/KntSmallText.vue';
import { HomeTileIconsEnum } from '@/enums/HomeTileIconsEnum.js';

defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});
</script>

<template>
  <RouterLink
    :to="link"
    class="block w-full p-2 text-center bg-wihte border border-gray-200 rounded-md shadow lg:p-6 lg:rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <UsersIcon
      v-if="icon === HomeTileIconsEnum.Characters"
      class="text-gray-800 size-28 mx-auto mb-3 lg:size-32 lg:mb-3 dark:text-white"
    />
    <BookmarkIcon
      v-else-if="icon === HomeTileIconsEnum.Events"
      class="text-gray-800 size-28 mx-auto mb-3 lg:size-32 lg:mb-3 dark:text-white"
    />
    <SparklesIcon
      v-else-if="icon === HomeTileIconsEnum.Magics"
      class="text-gray-800 size-28 mx-auto mb-3 lg:size-32 lg:mb-3 dark:text-white"
    />
    <MapPinIcon
      v-else-if="icon === HomeTileIconsEnum.Maps"
      class="text-gray-800 size-28 mx-auto mb-3 lg:size-32 lg:mb-3 dark:text-white"
    />
    <TagIcon
      v-else-if="icon === HomeTileIconsEnum.Classes"
      class="text-gray-800 size-28 mx-auto mb-3 lg:size-32 lg:mb-3 dark:text-white"
    />
    <VariableIcon
      v-else-if="icon === HomeTileIconsEnum.MPC"
      class="text-gray-800 size-28 mx-auto mb-3 lg:size-32 lg:mb-3 dark:text-white"
    />
    <BoltIcon
      v-else-if="icon === HomeTileIconsEnum.Elements"
      class="text-gray-800 size-28 mx-auto mb-3 lg:size-32 lg:mb-3 dark:text-white"
    />
    <CheckBadgeIcon
      v-else-if="icon === HomeTileIconsEnum.NationLeaders"
      class="text-gray-800 size-28 mx-auto mb-3 lg:size-32 lg:mb-3 dark:text-white"
    />


    <KntH5
      :text="title"
    />
    <div class="leading-none lg:leading-6">
      <KntSmallText
        :text="description"
      />
    </div>
  </RouterLink>
</template>
