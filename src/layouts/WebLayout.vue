<script lang="ts" setup>
import { RouterView } from "vue-router";
import FooterSection from "@/components/FooterSection.vue";
import WebNavBar from "@/components/WebNavBar.vue";

import { ref } from "vue";
const showCookiePopUp = ref(true);
</script>

<template>
  <WebNavBar />
  <RouterView></RouterView>
  <FooterSection />
  
</template>
