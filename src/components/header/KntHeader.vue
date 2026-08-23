<script setup>
import { CalendarIcon, CubeTransparentIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';

import SelectOption from '@/classes/SelectOption.js';

import { InputType } from '@/enums/InputType.js';
import { Size } from '@/enums/Size.js';

import { RouterLink, useRouter } from 'vue-router';
import KntDrawerOpenButton from '@/components/container/drawer/KntDrawerOpenButton.vue';
import KntIconButton from '@/components/input/button/KntIconButton.vue';
import KntInput from '@/components/input/data/KntInput.vue';
import KntH3 from '@/components/text/heading/KntH3.vue';
import KntH5 from '@/components/text/heading/KntH5.vue';

const model = defineModel();
const emit = defineEmits(['change-calendar', 'change-search', 'open-drawer']);
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
const router = useRouter();

const selectedCalendar = ref(null);
const searchQuery = ref('');

function changeCalendar() {
  emit('change-calendar', selectedCalendar.value);
}

function changedSearch() {
  emit('change-search', searchQuery.value);
}

function openDrawer() {
  emit('open-drawer');
}

function redirectToComponentLibrary() {
  router.push({ name: 'componentLibrary' });
}

onMounted(() => {
  selectedCalendar.value = ref(props.currentCalendar.value);
});
</script>

<template>
  <nav class="bg-white px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b shadow-lg border-gray-200 dark:bg-gray-900 dark:border-gray-800">
    <div class="flex lg:container lg:flex-wrap items-center justify-between lg:mx-auto">
      <div class="flex items-center gap-3 md:order-1">
        <KntDrawerOpenButton @open-drawer="openDrawer()" />
        <RouterLink :to="{ name: 'home' }" class="flex items-center gap-3">
          <img class="h-9" src="/KnT Logo.gif" alt="KnT Logo" />
          <KntH3 class="lg:hidden" :text="t('application.name')" unmargined />
          <KntH5 class="hidden lg:block" :text="t('application.name')" unmargined thick />
        </RouterLink>
        <div class="hidden lg:flex items-center gap-1 ml-4">
          <label for="calendar-selector" class="block mr-1 text-sm font-medium text-gray-900 dark:text-white">
            <CalendarIcon class="size-6" />
          </label>
          <KntInput
          :field-id="calendar-selector"
          :type="InputType.Select"
          v-model="selectedCalendar"
          :options="calendars"
          @change="changeCalendar()"
          />
        </div>
      </div>

      <div class="flex items-center gap-3 md:order-2">
        <KntIconButton :size="Size.Normal" @click="redirectToComponentLibrary()">
          <CubeTransparentIcon class="size-6" />
        </KntIconButton>
        <div class="hidden lg:block">
          <KntInput
          :type="InputType.Text"
          :placeholder="t('application.search.placeholder')"
          v-model="searchQuery"
          @input="changedSearch()"
          >
          <MagnifyingGlassIcon />
        </KntInput>
      </div>
    </div>
  </div>
</nav>
</template>
