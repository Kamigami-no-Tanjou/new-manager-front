<script setup>
import { computed, useSlots } from 'vue';
import { InputType } from '@/enums/InputType.js';
import SelectOption from '@/classes/SelectOption.js';

const slots = useSlots();
const model = defineModel();
const hasIcon = computed(() => slots.default !== undefined);

defineProps({
  type: {
    type: String,
    required: false,
    default: InputType.Text,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  options: {
    type: Array,
    required: false,
    default: () => [],
    validator: (value) => value.every((itm) => itm instanceof SelectOption)
  },
});

const iconInputStyle = ' pl-10';
const inputPadding = ' p-2';
const selectPadding = ' p-2.5';
const defaultInputStyle =
  'block antialiased w-full shadow bg-gray-50 text-sm text-gray-900 border border-gray-300 rounded-lg ring-offset-1 focus:outline focus:outline-blue-500 focus:outline-offset-0 focus:outline-1 focus:ring-4 focus:ring-blue-500/25 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white';
</script>

<template>
  <div class="relative">
    <div
      v-if="hasIcon"
      class="absolute antialiased size-5 h-full inset-0 left-0 flex items-center ml-3 pointer-events-none text-gray-400 dark:text-gray-500"
    >
      <slot></slot>
    </div>

    <select
      v-if="type === InputType.Select"
      v-model="model"
      :class="
        defaultInputStyle + selectPadding + (hasIcon ? iconInputStyle : '')
      "
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <input
      v-else
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :class="
        defaultInputStyle + inputPadding + (hasIcon ? iconInputStyle : '')
      "
    />
  </div>
</template>
