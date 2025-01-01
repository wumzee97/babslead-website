<script lang="ts" setup>
import { ref } from "vue";
import IconMinus from "./icons/IconMinus.vue";
import IconPlus from "./icons/IconPlus.vue";

const faqs = ref([
  {
    question: "How do I find the right tutor for my child?",
    answer:
      "Our portal allows you to search and filter tutors based on subject expertise, experience, and specific needs such as SEN support or career counseling, ensuring a perfect match for your child's requirements.",
    active: false,
  },
  {
    question: "What qualifications do the tutors on the portal have?",
    answer:
      "All tutors listed on our portal are thoroughly vetted and possess relevant qualifications and experience in their respective fields, ensuring high-quality educational support.",
    active: false,
  },
  {
    question: "What qualifications do the tutors on the portal have?",
    answer:
      "You search for a tutor that fits the child’s needs and pick the number of sessions you would like to book. You would be charged based on the number of sessions and the price advertised by the tutor.",
    active: false,
  },
  {
    question:
      "You can book sessions based on the availability of the tutor you picked.",
    answer:
      "You can book sessions based on the availability of the tutor you picked",
    active: false,
  },
  {
    question:
      "What kind of support is available for children with special educational needs (SEN)?",
    answer:
      "We offer a category of tutors who specialize in SEN support, providing personalized strategies and assistance to cater to various learning challenges and ensure inclusive education.",
    active: false,
  },
]);
</script>

<template>
  <section class="container mx-auto max-w-7xl lg:py-20 py-10 px-5 md:px-16 2xl:px-0"  id="faq">
    <p class="font-medium text-2xl lg:text-4xl mb-6">Frequently Asked Questions</p>

    <div
      class="border-t border-gray-300 flex justify-between py-6"
      v-for="(faq, index) in faqs"
      :key="index"
    >
      <div>
        <p class="lg:text-xl font-medium text-[#222823]">
          {{ faq.question }}
        </p>

        <p class="font-medium text-[#334335] text-opacity-70 mt-3" v-if="faq.active">
          {{ faq.answer }}
        </p>
      </div>
      <div>
        <button @click="faq.active = !faq.active">
          <IconPlus v-if="!faq.active" />
          <IconMinus v-else />
        </button>
      </div>
    </div>
  </section>
</template>
