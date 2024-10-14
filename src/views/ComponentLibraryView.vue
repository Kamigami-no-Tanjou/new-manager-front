<script setup>
import KntH1 from '../components/heading/KntH1.vue'
import KntBreadcrumb from '@/components/heading/KntBreadcrumb.vue'
import Breadcrumb from '@/classes/Breadcrumb.js'
import KntH5 from '@/components/heading/KntH5.vue';
import KntSmallText from '@/components/heading/KntSmallText.vue';
</script>

<template>
  <main class="library h-screen bg-white dark:bg-gray-900">
    <KntH1 text="KntH1" />
    <KntH5 text="KntH5" />
    <KntBreadcrumb :breadcrumbs="[new Breadcrumb('Dashboard', '#'), new Breadcrumb('Page 1', '#'), new Breadcrumb('Page 2', null)]" :mobile-breadcrumb="new Breadcrumb('Back to page 1', '#')" />
    <KntSmallText text="This is a small text! :D" />
  </main>
</template>
