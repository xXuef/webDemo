<template>
  <div class="all">
    
    <el-link type="primary" class="tipsForLogin">请先登录</el-link>

    <div class="SendContainer">
      <personal></personal>
      <el-tabs type="border-card" class="sendTabs" @tab-click="handleClick" v-model='activeName'>
        <el-tab-pane class="is-active" name="mySend">
          <span slot="label">12 &nbsp;我的发布</span>
        </el-tab-pane>
        <el-tab-pane name="myComment">
          <span slot="label">24 &nbsp;我的评论</span>
        </el-tab-pane>
        <el-tab-pane name="myStar">
          <span slot="label">12 &nbsp;我的收藏</span>
        </el-tab-pane>
        <el-tab-pane name="myFeel">
          <span slot="label">13 &nbsp;我的观后感</span>

        </el-tab-pane>
      </el-tabs>

      <keep-alive>
        <router-view name="myView" @func="getActiveName"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import personal from './Personal.vue'
  import '../../mock/homeList.js'

  export default {
    data() {
      return {
        activeName: 'mySend',
        FalseList: []
      }
    },
    components: {
      personal
    },
    created() {
      this.loadFirstPage()

    },
    activated() {
      this.$emit('nowIndex', '4')
    },
    methods: {
      getActiveName(name) {
        this.activeName = name
        console.log(this.activeName);
      },
      loadFirstPage() {
        this.getList()
        this.$router.push({
          name: 'personalSend',
          activeName: 'mySend'
        })
      },
      getList() {
        this.$http.get("/home/list").then(res => {
          this.FalseList = res.body.articles
        })
      },
      handleClick(tab, event) {
        if (tab.name == 'mySend') {
          this.getList()
          this.loadFirstPage()
          this.activeName = tab.name
        } else if (tab.name == 'myComment') {
          this.$router.push({
            name: 'personalComment',
          })
          this.activeName = tab.name
        } else if (tab.name == 'myStar') {
          this.$router.push({
            name: 'personalStar',
            activeName: tab.name
          })
          this.activeName = tab.name
        } else if (tab.name == 'myFeel') {
          this.$router.push({
            name: 'personalFeel',
          })
          this.activeName = tab.name
        }
        // console.log(tab, event);
        // console.log(this.activeName);
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .SendContainer>.el-tabs--border-card>.el-tabs__header {
    background-color: #FFFFFF;
    margin: 20px 0 20px;
    border: none;
  }

  .SendContainer .el-tabs__nav-scroll {
    overflow: auto;
  }

  .SendContainer .el-tabs__nav {
    white-space: nowrap;
    position: relative;
    float: left;
    z-index: 2;
    border: none;
    background: #FFFFFF;
  }

  .SendContainer .el-tabs--border-card>.el-tabs__header .el-tabs__item {
    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    border: none;
    border-top: 2px solid transparent;
    color: rgba(27, 41, 69, 1);
  }

  .SendContainer .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: rgba(27, 41, 69, 1);
    border: none;
    border-top: 3px solid #1B2945;
  }

  .SendContainer .el-tabs--border-card {
    height: 50px;
    background: #FFF;
    border: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    /*box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);*/
  }

  .SendContainer .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color: rgba(27, 41, 69, 1);
  }

  .SendContainer .el-tabs--border-card>.el-tabs__content {
    margin: 0;
    padding: 0;
    height: 0;
  }

  /*.SendContainer .el-tabs--border-card > .el-tabs__content {*/
  /*  margin: 0;*/
  /*  padding: 0;*/
  /*  height: auto;*/
  /*}*/

  .all{
    position: relative;
  }
  .all .tipsForLogin{
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;
    font-size: 30px;
    text-align: center;
  }
</style>