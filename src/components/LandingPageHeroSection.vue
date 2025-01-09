<script lang="ts" setup>
import { ref } from "vue";
import IconLinkedInImg from "./icons/IconLinkedInImg.vue";
import AppSubmitButton from "./AppSubmitButton.vue";
import { RouteName } from "@/utils/enums";

function getImageUrl(name: string) {
  return new URL(`../assets/images/${name}.png`, import.meta.url).href;
}
</script>

<template>
  <div class="container max-w-7xl mx-auto px-5 md:px-16 2xl:px-0 lg:pb-16">
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      class="flex flex-col items-center justify-center lg:min-h-[650px] py-12 lg:py-0"
    >
      <h1
        class="text-3xl lg:text-5xl text-primary-500 text-center font-semibold lg:!leading-[80px] leading-[40px]"
      >
        <span class="font-normal mb-7 text-xl lg:text-5xl text-primary-500">
          Transforming your</span
        >
        <br />
        <span class="text-4xl lg:text-6xl mt-6">
          Personal Brand
          into a
         
            Traffic Machine
        </span>
      </h1>
      <p class="text-primary-500 text-center lg:text-xl font-medium mt-4 lg:mt-6">
        We help you stand out with sociable content and convert your target
        audience.
      </p>

      <div class="flex flex-col lg:flex-row gap-6 mt-6 lg:mt-16">
        <a href="https://calendly.com/babslead/bookme" target="_blank">
          <AppSubmitButton class="!w-auto px-10"
            >Book a Discovery Call</AppSubmitButton
          >
        </a>
        <AppSubmitButton
          as="RouterLink"
          :to="{ name: RouteName.ProductsPage }"
          outlined
          class="!bg-white !text-primary-500 !w-auto px-10"
          >View Our Packages</AppSubmitButton
        >
      </div>
    </div>
  </div>
</template>
