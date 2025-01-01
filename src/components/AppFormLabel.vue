<script lang="ts" setup>
const props = defineProps<{
    for?: string
}>()
</script>
<template>
    <p class=" text-sm  text-[#666666] dark:text-dark-text-subdued"> 
        <slot></slot>
    </p>
</template>