<script setup>
import { ref, onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';

import KntHeader from '@/components/header/KntHeader.vue';
import KntDrawer from '@/components/container/drawer/KntDrawer.vue';

import CalendarService from '@/api-client/services/CalendarService';

const { t } = useI18n();
const calendarService = new CalendarService();

const calendarOptions = ref([]);

const currentCalendar = ref(null);
const isDrawerOpen = ref(false);

function openDrawer() {
  isDrawerOpen.value = true;
}

function closeDrawer() {
  isDrawerOpen.value = false;
}

onBeforeMount(async () => {
  calendarOptions.value = await calendarService.getCalendarSelectOptions();
  currentCalendar.value = calendarOptions.value[0];
})
</script>

<template>
  <header>
    <div class="wrapper">
      <KntHeader
        :current-calendar="currentCalendar"
        :calendars="calendarOptions"
        @open-drawer="openDrawer()"
      />
    </div>
  </header>

  <KntDrawer v-model="isDrawerOpen" :current-calendar="currentCalendar" :calendars="calendarOptions" />
  <RouterView class="pt-20 lg:pt-28" @open-drawer="openDrawer()"/>
  <div v-if="isDrawerOpen" @click="closeDrawer()" class="bg-gray-900/50 dark:bg-gray-900/80 backdrop-blur-sm transition-all duration-300 fixed inset-0 z-30"></div>
</template>
