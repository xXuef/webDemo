<template>
  <div class="special">
    <!--      第二导航-->
    <div class="tabContainer">
      <el-tabs type="border-card" @tab-click="handleClick" v-model="activeName">
        <el-tab-pane label="前端" name="webHead" class="is-active"></el-tab-pane>
        <el-tab-pane label="人工智能" name="AI"></el-tab-pane>
        <el-tab-pane label="架构" name="fromWork"></el-tab-pane>
        <el-tab-pane label="区块链" name="blockChain"></el-tab-pane>
        <el-tab-pane label="编程语言" name="codeLanguage"></el-tab-pane>
      </el-tabs>

      <el-input class="tabInput" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
    </div>

    <list-sort></list-sort>

    <router-view name="specialRouter" @getNowTab="getNowTab"></router-view>
  </div>
</template>

<script>
import ListSort from "../page/ListSort.vue";

export default {
  data() {
    return {
      input2: "",
      activeName: "webHead"
    };
  },
  components: {
    ListSort
  },
  activated(){
    this.loadRoute();
      this.$emit('navSelect','2')
  },
  created() {
    this.loadRoute()
    this.$loading()
  },
  methods: {
    loadRoute() {
      this.$router.push({
        name: "specialTabForAhead"
      });
    },
    handleClick(tab, event) {
      if (tab.name == "webHead") {
        this.loadRoute();
      } else if (tab.name == "AI") {
        this.$router.push({
          name: "specialTabForAI",
          query: {}
        });
      } else if (tab.name == "fromWork") {
        this.$router.push({
          name: "specialTabForFormwork"
        });
      } else if (tab.name == "blockChain") {
        this.$router.push({
          name: "specialTabForAhead"
        });
      } else if (tab.name == "codeLanguage") {
        this.$router.push({
          name: "specialTabForAhead"
        });
      }
      // console.log(tab, event);
    },
    getNowTab(name){
      this.activeName =name
    }
  }
};
</script>

<style scoped>
.special {
  height: 100%;
  background: #ffffff;
  width: 100%;
}
</style>
