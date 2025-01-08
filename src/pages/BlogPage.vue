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
      <p class="text-lg lg:text-2xl">
        BabsLead is a marketing agency specialized in helping CEOs and Founders
        scale their personal brands via ghostwriting, branding and lead
        generation.
      </p>

      <p class="text-lg lg:text-2xl mt-8">
        With our expertise in social media management, community building, and
        sales outreach, we have helped 30+ business owners transform their
        brands, surpassing 10M impressions and over 1000 leads generated.
      </p>
    </div>
  </div>

  <div class="bg-dark text-white lg:py-24 py-12 px-5 md:px-16 2xl:px-0">
    <div class="container max-w-7xl mx-auto">
      <p class="text-lg lg:text-2xl">
        Our services span across content creation, branding, designs, profile
        optimization and sales outreach.
      </p>
      <div class="lg:grid gap-6 grid-cols-2 mt-12">
        <div
          class="flex rounded-md border border-gray-50/20 items-center gap-4 mb-6 lg:mb-0"
          v-for="pkg in packages"
          :key="pkg.title"
        >
          <img :src="pkg.image" class="w-28 rounded-l-md" alt="" />
          <div>
            <p class="text-lg font-semibold text-light-yellow">
              {{ pkg.title }}
            </p>
            <p>{{ pkg.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-dark/95 text-white lg:py-24 py-12 px-5 md:px-16 2xl:px-0">
    <div class="container max-w-7xl mx-auto">
      <p class="text-center text-4xl mb-8 font-semibold">
        Meet the team members
      </p>

      <div class="lg:grid grid-cols-12 gap-16">
        <div
          class="col-span-4 mb-6 lg:mb-0"
          v-for="member in teamMembers"
          :key="member.name"
        >
          <img
            :src="member.image"
            class="h-96 w-full object-cover object-top"
            alt=""
          />

          <div class="mt-3 flex justify-between items-center">
            <div>
              <p class="text-xl text-light-yellow font-semibold">
                {{ member.name }}
              </p>
              <p class="text-sm italic">{{ member.designation }}</p>
            </div>
            <div>
              <a :href="member.linkedin" target="_blank">
                <button class="p-2 rounded-full bg-blue-600">
                  <IconLinkedin />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
