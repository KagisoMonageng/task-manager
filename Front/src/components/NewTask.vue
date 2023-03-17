<script>
import { initFlowbite } from 'flowbite'
import axios from 'axios'
export default{
    data(){},
    mounted(){
        initFlowbite();

    },

}
</script>
<template>
    <div class="wrapper w-full flex flex-col pt-8 gap-4 rounded-3xl bg-gray-100" style="height: 77.3%;">
        <div class="head px-8">
            <h1 class="font-bold text-xl gradient-text">Add a new task</h1>
        </div>
        <div class="form">
            <form  method="post">


            </form>
        </div>
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