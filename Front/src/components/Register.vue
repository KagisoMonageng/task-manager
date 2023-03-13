<script >
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
export default {
        name:'Login',
        data() { 
            return{
                password:'',
                email:'',
                email:'',
                email:'',
                email:''

            }
        },mounted(){
            initFlowbite();
        },
        methods:{
            submit(){
                let data = {
                    password : this.password,
                    email: this.email
                }


            }
        },
    }
</script>

<template>
    Register Works
    
</template>