import { reactive, toRefs } from "vue";

// use 开头
export default function useCounter(){
    const data = reactive({
        count:0
    })
    function add(){
        data.count ++ 
    }
    return {
        data:toRefs(data) // 让响应式的对象解构
        ,add
    }
}