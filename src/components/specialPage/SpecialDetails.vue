<template>
  <div class="ContentForThis">

    <div class="slideRight" style="overflow: hidden ;clear: both">
      <div class="slideContent" v-show="showRightContent">
        <p class="catalog">目录</p>
        <span class="chapter">连载中</span>
        <span class="chapter">共1010章</span>
        <ul>
          <li @click="chooseChapter" v-for="item in chapters">
            <a href="#">
              {{item}}
            </a>
          </li>
        </ul>
      </div>
      <img tag="button"
           style="width: 33px;cursor: pointer;"
           class="forRightLock" @click="openLock"
           src="../../../static/slide.png"
           alt="" >
    </div>

    <div class="details">
      <div class="detailsHeader">
        <span class="title"><b>Apollo 轨迹规划技术分享</b></span>
        <el-button class="pdf" size="mini">下载PDF</el-button>
        <el-button class="copy" size="mini">复制链接</el-button>
      </div>
      <span class="author">作者:</span>
      <span class="authorName">whowhowho</span>
      <span class="time">2019-10-01</span>
      <article class="contentOne">
        轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之几一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之级一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一模块之一。轨迹规划是无人驾驶系统的核心模块之。轨迹规划是无人驾驶系统。
        轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之几一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之级一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一模块之一。轨迹规划是无人驾驶系统的核心模块之。轨迹规划是无人驾驶系统。
        轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之几一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之级一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一模块之一。轨迹规划是无人驾驶系统的核心模块之。轨迹规划是无人驾驶系统。
      </article>
      <span class="forComm">相关推荐</span>
      <div class="divComment">
        <ul>
          <li v-for="item in CdList">
            <a href="javascript:;">
              <span class="cdTitle">{{item.cdTitle}}</span>
              <span class="cdContent">{{item.cdContent}}</span>
            </a>
            <div class="cdUser">
              <img class="iconUser" :src="item.icon" alt="">
              <span class="cdUserName">{{item.name}}</span>
              <span class="cdUserJobType">{{item.jobType}}</span>
              <span class="cdUserJob">{{item.job}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import 'readmore-js/readmore.min.js'
  import '../../mock/homeList.js'

  export default {
    data() {
      return {
        CdList: [],
        showRightContent: false,
        chapters: ['第一章 保尔被迫退学 提早进入劳动',
          '第二章 战火引起恐慌 保尔钟情枪支',
          '第三章 河边邂后东妮亚 几经波折遇知音',
          '第四章 俄国屠杀犹太人 保尔忧心如焚',
          '第四章 俄国屠杀犹太人 保尔忧心如焚',
          '第五章 路上偶遇朱赫来 保尔舍身相救']
      }
    }
    , created() {
      this.setSoll()
      this.getFalseCdData()
    },
    methods: {
      getFalseCdData() {
        this.$http.get('/home/list').then((res) => {
          console.log(res);
          this.CdList = res.body.twos
        })
      },
      setSoll() {
        $(function () {
          $('article').readmore({
            blockCSS: 'display: inline-block; width: 50%;',
            embedCSS: false,
            speed: 70,
            moreLink: `<div class="moreText"><a href="#" style=" display:block;text-decoration: none ;color:#ccc;text-align: center" >加载更多<i style="margin-left: 10px" class="el-icon-bottom"></i></a></div>`,
            lessLink: `<div class="closeText"style=" display:block;text-decoration: none ;color:#ccc;text-align: center" >收起文章<i style="margin-left: 10px" class="el-icon-top"></i></a></div>`
          });
        })
      }

      , openLock() {
        console.log(this.showRightContent);
        if (this.showRightContent) {
          this.showRightContent = false
        } else {
          this.showRightContent = true
        }
      }

      , chooseChapter() {
        this.showRightContent = false
      }
    }

  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #1D222E;
  }

  li {
    list-style: none;
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
  .detailsHeader .copy {
    float: right;
    width: 76px;
    height: 30px;
    background: rgba(53, 171, 163, 1);
    opacity: 1;
    border-radius: 4px;
    color: rgba(255, 255, 255, 1);
  }

  .detailsHeader .copy {
    margin-right: 15px;
  }

  .author {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(102, 102, 102, 1);
  }

  .authorName {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(53, 171, 163, 1);
  }

  .time {
    margin-left: 30px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: rgba(102, 102, 102, 1);
    opacity: 1;
  }

  .contentOne {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 500;
    text-indent: 32px;
    line-height: 36px;
    color: rgba(51, 51, 51, 1);
    /*width: 100%;*/
  }

  /*`````````````````````````````````````````````*/

  article {
    max-height:12em;
   /* (4 * 1.5 = 6) */
    overflow: hidden;
  }

  /*`````````````````````````````````````````````*/
  .forComm {
    display: block;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    line-height: 28px;
    color: rgba(51, 51, 51, 1);
  }

  .divComment {
    margin-top: 20px;
  }

  .divComment ul li {
    list-style: none;
    border-bottom: 1px solid #cccccc;
    margin-top: 20px;
  }

  .divComment ul li a {
    text-decoration: none;
  }

  .iconUser {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .cdTitle {
    display: block;
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
    color: rgba(51, 51, 51, 1);
  }

  .cdContent {
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 36px;
    color: rgba(51, 51, 51, 1);
    opacity: 1;
  }

  .cdUser {
    position: relative;
    width: 50%;
    margin: 10px 0;
  }

  .cdUserName {
    position: absolute;
    top: 5px;
    left: 60px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: rgba(53, 171, 163, 1);
    opacity: 1;
  }

  .cdUserJob {
    position: absolute;
    bottom: 0;
    left: 60px;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    color: rgba(153, 153, 153, 1);
    opacity: 1;
  }

  .cdUserJobType {
    position: absolute;
    top: 0;
    left: 150px;
    padding: 2px 5px;
    border: 1px solid rgba(204, 204, 204, 1);
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    color: rgba(153, 153, 153, 1);
  }

  /*  侧边的slide*/

  .slideRight {
    float: right;
  }

  .slideContent {
    float: right;
    width: 340px;
    height: 100%;
    background: #35ABA3;
    min-height: 939px;
  }

  .slideRight .forRightLock {
    width: 33px;
    height: 100%;
    z-index: 1000;
    float: right;
  }

  .catalog {
    font-size: 24px;
    font-weight: 500;
    line-height: 33px;
    color: rgba(255, 255, 255, 1);
    margin-top: 36px;
    margin-left: 20px;
    opacity: 1;
  }

  .chapter {
    font-size: 12px;
    font-weight: 500;
    line-height: 17px;
    margin-left: 20px;
    color: rgba(255, 255, 255, 1);
    opacity: 0.8;
  }

  .slideContent ul li a {
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: rgba(255, 255, 255, 1);
    opacity: 1;
  }

  .slideContent ul li {
    margin-top: 20px;
    margin-left: 20px;
  }


</style>
