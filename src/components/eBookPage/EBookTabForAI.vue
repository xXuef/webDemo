<template>
  <div class="clearfix">AI</div>
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
*{
  padding: 10px;

}
</style>
