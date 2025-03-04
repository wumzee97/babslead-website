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
      ]"
    >
      <div>
        <RouterLink to="/">
          <img
            src="@/assets/images/logo.png"
            class="p-8 h-28 pl-0 transition-all duration-300"
            :class="[
              isScrolled ? 'lg:h-[100px] pl-0' : '',

              isScrolled ? 'inline-block' : 'hidden',
            ]"
            alt=""
          />
          <img
            src="@/assets/images/logo-white.png"
            class="p-8 h-28 pl-0 transition-all duration-300"
            :class="[isScrolled ? 'lg:h-[100px] h-[70px] hidden ' : 'inline-block']"
            alt=""
          />
        </RouterLink>
      </div>
      <div
        class="hidden lg:flex gap-12"
        :class="isScrolled ? '!text-black' : ''"
      >
        <RouterLink
          class="text-xl hover:text-[#FAD536] transition-colors"
          to="/"
          :class="[
            'text-xl transition-colors ',
            route.name === RouteName.LandingPage
              ? '!text-[#FAD536] font-semibold'
              : '',
            
            'hover:text-[#FAD536]',
            isScrolled ? 'text-black' : 'text-white',
          ]"
          >Home
        </RouterLink>
        <RouterLink
          class="text-xl hover:text-[#FAD536] transition-colors"
          :class="[
            'text-xl transition-colors ',
            route.name === RouteName.AboutPage
              ? '!text-[#FAD536]  font-semibold'
              : '',
            'hover:text-[#FAD536]',
            isScrolled ? 'text-black' : 'text-white',
            
          ]"
          :to="{ name: RouteName.AboutPage }"
          >About Us</RouterLink
        >
        <RouterLink
          class="text-xl hover:text-[#FAD536] transition-colors"
          :class="[
            'text-xl transition-colors',
            route.name === RouteName.ProductsPage
              ? '!text-[#FAD536]  font-semibold'
              : '',
            
            'hover:text-[#FAD536]',
            isScrolled ? 'text-black' : 'text-white',
          ]"
          :to="{ name: RouteName.ProductsPage }"
          >Services</RouterLink
        >

        <RouterLink
          class="text-xl hover:text-[#FAD536] transition-colors"
          :to="{ name: RouteName.BlogPage }"
          :class="[
            'text-xl transition-colors',
            route.name === RouteName.BlogPage
              ? '!text-[#FAD536]  font-semibold'
              : '',
            
            'hover:text-[#FAD536]',
            isScrolled ? 'text-black' : 'text-white',
            
          ]"
          >Blog
        </RouterLink>
      </div>
      <div>
        <AppSubmitButton
          as="RouterLink"
          to="/#contact"
          class="hidden lg:inline-block"
          >Contact Us</AppSubmitButton
        >

        <MobileNav :is-scrolled="isScrolled" class="lg:hidden" />
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
