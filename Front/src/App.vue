<script setup>
import SideBar from './components/SideBar.vue'


import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <SideBar></SideBar>
</template>


