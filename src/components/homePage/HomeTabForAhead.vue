<template>
  <div class="webAheadContainer">
    <ul>
      <li v-for="(item,index) in liList" class="bigComment" :key="index">
        <span class="title" @click="toDetails">
          <b>前端{{item.title}}</b>
        </span>
        <a href="#">
          <p>{{item.content}}</p>
        </a>
        <br />
        <a href="#">
          <i class="el-icon-user"></i>
          <span class="userName">{{item.name}}</span>
        </a>
        <a href="#" class="sendTime">2018-01-10</a>
        <a href="#" class="liStar">
          <i class="el-icon-star-off"></i>
          <span class="textStart">收藏</span>
        </a>
        <a href="#" @click="firstComment" class="liComment">
          <i class="el-icon-s-comment"></i>
          <span class="textComment">评论</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import "../../mock/homeList.js";
export default {
  data() {
    return {
      liList: []
    };
  },
  activated(){
     
   
    //  this.$route.query.tabName==true?this.$route.query.tabName:'webHead'
       this.$emit("whatName", 'webHead');
     console.log('router');
     
  },
  created(){
      this.getList()
       
  },
  methods: {
    getList() {
      this.$http.get("/home/list").then(res => {
        console.log(res.body);
        this.liList = res.body.articles;
      });
    },
    toDetails() {
      this.$router.push({
        name: "webAheadDetails",
        query: {
          id: 10012
        }
      });
    },
    firstComment() {
      if (this.showFirstComment) {
        this.showFirstComment = false;
      } else {
        this.showFirstComment = true;
      }
    },
    twoComment() {
      if (this.showTwoComment) {
        this.showTwoComment = false;
      } else {
        this.showTwoComment = true;
      }
    }
  }
};
</script>
<style scoped>
.webAheadContainer ul li {
  padding: 10px 10px 20px;
  border-bottom: 1px solid rgba(245, 245, 245, 1);
  list-style: none;
  position: relative;
}

.webAheadContainer ul li a {
  text-decoration: none;
  color: #35aba3;
}

.webAheadContainer .title {
  color: #333333;
  font-size: 18px;
  cursor: pointer;
}

.webAheadContainer .userName {
  margin-left: 5px;
  color: #35aba3;
  font-size: 12px;
}

.webAheadContainer .sendTime {
  margin-left: 20px;
  color: #666666;
  font-size: 12px;
}

.webAheadContainer .liComment,
.webAheadContainer .liStar {
  display: block;
  padding-bottom: 0;
  float: right;
  color: #666666;
  font-size: 14px;
}

.webAheadContainer ul li a p {
  margin-top: 12px;
  color: #666;
  font-size: 14px;
  line-height: 21px;
}

.webAheadContainer .textComment,
.webAheadContainer .textStart {
  margin-left: 5px;
}

.webAheadContainer .textComment {
  margin-right: 30px;
}
</style>
