<script lang="ts" setup>
import IconLinkedin from "./icons/IconLinkedin.vue";
import IconTwitter from "./icons/IconTwitter.vue";
</script>

<template>
  <div class="py-12 lg:py-24 bg-dark">
    <div class="container max-w-7xl mx-auto px-5 md:px-16 2xl:px-0 pb-16">
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        class="font-semibold text-3xl lg:text-5xl text-gray-200 text-center"
      >
        Meet Our Founder
      </p>

      <div
        class="lg:grid flex flex-col-reverse gap-8 lg:gap-16 items-center grid-cols-12 mt-16"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1000"
          class="col-span-8 text-white"
        >
          <p class="text-xl lg:text-3xl font-semibold">
            Hi there! My name is Babatunde James
          </p>

          <p class="mt-8 text-lg">
            BabsLead was founded out of passion to help Founders & CEOs scales
            their business online.
          </p>

          <p class="mt-6 text-lg">
            I started scaling my personal brand on LinkedIn & X 3 years ago and
            now doing the same for others.
          </p>

          <p class="mt-6 text-lg">
            Today, we have supported over 20 brands and helped them deliver
            powerful & engaging content with over 5M impressions & 1000 leads
            generated.
          </p>
        </div>
        <div class="col-span-4">
          <div
            class="rounded-lg border border-dark-brown"
            data-aos="fade-left-down"
            data-aos-delay="1000"
            data-aos-duration="1000"
          >
            <img
              src="@/assets/images/tunde2.jpg"
              class="rounded-lg h-[350px] w-full object-cover object-to"
              alt=""
            />
          </div>
          <div class="flex gap-2 mt-2 justify-center">
            <a
              href="https://www.linkedin.com/in/babatundejames"
              target="_blank"
            >
              <button
                class="h-8 w-8 flex items-center justify-center rounded-full bg-blue-600"
              >
                <IconLinkedin />
              </button>
            </a>

            <a href="https://x.com/Jameswritess" target="_blank">
              <button
                class="h-8 w-8 flex items-center justify-center rounded-full bg-black"
              >
                <IconTwitter />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
