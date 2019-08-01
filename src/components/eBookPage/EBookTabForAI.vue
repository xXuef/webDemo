<template>
  <div>AI</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$emit("getNowTab", "AI");
  },
  activated() {
    this.$emit("getNowTab", "AI");
  },
  methods: {}
};
</script>

<style scoped>
</style>
