<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';

import SelectOption from '@/classes/SelectOption.js';

import KntDrawer from '@/components/container/drawer/KntDrawer.vue';

const { t } = useI18n();

const unionCalendarOption = new SelectOption(t('application.calendars.union'), "union");
const beraneseCalendarOption = new SelectOption(t('application.calendars.beranese'), "beranese");
const ovikCalendarOption = new SelectOption(t('application.calendars.ovik'), "ovik");
const methianCalendarOption = new SelectOption(t('application.calendars.methian'), "methian");
const aslimaniCalendarOption = new SelectOption(t('application.calendars.aslimani'), "aslimani");
const beginningCalendarOption = new SelectOption(t('application.calendars.beginning'), "beginning");
const zigateCalendarOption = new SelectOption(t('application.calendars.zigate'), "zigate");

const currentCalendar = ref(unionCalendarOption);
const isDrawerOpen = ref(false);

function openDrawer() {
  isDrawerOpen.value = true;
}

function closeDrawer() {
  isDrawerOpen.value = false;
}
</script>

<template>
  <header>
    <div class="wrapper">
      <!--nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>

        <RouterLink to="/library">ComponentLibrary</RouterLink>
      </nav-->
    </div>
  </header>

  <KntDrawer v-model="isDrawerOpen" :current-calendar="currentCalendar" :calendars="[unionCalendarOption, beraneseCalendarOption, ovikCalendarOption, methianCalendarOption, aslimaniCalendarOption, beginningCalendarOption, zigateCalendarOption]" />
  <RouterView @open-drawer="openDrawer()"/>
  <div v-if="isDrawerOpen" @click="closeDrawer()" class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"></div>
</template>
