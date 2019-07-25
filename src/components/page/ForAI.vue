<template>
    <div class="aiContainer">
      人工智能
    </div>
</template>

<script>
    export default {
      data(){
          return{

          }
      },
      created(){

      },
      //使用keep-alive之后生命钩子只会执行这个
      activated(){
        this.$emit('whatName','AI')
      },
      components:{
      }
    }
</script>

<style scoped>

  .aiContainer{
    height: auto;
  }


</style>
