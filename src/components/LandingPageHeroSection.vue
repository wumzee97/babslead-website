<script lang="ts" setup>
import { ref } from "vue";
import IconLinkedInImg from "./icons/IconLinkedInImg.vue";
import AppSubmitButton from "./AppSubmitButton.vue";

function getImageUrl(name: string) {
  return new URL(`../assets/images/${name}.png`, import.meta.url).href;
}
</script>

<template>
  <div class="container max-w-7xl mx-auto px-5 md:px-16 2xl:px-0 pb-16">
    <div data-aos="fade-up" data-aos-duration="2000" class="flex flex-col items-center justify-center mt- min-h-[650px]">
      <h1 
        class="text-3xl lg:text-5xl text-primary-500 text-center font-semibold !leading-[80px]"
      >
        <span class="font-normal mb-7 text-primary-500 "> Transforming</span>
        <br />
        <span class="text-6xl mt-6">
          Personal Brands into a 
         <span class="from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent"> Traffic Machine</span>
        </span>
      </h1>
      <p class="text-primary-500 text-center text-xl font-medium mt-6">
        We help you stand out with sociable content and convert your target
        audience.
      </p>

      <div class="flex flex-col lg:flex-row gap-6 mt-16">
        <AppSubmitButton class="!w-auto px-10"
          >Book a Discovery Call</AppSubmitButton
        >
        <AppSubmitButton
          outlined
          class="!bg-white !text-primary-500 !w-auto px-10"
          >View Our Packages</AppSubmitButton
        >
      </div>
    </div>
  </div>
</template>
