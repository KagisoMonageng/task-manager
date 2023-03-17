import { createRouter, createWebHistory, useRouter } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import Dashboad from '../views/Dashboard.vue'
import Auth from '../views/Auth.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Tasks from '../components/Tasks.vue'
import NewTask from '../components/NewTask.vue'
import Inbox from '../components/Inbox.vue'
import Users from '../components/Users.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', component: LandingView,},
    {path:'/dashboard', component: Dashboad,children:[{path:'',component: Tasks},{path:'new-task',component: NewTask},{path:'inbox', component: Inbox},{path:'users', component: Users}]},
    {path:'/sign-up', component: Register},
    {path:'/sign-in',component: Login},
    
   
  ]
})

export default router
