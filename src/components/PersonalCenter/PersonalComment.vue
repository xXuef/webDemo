<template>
  <div class="divComment">
    <div class="commentContainer">
      <ul>
        <li v-for="(item,index) in liList" class="bigComment" :key="index">
          <a href="javascript:;
">
            <span class="title" @click="toDetails"><b>评论{{item.title}}</b></span></a>
          <a href="#">
            <p>
              {{item.content}}</p>
          </a>
          <br>
          <a href="javascript:;"><i class="el-icon-user"></i><span class="userName">{{item.name}}</span></a>
          <a href="javascript:;" class="sendTime">2018-01-10</a>
          <a href="javascript:;" class="liStar"><i class="el-icon-star-off"></i><span class="textStart">收藏</span></a>
          <a href="javascript:;" @click="firstComment" class="liComment"><i class="el-icon-s-comment"></i><span class="textComment">评论</span></a>
          <div class="forBox">
            <div class="box" v-show="showFirstComment">
            </div>
            <div class="commentUser" v-show="showFirstComment">
              <ul>
                <li class="userLi">
                  <a href="javascript:;">
                    <img src="../../../static/icon_home_want_delete.png" alt="">
                    <span class="commentName">孙悟空 :</span>
                    <span class="commentContent">我来自花果山咋咋咋咋.....</span>
                    <br>
                    <span class="commentTime">10:20 11-5</span>
                    <span class="commentStar">
                      <i class="fa fa-heart-o "></i>&nbsp;点赞</span>
                    <span class="commentRePly" @click="twoComment">评论</span>
                  </a>
                </li>
              </ul>
              <div class="moreComment" v-show="showTwoComment">
                <ul>
                  <li class="moreLi">
                    <a href="javascript:;">
                      <img src="../../../static/icon_home_want_delete.png" alt="">
                      <span class="moreCommentName">孙悟空 :</span>
                      <span class="moreCommentContent">我来自花果山咋咋咋咋.....</span>
                      <br>
                      <span class="moreCommentTime">10:20 11-5</span>
                      <span class="moreCommentStar">
                        <i class="fa fa-heart-o "></i>&nbsp;点赞</span>
                      <span class="moreCommentRePly">评论</span>
                    </a>
                  </li>
                  <li class="moreLi">
                    <a href="javascript:;">
                      <img src="../../../static/icon_home_want_delete.png" alt="">
                      <span class="moreCommentName">孙悟空 :</span>
                      <span class="moreCommentContent">我来自花果山咋咋咋咋.....</span>
                      <br>
                      <span class="moreCommentTime">10:20 11-5</span>
                      <span class="moreCommentStar">
                        <i class="fa fa-heart-o "></i>&nbsp;点赞</span>
                      <span class="moreCommentRePly">评论</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import 'font-awesome/css/font-awesome.min.css'
import '../../mock/homeList.js'
export default {
  data() {
    return {
      name: 'webHead',
      liList: [],
      showFirstComment: true,
      showTwoComment: false,
    }
  },
  created() {
    this.getList()

  },
  //使用keep-alive之后生命钩子只会执行这个
  activated() {
    this.$emit('func', 'myComment')
  },
  methods: {
    getList() {
      this.$http.get("/home/list").then(res => {
        console.log(res.body);
        this.liList = res.body.articles
      })
    },
    toDetails() {
      this.$router.push({
        name: 'webAheadDetails',
        query: {
          id: 10012,

        }
      })
    },
    firstComment() {
      if (this.showFirstComment) {
        this.showFirstComment = false
      } else {
        this.showFirstComment = true
      }
    },
    twoComment() {
      if (this.showTwoComment) {
        this.showTwoComment = false
      } else {
        this.showTwoComment = true
      }
    }
  }

}

</script>
<style scoped>
ul {
  padding: 0;
}

.commentContainer ul li {
  padding: 10px 10px 20px;
  border-bottom: 1px solid rgba(245, 245, 245, 1);
  list-style: none;
  position: relative;
  background: #FFFFFF;
}

.commentContainer ul li a {
  text-decoration: none;
  color: #35ABA3;
}

.commentContainer .title {
  color: #333333;
  font-size: 18px;
}

.commentContainer .userName {
  margin-left: 5px;
  color: #35ABA3;
  font-size: 12px;
}

.commentContainer .sendTime {
  margin-left: 20px;
  color: #666666;
  font-size: 12px;
}

.commentContainer .liComment,
.commentContainer #iconComment,
.commentContainer .liStar {
  display: block;
  padding-bottom: 0;
  float: right;
  color: #666666;
  font-size: 14px;
}

.commentContainer ul li a p {
  margin-top: 12px;
  color: #666;
  font-size: 14px;
  line-height: 21px;
}


.commentContainer .textComment,
.commentContainer .textStart {
  margin-left: 5px;
}


.commentContainer .textComment {
  margin-right: 30px;
}


/*````````````````````````*/

a {
  text-decoration: none;
  color: #1D222E;
}


.commentUser .userLi {
  list-style: none;
  height: 50px;
  /*background: #cccccc;*/
  background: #F2F2F5;
  position: relative;
  margin-top: 20px;

}

.commentUser .userLi img {
  /* display: inline-block; */
  width: 47px;
  height: 47px;
  border-radius: 50%;
  float: left;
}

.commentUser .userLi .commentName {
  margin-left: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(56, 172, 164, 1);
  opacity: 1;
}

.commentUser .userLi .commentContent {
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(102, 102, 102, 1);
  opacity: 1;
}

.commentUser .userLi .commentTime {
  margin-left: 20px;
  margin-top: 10px;
  float: left;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: rgba(153, 153, 153, 1);
  opacity: 1;
}

.commentUser .userLi .commentRePly,
.commentUser .userLi .commentStar {
  float: right;
  margin-top: 10px;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(102, 102, 102, 1);
  opacity: 1;
}

.commentUser {
  position: relative;
  background: #F2F2F5;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
}


.forBox {
  position: relative;
  padding-top: 1px;
}

/*三角形的实现*/
.box {
  width: 20px;
  height: 20px;
  /*background: #cccccc;*/
  background: #F2F2F5;
  position: absolute;
  right: 80px;
  top: 10px;
  z-index: 110;
  transform: rotate(45deg);
}


.moreComment {
  width: 1020px;
  margin-left: 72px;
}


.moreComment .moreLi {
  list-style: none;
  height: 50px;
  width: 100%;
  /*background: #cccccc;*/
  background: #EAEAEC;
  position: relative;
}

.moreComment .moreLi img {
  /* display: inline-block; */
  width: 47px;
  height: 47px;
  border-radius: 50%;
  float: left;
}

.moreComment .moreLi .moreCommentName {
  margin-left: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(56, 172, 164, 1);
  opacity: 1;
}

.moreComment .moreLi .moreCommentContent {
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(102, 102, 102, 1);
  opacity: 1;
}

.moreComment .moreLi .moreCommentTime {
  margin-left: 20px;
  margin-top: 10px;
  float: left;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: rgba(153, 153, 153, 1);
  opacity: 1;
}

.moreComment .moreLi .moreCommentRePly,
.moreComment .moreLi .moreCommentStar {
  float: right;
  margin-top: 10px;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(102, 102, 102, 1);
  opacity: 1;
}

</style>
