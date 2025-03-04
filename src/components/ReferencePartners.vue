<script lang="ts" setup>
import { onMounted, ref } from "vue";

// Define the container and scroll position
const logos = ref<HTMLDivElement | null>(null); // Add type for `logos`
const scrollPosition = ref(0);
const speed = ref(1); // Define scrolling speed

// Scrolling function
const scrollLogos = () => {
  if (logos.value) {
    const logosWidth = logos.value.scrollWidth / 2; // Use `scrollWidth` for total width
    scrollPosition.value -= speed.value;

    // Reset position when the first set of logos scrolls out of view
    if (Math.abs(scrollPosition.value) >= logosWidth) {
      scrollPosition.value = 0; // Reset position for seamless scrolling
    }

    // Apply the translation
    logos.value.style.transform = `translateX(${scrollPosition.value}px)`;

    // Continue the animation
    requestAnimationFrame(scrollLogos);
  }
};

// Start scrolling on mount
onMounted(() => {
  requestAnimationFrame(scrollLogos);
});
</script>

<template>
  <div class="py-4 lg:py-10">
    <p class="text-center text-xl text-gray-300 font-medium lg:mb-6">
      WORKED WITH INDIVIDUALS FROM
    </p>

    <div class="partners-container overflow-hidden w-full lg:h-24 flex items-center relative">
      <!-- Logos container -->
      <div
        ref="logos"
        class="flex gap-6 lg:gap-16 items-center justify-center partners-logos will-change-transform"
      >
        <img src="@/assets/images/upwork.svg" class="h-8 lg:h-10" alt="Upwork Logo" />
        <img src="@/assets/images/gamaal.png" class="h-10 lg:h-14" alt="Gamaal Logo" />
        <img src="@/assets/images/linkedin.svg" class="h-24 lg:h-28" alt="LinkedIn Logo" />
        <img src="@/assets/images/x-logo.svg" class="h-6 lg:h-8" alt="X Logo" />
        <img src="@/assets/images/clickup-logo.svg" class="h-8 lg:h-10" alt="ClickUp Logo" />
        <img src="@/assets/images/clutch-co-vector-logo.svg" class="h-7 lg:h-10" alt="Clutch Logo" />
        <img src="@/assets/images/midas.svg" class="h-14 lg:h-16" alt="Midas Logo" />
        <img src="@/assets/images/facebook.png" class="h-10 lg:h-12" alt="Facebook Logo" />
        <!-- Duplicate logos for seamless scrolling -->
        <img src="@/assets/images/upwork.svg" class="h-8 lg:h-10" alt="Upwork Logo" />
        <img src="@/assets/images/gamaal.png" class="h-10 lg:h-14" alt="Gamaal Logo" />
        <img src="@/assets/images/linkedin.svg" class="h-24 lg:h-28" alt="LinkedIn Logo" />
        <img src="@/assets/images/x-logo.svg" class="h-6 lg:h-8" alt="X Logo" />
        <img src="@/assets/images/clickup-logo.svg" class="h-8 lg:h-10" alt="ClickUp Logo" />
        <img src="@/assets/images/clutch-co-vector-logo.svg" class="h-7 lg:h-10" alt="Clutch Logo" />
        <img src="@/assets/images/midas.svg" class="h-14 lg:h-16" alt="Midas Logo" />
        <img src="@/assets/images/facebook.png" class="h-10 lg:h-12" alt="Facebook Logo" />

        <!-- Duplicate logos for seamless scrolling -->
        <img src="@/assets/images/upwork.svg" class="h-8 lg:h-10" alt="Upwork Logo" />
        <img src="@/assets/images/gamaal.png" class="h-10 lg:h-14" alt="Gamaal Logo" />
        <img src="@/assets/images/linkedin.svg" class="h-24 lg:h-28" alt="LinkedIn Logo" />
        <img src="@/assets/images/x-logo.svg" class="h-6 lg:h-8" alt="X Logo" />
        <img src="@/assets/images/clickup-logo.svg" class="h-8 lg:h-10" alt="ClickUp Logo" />
        <img src="@/assets/images/clutch-co-vector-logo.svg" class="h-7 lg:h-10" alt="Clutch Logo" />
        <img src="@/assets/images/midas.svg" class="h-14 lg:h-16" alt="Midas Logo" />
        <img src="@/assets/images/facebook.png" class="h-10 lg:h-12" alt="Facebook Logo" />

        
      </div>
    </div>
  </div>
</template>
