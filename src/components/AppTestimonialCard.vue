<script lang="ts" setup>
import IconRatingHalfStar from "./icons/IconRatingHalfStar.vue";
import IconRatingStar from "./icons/IconRatingStar.vue";
interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
    image: string | undefined;
    designation: string;
  };
}

const props = defineProps<TestimonialProps>();
</script>
<template>
  <div
    class="lg:p-6 p-4 border border-gray-50/10 bg-dark lg:rounded-[10px] rounded-[6px] min-w-[400px]"
  >
    <div class="flex justify-between items-center">
      <div class="text-sm lg:text-base flex gap-3 items-center">
        <img
          :src="testimonial.image"
          class="h-14 w-14 rounded-full object-cover object-top"
          alt=""
        />
        <div>
          <p>
            {{ testimonial.name }}
          </p>
          <p class="text-gray-400 text-xs -mt-0.5">
            {{ testimonial.designation }}
          </p>
        </div>
      </div>

      <div class="flex gap-1">
        <IconRatingStar v-for="i in Math.floor(testimonial.rating)" :key="i" />
        <IconRatingHalfStar v-if="testimonial.rating % 1 !== 0" />
      </div>
    </div>

    <p class="lg:text-sm text-xs text-gray-200 mt-3">
      {{ testimonial.comment }}
    </p>
    <p class="lg:text-xs text-2xs mt-2 text-gray-400">{{ testimonial.date }}</p>
  </div>
</template>
