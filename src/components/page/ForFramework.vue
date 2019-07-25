<template>

  <div>
    架构
  </div>
</template>

<script>
    export default {
      data(){
        return{

        }
      },
      //使用keep-alive之后生命钩子只会执行这个
      activated() {
          this.$emit('whatName','fromWork')
      }
    }
</script>

<style scoped>

</style>
