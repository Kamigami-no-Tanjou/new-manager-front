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

import CharacterService from '@/api-client/services/CharacterService';

const { t } = useI18n();
const characterService = new CharacterService();

const containerAssassinTab = new Tab("Assassins", "assassin");
const containerWarriorTab = new Tab("Guerriers", "warrior");
const containerSupportTab = new Tab("Supports", "support");
const containerFortressTab = new Tab("Forteresses", "fortress");

const selectedContainerTab = ref(containerAssassinTab.tabId);

const charactersPerClass = ref({});

onBeforeMount(async () => {
  charactersPerClass.value = await characterService.getCharactersPerClass();
});
</script>

<template>
  <main class="home min-h-screen flex flex-col lg:block bg-white p-2 lg:p-7 dark:bg-gray-900">
    <div class="flex flex-col fl  ex-1 lg:block lg:h-fit w-full max-w-(--breakpoint-xl) mx-auto lg:px-12">
      <KntBreadcrumb :breadcrumbs="[new Breadcrumb(t('navigation.dashboard'), '/'), new Breadcrumb(t('navigation.magicalClasses'))]" />

      <KntH2 class="lg:p-4" :text="t('pages.magicalClasses.title')" />

      <KntTabbedContainer v-model="selectedContainerTab">
        <template #desktop>
          <KntTab :tab-name="containerAssassinTab.label" :tab-id="containerAssassinTab.tabId">
            <KntParagraph class="mb-4" text="La classe de magie Assassin désigne les mages qui, au combat, utilisent leur magie de manière offensive et sont vulnérables en combat rapproché." />
            <KntTable>
              <KntTableHead>
                <KntTableHeadRow :actions="1">
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.name') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.firstMagic') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.secondMagic') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.origin') }}</KntTableHeadCell>
                </KntTableHeadRow>
              </KntTableHead>

              <KntTableBody>
                <KntTableBodyRow v-for="character in charactersPerClass.assassin" :key="'desktop-' + character.id">
                  <KntTableBodyCell extra-classes="text-gray-900 whitespace-nowrap dark:text-white">{{ character.firstName }} {{ character.lastName }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ character.magics[0]?.name }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ character.magics[1]?.name }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ character.origin.name }}</KntTableBodyCell>
                  <KntTableBodyCell :extra-classes="actionClasses">{{ t(Action.Consult) }}</KntTableBodyCell>
                </KntTableBodyRow>
                <KntTableBodyRow v-if="charactersPerClass.assassin?.length === 0">
                  <KntTableBodyCell :colspan="5" extra-classes="text-center">{{ t('pages.magicalClasses.charactersTable.empty') }}</KntTableBodyCell>
                </KntTableBodyRow>
              </KntTableBody>
            </KntTable>
          </KntTab>

          <KntTab :tab-name="containerWarriorTab.label" :tab-id="containerWarriorTab.tabId">
            <KntParagraph class="mb-4" text="La classe de magie Guerrier désigne les mages qui, au combat, utilisent leur magie de manière offensive et sont avantagés en combat rapproché." />
            <KntTable>
              <KntTableHead>
                <KntTableHeadRow :actions="1">
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.name') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.firstMagic') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.secondMagic') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.origin') }}</KntTableHeadCell>
                </KntTableHeadRow>
              </KntTableHead>

              <KntTableBody>
                <KntTableBodyRow v-for="character in charactersPerClass.warrior" :key="'desktop-' + character.id">
                  <KntTableBodyCell extra-classes="text-gray-900 whitespace-nowrap dark:text-white">{{ character.firstName }} {{ character.lastName }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ character.magics[0]?.name }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ character.magics[1]?.name }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ character.origin.name }}</KntTableBodyCell>
                  <KntTableBodyCell :extra-classes="actionClasses">{{ t(Action.Consult) }}</KntTableBodyCell>
                </KntTableBodyRow>
                <KntTableBodyRow v-if="charactersPerClass.warrior?.length === 0">
                  <KntTableBodyCell :colspan="5" extra-classes="text-center">{{ t('pages.magicalClasses.charactersTable.empty') }}</KntTableBodyCell>
                </KntTableBodyRow>
              </KntTableBody>
            </KntTable>
          </KntTab>

          <KntTab :tab-name="containerSupportTab.label" :tab-id="containerSupportTab.tabId">
            <KntParagraph class="mb-4" text="La classe de magie Support désigne les mages qui, au combat, utilisent leur magie de manière à assister un ou plusieurs autres mages." />
            <KntTable>
              <KntTableHead>
                <KntTableHeadRow :actions="1">
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.name') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.firstMagic') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.secondMagic') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.origin') }}</KntTableHeadCell>
                </KntTableHeadRow>
              </KntTableHead>

              <KntTableBody>
                <KntTableBodyRow v-for="character in charactersPerClass.support" :key="'desktop-' + character.id">
                  <KntTableBodyCell extra-classes="text-gray-900 whitespace-nowrap dark:text-white">{{ character.firstName }} {{ character.lastName }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ character.magics[0]?.name }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ character.magics[1]?.name }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ character.origin.name }}</KntTableBodyCell>
                  <KntTableBodyCell :extra-classes="actionClasses">{{ t(Action.Consult) }}</KntTableBodyCell>
                </KntTableBodyRow>
                <KntTableBodyRow v-if="charactersPerClass.support?.length === 0">
                  <KntTableBodyCell :colspan="5" extra-classes="text-center">{{ t('pages.magicalClasses.charactersTable.empty') }}</KntTableBodyCell>
                </KntTableBodyRow>
              </KntTableBody>
            </KntTable>
          </KntTab>

          <KntTab :tab-name="containerFortressTab.label" :tab-id="containerFortressTab.tabId">
            <KntParagraph class="mb-4" text="La classe de magie Forteresse désigne les mages qui, au combat, utilisent leur magie de manière défensive et sont capables d'encaisser les attaques adverses. Les mages de cette classe sont les plus rares, et sont bien évidemment extrêmement recherchés dans toutes les forces armées." />
            <KntTable>
              <KntTableHead>
                <KntTableHeadRow :actions="1">
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.name') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.firstMagic') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.secondMagic') }}</KntTableHeadCell>
                  <KntTableHeadCell>{{ t('pages.magicalClasses.charactersTable.origin') }}</KntTableHeadCell>
                </KntTableHeadRow>
              </KntTableHead>

              <KntTableBody>
                <KntTableBodyRow v-for="character in charactersPerClass.fortress" :key="'desktop-' + character.id">
                  <KntTableBodyCell extra-classes="text-gray-900 whitespace-nowrap dark:text-white">{{ character.firstName }} {{ character.lastName }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ character.magics[0]?.name }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ character.magics[1]?.name }}</KntTableBodyCell>
                  <KntTableBodyCell>{{ character.origin.name }}</KntTableBodyCell>
                  <KntTableBodyCell :extra-classes="actionClasses">{{ t(Action.Consult) }}</KntTableBodyCell>
                </KntTableBodyRow>
                <KntTableBodyRow v-if="charactersPerClass.fortress?.length === 0">
                  <KntTableBodyCell :colspan="5" extra-classes="text-center">{{ t('pages.magicalClasses.charactersTable.empty') }}</KntTableBodyCell>
                </KntTableBodyRow>
              </KntTableBody>
            </KntTable>
          </KntTab>
        </template>
        <template #mobile>
          <Swiper :space-between="20" auto-height pagination>
            <SwiperSlide>
              <KntH4 class="mb-4" :text="t(containerAssassinTab.label)" />
              <KntParagraph class="mb-4" text="La classe de magie Assassin désigne les mages qui, au combat, utilisent leur magie de manière offensive et sont vulnérables en combat rapproché." />
              <div class="grid grid-cols-1 gap-4">
                <KntCard v-for="character in charactersPerClass.assassin" :key="'desktop-' + character.id"
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
            </SwiperSlide>

            <SwiperSlide>
              <KntH4 class="mb-4" :text="t(containerWarriorTab.label)" />
              <KntParagraph class="mb-4" text="La classe de magie Guerrier désigne les mages qui, au combat, utilisent leur magie de manière offensive et sont avantagés en combat rapproché." />

              <div class="grid grid-cols-1 gap-4">
                <KntCard v-for="character in charactersPerClass.warrior" :key="'desktop-' + character.id"
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
            </SwiperSlide>

            <SwiperSlide>
              <KntH4 class="mb-4" :text="t(containerSupportTab.label)" />
              <KntParagraph class="mb-4" text="La classe de magie Support désigne les mages qui, au combat, utilisent leur magie de manière à assister un ou plusieurs autres mages." />

              <div class="grid grid-cols-1 gap-4">
                <KntCard v-for="character in charactersPerClass.support" :key="'desktop-' + character.id"
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
            </SwiperSlide>

            <SwiperSlide>
              <KntH4 class="mb-4" :text="t(containerFortressTab.label)" />
              <KntParagraph class="mb-4" text="La classe de magie Forteresse désigne les mages qui, au combat, utilisent leur magie de manière défensive et sont capables d'encaisser les attaques adverses. Les mages de cette classe sont les plus rares, et sont bien évidemment extrêmement recherchés dans toutes les forces armées." />

              <div class="grid grid-cols-1 gap-4">
                <KntCard v-for="character in charactersPerClass.fortress" :key="'desktop-' + character.id"
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
            </SwiperSlide>
          </Swiper>
        </template>
      </KntTabbedContainer>
    </div>

  </main>
</template>
