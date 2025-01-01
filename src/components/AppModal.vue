<script setup lang="ts">
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

import IconCancel from "./icons/IconCancel.vue";

const isOpen = ref(true);



const props = defineProps<{
  show: boolean;
  title?: string;
  subtitle?: string;
  modalWidth?: string;
  noTitle?: boolean;
  hasFooter?:boolean;
  persistent?: boolean
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>
<template>
  
  <TransitionRoot appear :show="props.show" as="template">
    <Dialog as="div" @close=" props.persistent ? null : emit('close')" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/50  backdrop-blur-sm" @click="props.persistent ? null : emit('close')"  />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel :class="props.modalWidth"
              class="w-full lg:max-w-[600px] sm:max-w-[60vw] max-h-[90vh] transform overflow-hidden rounded-[40px] bg-white dark:bg-dark-background-secondary p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h1"
                class="text-lg dark:bg-dark-background-primary  font-medium leading-6 text-[#303540] dark:!text-dark-text-default flex  justify-between" :class="props.noTitle ? '' : 'border-b dark:border-b-dark-border-subdued dark:border-r-dark-border-subdued pb-5'"
              >
              <div>
                <p v-if="props.title">{{ props.title }}</p>
                <p v-if="props.subtitle" class=" text-base font-normal text-neutral-gray-500 dark:text-dark-text-subdued">{{ props.subtitle }}</p>

              </div>
                <IconCancel v-if="!props.persistent" fill-class="fill-[#303540] dark:fill-dark-text-default" height="24px" class="cursor-pointer" @click="emit('close')" />
              </DialogTitle>

              <div class=" max-h-[70vh] overflow-y-scroll" :class="noTitle ? 'mt-6 ' : ' mt-2'">
                <slot name="body"></slot>
              </div>

              <div v-if="props.hasFooter" class="mt-4 p-6  dark:bg-dark-background-primary ">
                <slot name="footer"></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
