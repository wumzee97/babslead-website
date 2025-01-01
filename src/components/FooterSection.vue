<script lang="ts" setup>
import IconInstagram from './icons/IconInstagram.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconPinterest from './icons/IconPinterest.vue';
import IconTiktok from './icons/IconTiktok.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconYoutube from './icons/IconYoutube.vue';
</script>

<template>
  <footer class=" bg-primary-500 p-12 lg:p-16 items-center gap-12 flex justify-between flex-col lg:flex-row">
    <p class="text-[#fff]">{{new Date().getFullYear()}} Copyright Reserved.</p>

    <div class="flex gap-10">
        <IconInstagram />
        <IconYoutube />
        <IconLinkedin />
        <IconTiktok />
        <IconPinterest />
        <IconTwitter />
    </div>
  </footer>
</template>
