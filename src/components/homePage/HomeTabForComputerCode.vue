<template>
  <div>编程语言</div>
</template>
<script>
export default {
  activated() {
    this.$emit("whatName", "codeLanguage");
  }
};
</script>
