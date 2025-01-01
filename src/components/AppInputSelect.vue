<script setup lang="ts">
// @ts-nocheck
import { ref, watch } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import IconCheck from "./icons/IconCheck.vue";
import IconChevronRight from "./icons/IconChevronRight.vue";

interface IOption {
  name: string;
  value: string | number | boolean;
}

const emit = defineEmits<{
  (e: "update:modelValue", v: string | number | boolean): void;
}>();

const props = withDefaults(
  defineProps<{
    modelValue?: string | number | boolean;
    disabled?: boolean;
    flat?: boolean;
    options?: IOption[];
  }>(),
  {
    disabled: false,
    flat: false,
    options: undefined,
  }
);

const selectedOption = ref<IOption | null>(
  props.options?.find((it) => it.value === props.modelValue) ?? null
);

// Watch for changes in `modelValue` and update the selected option
watch(
  () => props.modelValue,
  (newVal) => {
    selectedOption.value =
      props.options?.find((it) => it.value === newVal) ?? null;
  }
);

// Watch for changes in `selectedOption` and emit `update:modelValue`
watch(selectedOption, (newVal) => {
  emit("update:modelValue", newVal?.value);
});
</script>

<template>
  <div class="">
    <Listbox :disabled="props.disabled" v-model="selectedOption">
      <div class="relative mt-1">
        <ListboxButton
          :class="
            props.flat
              ? 'bg-white dark:bg-dark-background-primary '
              : 'bg-primary-50/5 focus:border dark:border-dark-border-subdued focus:border-primary-600'
          "
          class="relative w-full cursor-default rounded-md h-12 py-2 pl-3 pr-10 text-left sm:text-sm border dark:border-dark-border-subdued border-[#D0D5DD] dark:text-dark-text-subdued"
        >
          <span class="block truncate">
            {{ selectedOption?.name || "Select an option" }}
          </span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <IconChevronRight
              class="w-4 text-gray-400 rotate-90"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-dark-background-primary py-1 text-base shadow-lg ring-1 z-50 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="option in props.options"
              :key="option.value"
              :value="option"
              as="template"
            >
              <li
                :class="[
                  active
                    ? 'bg-amber-100 text-amber-900 dark:bg-dark-background-secondary dark:text-dark-text-default'
                    : 'text-gray-900 dark:text-dark-text-subdued',
                  'relative cursor-default select-none py-2 pl-10 pr-4 ',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ option.name }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                  <IconCheck class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
