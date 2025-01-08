<script lang="ts" setup>
import VictorImg from "@/assets/images/victor.jpeg";
import ElizabthImg from "@/assets/images/elizabeth.jpeg";
import BathlomewImg from "@/assets/images/bathlomew.jpeg";
import BeautyImg from "@/assets/images/beauty.jpeg";
import DavidImg from "@/assets/images/david.jpeg";
import MercyImg from "@/assets/images/mercy.jpeg";
import ContentCreationImgRef from "@/assets/images/content-creation.png";
import BrandingImgRef from "@/assets/images/branding.png";
import DesignsImgRef from "@/assets/images/designs.png";
import ProfileManagementImgRef from "@/assets/images/profile-management.png";
import ProfileOptimizationImgRef from "@/assets/images/profile-optimization.png";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import SalesOutreachImgRef from "@/assets/images/sale.outreach.png";
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
            <span
              class="from-white via-bright-orange to-white bg-gradient-to-r bg-clip-text text-transparent"
            >
              Blog</span
            >
          </h1>
          <p class="text-lg lg:text-xl text-gray-300 mb-12">
            Transforming Personal Brands into a Traffic Machine
          </p>
        </div>
      </main>
    </div>
  </div>

  <div class="bg-dark/95 lg:py-24 py-12 px-5 md:px-16 2xl:px-0">
    <div class="container max-w-7xl mx-auto text-white">
      <div class="lg:grid grid-cols-3 gap-6">
        <div v-for="i in 12" :key="i" class="rounded-lg mb-6 lg:mb-0 shadow-md border border-gray-50/10 hover:border-white">
          <img
            src="../assets/images/pathway-consultant.png"
            class="rounded-t-lg h-52 w-full object-cover object-top"
            alt=""
          />
          <div class="p-6">
            <p class="text-[#FAD536] text-xl font-semibold uppercase ">
              Discover the latest news and updates in our industry
            </p>

            <p class="text-2xs text-gray-400 my-3">January 5, 2025</p>

            <RouterLink class="text-xs font-semibold" to="#">Read More >></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
