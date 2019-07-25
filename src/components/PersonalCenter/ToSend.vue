<template>
  <div class="toSendContainer">

    <el-card class="titleTxt">
      <span class="info">发布文章</span>
    </el-card>
    <el-card class="articleInfo">
      <div slot="header" class="clearfix">
        <span class="info">文章信息</span>
      </div>
      <div class="divTitle">
        <span class="title">标题:</span>
        <el-input id="titleContent" placeholder="请输入内容"
                  v-model="inputTitle"
                  maxlength="80"
                  show-word-limit></el-input>
      </div>

      <div class="divType">
        <span class="title">类型:</span>
        <el-select v-model="value" filterable  placeholder="请选择文章类型" class="type">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </el-card>
    <el-card class="articleContent">
      <div slot="header" class="clearfix">
        <span>文章内容</span>
      </div>

      <!--      文本编辑器的内容div-->
      <div id="editor"></div>
    </el-card>
    <div class="outType">
      <span class="title">类型</span>
      <el-select v-model="hisValue" filterable  placeholder="请选择类型" class="outHisType">
        <el-option
          v-for="item in optionsHis"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <el-button size="medium" type="info" class="sendYes">发布</el-button>

    <el-button size="medium" class="sendNo" @click="sendNo">取消</el-button>
  </div>
</template>

<script>
  import E from 'wangeditor'

  export default {
    data() {
      return {
        inputTitle: '',
        inputContent: '',
       optionsHis:[
         {
           value: '选项1',
           label: '战斗鸡'
         }, {
           value: '选项2',
           label: '大龙虾'
         }
       ],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        hisValue:''
      }
    }
    , created() {
      this.createEd()
    }
    , methods: {
      createEd() {
        $(function () {
          var editor = new E('#editor')
          // 或者 var editor = new E( document.getElementById('editor') )
          editor.create()
        })
      }
      , sendNo() {
        //取消回退上一步
        window.history.go(-1);
      }
    }
  }
</script>

<style>

  .toSendContainer {
    position: relative;
  }

  .title {
    line-height: 40px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(52, 52, 52, 1);
    opacity: 1;
  }

  .divTitle .el-input {
    position: relative;
    font-size: 14px;
    width: 1064px;
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
  }

  .divType  {
    margin-top: 20px;
  }

  .divType .type {
    margin-left: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }


  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }


  .sendNo {
    margin-top: 20px;
  }

  .sendYes {
    margin-top: 20px;
  }

  .outType {
    position: absolute;
    top: 185px;
    left: -220px;
    padding: 0 10px;
    border-radius: 5px;
  }


  .toSendContainer .el-select {
    width: 135px;
  }


  /*统一设置input 还有input图标*/
  /*.outType .el-input__inner,*/
  .toSendContainer .el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 30px;
    line-height: 30px;
    outline: 0;
    padding: 0 10px;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
  }

  /*.outType .el-input__icon*/
  .toSendContainer .el-input__icon {
    height: 100%;
    width: 20px;
    text-align: center;
    -webkit-transition: all .3s;
    transition: all .3s;
    line-height: 30px;
  }
</style>
