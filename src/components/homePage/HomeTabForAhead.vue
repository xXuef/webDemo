<template>
  <div class="HomeContainer">
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
          <img :src="item.userIcon" alt />
          <span class="userName">{{item.userName}}</span>
        </a>
        <a href="#" class="sendTime">{{item.time}}</a>
        
        <a href="#" class="liStar">
          <i class="el-icon-star-off"></i>
          <span class="textStart" @click="star">收藏</span>
        </a>
        <a href="#" class="liComment">
          <i class="el-icon-s-comment"></i>
          <span class="textComment">评论</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liList: []
    };
  },
  activated() {
    //  this.$route.query.tabName==true?this.$route.query.tabName:'webHead'
    this.$emit("whatName", "webHead");
    console.log("router");
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http
        .get("../../../static/FalseData/FalseDataForHome.json")
        .then(res => {
          console.log(res.body);
          sessionStorage.setItem("homeFlaseData", JSON.stringify(res.body));
          this.liList = res.body.home[0].data.webAheadData;
        });
    },
    toDetails() {
      this.$router.push({
        name: "webAheadDetails",
        query: {
          name: "前端"
        }
      });
    },
    star() {
      $(function() {
        if ($(".liStar i").hasClass("el-icon-star-off")) {
          $(".liStar i").removeClass("el-icon-star-off");
          $(".liStar i").addClass("el-icon-star-on");
        } else {
          $(".liStar i").removeClass("el-icon-star-on");
          $(".liStar i").addClass("el-icon-star-off");
        }
      });
    }
  }
};
</script>
<style>
.HomeContainer ul li {
  padding: 10px 10px 20px;
  border-bottom: 1px solid rgba(245, 245, 245, 1);
  list-style: none;
  position: relative;
}

.HomeContainer ul li a {
  text-decoration: none;
  color: #35aba3;
}

.HomeContainer .title {
  color: #333333;
  font-size: 18px;
  cursor: pointer;
}

.HomeContainer .userName {
  margin-left: 5px;
  color: #35aba3;
  font-size: 12px;
  line-height: 20px;
  vertical-align: middle;
}

.HomeContainer .sendTime {
  margin-left: 20px;
  color: #666666;
  font-size: 12px;
  line-height: 20px;
  vertical-align: middle;
}
.HomeContainer ul li a img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  line-height: 20px;
  vertical-align: middle;
}
.HomeContainer .liComment,
.HomeContainer .liStar {
  display: block;
  padding-bottom: 0;
  float: right;
  color: #666666;
  font-size: 14px;
}

.HomeContainer ul li a p {
  margin-top: 12px;
  color: #666;
  font-size: 14px;
  line-height: 21px;
}

.HomeContainer .textComment,
.HomeContainer .textStart {
  margin-left: 5px;
}

.HomeContainer .textComment {
  margin-right: 30px;
}
</style>
