<script setup>

import Breadcrumb from '@/classes/Breadcrumb.js';

import KntH1 from '../components/heading/KntH1.vue';
import KntH2 from '@/components/heading/KntH2.vue';
import KntH3 from '@/components/heading/KntH3.vue';
import KntH4 from '@/components/heading/KntH4.vue';
import KntH5 from '@/components/heading/KntH5.vue';
import KntH6 from '@/components/heading/KntH6.vue';
import KntSmallText from '@/components/text/KntSmallText.vue';

import KntBreadcrumb from '@/components/KntBreadcrumb.vue';
import KntHomeTile from '@/components/KntHomeTile.vue';

import { HomeTileIconsEnum } from '@/enums/HomeTileIconsEnum.js';
</script>

<template>
  <main class="library min-h-screen bg-white dark:bg-gray-900">
    <KntH1 text="KntH1" />
    <KntH2 text="KntH2" />
    <KntH3 text="KntH3" />
    <KntH4 text="KntH4" />
    <KntH5 text="KntH5" />
    <KntH6 text="KntH6" />
    <KntBreadcrumb :breadcrumbs="[new Breadcrumb('Dashboard', '#'), new Breadcrumb('Page 1', '#'), new Breadcrumb('Page 2', null)]" :mobile-breadcrumb="new Breadcrumb('Back to page 1', '#')" />
    <KntSmallText text="This is a small text! :D" />

    <div class="mt-6 grid grid-cols-2 gap-2 px-4 max-w-screen-xl mx-auto lg:grid-cols-4 lg:gap-6 lg:px-16">
      <KntHomeTile :icon="HomeTileIconsEnum.Characters" :title="$t('pages.home.characters.title')" link="#" :description="$t('pages.home.characters.description')" />
      <KntHomeTile :icon="HomeTileIconsEnum.Events" :title="$t('pages.home.events.title')" link="#" :description="$t('pages.home.events.description')" />
      <KntHomeTile :icon="HomeTileIconsEnum.Magics" :title="$t('pages.home.magics.title')" link="#" :description="$t('pages.home.magics.description')" />
      <KntHomeTile :icon="HomeTileIconsEnum.Maps" :title="$t('pages.home.nations.title')" link="#" :description="$t('pages.home.nations.description')" />
    </div>
  </main>
</template>
