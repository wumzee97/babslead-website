<script lang="ts" setup>
import { RouteName } from "@/utils/enums";
import AppSubmitButton from "./AppSubmitButton.vue";
import { useRoute } from "vue-router";
import MobileNav from "./MobileNav.vue";
import { ref, onMounted, onUnmounted } from "vue";

const route = useRoute();
const isScrolled = ref(false);
let lastScrollPosition = 0;

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;
  isScrolled.value =
    currentScrollPosition > 0 && currentScrollPosition < lastScrollPosition;
  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="relative w-full flex justify-center mb-32">
    <nav
      class="container max-w-7xl mx-auto flex justify-between items-center z-50 px-5 2xl:px-0 top-0 fixed transition-all duration-300"
      :class="[
        isScrolled ? 'bg-white shadow-lg py-2 !px-6' : 'py-0 bg-transparent',
        (route.name === RouteName.AboutPage || route.name === RouteName.ProductsPage) && !isScrolled
          ? 'text-[#FFFBEB]'
          : 'text-inherit',
      ]"
    >
      <div>
        <RouterLink to="/">
          <img
            src="@/assets/images/logo.png"
            class="lg:h-[138px] h-[98px] transition-all duration-300"
            :class="[isScrolled ? 'lg:h-[100px] h-[70px]' : '', route.name ===RouteName.LandingPage ? 'inline-block' : '']"
            alt=""
          />
          <!-- <img
            src="@/assets/images/logo-white.png"
            class="p-8 h-28 transition-all duration-300 "
            :class="[isScrolled ? '!lg:h-[100px] h-[70px]' : '',route.name === RouteName.AboutPage || route.name === RouteName.ProductsPage ? 'inline-block':'hidden']"
            alt=""
          /> -->
        </RouterLink>
      </div>
      <div class="hidden lg:flex gap-12">
        <RouterLink
          class="text-xl hover:text-[#FAD536] transition-colors"
          :class="[
            'text-xl transition-colors',
            route.name === RouteName.AboutPage ? 'text-[#FAD536]' : '',
            'hover:text-[#FAD536]',
          ]"
          :to="{ name: RouteName.AboutPage }"
          >About Us</RouterLink
        >
        <RouterLink
          class="text-xl hover:text-[#FAD536] transition-colors"
          :class="[
            'text-xl transition-colors',
            route.name === RouteName.ProductsPage ? 'text-[#FAD536]' : '',
            'hover:text-[#FAD536]',
          ]"
          :to="{ name: RouteName.ProductsPage }"
          >Services</RouterLink
        >
        <RouterLink
          class="text-xl hover:text-[#FAD536] transition-colors"
          to="/#packages"
          >Packages </RouterLink
        >
        <RouterLink
          class="text-xl hover:text-[#FAD536] transition-colors"
          to="/#faq"
          >Blog </RouterLink
        >
      </div>
      <div>
        <AppSubmitButton
          as="RouterLink"
          to="/#contact"
          class="hidden lg:inline-block"
          >Contact Us</AppSubmitButton
        >

        <MobileNav class="lg:hidden" />
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  backdrop-filter: blur(8px);
}

nav.bg-white {
  backdrop-filter: none;
}
</style>
