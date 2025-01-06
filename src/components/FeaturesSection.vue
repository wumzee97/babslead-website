<script lang="ts" setup>
import AppSubmitButton from "./AppSubmitButton.vue";
import ContentCreationImgRef from "@/assets/images/content-creation.png";
import BrandingImgRef from "@/assets/images/branding.png";
import DesignsImgRef from "@/assets/images/designs.png";
import ProfileManagementImgRef from '@/assets/images/profile-management.png'
import ProfileOptimizationImgRef from '@/assets/images/profile-optimization.png'

const packages = [
  {
    title: "Content Creation",
    image: ContentCreationImgRef,
  },
  {
    title: "Branding",
    image: BrandingImgRef,
  },
  {
    title: "Designs",
    image: DesignsImgRef,
  },
  {
    title: "Profile Management",
    image: ProfileManagementImgRef,
  },
  {
    title: "Profile Optimization",
    image: ProfileOptimizationImgRef,
  },
];
</script>

<template>
  

  <div class="relative py-24">
    <!-- Background Image with Overlay -->
    <div
      class="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/design.png')]"
    >
      <div class="absolute inset-0 bg-dark bg-opacity-[90%]"></div>
    </div>

    <!-- Content -->
    <div class="relative">
      <div data-aos="fade-up" data-aos-duration="2000" class="container max-w-7xl mx-auto px-5 md:px-16 2xl:px-0 pb-16">
      <p class="font-semibold text-4xl lg:text-5xl text-white text-center">
        Which Package Do We Offer?
      </p>
      <p class="text-center mt-3 text-white">
        We offer a variety of packages including...
      </p>

      <div class="flex flex-wrap justify-center gap-6 mt-16 cursor-pointer">
        <div
          class="rounded w-[400px] text-center"
          v-for="pkg in packages"
          :key="pkg.title"
        >
          <img :src="pkg.image" alt="">
          <p class="text-white bg-munsell p-3 text-left text-lg  lg:text-2xl font-semibold flex justify-between items-center">{{ pkg.title }} <span class="text-base">View Pricing</span></p>

          <!-- <AppSubmitButton type="button" class="mt-8">
            View Pricing</AppSubmitButton
          > -->
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
