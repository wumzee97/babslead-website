<script lang="ts" setup>
import AppSubmitButton from "./AppSubmitButton.vue";

import gsap from 'gsap';
import { onMounted, ref } from "vue";

const heroRef = ref<HTMLElement | null>(null);
const shapesRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (heroRef.value && shapesRef.value) {
    // Animate the hero section
    gsap.fromTo(
      heroRef.value.querySelector('.hero-content'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Animate the shapes
    const shapes = shapesRef.value.querySelectorAll('.shape');
    gsap.fromTo(
      shapes,
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.1, 
        ease: 'back.out(1.7)'
      }
    );
  }
});

</script>
<template>
  <div class="relative -mt-[190px] pt-44 hero-section" ref="heroRef">
   
    <!-- Background Image with Overlay -->
    <!-- <div
      class="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/design.png')]"
    >
      <div class="absolute inset-0 bg-black bg-opacity-[82%]"></div>
    </div> -->

    <div class="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 animate-gradient"></div>

       <!-- Floating shapes -->
       <div ref="shapesRef" class="absolute inset-0 overflow-hidden">
      <div class="shape rounded-full bg-white/10 w-64 h-64 absolute top-1/4 left-1/4 backdrop-blur-xl animate-float-slow"></div>
      <div class="shape rounded-full bg-white/10 w-48 h-48 absolute top-3/4 left-1/3 backdrop-blur-xl animate-float-medium"></div>
      <div class="shape rounded-full bg-white/10 w-32 h-32 absolute top-1/2 left-2/3 backdrop-blur-xl animate-float-fast"></div>
      <div class="shape rounded-full bg-white/10 w-56 h-56 absolute top-1/3 left-3/4 backdrop-blur-xl animate-float-medium"></div>
      <div class="shape rounded-full bg-white/10 w-40 h-40 absolute top-2/3 left-1/6 backdrop-blur-xl animate-float-slow"></div>
    </div>

    <!-- Content -->
    <div class="relative">
      <main class="relative pt-12 pb-16 px-6">
        <div
          class="flex flex-col items-center justify-center mt- min-h-[650px]"
        >
          <h1
            class="text-3xl lg:text-5xl text-primary-500 text-center font-semibold !leading-[80px]"
          >
            <span class="font-normal mb-7 text-light-yellow">
              Transforming</span
            >
            <br />
            <span class="text-6xl mt-6 text-white">
              Personal Brands into a Traffic Machine
            </span>
          </h1>
          <p class="text-light-yellow text-center text-xl font-medium mt-6">
            Stand out with sociable content and convert your target
            audience.
          </p>

          <div class="flex flex-col lg:flex-row gap-6 mt-16">
            <AppSubmitButton
              class="!w-auto px-10 !bg-[#FAD536] !text-dark-brown"
              >Book a Discovery Call</AppSubmitButton
            >
            <AppSubmitButton
              outlined
              class="!bg-white !text-primary-500 !w-auto px-10"
              >View Our Packages</AppSubmitButton
            >
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<style scoped>
.hero-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.shape {
  transform-origin: center;
  will-change: transform;
  filter: blur(2px);
}
</style>