<script lang="ts" setup>
const packages = [
  {
    title: "Branding",
    description:
      "We assist you craft a brand identity that speaks to your personality and is easily recognisable. ",
    image: BrandingImgRef,
  },
  {
    title: "Content Creation",
    description:
      "We craft powerful and engaging content that appeals to your audience. ",
    image: ContentCreationImgRef,
  },
  {
    title: "Designs",
    description:
      "We help you create stunning visuals that appeal and capture your audience's attention. ",
    image: DesignsImgRef,
  },
  {
    title: "Sales Outreach",
    description:
      "We support your brand via personalized sales outreach to 3x your revenue. ",
    image: ProfileManagementImgRef,
  },
  {
    title: "Profile Management",
    description:
      "We support your brand via personalized sales outreach to 3x your revenue. ",
    image: ProfileManagementImgRef,
  },
  {
    title: "Profile Optimization",
    image: ProfileOptimizationImgRef,
  },
];

import ContentCreationImgRef from "@/assets/images/content-creation.png";
import BrandingImgRef from "@/assets/images/branding.png";
import DesignsImgRef from "@/assets/images/designs.png";
import ProfileManagementImgRef from "@/assets/images/profile-management.png";
import ProfileOptimizationImgRef from "@/assets/images/profile-optimization.png";
</script>
<template>
  <div class="relative -mt-[190px] pt-44">
    <!-- Background Image with Overlay -->
    <div
      class="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/about.png')]"
    >
      <div class="absolute inset-0 bg-black bg-opacity-[72%]"></div>
    </div>

    <!-- Content -->
    <div class="relative">
      <Navbar />

      <main class="relative pt-12 pb-16 px-6">
        <div class="max-w-7xl mx-auto text-center my-24">
          <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p class="text-lg lg:text-xl text-gray-300 mb-12">
            Transforming Personal Brands into a Traffic Machine
          </p>
        </div>
      </main>
    </div>
  </div>

  <div class="bg-dark lg:py-24 px-5 md:px-16 2xl:px-0">
    <div class="container max-w-7xl mx-auto">
      <p class="text-white text-5xl font-semibold leading-[1.2em]">
        All Of The Products We Provide Are
        <span class="text-success-500">Digital </span>. But What Is A
        <span class="text-success-500">Digital Product?</span>
      </p>
      <p class="text-white leading-[1.5rem] mt-6">
        A <span class="text-success-500">digital product</span> is a product
        that is delivered via computer or the internet rather than through a
        physical delivery method. You can access the product online with ease.
        This could be anything from a template to a PDF document, audio file,
        eBook, training course, software or any other digital files that are
        delivered digitally rather than physically. Digital products are also
        usually a lot cheaper than physical products.
      </p>
    </div>
  </div>

  <div class="bg-dark/95 lg:py-24 px-5 md:px-16 2xl:px-0">
    <div class="container max-w-7xl mx-auto">
      <p class="text-white text-center text-4xl font-semibold leading-[1.2em]">
        Why Are <span class="text-success-500">Digital Products</span> Becoming
        More Common?
      </p>
      <p class="text-white leading-[1.5rem] text-center mt-6">
        Millions of digital products are being sold online every day.
      </p>
    </div>
  </div>
</template>
