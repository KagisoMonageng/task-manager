<script>
import { onMounted, watch } from 'vue'
import { initFlowbite } from 'flowbite'
import axios from 'axios'
import VueJwtDecode from 'vue-jwt-decode'
export default {
    name: 'Tasks',
    data() {
        return {
            tasks: [],
            today: new Date()
        }
    }, created() {
        initFlowbite();
    }, mounted() {

    },
    async watch() {
        try {
            var tasks = await axios.get('tasks/' + VueJwtDecode.decode(sessionStorage.getItem('token')).user_id)
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        deleteTask() { },
        setProgress() { },
    },
}
</script>

<template>
    <div class="wrapper w-full flex flex-col gap-4" style="height: 77.3%;">
        <div class="upper w-full py-5 px-12 rounded-3xl bg-gray-50" style="height: 70%;">
            <div class="flex mb-2 w-full justify-between">
                <div class="header flex flex-col">
                    <h1 class="font-bold text-xl gradient-text">My tasks</h1>
                    <p>100,909 total tasks</p>
                </div>
                <div class="flex gap-5 left">
                    <div class="header flex flex-col">
                        <h1 class="font-bold text-xl text-center ">100</h1>
                        <p class="text-center">Done</p>
                    </div>
                    <div class="line w-px h-full bg-gray-200"></div>
                    <div class="header flex flex-col">
                        <h1 class="font-bold text-xl text-center">60</h1>
                        <p class="text-center">In progress</p>
                    </div>
                </div>
            </div>


            <div class="relative">
                <div class="flex items-center justify-between pb-4 ">
                    <div>
                        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction"
                            class="inline-flex items-center text-gray-500  border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button">
                            <span class="sr-only">Action button</span>
                            Action
                            <svg class="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                                </path>
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div id="dropdownAction"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownActionButton">
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate
                                        account</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete
                                    User</a>
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        </div>
                        <input type="text" id="table-search-users"
                            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for a task">
                    </div>
                </div>

                <!-- Data goes here -->
                <table class="table w-full border-collapse">
                    <thead class="">
                        <tr class="">
                            <th class="w-1/5 text-left">Title</th>
                            <th class="w-2/5 text-left">Desc</th>
                            <th class="w-1/5 text-left">Due date</th>
                            <th class="text-left">Status</th>
                            <th class="w-16 text-left"></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr class="table-row h-16 bg-gray-100 rounded-xl">
                            <td class="w-1/5 text-left pl-3 title">Get a new pet</td>
                            <td class="w-2/5 text-left pl-3">Don't forget to name it Yahoo </td>
                            <td class="w-1/5 text-left pl-3">22 Mar 2023</td>
                            <td class=" text-left pl-3"><span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Completed</span></td>
                            <td class="w-16 text-lg "><div class="btn hover:bg-gray-200 transition-all duration-500 hover:text-white hover:scale-105 w-10 h-10 rounded-full flex justify-center place-items-center"><i class="fi fi-rr-trash my-auto"></i></div></td>
                        </tr>
                        <tr class="table-row h-16 bg-gray-100 rounded-xl">
                            <td class="w-1/5 text-left pl-3 title">Get a new pet</td>
                            <td class="w-2/5 text-left pl-3">Don't forget to name it Yahoo </td>
                            <td class="w-1/5 text-left pl-3">22 Mar 2023</td>
                            <td class=" text-left pl-3"><span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Completed</span></td>
                            <td class="w-16 text-lg "><div class="btn hover:bg-gray-200 transition-all duration-500 hover:text-white hover:scale-105 w-10 h-10 rounded-full flex justify-center place-items-center"><i class="fi fi-rr-trash my-auto"></i></div></td>
                        </tr>
                        <tr class="table-row h-16 bg-gray-100 rounded-xl">
                            <td class="w-1/5 text-left pl-3 title">Get a new pet</td>
                            <td class="w-2/5 text-left pl-3">Don't forget to name it Yahoo </td>
                            <td class="w-1/5 text-left pl-3">22 Mar 2023</td>
                            <td class=" text-left pl-3"><span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Completed</span></td>
                            <td class="w-16 text-lg "><div class="btn hover:bg-gray-200 transition-all duration-500 hover:text-white hover:scale-105 w-10 h-10 rounded-full flex justify-center place-items-center"><i class="fi fi-rr-trash my-auto"></i></div></td>
                        </tr>
                        

                    </tbody>

                </table>

            </div>
        </div>


        <div class="bottom flex justify-center gap-4" style="height: 30%;">
            <div class=" w-full py-4 px-12 flex flex-col justify-center pt-8 gap-4 rounded-3xl bg-gray-100 h-full">
                <div class="flex justify-center -space-x-32">
                    <div
                        class="in-progress w-40 h-24 cursor-pointer transition-all p-4 duration-300 hover:-translate-y-2 hover:shadow-md rounded-3xl">
                        <p class="text-white w-full font-medium overflow-hidden text-ellipsis">Start the day on a good note
                            to get a nice life and enjoy it</p>
                        <p class="text-white font-light">20 Mar 2020</p>
                    </div>
                    <div
                        class="in-progress w-40 h-24 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-md rounded-3xl">
                        <p class="text-white w-full font-medium overflow-hidden text-ellipsis">Start the day on a good note
                            to get a nice life and enjoy it</p>
                        <p class="text-white font-light">20 Mar 2020</p>
                    </div>
                    <div
                        class="in-progress w-40 h-24 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-md rounded-3xl">
                        <p class="text-white w-full font-medium overflow-hidden text-ellipsis">Start the day on a good note
                            to get a nice life and enjoy it</p>
                        <p class="text-white font-light">20 Mar 2020</p>
                    </div>
                    <div
                        class="in-progress w-40 h-24 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-md rounded-3xl">
                        <p class="text-white w-full font-medium overflow-hidden text-ellipsis">Start the day on a good note
                            to get a nice life and enjoy it</p>
                        <p class="text-white font-light">20 Mar 2020</p>
                    </div>

                </div>
                <div class="w-fit mx-auto">
                    <p class="bg-gray-300 text-center px-4 rounded-full font-semibold gradient-text">Your tasks in progress
                    </p>
                </div>
            </div>

            <div class="w-full py-4 px-12 flex flex-col justify-center pt-8 gap-4 rounded-3xl bg-gray-100 h-full">
                <VDatePicker v-model="today" expanded view="weekly" borderless transparent />
                <p class="bg-gray-300 text-center px-4 rounded-full font-semibold gradient-text -mt-4">Calender to plan your week</p>
                
            </div>


        </div>



    </div>
</template>

<style lang="scss" scoped>
thead th:first-child {
    border-top-left-radius: 15px;
}

thead th:last-child {
    border-top-right-radius: 15px;
}

tbody tr:last-child>td:first-child {
    border-bottom-left-radius: 15px;
}

tbody tr:last-child>td:last-child {
    border-bottom-right-radius: 15px;
}

thead tr {
    background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
    color: white;

    & th {
        font-weight: bold;
        padding-left: 12px;
    }

}

.gradient-text {
    background: #12c2e9;
    background: linear-gradient(to right, #12c2e9 0%, #C471ED 50%, #F64F59 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;


}



.in-progress {
    @apply bg-gray-300
}

.in-progress {
    & p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    &:nth-child(1) {
        background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
        z-index: 4;
    }

    &:nth-child(2) {
        background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
        opacity: 0.75;
        z-index: 3;
    }

    &:nth-child(3) {
        background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
        opacity: 0.50;
        z-index: 2;
    }

    &:nth-child(4) {
        background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
        opacity: 0.25;
        z-index: 1;
    }
}</style>