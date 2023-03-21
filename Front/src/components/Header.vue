<template>
    
    <div class="hidden md:flex w-full  bg-gray-100 dark:bg-gray-800 rounded-2xl h-20 justify-around place-items-center px-5">
        <div class="head w-full font-bold text-lg gradient-text">
            Good day!
        </div>

        <div class="time flex flex-col gap-0 justify-center place-items-center w-full">
            <span class="font-semibold text-lg text-blue-800 dark:text-gray-400" id="time"></span>
            <span class="font-light text-sm" id="date"></span>
        </div>

       <div class="profile flex gap-3 w-full h-full place-items-center justify-end transition-all duration-300 cursor-pointer hover:scale-95">
        <div class="flex flex-col"><h3 class="font-semibold">{{ user.name }} {{ user.surname }}</h3>
        <span class=" text-sm text-end text-blue-800">Edit Profile</span></div>
        <div class="flex place-items-center">
            <div class="image rounded-full bg-gray-600 w-14 h-14  flex place-items-center"><img class="w-12 m-auto h-12 rounded-full" v-bind:src="user.image" alt=""></div>
        </div>
       </div>
    </div>
</template>
<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import VueJwtDecode from 'vue-jwt-decode'


var time = 0;

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default {
    data(){
        return {
            user : {
                name:'',
                surname:'',
                image:'',
            }
        };
    },
    mounted(){
        initFlowbite();
        this.user = VueJwtDecode.decode(sessionStorage.getItem('token'))
        let time = document.getElementById('time')
        let date = document.getElementById('date')

        let id = setInterval(() => {
            time.innerHTML = new Date().getHours()+':'+new Date().getMinutes()+':'+ new Date().getSeconds();
            date.innerHTML = new Date().getDate() + ' '+monthNames[new Date().getMonth()] + ' '+new Date().getFullYear()
        }, 1000);
    },
    methods(){

    }
}


</script>

<style>
.gradient-text {
    /* background: #12c2e9; */
    background: linear-gradient(to right, #12c2e9 0%, #C471ED 50%, #F64F59 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
