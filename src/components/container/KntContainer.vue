<script setup></script>

<template>
  <div class="block flex-1 lg:hidden -m-2 p-4 rounded-t-4xl bg-gray-100 dark:bg-gray-800">
      <slot name="mobile"></slot>
    </div>

    <div class="hidden lg:block p-4 rounded-lg bg-gray-100 dark:bg-gray-800" role="tabpanel">
      <slot name="desktop"></slot>
    </div>
</template>
