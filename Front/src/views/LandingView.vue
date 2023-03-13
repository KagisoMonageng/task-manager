<script setup>
import Landing from '../components/Landing.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})


</script>

<template>
    <Landing></Landing>
</template>