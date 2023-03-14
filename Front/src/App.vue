<script >
import SideBar from './components/SideBar.vue';

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

export default{
    data() {
        return { isLoggedIn: false };
    },
    mounted() {
        
    },watch(){
        if (sessionStorage.getItem("token")) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    },
    created() {
        initFlowbite();
    },
    components: { SideBar }
}
</script>

<template>
  <RouterView v-if="isLoggedIn == false"/>
  <SideBar v-if="isLoggedIn"></SideBar>
</template>


