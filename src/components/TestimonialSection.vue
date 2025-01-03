<script lang="ts" setup>
import { ref } from "vue";
import AppSubmitButton from "./AppSubmitButton.vue";
import AppTestimonialCard from "./AppTestimonialCard.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";
import BrianMonteImg from '@/assets/images/brian.montes.jpeg'
import UlrichImg from '@/assets/images/ulrich.jpeg'
import NicoGarciaImg from '@/assets/images/nico.garcia.jpeg'
import OnyekaImg from '@/assets/images/onyeka.felix.jpeg'
import FatoumataImg from '@/assets/images/fatoumata.jpeg'
import EdwardImg from '@/assets/images/edward.kofa.jpeg'
// import 

const selected = ref<"parent" | "tutors" | "student">("parent");
const testimonials = [
  {
    id: 1,
    name: "Brian Montes",
    image: BrianMonteImg,
    designation: '',
    rating: 5,
    comment:
      "Babatunde is a skilled ghostwriter. He delivers on time and communicates very well. He takes the time to understand the project scope and delivered the best work possible.",
    date: "April 2024",
  },
  {
    id: 2,
    name: "Ulrich Van",
    image: UlrichImg,
    designation: '',
    rating: 5,
    comment: "Great Copywriter, very professional and very engaging.",
    date: "12th December 2024",
  },
  {
    id: 3,
    name: "Nico Garcia",
    image: NicoGarciaImg,
    designation: '',
    rating: 4.5,
    comment:
      "Probably one of the most talented and committed writers on this platform. Highly recommended.",
    date: "12th December 2024",
  },
  {
    id: 4,
    name: "Geoffrey",
    designation: '',
    image: undefined,
    rating: 4.5,
    comment:
      "Babatunde has been of a great availability and understanding. He perfectly filled the job I hired him for, and provided me great, targeted and useful datas. He didn't managed his efforts, even when facing some difficulties with some specific datas, to accomplish the mission. I warmly recommend him.",
    date: "12th December 2024",
  },

  {
    id: 5,
    name: "Onyeka Felix",
    image: OnyekaImg,
    designation: 'Customer Support Specialist.',
    rating: 4.5,
    comment:
      "I want to appreciate BabsLead for his coaching style, which was supportive, encouraging, positive and tailored to my specific needs. He take his time to understand my goals and objectives, and provided actionable advice and feedback that helped me improve my LinkedIn presence, my CV and upwork profile. I highly recommend Babatunde to anyone looking to enhance their professional online presence!",
    date: "12th December 2024",
  },
  {
    id: 6,
    name: "Fatoumata Diallo",
    image: FatoumataImg,
    designation: 'Founder @ Gamaal',
    rating: 4.5,
    comment:
      "I've been working with Babatunde for couple of weeks back and I must say that I'm really impressed with a number of things. First of all, his approach to work, his professionalism, his patience, I mean he always delivers. So on top of that, he is really gifted with storytelling and he masters the art of the pen, so working with him has been nothing but a blessing personally and I think that everyone deserves to have someone like Babatunde around them and I really look forward to further collaboration with Baba.",
    date: "12th December 2024",
  },
  {
    id: 7,
    name: "Edward Kofa.",
    designation: 'Remote Sales Closer.',
    image: EdwardImg,
    rating: 4.5,
    comment:
      "I'm not really a big fan of making testimonials but I had to make one for James and helping me with the right strategies, correct the errors I was making in building my own personal brand on Twitter. He connects me with the right frameworks and sent me on the path to understand the nature of branding in the Twitter space. So, I really just want to sit down and say thank you and for anybody who's trying to connect with James, I highly recommend it. He will set you on the right path and give you the right frameworks to grow your business. So thank you.",
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
