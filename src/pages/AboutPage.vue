<script lang="ts" setup>
import VictorImg from "@/assets/images/victor.jpeg";
import ElizabthImg from "@/assets/images/elizabeth.jpeg";
import BathlomewImg from "@/assets/images/bathlomew.jpeg";
import BeautyImg from "@/assets/images/beauty.jpeg";
import DavidImg from "@/assets/images/david.jpeg";
import MercyImg from "@/assets/images/mercy.jpeg";
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

const teamMembers = [
  {
    name: "Bartholomew Nicholas",
    image: BathlomewImg,
    designation: "Brand Designer",
    linkedin: "https://www.linkedin.com/in/bathlomew-nicholas-8979351a2?",
  },
  {
    name: "Modupe Beauty",
    image: BeautyImg,
    designation: "Content/Project Manager",
    linkedin: "https://www.linkedin.com/in/modupeolabeauty",
  },
  {
    name: "Elizabeth Adesina",
    image: ElizabthImg,
    designation: "Graphics Designer",
    linkedin: "https://www.linkedin.com/in/elizabethadeshina7a42225",
  },
  {
    name: "David Ojo",
    image: DavidImg,
    designation: "Sales Expert",
    linkedin: "https://www.linkedin.com/in/david-b-ojo",
  },
  {
    name: "Victor Ugwuoke",
    image: VictorImg,
    designation: "Ghostwriter",
    linkedin: "https://www.linkedin.com/in/victor-ugwuoke",
  },
  {
    name: "Mercy Jolly",
    image: MercyImg,
    designation: "Copywriter",
    linkedin: "https://www.linkedin.com/in/mercy-jolly-32804528b",
  },
];

import ContentCreationImgRef from "@/assets/images/content-creation.png";
import BrandingImgRef from "@/assets/images/branding.png";
import DesignsImgRef from "@/assets/images/designs.png";
import ProfileManagementImgRef from "@/assets/images/profile-management.png";
import ProfileOptimizationImgRef from "@/assets/images/profile-optimization.png";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
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

  <div class="bg-dark/95 lg:py-24 py-12 px-5 md:px-16 2xl:px-0">
    <div class="container max-w-7xl mx-auto text-white">
      <p class="text-xl lg:text-3xl">
        BabsLead is a marketing agency specialized in helping CEOs and Founders
        scale their personal brands via ghostwriting, branding and lead
        generation.
      </p>

      <p class="text-2xl lg:text-4xl mt-8">
        With our expertise in social media management, community building, and
        sales outreach, we have helped 20+ business owners transform their
        brands, surpassing 5M impressions and over 1000 leads generated.
      </p>
    </div>
  </div>

  <div class="bg-dark text-white lg:py-24 py-12 px-5 md:px-16 2xl:px-0">
    <div class="container max-w-7xl mx-auto">
      <p class="text-xl lg:text-3xl">
        Our services span across content creation, branding, designs, profile
        optimization and sales outreach.
      </p>
      <div class="lg:grid gap-6  grid-cols-2 mt-12">
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

      <div class="lg:grid grid-cols-12 gap-6">
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
