# vue-next


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
## vue3.0 composition API 熟悉 项目

### 创建项目

确保 使用vue-cli 4.2以上的版本 创建项目 使用默认配置

用插件的形式 `vue add vue-next` 使用下个阶段的vue版本

### 基本语法

#### setup 函数 代替之前的钩子 data 等

在setup中我们可以定义data  使用reactive 函数 去让他变成响应式的数据 最后return 出去

computed 可以让他变成计算属性
```
export default {
    setup(){
        const data = reactive({
            count:0,
            // 计算属性
            count2:computed(()=>{
                return data.count*2
            })
        })
        return{
            data
        }
    }
}
```
setup中也可以声明函数 一样需要return出去
```
...
setup(){
    
    function counter(){
        ...
    }

    return {
        counter
    }
}
```
return 出来的函数 或者变量 就可以在template 中使用  例如
```
<template>
<h1>count:{{ data.count  }}</h1>
</template>
```
### ref

用ref 包裹着的值 取值的时候得用.value 去访问
```
const index = ref(0)
console.log(index.value)
index.value++
```
如果在template 中 有一个
```
<div ref="second">222</div>
```
在setup中可以把div读出来
```
setup(){
       
        const second = ref()

        onMounted(()=>{
            console.log(second.value) // div
        })
        //unref
        //isRef
        //shallowRef
        // readonly 
        return {
            root,second
        }
    }
    
```

 还有readonly unref isRef shallowRef shallowReadonly 等api

### watch 
  在setup 中 watchEffect  watch
```
setup(){
        const data = reactive({
            message:"123"
        })
        //watch effect
        const stop = watchEffect(()=>{
            console.log(data.message)
        })
        // watch
        watch(()=>data.message,(newValue,old)=>{
            console.log('new:',newValue)
            console.log('old:',old)
        },{
            immediate:true,
            deep:true
        })
        const index = ref(0)
        function addMessage(){
            data.message += index.value
            index.value ++ ;
            if (index.value === 5) {
                stop()
            }
        }
        return {
            data,addMessage
        }
    }
```

### lifecycle

```
const MyComponent = {
  setup() {
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  }
}
```
beforeCreate -> use setup()

created -> use setup()

beforeMount -> onBeforeMount

mounted -> onMounted

beforeUpdate -> onBeforeUpdate

updated -> onUpdated

beforeDestroy -> onBeforeUnmount

destroyed -> onUnmounted

errorCaptured -> onErrorCaptured

#### new hooks

onRenderTracked

onRenderTriggered

### 自定义hooks
use 开头 的 hooks 文件

示例 provide inject 的简写

```
import { inject, provide } from "vue";
const store = Symbol()
export default function useStore(defaultStore = {}) {
    return inject(store,defaultStore)
}
export function provideStore(value){
    provide(store,value)
}
```
### vue-router 的使用

``` 
yarn add vue-router@next
```

```
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
```
在main.js 中 使用
```
createApp(App).use(router).mount('#app')
```
### 使用axios

### 使用vuex


