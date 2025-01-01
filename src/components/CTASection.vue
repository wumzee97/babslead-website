<script lang="ts" setup>
import { ref } from "vue";
import AppModal from "./AppModal.vue";
import AppSubmitButton from "./AppSubmitButton.vue";
import AppFormLabel from "./AppFormLabel.vue";
import AppInputField from "./AppInputField.vue";

const showWaitlistModal = ref(false)
</script>
<template>
  <div class="container max-w-7xl mx-auto py-10 lg:py-16 px-5 md:px-16 2xl:px-0">
    <div
      class="bg-[#7BB43C] lg:rounded-[70px] rounded-[50px] p-6 lg:p-10 bg-[url('/src/assets/images/star.svg')] bg-no-repeat bg-left-bottom flex items-center justify-between flex-col-reverse lg:flex-row"
    >
      <div class="lg:w-1/2 lg:pl-8 pt-6 lg:pt-0">
        <p class="text-2xl lg:text-4xl text-center lg:text-left font-medium">
          Find a Tutor
        </p>
        <p class="text-[#052639] text-center lg:text-left lg:text-xl">
          Select the best fit for your child from our rich pool of experienced
          and vetted tutors.
        </p>

        <AppSubmitButton @click="showWaitlistModal = true"
          class="!w-auto bg-white lg:mt-10 mt-6 text-[#052639] !text-xl flex justify-self-center lg:justify-self-start"
          >Join the waitlist</AppSubmitButton
        >
      </div>
      <div>
        <img
          src="../assets/images/cta.png"
          class="lg:h-[320px] rounded-[50px] lg:rounded-[70px]"
          alt=""
        />
      </div>
    </div>

    <div
      class="bg-[#0F6CA2] rounded-[50px] lg:rounded-[70px] p-6 lg:p-10 mt-6 bg-[url('/src/assets/images/mood.svg')] bg-no-repeat bg-right-bottom flex flex-col lg:flex-row items-center justify-between"
    >
      <div>
        <img
          src="../assets/images/cta2.png"
          class="lg:h-[320px] lg:rounded-[70px] rounded-[50px]"
          alt=""
        />
      </div>
      <div class="lg:w-1/2 lg:pl-8 mt-5 lg:mt-0">
        <p
          class="text-2xl lg:text-4xl text-center lg:text-left text-[#E7F0F6] font-medium"
        >
          Start Earning as a Tutor
        </p>
        <p class="text-[#F2F9FD] lg:text-xl text-center lg:text-left">
          Aims to provide premium services for motorcycle movement within some
          seconds.
        </p>

        <AppSubmitButton
          class="!w-auto bg-white mt-10 text-[#052639] !text-xl flex justify-self-center lg:justify-self-start"
          >Sign Up Now</AppSubmitButton
        >
      </div>
    </div>
  </div>

  <AppModal title="Join the Waitlist" @close="showWaitlistModal = false" :show="showWaitlistModal" >
    <template #body>
      <p>Kindly input your name and email</p>

      <form action="" class="mt-6">
        <AppFormLabel>Fullname</AppFormLabel>
        <AppInputField></AppInputField>

        <AppFormLabel class="mt-6">Email</AppFormLabel>
        <AppInputField></AppInputField>

        <AppFormLabel class="mt-6">Phone Number</AppFormLabel>
        <AppInputField></AppInputField>

        <AppSubmitButton class="mt-10 md:w-auto !px-12">Join</AppSubmitButton>
      </form>
    </template>
  </AppModal>
</template>
