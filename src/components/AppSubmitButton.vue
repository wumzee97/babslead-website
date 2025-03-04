<script lang="ts" setup>
import IconSpinner from "./icons/IconSpinner.vue";

const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    text?: boolean;
    outlined?: boolean;
    as?: "button" | "RouterLink";
    to?: object | string;
    loading?: boolean;
    disabled?: boolean;
  }>(),
  {
    type: "submit",
    as: "button",
  }
);
</script>

<template>
  <component
    :is="props.as"
    :to="props.to"
    :type="props.type"
    :disabled="props.disabled || props.loading"
    class="w-full rounded-full hover:opacity-80 py-4 px-6 text-sm sm:text-base font-medium flex items-center justify-center flex-wrap disabled:opacity-40 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    :class="
      props.outlined
        ? 'border dark:border-dark-border-subdued border-primary-500 text-white'
        : props.text
        ? 'bg-transparent text-primary-500'
        : 'bg-primary-500 text-white'
    "
  >
    <div class="" v-if="props.loading"><IconSpinner /> Please wait...</div>
    <slot v-else></slot>
  </component>
</template>
