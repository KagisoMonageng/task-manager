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
            inProgress: [],
            today: new Date()
        }
    }, async created() {
        try {
            let response = await axios.get('tasks/' + VueJwtDecode.decode(sessionStorage.getItem('token')).user_id)
            this.tasks = response.data
        } catch (error) {
            console.log(error)
        }

        try {
            let response = await axios.get('tasks/in-progress/' + VueJwtDecode.decode(sessionStorage.getItem('token')).user_id)
            this.inProgress = response.data;
        } catch (error) {
            console.log(error)
        }
    },
     mounted() {
        initFlowbite();
    },
    methods: {
        async refresh() {
            try {
                let response = await axios.get('tasks/' + VueJwtDecode.decode(sessionStorage.getItem('token')).user_id)
                let res = await axios.get('tasks/in-progress/' + VueJwtDecode.decode(sessionStorage.getItem('token')).user_id)
                this.inProgress = res.data;
                this.tasks = response.data
            } catch (error) {
                console.log(error)
            }

        },
        async deleteTask(task_id) {
            try {
                let response = await axios.delete('tasks/' + task_id)
                this.refresh()
            } catch (error) {
                console.log(error)
            } finally {
                this.refresh()
            }
        },

        setProgress() { },
        dateFormat(date) {
            let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let unformated = new Date(date);
            return unformated.getDate() + " " + months[unformated.getMonth()] + " " + unformated.getFullYear();
        },
        async setColor( color) {
            try {
                let data = {
                    color: color
                }
                let response = await axios.put('tasks/color/' + sessionStorage.getItem('selected'), data)
                this.refresh()
            } catch (error) {
                console.log(error)
            } finally {
                this.refresh()
            }

        }, async setProgress( status) {
            try {
                let data = {
                    status: status
                }
                let response = await axios.put('tasks/status/' +  sessionStorage.getItem('selected'), data)
                this.refresh()
            } catch (error) {
                console.log(error)
            } finally {
                this.refresh()
            }
        },
        selected(task_id, ) {
            sessionStorage.setItem('selected', task_id)
        }
    },
}
</script>

<template>
    <div class="wrapper w-full flex flex-col gap-4" style="height: 77.3%;">
        <div class="upper w-full py-5 px-12 rounded-3xl bg-gray-50" style="height: 70%;">
            <div class="flex mb-2 w-full justify-between">
                <div class="header flex flex-col">
                    <h1 class="font-bold text-xl gradient-text">My tasks</h1>
                    <p>{{ tasks.length }} total tasks</p>
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


                <!-- Data goes here -->
                <div class="flex w-full justify-start mb-2"><span v-on:click="refresh()"
                        class="hover:bg-slate-200 cursor-pointer p-2 rounded-lg items-center content-center"><i
                            class="fi fi-rr-rotate-right"></i> Refresh</span></div>
                <table class="table w-full border-collapse">
                    <thead class="">
                        <tr class="">
                            <th class=""></th>
                            <th class="text-left">Title</th>
                            <th class="text-left">Desc</th>
                            <th class="text-left">Due date</th>
                            <th class="text-left ">Status</th>
                            <th class="text-left"></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="task of tasks"
                            class="table-row h-16 bg-gray-100 rounded-xl hover:bg-gray-200 cursor-pointer">
                            <td class="px-3">

                                <button @click="selected(task.task_id)" id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                                    :style="{ backgroundColor: task.color }"
                                    class="text-whit font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button"></button>

                                <!-- <div class="px-2 py-3 rounded-lg" :style="{backgroundColor:task.color}"></div> -->
                            </td>

                            <td class="text-left pl-3 title w-52">{{ task.title }}</td>
                            <td class="text-left pl-3 w-60">{{ task.description }} </td>
                            <td class="text-left pl-3">{{ dateFormat(task.due) }}</td>
                            <td class="text-left pl-2 w-44">
                                <button @click="selected(task.task_id)" id="dropdownDefaultButton" data-dropdown-toggle="dropdown2"
                                    class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{
                                        task.status }}</button>

                            </td>
                            <td class="text-lg ">
                                <div @click="deleteTask(task.task_id)"
                                    class="btn hover:bg-gray-200 transition-all duration-500 hover:text-white hover:scale-105 w-10 h-10 rounded-full flex justify-center place-items-center">
                                    <i class="fi fi-rr-trash my-auto"></i>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>

                <!-- Dropdown menu -->
                <div id="dropdown" class="z-10 hidden backdrop-blur-2xl  rounded-lg shadow w-fit dark:bg-gray-700">
                    <ul class="py-2 px-2 flex flex-col gap-2" aria-labelledby="dropdownDefaultButton">
                        <li @click="setColor('#F64F59')">
                            <div class="w-8 h-5 rounded-lg" style="background-color: #F64F59;"></div>
                        </li>
                        <li @click="setColor('#C471ED')">
                            <div class="w-8 h-5 rounded-lg" style="background-color: #C471ED;"></div>
                        </li>
                        <li @click="setColor('#1ed81e')">
                            <div class="w-8 h-5 rounded-lg" style="background-color: #1ed81e;"></div>
                        </li>
                    </ul>
                </div>


                <div id="dropdown2" class="z-10  hidden  backdrop-blur-md  rounded-lg shadow dark:bg-gray-700">
                    <ul class="flex flex-col gap-2 w-fit px-3 py-2" aria-labelledby="dropdownDefaultButton">
                        <li @click="setProgress('Completed')">
                            <div
                                class="rounded-lg py-1 px-2 text-xs transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                                Completed</div>
                        </li>
                        <li @click="setProgress('In Progress')">
                            <div
                                class="rounded-lg py-1 px-2 text-xs transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                                In Progress</div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>


        <div class="bottom flex justify-center gap-4" style="height: 30%;">
            <div class=" w-full py-4 px-12 flex flex-col justify-center pt-8 gap-4 rounded-3xl bg-gray-50 h-full">
                <div class="flex justify-center -space-x-32">
                    <div v-for="task of inProgress"
                        class="in-progress w-40 h-24 cursor-pointer transition-all p-4 duration-500 hover:-translate-y-4 hover:shadow-md rounded-3xl">
                        <p class="text-white w-full font-medium overflow-hidden text-ellipsis">{{ task.description }}</p>
                        <p class="text-white font-light">{{ dateFormat(task.due) }}</p>
                    </div>


                </div>
                <div class="w-fit mx-auto">
                    <p class="bg-gray-300 text-center px-4 rounded-full font-semibold gradient-text">Your tasks in progress
                    </p>
                </div>
            </div>

            <div class="w-full py-4 px-12 flex flex-col justify-center pt-8 gap-4 rounded-3xl bg-gray-50 h-full">
                <VDatePicker v-model="today" expanded view="weekly" borderless transparent />
                <p class="bg-gray-300 text-center px-4 rounded-full font-semibold gradient-text -mt-4">Calender to plan your
                    week</p>

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
}
</style>