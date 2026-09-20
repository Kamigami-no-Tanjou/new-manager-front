<script setup>
import { ArrowRightIcon } from '@heroicons/vue/20/solid/index.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, onBeforeMount } from 'vue';
import { useI18n } from 'vue-i18n';

import Breadcrumb from '@/classes/Breadcrumb.js';
import Tab from '@/classes/Tab.js';

import { actionClasses } from '@/constants.js';

import { Action } from '@/enums/Action.js';

import KntBreadcrumb from '@/components/KntBreadcrumb.vue';
import KntH2 from '@/components/text/heading/KntH2.vue';
import KntH4 from '@/components/text/heading/KntH4.vue';
import KntH6 from '@/components/text/heading/KntH6.vue';
import KntParagraph from '@/components/text/KntParagraph.vue';
import KntSmallText from '@/components/text/KntSmallText.vue';
import KntTabbedContainer from '@/components/container/KntTabbedContainer.vue';
import KntCard from '@/components/container/card/KntCard.vue';
import KntLinkButton from '@/components/input/button/KntLinkButton.vue';
import KntTab from '@/components/container/KntTab.vue';
import KntTable from '@/components/container/table/KntTable.vue';
import KntTableHead from '@/components/container/table/KntTableHead.vue';
import KntTableHeadRow from '@/components/container/table/KntTableHeadRow.vue';
import KntTableHeadCell from '@/components/container/table/KntTableHeadCell.vue';
import KntTableBody from '@/components/container/table/KntTableBody.vue';
import KntTableBodyRow from '@/components/container/table/KntTableBodyRow.vue';
import KntTableBodyCell from '@/components/container/table/KntTableBodyCell.vue';

import ElementService from '@/api-client/services/ElementService';
import MagicService from '@/api-client/services/MagicService';

const { t } = useI18n();
const elementService = new ElementService();
const magicService = new MagicService();

const elementsTabs = ref([]);
const selectedContainerTab = ref({});

const elements = ref([]);
const magicsPerElement = ref({});

onBeforeMount(async () => {
  elements.value = await elementService.getElements();
  elementsTabs.value = elements.value.map(element => new Tab(element.name, element.id.toString(), element.icon));
  selectedContainerTab.value = elementsTabs.value[0].tabId;

  magicsPerElement.value = await magicService.getMagicsPerElement(elementService);
});
</script>

<template>
  <main class="home min-h-screen flex flex-col lg:block bg-white p-2 lg:p-7 dark:bg-gray-900">
    <div class="flex flex-col flex-1 lg:block lg:h-fit w-full max-w-(--breakpoint-xl) mx-auto lg:px-12">
      <KntBreadcrumb :breadcrumbs="[new Breadcrumb(t('navigation.dashboard'), '/'), new Breadcrumb(t('navigation.elements'))]" />

      <KntH2 class="lg:p-4" :text="t('pages.elements.title')" />

      <KntTabbedContainer v-model="selectedContainerTab">
        <template #desktop>
          <KntTab v-for="elementTab in elementsTabs" :key="'desktop-' + elementTab.tabId" :tab-name="elementTab.label" :tab-id="elementTab.tabId" :tab-icon-uri="elementTab.iconUri">
            <KntParagraph class="mb-4" :text="elements.find(e => e.id === Number(elementTab.tabId)).description" />
            <KntTable>
              <KntTableHead>
                <KntTableHeadRow :actions="1">
                  <KntTableHeadCell>{{ t('pages.elements.magicsTable.name') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.elements.magicsTable.elements') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.elements.magicsTable.users') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.elements.magicsTable.description') }}</KntTableHeadCell>
                </KntTableHeadRow>
              </KntTableHead>

              <KntTableBody>
                <KntTableBodyRow v-for="magic in magicsPerElement[elements.find(e => e.id === Number(elementTab.tabId)).name]" :key="'desktop-' + magic.id">
                  <KntTableBodyCell extra-classes="font-semibold text-gray-900 whitespace-nowrap dark:text-white">{{ magic.name }}</KntTableBodyCell>
                  <KntTableBodyCell><img v-for="element in magic.elements" :key="'el-' + element + '-' + magic.id" :src="elements.find(e => e.id === element)?.icon" :alt="element" class="inline-block size-6" /></KntTableBodyCell>
                  <KntTableBodyCell extra-classes="text-center">{{ magic.charactersCount }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ magic.description }}</KntTableBodyCell>
                  <KntTableBodyCell :extra-classes="actionClasses">{{ t(Action.Consult) }}</KntTableBodyCell>
                </KntTableBodyRow>
                <KntTableBodyRow v-if="magicsPerElement[elements.find(e => e.id === Number(elementTab.tabId)).name]?.length === 0">
                  <KntTableBodyCell :colspan="5" extra-classes="text-center">{{ t('pages.elements.magicsTable.empty') }}</KntTableBodyCell>
                </KntTableBodyRow>
              </KntTableBody>
            </KntTable>
          </KntTab>
        </template>
        <template #mobile>
          <Swiper :space-between="20" auto-height pagination>
            <SwiperSlide v-for="elementTab in elementsTabs" :key="'mobile-' + elementTab.tabId">
              <div class="flex justify-between items-center">
                <KntH4 :text="elementTab.label" />
                <img :src="elementTab.iconUri" class="inline-block size-9 mb-4" />
              </div>
              <KntParagraph class="mb-4" :text="elements.find(e => e.id === Number(elementTab.tabId)).description" />
              <div class="grid grid-cols-1 gap-4">
                <KntCard v-for="magic in magicsPerElement[elements.find(e => e.id === Number(elementTab.tabId)).name]" :key="'mobile-' + magic.id"
                  class="lg:mt-1.5"
                >
                  <template v-slot:title>
                    <div class="flex justify-between items-center">
                      <RouterLink to="#"><KntH6 card-title :text="magic.name" /></RouterLink>
                      <span class="flex items-center mb-2"><img v-for="element in magic.elements" :key="'el-' + element + '-' + magic.id" :src="elements.find(e => e.id === element)?.icon" :alt="element" class="inline-block size-6" /></span>
                    </div>
                  </template>

                  <KntSmallText class="block leading-5" :text="magic.description" />

                  <KntLinkButton to="#">{{ t('application.actions.consult') }} <ArrowRightIcon class="ml-1 mt-0.5 size-4" /></KntLinkButton>
                </KntCard>
              </div>
            </SwiperSlide>
          </Swiper>
        </template>
      </KntTabbedContainer>
    </div>

  </main>
</template>
