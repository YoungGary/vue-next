<template>
  <div class="hello">
    <h1>count:{{ data.count  }}</h1>
    <h2>{{msg}}</h2>
    <h2>computed:{{data.count2}}</h2>
    <button @click="add">+++</button>
    <br>
    <h2>count:{{count}}</h2>
   <h2>count3:{{count3}}</h2>
    <button @click="add3">+++</button> 
  </div>
</template>

<script>
import { reactive, computed ,ref} from 'vue'
export default {
  props:{
    msg:{
      type:String,
      required:true
    }
  },
  setup(props,context){
    console.log(props.msg)
    console.log(context)
    const data = reactive({
      count:0,
      // 计算属性
      count2:computed(()=>{
        return data.count*2
      })
    })
    const count = ref(0);
    const count3 = computed({
      set(val){
        count.value = val
      },get(){
        return count.value*3
      }
    })
    function add(){
      data.count ++ 
    }
    function add3(){
      count3.value++ 
    }
    return {
      data,
      add,add3,count,count3

    }
  }
}
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
