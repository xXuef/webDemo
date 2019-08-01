<template>
<!-- 练习vuex的界面  -->

  <el-container>
    <el-header>Header</el-header>
    <el-main>
      
  <span>{{this.$store.state.count}}</span>
    <br/>
    <span>getter取值:{{this.$store.getters.getCount}}</span>

<br/>
    <button @click="increment"> + </button>
    <button @click="reduce"> - </button>

    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
  
</template>
<script>
export default {
  methods: {
    increment() {
        // this.$store.commit('add')
        this.$store.dispatch('addFunc',10)
    },
    reduce() {
        //  this.$store.commit('reduction')
        var n=5;
          this.$store.dispatch('redeucFunc',n)
    }
  }
};
</script>
<style scoped>
button{
    width: 50px;
    height: 20px;
    text-align: center;
    font-size: 20px;
}
</style>
