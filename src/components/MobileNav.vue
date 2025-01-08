<script setup lang="ts">
import { ref } from "vue";
import { TransitionRoot } from "@headlessui/vue";
import AppSubmitButton from "./AppSubmitButton.vue";
import { useRoute } from "vue-router";
import { RouteName } from "@/utils/enums";

const isOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Blog", path: "/blog" },
];
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Hamburger Button -->
    <button
      @click="toggleMenu"
      class="relative z-50 px-2 pb-5 focus:outline-none"
      aria-label="Toggle Menu"
    >
      <div class="w-[25px] h-5 relative flex flex-col justify-between">
        <span
          class="w-full h-[3px] bg-primary-500 transform transition-all duration-300"
          :class="{
            'rotate-45 translate-y-2 bg-black': isOpen,
            'bg-white': route.name !== RouteName.LandingPage,
            '!bg-black': route.name !== RouteName.LandingPage && isOpen,
          }"
        ></span>
        <span
          class="w-full h-[3px] bg-primary-500 transition-all duration-300"
          :class="{
            'opacity-0': isOpen,
            'bg-white': route.name !== RouteName.LandingPage,
            '!bg-black': route.name !== RouteName.LandingPage && isOpen,
          }"
        ></span>
        <span
          class="w-full h-[3px] bg-primary-500 transform transition-all duration-300"
          :class="{
            '-rotate-45 -translate-y-2 bg-black': isOpen,
            'bg-white': route.name !== RouteName.LandingPage,
            '!bg-black': route.name !== RouteName.LandingPage && isOpen,
          }"
        ></span>
      </div>
    </button>

    <!-- Mobile Menu -->
    <TransitionRoot appear :show="isOpen" as="template">
      <div
        class="fixed h-screen inset-0 z-40 bg-white overflow-hidden"
        :class="{ 'pointer-events-none': !isOpen }"
      >
        <div
          class="overflow-hidden px-6 py-20 flex flex-col space-y-8 transition-all duration-300 min-h-screen"
          :class="[
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full',
          ]"
        >
          <nav class="flex flex-col space-y-6">
            <RouterLink
              @click="isOpen = false"
              v-for="item in menuItems"
              :key="item.title"
              :to="item.path"
              class="text-2xl font-normal hover:text-gray-600 transition-colors duration-200 border-b border-[#E6EAEE] pb-4"
            >
              {{ item.title }}
            </RouterLink>
          </nav>

          <div>
            <AppSubmitButton as="RouterLink" to="/#contact" @click="isOpen = false" class="!w-auto"
              >Contact Us</AppSubmitButton
            >
          </div>
        </div>
      </div>
    </TransitionRoot>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
