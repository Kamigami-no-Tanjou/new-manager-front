<script setup>
import { useI18n } from 'vue-i18n';

import Breadcrumb from '@/classes/Breadcrumb.js';

import { HomeTileIconsEnum } from '@/enums/HomeTileIconsEnum.js';

import KntH1 from '@/components/text/heading/KntH1.vue';
import KntBreadcrumb from '@/components/KntBreadcrumb.vue';
import KntHomeTile from '@/components/container/KntHomeTile.vue';

const { t } = useI18n();
</script>

<template>
  <main class="home min-h-screen bg-white p-2 lg:p-7 pb-20 dark:bg-gray-900">
    <div class="max-w-(--breakpoint-xl) mx-auto lg:px-12">
      <KntBreadcrumb :breadcrumbs="[new Breadcrumb(t('navigation.dashboard'), '/')]" />

      <KntH1 :text="t('pages.home.title')" class="mt-8" />
      <div class="mt-6 grid grid-cols-2 gap-2 px-2 lg:px-3 lg:grid-cols-4 lg:gap-6">
        <KntHomeTile :icon="HomeTileIconsEnum.Characters" :title="t('pages.home.characters.title')" :route="{ name: 'characters' }" :description="t('pages.home.characters.description')" />
        <KntHomeTile :icon="HomeTileIconsEnum.Events" :title="t('pages.home.events.title')" :route="{ name: 'events' }" :description="t('pages.home.events.description')" />
        <KntHomeTile :icon="HomeTileIconsEnum.Magics" :title="t('pages.home.magics.title')" :route="{ name: 'magics' }" :description="t('pages.home.magics.description')" />
        <KntHomeTile :icon="HomeTileIconsEnum.Maps" :title="t('pages.home.nations.title')" :route="{ name: 'nations' }" :description="t('pages.home.nations.description')" />
        <KntHomeTile :icon="HomeTileIconsEnum.Classes" :title="t('pages.home.magicalClasses.title')" :route="{ name: 'magicalClasses' }" :description="t('pages.home.magicalClasses.description')" />
        <KntHomeTile :icon="HomeTileIconsEnum.MPC" :title="t('pages.home.mpc.title')" :route="{ name: 'mpc' }" :description="t('pages.home.mpc.description')" />
        <KntHomeTile :icon="HomeTileIconsEnum.Elements" :title="t('pages.home.elements.title')" :route="{ name: 'elements' }" :description="t('pages.home.elements.description')" />
        <KntHomeTile :icon="HomeTileIconsEnum.NationLeaders" :title="t('pages.home.nationLeaders.title')" :route="{ name: 'nationLeaders' }" :description="t('pages.home.nationLeaders.description')" />
      </div>
    </div>

  </main>
</template>
