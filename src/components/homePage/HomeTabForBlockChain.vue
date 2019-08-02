<template>
  <div class="HomeContainer">
    <ul>
      <li v-for="(item,index) in liList" class="bigComment" :key="index">
        <span class="title" @click="toDetails">
          <b>区块链{{item.title}}</b>
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
    this.$emit("whatName", "blockChain");
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
        name: "webAheadDetails"
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



<style scoped>
</style>
