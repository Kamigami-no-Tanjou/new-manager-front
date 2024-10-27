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
import KntTable from '@/components/container/table/KntTable.vue'
import KntTableHead from '@/components/container/table/KntTableHead.vue'
import KntTableHeadRow from '@/components/container/table/KntTableHeadRow.vue'
import KntTableHeadCell from '@/components/container/table/KntTableHeadCell.vue'
import KntTableBody from '@/components/container/table/KntTableBody.vue'
import KntTableBodyRow from '@/components/container/table/KntTableBodyRow.vue'
import KntTableBodyCell from '@/components/container/table/KntTableBodyCell.vue'
import { actionClasses } from '@/constants.js'
import { Action } from '../enums/Action.js'
import KntTabbedContainer from '@/components/container/KntTabbedContainer.vue'
import KntParagraph from '@/components/text/KntParagraph.vue'

/***************************************************************/

const { t } = useI18n();

const cardGeneralTab = new Tab(t('pages.characterDetails.relationCard.tabs.general'), 'general');
const cardStoryTab = new Tab(t('pages.characterDetails.relationCard.tabs.story'), 'story');

const containerAssassinTab = new Tab("Assassins", "assassins");
const containerWarriorTab = new Tab("Guerriers", "warriors");
const containerSupportTab = new Tab("Supports", "supports");
const containerFortressTab = new Tab("Forteresses", "fortresses");

const selectedCardTab = ref(cardGeneralTab.tabId);
const selectedContainerTab = ref(containerAssassinTab.tabId);

function changed(what) {
  console.log("changed " + what);
}
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
        <KntTabbedCard :tabs-position="TabsPosition.Bottom" v-model="selectedCardTab" class="mb-2 lg:mb-6 lg:mt-1.5" @tab-switch="changed('Tabbed card bottom')">
          <KntTab :tab-id="cardGeneralTab.tabId" :tab-name="cardGeneralTab.label">
            <KntH4 text="First tab..." />
          </KntTab>
          <KntTab :tab-id="cardStoryTab.tabId" :tab-name="cardStoryTab.label">
            <KntH4 text="Second tab..." />
          </KntTab>
        </KntTabbedCard>

        <KntTabbedCard :tabs-position="TabsPosition.Top" v-model="selectedCardTab" @tab-switch="changed('Tabbed card top')">
          <KntTab :tab-id="cardGeneralTab.tabId" :tab-name="cardGeneralTab.label">
            <KntH4 text="First tab..." />
          </KntTab>
          <KntTab :tab-id="cardStoryTab.tabId" :tab-name="cardStoryTab.label">
            <KntH4 text="Second tab..." />
          </KntTab>
        </KntTabbedCard>
      </div>
    </div>

    <div class="hidden lg:block mt-6 px-16 max-w-screen-xl mx-auto">
      <div class="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
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
            <KntTableBodyRow>
              <KntTableBodyCell extra-classes="text-gray-900 whitespace-nowrap dark:text-white">Mi Vulca</KntTableBodyCell>
              <KntTableBodyCell extra-classes="text-center">682 {{ t('application.units.ubert.short') }}</KntTableBodyCell>
              <KntTableBodyCell>Magie des explosions</KntTableBodyCell>
              <KntTableBodyCell>Magie de lévitation</KntTableBodyCell>
              <KntTableBodyCell>Vulcain</KntTableBodyCell>
              <KntTableBodyCell :extra-classes="actionClasses">{{ t(Action.Consult) }}</KntTableBodyCell>
            </KntTableBodyRow>
            <KntTableBodyRow>
              <KntTableBodyCell extra-classes="text-gray-900 whitespace-nowrap dark:text-white">Friedrich Vulca</KntTableBodyCell>
              <KntTableBodyCell extra-classes="text-center">567 {{ t('application.units.ubert.short') }}</KntTableBodyCell>
              <KntTableBodyCell>Magie d'enchantement</KntTableBodyCell>
              <KntTableBodyCell>Magie de vitesse</KntTableBodyCell>
              <KntTableBodyCell>Vulcain</KntTableBodyCell>
              <KntTableBodyCell :extra-classes="actionClasses">{{ t(Action.Consult) }}</KntTableBodyCell>
            </KntTableBodyRow>
            <KntTableBodyRow>
              <KntTableBodyCell extra-classes="text-gray-900 whitespace-nowrap dark:text-white">Anya Vulca Somvisar</KntTableBodyCell>
              <KntTableBodyCell extra-classes="text-center">181 {{ t('application.units.ubert.short') }}</KntTableBodyCell>
              <KntTableBodyCell>Magie de renforcement</KntTableBodyCell>
              <KntTableBodyCell></KntTableBodyCell>
              <KntTableBodyCell>Vulcain</KntTableBodyCell>
              <KntTableBodyCell :extra-classes="actionClasses">{{ t(Action.Consult) }}</KntTableBodyCell>
            </KntTableBodyRow>
          </KntTableBody>
        </KntTable>
      </div>

      <div class="mt-6 p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
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
            <KntTableBodyRow>
              <KntTableBodyCell :colspan="6" extra-classes="text-center">{{ t('pages.charactersList.charactersTable.empty') }}</KntTableBodyCell>
            </KntTableBodyRow>
          </KntTableBody>
        </KntTable>
      </div>
    </div>

    <div class="hidden lg:block mt-6 px-16 max-w-screen-xl mx-auto">
      <KntH2 class="p-4" :text="t('pages.magicalClasses.title')" />

      <KntTabbedContainer v-model="selectedContainerTab"  @tab-switch="changed('Tabbed container')">
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
              <KntTableBodyRow>
                <KntTableBodyCell extra-classes="text-gray-900 whitespace-nowrap dark:text-white">Mi Vulca</KntTableBodyCell>
                <KntTableBodyCell>Magie des explosions</KntTableBodyCell>
                <KntTableBodyCell>Magie de lévitation</KntTableBodyCell>
                <KntTableBodyCell>Vulcain</KntTableBodyCell>
                <KntTableBodyCell :extra-classes="actionClasses">{{ t(Action.Consult) }}</KntTableBodyCell>
              </KntTableBodyRow>
              <KntTableBodyRow>
                <KntTableBodyCell extra-classes="text-gray-900 whitespace-nowrap dark:text-white">Pristi Pristine Vulca Mary</KntTableBodyCell>
                <KntTableBodyCell>Magie de rigidification de l'air</KntTableBodyCell>
                <KntTableBodyCell>Magie de congélation</KntTableBodyCell>
                <KntTableBodyCell>Vulcain</KntTableBodyCell>
                <KntTableBodyCell :extra-classes="actionClasses">{{ t(Action.Consult) }}</KntTableBodyCell>
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
              <KntTableBodyRow>
                <KntTableBodyCell extra-classes="text-gray-900 whitespace-nowrap dark:text-white">Friedrich Vulca</KntTableBodyCell>
                <KntTableBodyCell>Magie d'enchantement</KntTableBodyCell>
                <KntTableBodyCell>Magie de vitesse</KntTableBodyCell>
                <KntTableBodyCell>Vulcain</KntTableBodyCell>
                <KntTableBodyCell :extra-classes="actionClasses">{{ t(Action.Consult) }}</KntTableBodyCell>
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
              <KntTableBodyRow>
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
              <KntTableBodyRow>
                <KntTableBodyCell :colspan="5" extra-classes="text-center">{{ t('pages.magicalClasses.charactersTable.empty') }}</KntTableBodyCell>
              </KntTableBodyRow>
            </KntTableBody>
          </KntTable>
        </KntTab>
      </KntTabbedContainer>
    </div>
  </main>
</template>
