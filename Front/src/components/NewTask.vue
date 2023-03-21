<script>
import { initFlowbite } from 'flowbite'
import axios from 'axios'
import VueJwtDecode from 'vue-jwt-decode'

export default{
    data() {
        return {
            bg_color: '#C471ED',
            title :'',
            description: '',
            due:''
        }
    },
    mounted(){
        initFlowbite();
    },methods:{
        async submit() {

            console.log(this.description)
            let user = VueJwtDecode.decode(sessionStorage.getItem('token'))
            try {
                const res = await axios.post('tasks/'+user.user_id, {
                    color: this.bg_color,
                    due: this.due,
                    title: this.title,
                    description : this.description
                });
                console.log(res.data.message)
                this.$router.push('/dashboard')
            } catch (error) {
                
                console.log(error.response.data.message)
            }
        }       
    }

}
</script>
<template>
    <div class="wrapper w-full flex flex-col pt-8 gap-4 rounded-3xl bg-gray-50" style="height: 77.3%;">
        <div class="head px-8">
            <h1 class="font-bold text-xl" :style="{color:bg_color}">Add a new task</h1>
        </div>
        <form @submit.prevent="submit" action="" method="post" class="w-full h-full gap-5  px-8 flex justify-start place-items-start">
            <div class="left h-4/5" style="width: 70%;">

                <textarea name="title" id="title" v-model="title" class="w-full mb-2 border-none bg-transparent rounded-lg focus:outline-none focus:border-none" placeholder="Title goes in here ..."></textarea>

                <textarea name="description" id="description" v-model="description" class="w-full h-24 mb-2 border-none bg-transparent rounded-lg focus:outline-none focus:border-none" placeholder="Description goes in here ..."></textarea>

                <div class="flex justify-between w-full">
                    <div class="flex"></div>
                    <div class="flex gap-2 place-items-center">
                        <label for="due" class="font-medium">Due Date</label>
                        <input type="date" name="due" id="due" v-model="due" class="border-none bg-transparent rounded-lg" >
                    </div>
                </div>

                <button type="submit" class="w-28 py-2 rounded-lg font-semibold text-white" :style="{ backgroundColor:bg_color }"> Save</button>
            </div>

            <div class="right h-4/5" style="width: 30%;">
                <p class="font-medium mb-3">Select a color </p>

                
                <div class="grid grid-cols-4 gap-y-4">

                        <input type="radio" class="w-16 h-9 border-none rounded-md" name="color" v-model="bg_color" value="#C471ED" checked/>
                
                    
                        <input type="radio" class="w-16 h-9 border-none rounded-md" name="color" v-model="bg_color" value="#F64F59"/>
                
                    
                        <input type="radio" class="w-16 h-9 border-none rounded-md" name="color" v-model="bg_color" value="#1ed81e"/>
                
                    
                        <input type="radio" class="w-16 h-9 border-none rounded-md" name="color" v-model="bg_color" value="#e7d216"/>
                
                    
                        <input type="radio" class="w-16 h-9 border-none rounded-md" name="color" v-model="bg_color" value="#467e3e"/>
                
                    
                        <input type="radio" class="w-16 h-9 border-none rounded-md" name="color" v-model="bg_color" value="#1ae7e7"/>
                
                    
                        <input type="radio" class="w-16 h-9 border-none rounded-md" name="color" v-model="bg_color" value="#d81ebf"/>
                
                    
                        <input type="radio" class="w-16 h-9 border-none rounded-md" name="color" v-model="bg_color" value="#4c4ff0"/>

                </div>
                
            </div>





        </form>
        
        
        
    </div>
    
</template>

<style lang="scss" scoped>
input[type="radio"]
{
    outline: none;
    &:nth-child(1n){
        background-color: #C471ED;
    }
    &:nth-child(2n){
        background-color: #F64F59;
    }
    &:nth-child(3n){
        background-color: #1ed81e;
    }
    &:nth-child(4n){
        background-color: #e7d216;
    }
    &:nth-child(5n){
        background-color: #56ac4a;
    }
    &:nth-child(6n){
        background-color: #1ae7e7;
    }
    &:nth-child(7n){
        background-color: #d81ebf;
    }
    &:nth-child(8n){
        background-color: #4c4ff0;
    }
}

.gradient-text {
    background: #12c2e9;
    background: linear-gradient(to right, #12c2e9 0%, #C471ED 50%, #F64F59 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>