<template>
  <div class="eBookContainer">
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

    <keep-alive>
      <router-view name="eBookRouter" @getNowTab="getTabName"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import ListSort from "../page/ListSort.vue";

export default {
  name: "EBook",
  data() {
    return {
      activeName: "webHead",
      input2: ""
    };
  },
  components: {
    ListSort
  },
  activated() {
    this.loadRoute();
    this.$emit("navSelect", "3");
  },
  created() {
    this.loadRoute();
    this.$emit("navSelect", "3");
    this.$loading();
  },
  methods: {
    loadRoute() {
      this.$router.push({
        name: "eBookTabForAHead"
      });
    },
    handleClick(tab, event) {
      if (tab.name == "webHead") {
        this.loadRoute();
      } else if (tab.name == "AI") {
        this.$router.push({
          name: "eBookTabForAI"
        });
      } else if (tab.name == "fromWork") {
        this.$router.push({
          name: "eBookTabForAHead"
        });
      } else if (tab.name == "blockChain") {
        this.$router.push({
          name: "eBookTabForAI"
        });
      } else if (tab.name == "codeLanguage") {
        this.$router.push({
          name: "eBookTabForAHead"
        });
      }
      // console.log(tab, event);
    },
    getTabName(name){
      this.activeName =name
    }
  }
};
</script>

<style scoped>
.eBookContainer {
  height: 100%;
  overflow: hidden;
  background: #ffffff;
}

/* .books {} */
</style>