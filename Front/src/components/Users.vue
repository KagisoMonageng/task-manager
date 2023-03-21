<template>
    <div class="wrapper w-full flex flex-col pt-8 pb-7 gap-4 rounded-3xl bg-gray-50 px-8" style="height: 77.3%;">

        <div class="relative flex place-items-center w-full">
            <input type="text" class="border-none rounded-full placeholder:text-sm pl-5 w-80" placeholder="Search here">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-400 -ml-8 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>

        <div class="users w-full grid grid-cols-4 gap-2 ">
            <div v-for="user of users" class="user hover:scale-105 duration-300 transition-all cursor-pointer hover:shadow-sm h-16 flex justify-between rounded-2xl bg-slate-300 px-4">
                <div class="left flex w-fit gap-4 justify-start place-items-center">
                    <img :src="user.image" alt="" srcset="" class="w-11 h-11 object-cover rounded-full">
                    <div class="flex flex-col">
                        <p class="font-bold ">{{ user.name }} {{ user.surname }}</p>
                        <p class="text-xs w-full ">{{ user.email }}</p>
                    </div>
                </div>
            </div> 

        </div>
    </div>
</template>
<script>
import Axios from "axios"
    export default {
        name: 'Users',
        data() {
            return {
                users: []
            }
        },async mounted () {
            try {
                this.users = await (await Axios.get('account')).data;
                console.log(this.users)
            } catch (error) {
                console.log(error)
            }
        },
        methods: {
            name() {  
            }
        },components: {
            
        },
        
    }
</script>

<style lang="scss" scoped>
.user{
    &:nth-child(1n){
        @apply bg-gray-200
    }
    &:nth-child(2n){
        @apply bg-gray-100;
    }
}

.gradient-text {
    background: #12c2e9;
    background: linear-gradient(to right, #12c2e9 0%, #C471ED 50%, #F64F59 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>