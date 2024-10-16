<script setup>
import { ArrowRightIcon } from '@heroicons/vue/20/solid/index.js';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

import Breadcrumb from '@/classes/Breadcrumb.js';
import Tab from '@/classes/Tab.js';

import { HomeTileIconsEnum } from '@/enums/HomeTileIconsEnum.js';
import { TabsPosition } from '@/enums/TabsPosition.js';

import KntH1 from '@/components/text/heading/KntH1.vue';
import KntH2 from '@/components/text/heading/KntH2.vue';
import KntH3 from '@/components/text/heading/KntH3.vue';
import KntH4 from '@/components/text/heading/KntH4.vue';
import KntH5 from '@/components/text/heading/KntH5.vue';
import KntH6 from '@/components/text/heading/KntH6.vue';
import KntSmallText from '@/components/text/KntSmallText.vue';

import KntBreadcrumb from '@/components/KntBreadcrumb.vue';

import KntHomeTile from '@/components/container/KntHomeTile.vue';
import KntTab from '@/components/container/KntTab.vue';
import KntCard from '@/components/container/card/KntCard.vue';
import KntImageCard from '@/components/container/card/KntImageCard.vue';
import KntTabbedCard from '@/components/container/card/KntTabbedCard.vue';

import KntLinkButton from '@/components/input/button/KntLinkButton.vue';

/***************************************************************/

const { t } = useI18n();

const generalTab = new Tab(t('pages.characterDetails.relationCard.tabs.general'), 'general');
const storyTab = new Tab(t('pages.characterDetails.relationCard.tabs.story'), 'story');

const selectedTab = ref(generalTab.tabId);
</script>

<template>
  <main class="library min-h-screen bg-white p-2 lg:p-7 dark:bg-gray-900">
    <KntH1 text="KntH1" />
    <KntH2 text="KntH2" />
    <KntH3 text="KntH3" />
    <KntH4 text="KntH4" />
    <KntH5 text="KntH5" />
    <KntH6 text="KntH6" />
    <KntBreadcrumb :breadcrumbs="[new Breadcrumb('Dashboard', '#'), new Breadcrumb('Page 1', '#'), new Breadcrumb('Page 2', null)]" :mobile-breadcrumb="new Breadcrumb('Back to page 1', '#')" />
    <KntSmallText text="This is a small text! :D" />

    <div class="mt-6 grid grid-cols-2 gap-2 px-2 max-w-screen-xl mx-auto lg:grid-cols-4 lg:gap-6 lg:px-16">
      <KntHomeTile :icon="HomeTileIconsEnum.Characters" :title="t('pages.home.characters.title')" link="#" :description="t('pages.home.characters.description')" />
      <KntHomeTile :icon="HomeTileIconsEnum.Events" :title="t('pages.home.events.title')" link="#" :description="t('pages.home.events.description')" />
      <KntHomeTile :icon="HomeTileIconsEnum.Magics" :title="t('pages.home.magics.title')" link="#" :description="t('pages.home.magics.description')" />
      <KntHomeTile :icon="HomeTileIconsEnum.Maps" :title="t('pages.home.nations.title')" link="#" :description="t('pages.home.nations.description')" />
    </div>

    <div class="mt-6 px-2 max-w-screen-xl grid grid-cols-1 gap-2 mx-auto lg:px-16 lg:grid-cols-3 lg:gap-6">
      <div>
        <KntSmallText text="Default card" class="font-medium" />
        <KntCard
          class="lg:mt-1.5"
        >
          <template v-slot:title>
            <div class="flex justify-between items-center">
              <RouterLink to="#"><KntH4 text="Mi Vulca" /></RouterLink>
              <RouterLink to="#"><KntH6 text="Vulcain" /></RouterLink>
            </div>
          </template>

          <KntH6 :text="t('pages.charactersList.magics')" />
          <RouterLink to="#" class="ml-2 mb-2"><KntSmallText text="Magie des explosions" /></RouterLink>
          <br/>
          <RouterLink to="#" class="ml-2"><KntSmallText text="Magie de lévitation" /></RouterLink>

          <KntLinkButton to="#">{{ t('application.actions.consult') }} <ArrowRightIcon class="ml-1 mt-0.5 size-4" /></KntLinkButton>
        </KntCard>
      </div>
      <div>
        <KntSmallText text="Image card" class="font-medium" />
        <KntImageCard
          image-u-r-i="https://knt-manager.chimura-ryouwasa.top/maps/2/image"
          title="Carte de Vulcain peu de temps avant l'invasion askarienne"
          class="lg:mt-1.5"
        >
          <KntLinkButton to="#">{{ t('application.actions.consult') }} <ArrowRightIcon class="ml-1 mt-0.5 size-4" /></KntLinkButton>
        </KntImageCard>
      </div>
      <div>
        <KntSmallText text="Tabbed card" class="font-medium" />
        <KntTabbedCard :tabs-position="TabsPosition.Bottom" v-model="selectedTab" class="mb-2 lg:mb-6">
          <KntTab :tab-id="generalTab.tabId" :tab-name="generalTab.label">
            <KntH4 text="First tab..." />
          </KntTab>
          <KntTab :tab-id="storyTab.tabId" :tab-name="storyTab.label">
            <KntH4 text="Second tab..." />
          </KntTab>
        </KntTabbedCard>

        <KntTabbedCard :tabs-position="TabsPosition.Top" v-model="selectedTab">
          <KntTab :tab-id="generalTab.tabId" :tab-name="generalTab.label">
            <KntH4 text="First tab..." />
          </KntTab>
          <KntTab :tab-id="storyTab.tabId" :tab-name="storyTab.label">
            <KntH4 text="Second tab..." />
          </KntTab>
        </KntTabbedCard>
      </div>
    </div>
  </main>
</template>
