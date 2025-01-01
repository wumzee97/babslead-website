<script lang="ts" setup>
import { computed, ref } from "vue";
import IconEyeOpen from "./icons/IconEyeOpen.vue";
import IconEyeClose from "./icons/IconEyeClose.vue";

const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    placeholder?: string;
    type?: string;
    error?: boolean;
    min?: number;
    max?: number;
    disabled?: boolean;
    flat?: boolean;
    outline?: boolean;
    as?: "input" | "textarea" | undefined;
  }>(),
  {
    type: "text",
    max: Infinity,
    as: "input",
    outline: true,
  }
);

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const handleInput = (event: Event) => {
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  const inputElement = event.target as HTMLInputElement;
  if (props.type === "number") {
    inputElement.value = inputElement.value.replace(/[^0-9.-]/g, "");
    const num = parseFloat(inputElement.value);

    if (num > props.max) {
      inputElement.value = props.max.toString();
    } else if (isNaN(num)) {
      inputElement.value = "";
    }
  }
  value.value = inputElement.value;
};

const input = ref<HTMLInputElement | null>();
const usableType = ref();
usableType.value = props.type;

// const increaseNoValue = () => {
//   if (props.disabled) {
//     return;
//   }
//   const inputValue = input.value?.value as string;
//   const numericValue = parseFloat(inputValue);
//   if (!isNaN(numericValue)) {
//     if (Number(value.value) < props.max) {
//       value.value = (numericValue + 1).toString();
//     } else return;
//   } else {
//     value.value = "1";
//   }
// };

// const decreaseNoValue = () => {
//   if (props.disabled) {
//     return;
//   }
//   const inputValue = input.value?.value as string;
//   const numericValue = parseFloat(inputValue);
//   if (!isNaN(numericValue) && numericValue > 1) {
//     value.value = (numericValue - 1).toString();
//   } else if (!isNaN(numericValue) && numericValue === 1) {
//     return;
//   } else {
//     return;
//   }
// };

const handleWheel = (event: WheelEvent) => {
  (event.target as HTMLInputElement)?.blur();
};
</script>
<template>
  <div class="relative">
    <component
      :type="usableType"
      :class="[
        props.flat
          ? 'bg-transparent'
          : 'bg-primary-50/5 focus:border dark:border-dark-border-subdued focus:border-primary-500',
        props.outline ? 'border dark:border-dark-border-subdued border-[#66666659]' : '',
      ]"
      class="w-full h-12 mt-1 relative rounded-lg outline-none px-4  dark:text-dark-text-subdued"
      :is="props.as"
      :placeholder="props.placeholder"
      @wheel="handleWheel"
      ref="input"
      v-bind="$attrs"
      :value="value"
      @input="handleInput"
      :disabled="props.disabled"
    >
    </component>
    <span
      class="absolute mt-4 cursor-pointer -ml-8"
      v-if="props.type === 'password'"
    >
      <IconEyeOpen
        @click="usableType = 'text'"
        v-if="usableType == 'password'"
      />
      <IconEyeClose @click="usableType = 'password'" v-else />
    </span>
  </div>
</template>
