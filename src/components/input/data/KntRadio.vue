<script setup>
import RadioOption from '@/classes/RadioOption.js';

const model = defineModel();
const emit = defineEmits(['change']);

defineProps({
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
    default: () => [],
    validator: (value) => value.every((itm) => itm instanceof RadioOption)
  }
});

function change(option) {
  emit('change', option);
}

const marginRadioStyle = " mb-2";
const radioStyle = "flex items-center antialiased";
</script>

<template>
  <div v-for="option in options" :key="option.value" :class="radioStyle + (option.value !== options[options.length - 1].value? marginRadioStyle: '')">
    <input v-model="model" :id="option.value" type="radio" :value="option.value" :name="name" @change="change(option)" class="size-4 shadow bg-gray-50 text-blue-500 outline-none appearance-none rounded-full border border-gray-300 focus:ring-4 focus:ring-blue-500/25 dark:bg-gray-700 dark:border-gray-600">
    <label :for="option.value" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option.label }}</label>
  </div>
</template>

<style scoped>
[type="radio"]:checked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E");
}

.dark [type="radio"]:checked, [type="radio"]:checked {
  background-color: currentColor;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-color: transparent;
}
</style>
