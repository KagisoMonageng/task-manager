<script>
import Header from '../components/Header.vue'
import NewTask from '../components/NewTask.vue'
import Tasks from '../components/Tasks.vue'
import Inbox from '../components/Inbox.vue'
import Users from '../components/Users.vue'


import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import axios from 'axios'
import router from '../router'

export default {
   data() {
      return {
         games: []
      }
   },
   async created() {
    
   },
   mounted() {
      initFlowbite();
   },components:{
      Header, Tasks, NewTask, Inbox, Users
   },
   methods: {
      signOut() {
         sessionStorage.clear()
         this.$router.push('/sign-in')
      }
   },
}

</script>

<template>
   <!-- <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span class="sr-only">Open sidebar</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
         <path clip-rule="evenodd" fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
         </path>
      </svg>
   </button> -->

   <aside id="default-sidebar" style="height: 90%;"
      class="fixed top-5 left-5 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-100 rounded-2xl dark:bg-gray-800">
         <a href="https://flowbite.com/" class="flex items-center mb-10">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap gradient-text">Mercury</span>
         </a>
         <ul class="space-y-2">
            <li>
               <RouterLink to="/dashboard/"><a href="#"
                  class="flex place-items-center items-center p-2 transition-all duration-500 hover:scale-105 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <i class="fi fi-rr-apps"></i>
                  <span class="ml-3 font-semibold">My Tasks</span>
               </a></RouterLink>
            </li>
            <li>
               <RouterLink to="/dashboard/new-task"><a href="#"
                  class="flex items-center p-2 transition-all duration-500 hover:scale-105 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <i class="fi fi-rr-add-document"></i>
                  <span class="flex-1 ml-3 whitespace-nowrap font-semibold">New Task</span>
               </a></RouterLink>
            </li>
            <li>
               <RouterLink to="/dashboard/inbox"><a href="#"
                  class="flex items-center p-2 transition-all duration-500 hover:scale-105 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <i class="fi fi-rr-inbox-in"></i>
                  <span class="flex-1 ml-3 whitespace-nowrap font-semibold">Inbox</span>
                  <span
                     class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium  bg-blue-100 rounded-full dark:bg-blue-900"><p class=" gradient-text">3</p> </span>
               </a></RouterLink>
            </li>
            <li>
               <RouterLink to="/dashboard/users"><a href="#"
                  class="flex items-center transition-all duration-500 hover:scale-105 p-2 text-base font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <i class="fi fi-rr-users-alt"></i>
               <span class="flex-1 ml-3 whitespace-nowrap font-semibold">Users</span>
            </a></RouterLink>
               
         </li>
         <li>
            <a @click="signOut()"
               class="flex items-center p-2 text-base cursor-pointer transition-all duration-500 hover:scale-105 font-normal  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <i class="fi fi-rr-exit"></i>
               <span class="flex-1 ml-3 whitespace-nowrap font-semibold">Sign Out</span>
            </a>
         </li>
         
      </ul>
   </div>
</aside>

<div class="px-4 flex flex-col gap-3 sm:ml-64 top-5 h-full fixed left-5 w-4/5">
   <Header></Header>
   <RouterView />
</div>

</template>

<style lang="scss" scoped>
.gradient-text {
    background: #12c2e9;
    background: linear-gradient(to right, #12c2e9 0%, #C471ED 50%, #F64F59 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>

