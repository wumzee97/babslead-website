<script setup lang="ts">
// @ts-nocheck
import { useRoute, RouterView } from "vue-router";
import { useHead } from "@vueuse/head";
import { computed, watch } from "vue";

const route = useRoute();

const pageTitle = computed(() => route.meta.title || "BabsLead");
const pageDescription = computed(
  () => route.meta.description || "Transforming Personal Brand into a Traffic Machine"
);
const ogImage = computed(
  () => route.meta.ogImage || "https://babslead.com/babslead.jpg"
);

useHead({
  title: 'BabsLead | ' + pageTitle.value,
  meta: [
    { name: "description", content: pageDescription.value },
    { property: "og:title", content: pageTitle.value },
    { property: "og:description", content: pageDescription.value },
    { property: "og:image", content: ogImage.value }, // Open Graph image
    { property: "og:type", content: "website" },
    { property: "og:url", content: window.location.href }, // Dynamic URL
    { name: "twitter:card", content: "summary_large_image" }, // Twitter card
    { name: "twitter:title", content: pageTitle.value },
    { name: "twitter:description", content: pageDescription.value },
    { name: "twitter:image", content: ogImage.value },
  ],
});

// Watch for route changes and update dynamically
watch(route, () => {
  useHead({
    title: 'BabsLead | ' + pageTitle.value,
    meta: [
      { name: "description", content: pageDescription.value },
      { property: "og:title", content: pageTitle.value },
      { property: "og:description", content: pageDescription.value },
      { property: "og:image", content: ogImage.value },
    ],
  });
});
</script>

<template>
  <RouterView />
</template>
<style>
html,
body {
  font-family: "Poppins", sans-serif;
}
</style>
