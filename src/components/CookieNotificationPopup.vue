<script setup lang="ts">
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";


const props = defineProps<{
  show: boolean;

  modalWidth?: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>
<template>
  <TransitionRoot appear :show="props.show" as="template">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class=" inset-0 bg-white/0" />
      </TransitionChild>

      <div class="fixed inset-0 ">
        <div
          class="flex min-h-full items-end justify-end p-4 text-center"
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
            <DialogPanel
              :class="props.modalWidth"
              class="w-full lg:max-w-[500px] sm:max-w-[60vw] max-h-[90vh] transform rounded-[10px] bg-[#1C2540F2] dark:bg-dark-background-secondary p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h1"
                class="text-2xl dark:bg-dark-background-primary font-medium leading-6 text-white dark:!text-dark-text-default flex justify-between"
              >
                <div>
                  <p>🍪 Cookie Notice</p>
                </div>
              </DialogTitle>

              <div class="max-h-[70vh] overflow-y-scroll mt-4">
                <p class="text-white text-lg">
                  We use cookies to learn how you interact with our content, and
                  show you relevant content and ads based on your browsing
                  history. You can adjust your settings below. Here’s our policy
                </p>

                <div class="flex justify-between mt-6">
                    <p class="text-white text-lg font-medium">Manage your preferences</p>

                    <button type="button" @click="emit('close')" class="outline-none bg-[#09B3AF] text-white p-2 px-6 rounded-lg text-lg font-medium">Accept</button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
