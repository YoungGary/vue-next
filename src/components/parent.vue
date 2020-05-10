<template>
  <div>
      <child />
  </div>
</template>

<script>
import child from './child.vue';
import { reactive } from 'vue';
import {provideStore} from '../hooks/useStore'
export default {
    components:{
        child
    },
    setup(){
        const data = reactive({
            count :100
        })
        provideStore(data)
    }
}
</script>

<style>

</style>