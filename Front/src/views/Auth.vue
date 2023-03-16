<style>



</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="flex">
        <div class="flex flex-col">
            Auth Works
            <RouterLink to="/sign-in">Sign In</RouterLink>
            <RouterLink to="/sign-up">Sign Up</RouterLink>
        </div>
        <RouterView />
    </div>

</template>