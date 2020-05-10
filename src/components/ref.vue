<template>
  <div ref="root" class="ref">111
      <div ref="second">
222
      </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
    setup(){
        const root = ref();
        const second = ref()

        onMounted(()=>{
            console.log(root.value) // div
            console.log(second.value) // div
        })
        //unref
        //isRef
        //shallowRef
        return {
            root,second
        }
    }
}
</script>

<style>

</style>