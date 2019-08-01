<!--前端界面-->
<template>
  <div class="webAhead">
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
      <router-view name="homeTabRouter" @whatName="getName"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import "font-awesome/css/font-awesome.min.css";
import ListSort from "../page/ListSort.vue";

export default {
  data() {
    return {
      showFirstComment: false,
      showTwoComment: false,

      activeName: "webHead",
      input2: ""
    };
  },
  components: {
    ListSort
  },
  created() {
    this.loadRoute();
    this.activeName = "webHead";
  },
  //使用keep-alive之后生命钩子只会执行这个
  activated() {
    this.loadRoute();
    this.getName();
    this.$emit("navSelect", "1");
    this.activeName = "webHead";
  },
  methods: {
    loadRoute() {
      this.$router.push({
        name: "HomeTabForAhead"
      });
    },
    //tab控件使用的所用到的方法
    getName(name) {
      this.activeName = name;
      console.log(this.activeName);
    },
    handleClick(tab, event) {
      if (tab.name == "webHead") {
        this.loadRoute();
      } else if (tab.name == "AI") {
        this.$router.push({
          name: "HomeTabForAi",
          query: {}
        });
      } else if (tab.name == "fromWork") {
        this.$router.push({
          name: "HomeTabForFromwork",
          query: {}
        });
      } else if (tab.name == "blockChain") {
        this.$router.push({
          name: "HomeTabForBlockChain",
          query: {}
        });
      } else if (tab.name == "codeLanguage") {
        this.$router.push({
          name: "HomeTabForComputerCode",
          query: {}
        });
      }
      // console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.webAhead {
  background: #ffffff;
}

ul {
  padding: 0;
}
.forTranstionBug {
  position: relative;
}

.clearfix.after {
  content: "";
  display: block;
  clear: both;
}
/* <!-- ie6 --> */
.clearfix {
  zoom: 1;
}
</style>
