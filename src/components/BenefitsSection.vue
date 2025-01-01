<script lang="ts" setup>
import { ref } from "vue";
import IconRulerAndPen from "./icons/IconRulerAndPen.vue";
import IconBookSaved from "./icons/IconBookSaved.vue";
import IconBulkBook from "./icons/IconBulkBook.vue";
import IconTeacher from "./icons/IconTeacher.vue";

const benefits = ref([
  {
    icon: IconRulerAndPen,
    title: "Tailored Learning Experience",
    text: "Get customized tutoring that adapts to your child's unique learning style, pace, and needs, ensuring optimal academic growth",
  },
  {
    icon: IconBulkBook,
    title: "Expert Guidance for Diverse Needs",
    text: "Access specialized support, from general academic tutoring to SEN expertise and career counseling, ensuring comprehensive development for every child.",
  },
  {
    icon: IconBookSaved,
    title: "Flexible Scheduling",
    text: "Book sessions that fit your child’s schedule, ensuring that your child is never overwhelmed with lessons.",
  },
  {
    icon: IconTeacher,
    title: "⁠Improved Academic Performance",
    text: "Get your child tutoring that is focused on specific subjects for better grades and a deeper understanding of the material",
  },
]);
</script>

<template>
  <div class="relative h-[620px] lg:h-[836px] overflow-hidden " id="benefits">
    <!-- Background Image -->
    <img
      src="@/assets/images/benefits.png"
      alt="Background"
      class="w-full h-full object-cover"
    />
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>
    <!-- Content -->
    <div class="absolute inset-0 flex justify-center">
      <div class="container max-w-7xl mx-auto py-8 lg:py-16 text-white px-5 md:px-16 2xl:px-0">
        <p class="lg:text-4xl text-[25px] font-medium">Benefits of using this platform</p>
        <img src="@/assets/images/underline.svg" class="lg:ml-80 ml-64" alt="" />
        <div class="mt-10">
          <div
            v-for="(it, index) in benefits"
            :key="index"
            class="bg-benefit-gradient lg:mb-6 mb-4 flex lg:gap-5 items-center lg:p-5 p-2 pl-0 backdrop-blur-md rounded-[20px] border border-[#F9F9F940] max-w-[655px]"
          >
            <div>
              <component class="h-6 lg:h-auto" :is="it.icon"></component>
            </div>
            <div>
              <p class="lg:text-xl text-sm font-medium">{{ it.title }}</p>
              <p class="text-[#EFEFEF] text-xs lg:text-base mt-1 lg:mt-2">
                {{ it.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
