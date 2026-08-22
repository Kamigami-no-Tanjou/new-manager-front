<script setup>
import { MagnifyingGlassIcon, HomeIcon, UsersIcon, BookmarkIcon, SparklesIcon, MapPinIcon, VariableIcon } from '@heroicons/vue/20/solid';
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';

import SelectOption from '@/classes/SelectOption.js';

import { InputType } from '@/enums/InputType.js';

import KntDrawerCloseButton from '@/components/container/drawer/KntDrawerCloseButton.vue';
import KntDrawerQuickLink from '@/components/container/drawer/KntDrawerQuickLink.vue';
import KntInput from '@/components/input/data/KntInput.vue';
import KntH6 from '@/components/text/heading/KntH6.vue';

const model = defineModel();
const emit = defineEmits(['change-calendar', 'change-search']);
const props = defineProps({
  currentCalendar: {
    type: SelectOption,
    required: true
  },
  calendars: {
    type: Array,
    required: true
  }
});

const { t } = useI18n();

const selectedCalendar = ref(null);
const searchQuery = ref('');

function closeDrawer() {
  model.value = false;
}

function changeCalendar() {
  emit('change-calendar', selectedCalendar.value);
}

function changedSearch() {
  emit('change-search', searchQuery.value);
}

onMounted(() => {
  selectedCalendar.value = ref(props.currentCalendar.value);
});

const drawerStyles = "fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-screen lg:w-96 dark:bg-gray-800";
const closedDrawerStyles = "-translate-x-full";
const openDrawerStyles = "translate-x-0";
</script>

<template>
  <div
    :class="drawerStyles + ' ' + (model ? openDrawerStyles : closedDrawerStyles)"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
    :aria-hidden="!model"
    aria-labelledby="drawer-navigation-label"
  >
    <KntDrawerCloseButton @close-drawer="closeDrawer()"/>
    <img src="/KnT banner.png" alt="KnT banner" class="my-10 lg:my-5">

    <div class="lg:hidden mb-6">
      <KntH6 :uppercase="true" :text="t('application.calendars.title')" />
      <KntInput
        :type="InputType.Select" 
        v-model="selectedCalendar"
        :options="calendars"
        @change="changeCalendar()"
      />
    </div>

    <div class="lg:hidden mb-10">
      <KntH6 :uppercase="true" :text="t('application.search.title')" />
      <KntInput :type="InputType.Text" :placeholder="t('application.search.placeholder')" v-model="searchQuery" @input="changedSearch()">
        <MagnifyingGlassIcon />
      </KntInput>
    </div>

    <div>
      <KntH6 id="drawer-navigation-label" :uppercase="true" :text="t('navigation.quickLinks')" />
      <div class="lg:pt-2 pb-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li>
            <KntDrawerQuickLink :to="{ name: 'home' }">
              <HomeIcon class="size-6" />
              <span>{{ t('navigation.dashboard') }}</span>
            </KntDrawerQuickLink>
          </li>
          <li>
            <KntDrawerQuickLink :to="{ name: 'characters' }">
              <UsersIcon class="size-6" />
              <span>{{ t('navigation.characters') }}</span>
            </KntDrawerQuickLink>
          </li>
          <li>
            <KntDrawerQuickLink :to="{ name: 'events' }">
              <BookmarkIcon class="size-6" />
              <span>{{ t('navigation.events') }}</span>
            </KntDrawerQuickLink>
          </li>
          <li>
            <KntDrawerQuickLink :to="{ name: 'magics' }">
              <SparklesIcon class="size-6" />
              <span>{{ t('navigation.magics') }}</span>
            </KntDrawerQuickLink>
          </li>
          <li>
            <KntDrawerQuickLink :to="{ name: 'nations' }">
              <MapPinIcon class="size-6" />
              <span>{{ t('navigation.nations') }}</span>
            </KntDrawerQuickLink>
          </li>
          <li>
            <KntDrawerQuickLink :to="{ name: 'mpc' }">
              <VariableIcon class="size-6" />
              <span>{{ t('navigation.mpc') }}</span>
            </KntDrawerQuickLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
