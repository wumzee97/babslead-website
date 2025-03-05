<script setup lang="ts">
import LandingPageHeroSection from "@/components/LandingPageHeroSection.vue";
import WebNavBar from "../components/WebNavBar.vue";
import BenefitsSection from "@/components/BenefitsSection.vue";
import CTASection from "@/components/CTASection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";
import FAQSection from "@/components/FAQSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import ReferencePartners from "@/components/ReferencePartners.vue";
import AboutSection from "@/components/AboutSection.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import MeetFounderSection from "@/components/MeetFounderSection.vue";
import ContactUsSection from "../components/ContactUsSection.vue";
import LandingPageHero from "@/components/LandingPageHero.vue";
import { useHead } from "@vueuse/head";

import gsap from "gsap";
import { onMounted, ref } from "vue";

const heroRef = ref<HTMLElement | null>(null);
const shapesRef = ref<HTMLElement | null>(null);

useHead({
  title: "BabsLead Home",
  meta: [
    {
      name: "description",
      content: "Transforming Personal Brand into a Traffic Machine",
    },
    { property: "og:title", content: "BabsLead" },
    {
      property: "og:description",
      content: "Transforming Personal Brand into a Traffic Machine",
    },
  ],
});

onMounted(() => {
  if (heroRef.value && shapesRef.value) {
    // Animate the hero section
    const heroContent = heroRef.value.querySelector(".hero-content");
    if (heroContent) {
      gsap.fromTo(
        heroContent,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Animate the shapes
    const shapes = shapesRef.value.querySelectorAll(".shape");
    if (shapes.length > 0) {
      gsap.fromTo(
        shapes,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }
      );
    }
  }
});
</script>

<template>
  <div>
    <div
      class="hero-b bg-hero-gradient bg-no-repeat -mt-[190px] pt-32 lg:pt-32 relative overflow-hidden"
      ref="heroRef"
    >
      <!-- Animated gradient background -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-schemes-primary-default via-dark to-schemes-primary-container animate-gradient"
      ></div>

      <!-- Floating shapes -->
      <div ref="shapesRef" class="absolute inset-0 overflow-hidden">
        <div
          class="shape rounded-full bg-white/10 w-64 h-64 absolute top-1/4 left-1/4 backdrop-blur-xl animate-float-slow"
        ></div>
        <div
          class="shape rounded-full bg-white/10 w-48 h-48 absolute top-3/4 left-1/3 backdrop-blur-xl animate-float-medium"
        ></div>
        <div
          class="shape rounded-full bg-white/10 w-32 h-32 absolute top-1/2 left-2/3 backdrop-blur-xl animate-float-fast"
        ></div>
        <div
          class="shape rounded-full bg-white/10 w-56 h-56 absolute top-1/3 left-3/4 backdrop-blur-xl animate-float-medium"
        ></div>
        <div
          class="shape rounded-full bg-white/10 w-40 h-40 absolute top-2/3 left-1/6 backdrop-blur-xl animate-float-slow"
        ></div>
      </div>

      <!-- Hero content -->
      <div class="hero-content relative z-10">
        <LandingPageHeroSection />
      </div>

      <ReferencePartners />
    </div>

    <AboutSection />

    <FeaturesSection />

    <MeetFounderSection />

    <TestimonialSection />
    <div
      class="hero-b bg-hero-gradient bg-no-repeat -mt-[190px] pt-32 lg:pt-32"
    >
      <ContactUsSection />
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  background: url("@/assets/images/hero-bg.png");
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

/* Define the float animations */
@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-medium {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes float-fast {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Apply the animations to the shapes */
.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}
</style>
