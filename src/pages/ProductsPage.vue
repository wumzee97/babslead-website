<script lang="ts" setup>
import AppSubmitButton from "@/components/AppSubmitButton.vue";
import IconCheckCircle from "@/components/icons/IconCheckCircle.vue";
import LinkedInGM from "@/assets/images/linkedinGM.png";
import XGO from "@/assets/images/xgo.png";
import XGM from "@/assets/images/XGM.png";
import LinkedInGO from "@/assets/images/linkedinGO.png";
import WebsiteCopywriting from "@/assets/images/website.copywriting.png";
import SeoCopywriting from "@/assets/images/seo.copywriting.png";
import LogoDesign from "@/assets/images/logo.design.png";
import LinkedXCoaching from "@/assets/images/linkedinxcoaching.png";
import UpworkCoaching from "@/assets/images/upwork.coaching.png";

const services = [
  {
    name: "LinkedIn Ghost Marketing",
    image: LinkedInGM,
    offers: [
      "Research",
      "Content strategy",
      "2 strategy calls",
      "Designs",
      "5 posts per week",
      "2 Reviews",
      "Post scheduling ",
      "Profile management",
      "30 engagement per day",
      "20 sales outreach per day",
      "24/7 support via WhatsApp",
    ],
  },
  {
    name: "X Ghost Marketing ",
    image: XGM,
    offers: [
      "Research",
      "Content strategy",
      "2 strategy calls",
      "Designs",
      "8 shorts tweets/2 long posts per week",
      "2 Reviews",
      "Posts scheduling",
      "Profile management",
      "30 engagements per day",
      "20 sales outreach per day",
      "24/7 support via WhatsApp",
    ],
  },
  {
    name: " LI Ghostwriting/Optimization",
    image: LinkedInGO,
    offers: [
      "Research ",
      "Content strategy",
      "2 strategy calls",
      "Banner/ feature card design",
      "5 posts per week",
      "1 Review",
      "24/7 support via WhatsApp",
    ],
  },
  {
    name: "X Ghostwriting/Optimization",
    image: XGO,
    offers: [
      "Research",
      "Content strategy",
      "2 strategy calls",
      "Banner design",
      "8 shorts tweets / 2 long form posts per week",
      "1 Review",
      "24/7 support WhatsApp",
    ],
  },
  {
    name: "Website Copywriting",
    image: WebsiteCopywriting,
    offers: [
      "Research",
      "Strategy call",
      "Copy structure outline",
      "Copywriting",
      "2 revisions",
      "Review",
    ],
  },
  {
    name: "SEO Copywriting",
    image: SeoCopywriting,
    offers: [
      "Strategy call",
      "Research",
      "Copy structure outline",
      "Copywriting",
      "2 revisions",
      "Review",
    ],
  },
  {
    name: "Logo Design and Branding",
    image: LogoDesign,
    offers: [
      "2 Intro logo designs",
      "Full brand guide",
      "Full branding",
      "Color pallette",
      "Brand assets ",
      "3 revisions",
      "Access to PNG, JPEG, raw file ( pad) ",
      "12 - 15 working days delivery",
    ],
  },
  {
    name: "LinkedIn/X Coaching ",
    image: LinkedXCoaching,
    offers: [
      "2 sessions",
      "2 hours video call",
      "DFY profile optimization",
      "Tips on understanding the algorithm",
      "Understanding content strategy",
    ],
  },
  {
    name: "Upwork Coaching",
    image: UpworkCoaching,
    offers: [
      "2 Sessions",
      "2 hours video call",
      "DFY profile optimization",
      "Tips on how to propose for jobs",
      "Tips on understanding up work algorithm",
    ],
  },
];
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
      <main class="relative pt-12 pb-16 px-6">
        <div class="max-w-7xl mx-auto text-center my-24">
          <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span
              class="from-white via-bright-orange to-white bg-gradient-to-r bg-clip-text text-transparent"
              >Our Services</span
            >
          </h1>
          <p class="text-lg lg:text-xl text-gray-300 mb-12">
            Transforming Personal Brands into a Traffic Machine
          </p>
        </div>
      </main>
    </div>
  </div>

  <div class="bg-dark lg:py-24 py-12 px-5 md:px-16 2xl:px-0">
    <div class="container max-w-7xl mx-auto">
      <p class="text-white text-3xl lg:text-5xl font-semibold ">
        All the services we provide are
        <span class="text-[#FAD536]">remote</span>. But what
        <span class="text-[#FAD536]"> separates us</span> from the rest?
      </p>
      <p class="text-white leading-[1.5rem] mt-6">
        Our services are tailored to help you stand out from the crowd and
        convert your target audience through personalized solutions we bring to
        your brand. If you have ever wanted yoir brand to shine online, we are
        your best solution.
      </p>
    </div>
  </div>

  <div class="bg-dark/95 lg:py-24 px-5 md:px-16 2xl:px-0">
    <div class="container max-w-7xl mx-auto">
      <div class="lg:grid grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.name"
          class="border border-gray-50/30 rounded-md p-6 flex flex-col items-center mb-6 lg:mb-0"
        >
          <img :src="service.image" class="h-44 w-44 rounded-full" alt="" />

          <p class="text-white font-semibold text-2xl mt-3 text-center">
            {{ service.name }}
          </p>

          <span class="text-light-yellow text-s mt-5 lg:min-h-64">
            <span
              class="flex gap-3"
              v-for="offer in service.offers"
              :key="offer"
            >
              <IconCheckCircle />
              {{ offer }}
            </span>
          </span>

          <AppSubmitButton
            as="RouterLink"
            href="https://calendly.com/babslead/bookme"
            target="_blank"
            class="mt-5 !bg-[#FAD536] !text-dark-brown lg:!w-auto"
            >Schedule a Meeting</AppSubmitButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
