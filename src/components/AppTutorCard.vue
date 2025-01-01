<script lang="ts" setup>
import { ref } from "vue";
import AppModal from "./AppModal.vue";
import AppSubmitButton from "./AppSubmitButton.vue";
import IconWarning from "./icons/IconWarning.vue";
const showModal = ref(false);
</script>

<template>
  <div class="p-5 mb-6 lg:mb-0 group rounded-[10px] border border-[#A0A0A0] relative">
    <div class="flex justify-between">
      <p class="font-semibold text-[28px]">Shola A.</p>
      <div>
        <span class="bg-[#EBF4E2] text-[#2B3F15] p-2.5 py-1.5 rounded-full">
          Academic
        </span>
      </div>
    </div>
    <img src="@/assets/images/divider.svg" class="w-full my-3" alt="" />
    <p class="text-sm text-[#334335]">Experience</p>
    <p class="mt-1">6 yrs</p>
    <img src="@/assets/images/divider.svg" class="w-full my-3" alt="" />
    <p class="text-sm text-[#334335]">Subject</p>

    <div class="flex flex-wrap gap-2 pt-4">
      <div>
        <span class="bg-[#FEF9E1] text-[#584B13] p-2.5 py-1.5 rounded-full">
          Mathematics
        </span>
      </div>
      <div>
        <span class="bg-[#EBF4E2] text-[#2B3F15] p-2.5 py-1.5 rounded-full">
          English
        </span>
      </div>
      <div>
        <span class="bg-[#DBE9F1] text-[#052639] p-2.5 py-1.5 rounded-full">
          Geography
        </span>
      </div>
      <span>+3</span>
    </div>
    <img src="@/assets/images/divider.svg" class="w-full my-3 mt-4" alt="" />
    <p class="text-sm text-[#334335]">Licences/Certifications</p>

    <div class="flex flex-wrap gap-3 mt-3">
      <span
        class="text-[#535353] p-2 py-1.5 rounded-full border border-[#A0A0A0] min-w-20 text-center"
      >
        STEM
      </span>
      <span
        class="text-[#535353] p-2 py-1.5 rounded-full border border-[#A0A0A0] min-w-20 text-center"
      >
        TOEFL
      </span>
      <span
        class="text-[#535353] p-2 py-1.5 rounded-full border border-[#A0A0A0] min-w-20 text-center"
      >
        Masters
      </span>
    </div>

    <AppSubmitButton
      @click="showModal = true"
      class="hidden lg:inline-block absolute bottom-4 w-[90%] left-1/2 transform -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-4"
      >View Details</AppSubmitButton
    >

    <AppSubmitButton @click="showModal = true" class="lg:hidden mt-4"
      >View Details</AppSubmitButton
    >
  </div>

  <AppModal no-title :show="showModal" @close="showModal = false" >
    <template #body>
      <div class="flex justify-center flex-col items-center gap-6 text-center">
        <IconWarning />
        <p class="text-xl font-medium">
          You will have to sign up in order proceed
        </p>
        <AppSubmitButton class="!w-auto px-10 text-white bg-[#BCA029]" @click="showModal = false"
          >Proceed
        </AppSubmitButton>
      </div>
    </template>
  </AppModal>
</template>
