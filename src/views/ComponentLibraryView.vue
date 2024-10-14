<script setup>

import Breadcrumb from '@/classes/Breadcrumb.js';

import KntH1 from '../components/heading/KntH1.vue';
import KntBreadcrumb from '@/components/heading/KntBreadcrumb.vue';
import KntH5 from '@/components/heading/KntH5.vue';
import KntSmallText from '@/components/heading/KntSmallText.vue';
import KntHomeTile from '@/components/heading/KntHomeTile.vue';

import { HomeTileIconsEnum } from '@/enums/HomeTileIconsEnum.js';
</script>

<template>
  <main class="library h-screen bg-white dark:bg-gray-900">
    <KntH1 text="KntH1" />
    <KntH5 text="KntH5" />
    <KntBreadcrumb :breadcrumbs="[new Breadcrumb('Dashboard', '#'), new Breadcrumb('Page 1', '#'), new Breadcrumb('Page 2', null)]" :mobile-breadcrumb="new Breadcrumb('Back to page 1', '#')" />
    <KntSmallText text="This is a small text! :D" />

    <div class="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
      <KntHomeTile :icon="HomeTileIconsEnum.Characters" :title="$t('pages.home.characters.title')" link="#" :description="$t('pages.home.characters.description')" />
      <KntHomeTile :icon="HomeTileIconsEnum.Events" :title="$t('pages.home.events.title')" link="#" :description="$t('pages.home.events.description')" />
      <KntHomeTile :icon="HomeTileIconsEnum.Magics" :title="$t('pages.home.magics.title')" link="#" :description="$t('pages.home.magics.description')" />
      <KntHomeTile :icon="HomeTileIconsEnum.Maps" :title="$t('pages.home.nations.title')" link="#" :description="$t('pages.home.nations.description')" />
    </div>
  </main>
</template>
