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
import KntContainer from '@/components/container/KntContainer.vue';
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

import CharacterService from '@/api-client/services/CharacterService';

const { t } = useI18n();
const characterService = new CharacterService();
const characters = ref([]);

onBeforeMount(async () => {
  characters.value = await characterService.getCharacters();
});
</script>

<template>
  <main class="home min-h-screen flex flex-col lg:block bg-white p-2 lg:p-7 dark:bg-gray-900">
    <div class="flex flex-col flex-1 lg:block lg:h-fit w-full max-w-(--breakpoint-xl) mx-auto lg:px-12">
      <KntBreadcrumb :breadcrumbs="[new Breadcrumb(t('navigation.dashboard'), '/'), new Breadcrumb(t('navigation.characters'))]" />

      <KntH2 class="lg:p-4" :text="t('pages.charactersList.title')" />

      <KntContainer>
        <template #desktop>
          <KntTable>
            <KntTableHead>
              <KntTableHeadRow :actions="1">
                <KntTableHeadCell>{{ t('pages.charactersList.charactersTable.name') }}</KntTableHeadCell>
                <KntTableHeadCell>{{ t('pages.charactersList.charactersTable.potential') }}</KntTableHeadCell>
                <KntTableHeadCell>{{ t('pages.charactersList.charactersTable.firstMagic') }}</KntTableHeadCell>
                <KntTableHeadCell>{{ t('pages.charactersList.charactersTable.secondMagic') }}</KntTableHeadCell>
                <KntTableHeadCell>{{ t('pages.charactersList.charactersTable.origin') }}</KntTableHeadCell>
              </KntTableHeadRow>
            </KntTableHead>

            <KntTableBody>
              <KntTableBodyRow v-for="character in characters" :key="'desktop-' + character.id">
                <KntTableBodyCell extra-classes="font-semibold text-gray-900 whitespace-nowrap dark:text-white">{{ character.firstName }} {{ character.lastName }}</KntTableBodyCell>
                <KntTableBodyCell>{{ character.potential !== null ? character.potential + " U" : '' }}</KntTableBodyCell>
                <KntTableBodyCell>{{ character.magics[0]?.name }}</KntTableBodyCell>
                <KntTableBodyCell>{{ character.magics[1]?.name }}</KntTableBodyCell>
                <KntTableBodyCell>{{ character.origin.name }}</KntTableBodyCell>
                <KntTableBodyCell :extra-classes="actionClasses">{{ t(Action.Consult) }}</KntTableBodyCell>
              </KntTableBodyRow>
              <KntTableBodyRow v-if="characters.length === 0">
                <KntTableBodyCell :colspan="6" extra-classes="text-center">{{ t('pages.charactersList.charactersTable.empty') }}</KntTableBodyCell>
              </KntTableBodyRow>
            </KntTableBody>
          </KntTable>
        </template>

        <template #mobile>
          <div class="grid grid-cols-1 gap-4">
            <KntCard v-for="character in characters" :key="'mobile-' + character.id"
              class="lg:mt-1.5"
            >
              <template v-slot:title>
                <div class="flex justify-between items-center">
                  <RouterLink to="#"><KntH4 :text="character.firstName + ' ' + character.lastName" /></RouterLink>
                  <RouterLink to="#"><KntH6 :text="character.origin.name" /></RouterLink>
                </div>
              </template>

              <KntH6 :text="t('pages.charactersList.magics')" />
              <RouterLink v-if="character.magics.length > 0" to="#" class="ml-2 mb-2"><KntSmallText :text="character.magics[0].name" /></RouterLink>
              <br/>
              <RouterLink v-if="character.magics.length > 1" to="#" class="ml-2"><KntSmallText :text="character.magics[1].name" /></RouterLink>

              <KntLinkButton to="#">{{ t('application.actions.consult') }} <ArrowRightIcon class="ml-1 mt-0.5 size-4" /></KntLinkButton>
            </KntCard>
          </div>
        </template>
      </KntContainer>
    </div>

  </main>
</template>
