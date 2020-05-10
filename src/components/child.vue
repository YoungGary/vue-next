<template>
  <div>
      child 获得到provide的值：{{data.count}}
  </div>
</template>

<script>
import useStore from '../hooks/useStore'
export default {
    setup(){
        const data = useStore();
        
        return {
            data
        }
    }
}
</script>

<style>

</style>