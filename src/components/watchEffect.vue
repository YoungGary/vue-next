<template>
  <div>
      <h1>watch:{{data.message}}</h1>
      <button @click="addMessage">+++</button>
  </div>
</template>

<script>
import { reactive, watchEffect, ref, watch } from 'vue'
export default {
    setup(){
        const data = reactive({
            message:"123"
        })
        const stop = watchEffect(()=>{
            console.log(data.message)
        })
        const index = ref(0)
        function addMessage(){
            data.message += index.value
            index.value ++ ;
            if (index.value === 5) {
                stop()
            }
        }
        watch(()=>data.message,(newValue,old)=>{
            console.log('new:',newValue)
            console.log('old:',old)
        },{
            immediate:true,
            deep:true
        })
        //监听多个属性 使用 数组
        
        return {
            data,addMessage
        }
    }
}
</script>

<style>

</style>