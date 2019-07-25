<template>
    <div>
      编程语言
    </div>
</template>

<script>
    export default {
        data(){

        },
      //使用keep-alive之后生命钩子只会执行这个
      activated() {
          this.$emit('whatName','codeLanguage')
      }
    }
</script>

<style scoped>

</style>
