<template>
  <div class="tabContainer">
    <el-tabs type="border-card" @tab-click="handleClick" v-model='activeName'>
      <el-tab-pane label="前端" name="webHead" class="is-active">
      </el-tab-pane>
      <el-tab-pane label="人工智能" name="AI"></el-tab-pane>
      <el-tab-pane label="架构" name="fromWork"></el-tab-pane>
      <el-tab-pane label="区块链" name="blockChain"></el-tab-pane>
      <el-tab-pane label="编程语言" name="codeLanguage"></el-tab-pane>
    </el-tabs>

    <el-input class="tabInput"
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input2">
    </el-input>

  </div>
</template>

<script scoped>
  export default {
    data() {
      return {
        activeName: 'webHead',
        input2: '',
      }
    },
    created(){

    },
    activated(){
      console.log(this.activeName);
    },
    methods: {
      loadRoute() {
        this.$router.push({
          name: 'webAhead',
          query: {
            id: 10011,
          }
        })
      },
      handleClick(tab, event) {
        if (tab.name == 'webHead') {
          this.loadRoute()
        } else if (tab.name == 'AI') {
          this.$router.push({
            name: 'forAi',
            query: {}
          })
        } else if (tab.name == 'fromWork') {
          this.$router.push({
            name: 'forFramework',
            query: {}
          })
        } else if (tab.name == 'blockChain') {
          this.$router.push({
            name: 'forBlockChain',
            query: {}
          })
        } else if (tab.name == 'codeLanguage') {
          this.$router.push({
            name: 'forComputerLanguage',
            query: {}
          })
        }
        console.log(tab, event);
      }
    }
  }

</script>

<style>
  /*tab控件css配置*/
  .tabContainer {
    width: 1200px;
    height: auto;
    margin: 0 auto 10px;
    background: #D4E3FB;
    position: relative;
  }

  /*# tab配置1D222E*/
  .tabContainer > .el-tabs--border-card > .el-tabs__header {
    background-color: #1D222E;
    border-bottom: 1px solid #E4E7ED;
    margin: 0;
  }

  .tabContainer .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #409EFF;
    background-color: #FFF;
    border-right-color: #DCDFE6;
    border-left-color: #DCDFE6;
  }
  .el-tabs--border-card > .el-tabs__content {
    margin: 0;
    padding: 0;
    height: 0;
  }
  .tabContainer .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color: #409EFF;
  }
  /*input*/
  .tabContainer .tabInput {
    background: none;
    width: 160px;
    height: 28px;
    position: absolute;
    right: 0;
    top: 5px;
    margin-right: 10px;
  }

  .tabContainer .el-input__inner {
    -webkit-appearance: none;
    background: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: 15px;
    height: 28px;
    line-height: 28px;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
  }

  .tabContainer .el-input__icon {
    height: 100%;
    width: 25px;
    text-align: center;
    -webkit-transition: all .3s;
    transition: all .3s;
    line-height: 28px;
  }
  /*# tab配置结束1D222E*/


</style>
