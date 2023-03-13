<template>
    
    <div class="flex w-full  bg-gray-100 dark:bg-gray-800 rounded-2xl h-20 justify-around place-items-center px-5">
        <div class="relative flex place-items-center w-full">
            <input type="text" class="border-none rounded-full placeholder:text-sm pl-5 w-80" placeholder="Search here">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-400 -ml-8 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>

        <div class="time flex flex-col gap-0 justify-center place-items-center w-full">
            <span class="font-semibold text-lg text-blue-800 dark:text-gray-400" id="time"></span>
            <span class="font-light text-sm" id="date"></span>
        </div>

       <div class="profile flex gap-3 w-full h-full place-items-center justify-end transition-all duration-300 cursor-pointer hover:scale-95">
        <div class="flex flex-col"><h3 class="font-semibold">Kagiso Monageng</h3>
        <span class=" text-sm text-end text-blue-800">Edit Profile</span></div>
        <div class="flex place-items-center">
            <div class="flex justify-center place-items-center image rounded-full bg-gray-600 w-12 h-12 "><img class="w-11 h-11 m-auto rounded-full" src="https://images.unsplash.com/photo-1586196877083-6a4e8a995cf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80" alt=""></div>
        </div>
       </div>
    </div>
</template>
<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
    initFlowbite();
});
var time = 0;

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default {
    data(){
        return {
         
        };
    },
    mounted(){
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
