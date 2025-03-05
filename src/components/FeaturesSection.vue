<script lang="ts" setup>
import AppSubmitButton from "./AppSubmitButton.vue";
import ContentCreationImgRef from "@/assets/images/content-creation.png";
import BrandingImgRef from "@/assets/images/branding.png";
import DesignsImgRef from "@/assets/images/designs.png";
import ProfileManagementImgRef from "@/assets/images/profile-manage.png";
import ProfileOptimizationImgRef from "@/assets/images/profile-optimization.png";
import SalesOutreachImgRef from "@/assets/images/sales-outreach.png";
import { RouteName } from "@/utils/enums";

const packages = [
  {
    title: "Content Creation",
    description:
      "Craft powerful and engaging content that appeal to your audience.",
    image: ContentCreationImgRef,
  },
  {
    title: "Branding",
    description:
      "Craft a brand identity that speaks to your personality and is easily recognizable.",
    image: BrandingImgRef,
  },
  {
    title: "Designs",
    description:
      "Create stunning visuals that appeals and capture your audience attention.",
    image: DesignsImgRef,
  },
  {
    title: "Profile Management",
    description:
      "Save 20-30 hours delegating your brand to experienced Virtual Assistants",
    image: ProfileManagementImgRef,
  },
  {
    title: "Profile Optimization",
    description:
      "Optimize your brand profile for maximum reach and visibility.",
    image: ProfileOptimizationImgRef,
  },
  {
    title: "Sales Outreach",
    description:
      "Scale your brand via personalized sales outreach to 3x your revenue.",
    image: SalesOutreachImgRef,
  },
];
</script>

<template>
  <div class="relative py-24">
    <!-- Background Image with Overlay -->
    <div
      class="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/design.png')]"
    >
      <div class="absolute inset-0 bg-white bg-opacity-[95%]"></div>
    </div>

    <!-- Content -->
    <div class="relative">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        class="container max-w-7xl mx-auto px-5 md:px-16 2xl:px-0 pb-16"
      >
        <p class="font-semibold text-4xl lg:text-5xl text-dark text-center">
          Which Package Do We Offer?
        </p>
        <p class="text-center mt-3 text-primary-500">
          We offer a variety of packages including...
        </p>

        <div class="grid lg:grid-cols-3 gap-16 mt-16 cursor-pointer">
          <div
            class="rounded-lg shadow-lg bg-white p-6"
            v-for="pkg in packages"
            :key="pkg.title"
          >
            <img :src="pkg.image" class="w-[80px]" alt="" />

            <p class="text-dark font-semibold text-xl mt-6">{{ pkg.title }}</p>
            <p class="text-primary-500 mt-4">{{ pkg.description }}</p>
            <!-- <RouterLink :to="{name: RouteName.ProductsPage}" class="text-white bg-munsell p-3 text-left text-lg  lg:text-2xl font-semibold flex justify-between items-center">{{ pkg.title }} <span class="text-base">View Details</span></RouterLink> -->
            <div>
              <AppSubmitButton
                as="RouterLink"
                class="mt-6"
                :to="{ name: RouteName.ProductsPage }"
                >View Details</AppSubmitButton
              >
            </div>

            <!-- <AppSubmitButton type="button" class="mt-8">
            View Pricing</AppSubmitButton
          > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
