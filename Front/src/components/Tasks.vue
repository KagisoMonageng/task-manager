<script>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import axios from 'axios'
    export default {
        name:'Tasks',
        data() { 
            return{
                tasks :[]
            }
        },mounted(){
            initFlowbite();
        },
        created(){
            axios.get('tasks')

        },
        methods:{
            
            
        },
    }
</script>

<template>
    <span>Tasks works!</span>
</template>