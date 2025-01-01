<script lang="ts" setup>
import { ref } from "vue";
import AppSubmitButton from "./AppSubmitButton.vue";
import AppTestimonialCard from "./AppTestimonialCard.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";

const selected = ref<"parent" | "tutors" | "student">("parent");
const testimonials = [
  {
    id: 1,
    name: "Brian Montes",
    rating: 5,
    comment:
      "Babatunde is a skilled ghostwriter. He delivers on time and communicates very well. He takes the time to understand the project scope and delivered the best work possible.",
    date: "April 2024",
  },
  {
    id: 2,
    name: "Ulrich Van",
    rating: 5,
    comment: "Great Copywriter, very professional and very engaging.",
    date: "12th December 2024",
  },
  {
    id: 3,
    name: "Nico Garcia",
    rating: 4.5,
    comment:
      "Probably one of the most talented and committed writers on this platform. Highly recommended.",
    date: "12th December 2024",
  },
  {
    id: 4,
    name: "Geoffrey",
    rating: 4.5,
    comment:
      "Babatunde has been of a great availability and understanding. He perfectly filled the job I hired him for, and provided me great, targeted and useful datas. He didn't managed his efforts, even when facing some difficulties with some specific datas, to accomplish the mission. I warmly recommend him.",
    date: "12th December 2024",
  },

  {
    id: 5,
    name: "Onyeka Felix",
    rating: 4.5,
    comment:
      "I want to appreciate BabsLead for his coaching style, which was supportive, encouraging, positive and tailored to my specific needs. He take his time to understand my goals and objectives, and provided actionable advice and feedback that helped me improve my LinkedIn presence, my CV and upwork profile. I highly recommend Babatunde to anyone looking to enhance their professional online presence!",
    date: "12th December 2024",
  },
];

const testimonialContainer = ref();

function scrollLeft() {
  var element = testimonialContainer.value;
  element.scrollLeft += 300;
}

function scrollRight() {
  var element = testimonialContainer.value;
  element.scrollLeft -= 300;
}
</script>
<template>
  <div class="bg-[#ECE9EF] pb-8 relative" id="reviews">
    <div class="container max-w-7xl mx-auto py-8 px-5 md:px-16 2xl:px-0">
      <p class="font-medium lg:text-4xl text-[28px]">
        What does our client say about us?
      </p>
      <img src="../assets/images/underline.svg" alt="" />
    </div>
    <div
      class="flex w-full no-scroll-bar justify-self-end overflow-x-scroll flex-nowrap gap-5 mt- scroll-smooth"
      ref="testimonialContainer"
    >
      <AppTestimonialCard
        :testimonial="testimonial"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      />
    </div>
    <div
      class="flex justify-between absolute w-full px-2 lg:px-12 bottom-20 lg:bottom-28"
    >
      <button
        @click="scrollRight"
        type="button"
        class="w-[32px] h-[32px] rounded-full bg-[#584B13] bg-opacity-50 flex justify-center items-center"
      >
        <IconArrowLeft />
      </button>

      <button
        @click="scrollLeft"
        type="button"
        class="w-[32px] h-[32px] rounded-full bg-[#584B13] bg-opacity-50 flex justify-center items-center"
      >
        <IconArrowLeft class="rotate-180" />
      </button>
    </div>
  </div>
</template>
