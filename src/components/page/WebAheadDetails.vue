

<template>
<!-- /*详情界面*/ -->
  <div class="details">
    <div class="detailsHeader">
      <span class="title"><b>{{this.title}}Apollo 轨迹规划技术分享</b></span>
      <el-button class="pdf" size="mini">下载PDF</el-button>
      <el-button class="copy" size="mini">复制链接</el-button>
    </div>
    <span class="author">作者:</span>
    <span class="authorName">whowhowho</span>
    <span class="time">2019-10-01</span>
    <p class="contentOne">轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之几一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之级一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一模块之一。轨迹规划是无人驾驶系统的核心模块之。轨迹规划是无人驾驶系统。 轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之几一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之级一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一模块之一。轨迹规划是无人驾驶系统的核心模块之。轨迹规划是无人驾驶系统。 轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之几一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之级一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一模块之一。轨迹规划是无人驾驶系统的核心模块之。轨迹规划是无人驾驶系统。</p>
  </div>

</template>

<script>
  export default {
    data(){
      return{
        title:''
      }
    }
    ,
    created(){
       this.title = this.$route.query.name
    },
    activated(){
      this.title = this.$route.query.name
    }
  }
</script>

<style scoped>
  *{
    margin:  0;
    padding: 0;
  }
  .details {
    padding: 10px;
    background-color: #FFFFFF;
  }

  .detailsHeader {
    padding: 15px 0;
  }

  .detailsHeader .title {
    font-size: 24px;
    font-weight: bold;
    line-height: 33px;
    color: rgba(51, 51, 51, 1);
  }

  .detailsHeader .pdf,
  .detailsHeader .copy{
    float: right;
    width:76px;
    height:30px;
    background:rgba(53,171,163,1);
    opacity:1;
    border-radius:4px;
    color:rgba(255,255,255,1);
  }
  .detailsHeader .copy{
    margin-right: 15px;
  }
  .author{
    font-size:14px;
    font-weight:400;
    line-height:24px;
    color:rgba(102,102,102,1);
  }
  .authorName{
    font-size:14px;
    font-weight:400;
    line-height:24px;
    color:rgba(53,171,163,1);
  }
  .time{
    margin-left: 30px;
    font-size:14px;
    font-weight:400;
    line-height:20px;
    color:rgba(102,102,102,1);
    opacity:1;
  }
  .contentOne{
    margin-top: 20px;
    font-size:16px;
    font-weight:500;
    text-indent: 32px;
    line-height:36px;
    color:rgba(51,51,51,1);
    opacity:1;
  }

</style>
