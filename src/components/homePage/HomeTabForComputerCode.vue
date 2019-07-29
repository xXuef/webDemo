<template>
  <div class="container">
    
    <span class="txt">编程语言</span>
  </div>
</template>
<script>
export default {
  activated() {
    this.$emit("whatName", "codeLanguage");
  }
};
</script>
<style scoped>


</style>
