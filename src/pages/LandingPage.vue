<script lang="ts" setup>
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
import  LandingPageHero from "@/components/LandingPageHero.vue";
</script>

<template>
  <div>
    <div class="hero-bg bg-no-repeat -mt-[190px] pt-32 lg:pt-32">
      <LandingPageHeroSection />

      <!-- <LandingPageHero /> -->
    </div>
    <ReferencePartners />

    <AboutSection />

    <FeaturesSection />

    <MeetFounderSection />

    <TestimonialSection />
    <div class="hero-bg bg-no-repeat -mt-[190px] pt-32 lg:pt-32">
      <ContactUsSection />
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  background: url("@/assets/images/hero-bg.png");
}

/* @media only screen and (max-width: 768px) {
  .hero-bg {
    background: unset;
  }
} */
</style>
