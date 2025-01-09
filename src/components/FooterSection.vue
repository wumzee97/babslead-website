<script lang="ts" setup>
import IconInstagram from "./icons/IconInstagram.vue";
import IconLinkedin from "./icons/IconLinkedin.vue";
import IconPinterest from "./icons/IconPinterest.vue";
import IconTiktok from "./icons/IconTiktok.vue";
import IconTwitter from "./icons/IconTwitter.vue";
import IconYoutube from "./icons/IconYoutube.vue";
</script>

<template>
  <footer
    class="bg-primary-500 p-12 lg:p-16 items-center gap-12 flex justify-between flex-col lg:flex-row"
  >
    <p class="text-[#fff]">
      {{ new Date().getFullYear() }} Copyright Reserved.
    </p>

    <div class="flex gap-10">
      <!-- <IconInstagram />
        <IconYoutube /> -->
      <a
        href="https://www.linkedin.com/company/101588921/admin/dashboard/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconLinkedin />
      </a>
      <!-- <IconTiktok />
        <IconPinterest /> -->
      <a href="https://x.com/BabsLead" target="_blank">
        <IconTwitter />
      </a>
    </div>
  </footer>
</template>
