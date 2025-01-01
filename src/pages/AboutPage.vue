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
            About Us
          </h1>
          <p class="text-lg lg:text-xl text-gray-300 mb-12">
            Transforming Personal Brands into a Traffic Machine
          </p>
        </div>
      </main>
    </div>
  </div>

  <div class="bg-munsell lg:py-24 px-5 md:px-16 2xl:px-0">
    <div class="container max-w-7xl mx-auto">
      <p class="text-3xl">
        BabsLead is a marketing agency specialized in helping CEOs and Founders
        scale their personal brands via ghostwriting, branding and lead
        generation.
      </p>

      <p class="text-4xl mt-8">
        With our expertise in social media management, community building, and
        sales outreach, we have helped 20+ business owners transform their
        brands, surpassing 5M impressions and over 1000 leads generated.
      </p>
    </div>
  </div>

  <div class="bg-light-yellow lg:py-24 px-5 md:px-16 2xl:px-0">
    <div class="container max-w-7xl mx-auto">
      <p class="text-3xl text-dark-brown">
        Our services span across content creation, branding, designs, profile
        optimization and sales outreach.
      </p>
      <div class="grid gap-6 grid-cols-2 mt-12">
        <div class="flex rounded-md border border-dark-brown/60 items-center gap-4" v-for="pkg in packages" :key="pkg.title">
          <img :src="pkg.image" class="w-28 rounded-l-md" alt="" />
          <div>
            <p class="text-lg font-semibold text-dark-brown">{{pkg.title}}</p>
            <p>{{ pkg.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
