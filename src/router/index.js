import {createRouter, createWebHistory} from 'vue-router'

const routes =[
    {
        path:'/',
        component:()=>import('../components/HelloWorld.vue')
    },
    {
        path:'/parent',
        component:()=>import('../components/parent.vue')
    }
]


export default createRouter({
    history:createWebHistory(),
    routes
})