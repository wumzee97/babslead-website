<script lang="ts" setup>
import AppSubmitButton from "./AppSubmitButton.vue";
import IconLinkedin from "./icons/IconLinkedin.vue";
import  IconTwitter from "./icons/IconTwitter.vue";

interface IFeatures {
  id: number;
  title: string;
  description: string;
}
const features: IFeatures[] = [
  {
    id: 1,
    title: "Branding",
    description:
      "We assist you craft a brand identity that speaks to your personality and is easily recognisable.",
  },
  {
    id: 2,
    title: "Content Creation",
    description:
      "We craft powerful and engaging content that appeal to your audience. ",
  },
  {
    id: 3,
    title: "Designs",
    description:
      "We help you create stunning visuals that appeals and capture your audience attention.",
  },
  {
    id: 4,
    title: "Content Creation",
    description:
      "We support your brand via personalized sales outreach to 3x your revenue.",
  },
];
</script>

<template>
  <div class="bg-dark py-24">
    <div class="container max-w-7xl mx-auto px-5 md:px-16 2xl:px-0 pb-16">
      <div class="lg:grid grid-cols-12 gap-10">
        <div
          class="col-span-5 mb-8 lg:mt-0"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <p class="text-xl lg:text-2xl font-semibold text-success-500">
            ABOUT
          </p>
          <p class="font-bold text-3xl lg:text-4xl text-white">BabsLead</p>
          <div class="text-white mt-9">
            <p>
              BabsLead is a marketing agency specialized in helping CEOs and
              Founders scale their personal brands via ghostwriting, branding
              and lead generation.
            </p>

            <p class="mt-7">
              With our expertise in social media management, community building,
              and sales outreach, we have helped 20+ business owners transform
              their brands, surpassing 5M impressions and over 1000 leads
              generated.
            </p>

            <p class="mt-7">
              Our services span across content creation, branding, designs,
              profile optimization and sales outreach.
            </p>

            <AppSubmitButton
              type="button"
              class="!bg-[#FAD536] !text-dark-brown mt-10"
              >View Our Packages</AppSubmitButton
            >
          </div>
        </div>
        <div
          class="col-span-7 lg:grid grid-cols-2 gap-6"
          data-aos="fade-down-left"
          data-aos-duration="2500"
        >
          <div
            class="border border-white rounded-xl p-3 lg:p-6 hover:bg-success-500 mb-4 lg:mb-0"
            v-for="feature in features"
            :key="feature.id"
          >
            <p class="font-semibold text-white text-xl">{{ feature.title }}</p>
            <p class="text-white mt-4">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <div class="lg:grid grid-cols-12 gap-10 mt-12 lg:mt-40">
        <div class="col-span-8">
          <div class="lg:flex">
            <div class="lg:w-4/6 mb-4 lg:mb-0">
              <span
                class="text-white text-3xl lg:text-6xl font-bold lg:leading-[70px]"
              >
                OUR <br class="hidden lg:block" />
                NUMBERS<br class="hidden lg:block" />
                SPEAK FOR<br class="hidden lg:block" />
                THEMSELVES
              </span>
            </div>

            <div class="lg:w-2/6 flex flex-col justify-between">
              <div
                class="rounded-lg border border-white p-6 text-white text-center mb-4 lg:mb-0"
              >
                <span class="text-2xl lg:text-5xl font-semibold"> 30+ </span
                ><br />
                <span>Partners</span>
              </div>

              <div
                class="rounded-lg border border-white p-6 text-white text-center"
              >
                <span class="text-2xl lg:text-5xl font-semibold"> 5,000% </span
                ><br />
                <span>Engagement Increase</span>
              </div>
            </div>
          </div>
          <div
            class="border border-white rounded-lg p-6 mt-6 flex justify-between text-white"
          >
            <div>
              <span class="text-2xl lg:text-5xl font-semibold">1,000+</span
              ><br />
              <span>X/LinkedIn Post</span>
            </div>
            <div class="flex gap-3">
              <div class="rounded-lg bg-[#000] flex items-center px-3 lg:px-12">
                <IconTwitter height="36px" width="36px" />
              </div>
              <div class="rounded-lg bg-[#105be8] flex items-center px-3 lg:px-12">
                <IconLinkedin height="36px" width="36px" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-4">
          <div
            class="rounded-lg border border-white p-6 text-white text-center h-full mt-5 lg:mt-0"
          >
            <span class="text-2xl lg:text-5xl font-semibold"> 10M+ </span><br />
            <span>Impressions</span>

            <div class="rounded-lg bg-white text-dark p-4 mt-6 text-left">
              <div>
                <span class="text-2xl lg:text-4xl font-semibold">
                  1,083,078 </span
                ><br />
                <span>Impressions</span><br />
                <span><strong>124.4%</strong> Past 90 days</span>
              </div>

              <div class="mt-10">
                <span class="text-2xl lg:text-4xl font-semibold">
                  9,386,382 </span
                ><br />
                <span>Impressions</span><br />
                <span><strong>5,402.4%</strong> Past 365 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
