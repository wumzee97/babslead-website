<script lang="ts" setup>
import AppSubmitButton from "./AppSubmitButton.vue";
</script>
<template>
  <div class="relative -mt-[190px] pt-44">
    <!-- Background Image with Overlay -->
    <div
      class="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/design.png')]"
    >
      <div class="absolute inset-0 bg-black bg-opacity-[82%]"></div>
    </div>

    <!-- Content -->
    <div class="relative">
      <main class="relative pt-12 pb-16 px-6">
        <div
          class="flex flex-col items-center justify-center mt- min-h-[650px]"
        >
          <h1
            class="text-3xl lg:text-5xl text-primary-500 text-center font-semibold !leading-[80px]"
          >
            <span class="font-normal mb-7 text-light-yellow">
              Transforming</span
            >
            <br />
            <span class="text-6xl mt-6 text-white">
              Personal Brands into a Traffic Machine
            </span>
          </h1>
          <p class="text-light-yellow text-center text-xl font-medium mt-6">
            We help you stand out with sociable content and convert your target
            audience.
          </p>

          <div class="flex flex-col lg:flex-row gap-6 mt-16">
            <AppSubmitButton
              class="!w-auto px-10 !bg-[#FAD536] !text-dark-brown"
              >Book a Discovery Call</AppSubmitButton
            >
            <AppSubmitButton
              outlined
              class="!bg-white !text-primary-500 !w-auto px-10"
              >View Our Packages</AppSubmitButton
            >
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
