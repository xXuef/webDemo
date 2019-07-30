<template>
  <div class="HomeContainer">
    <ul>
      <li v-for="(item,index) in FromWorkList" class="bigComment" :key="index">
        <span class="title" @click="toDetails">
          <b>{{item.title}}</b>
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
export default {
  data() {
    return {
      FromWorkList: []
    };
  },
  activated() {
    this.$emit("whatName", "fromWork");
  },
  created() {
      this.getLocaData()
  },
  methods: {
    getLocaData() {
      var data = sessionStorage.getItem("homeFlaseData");
      this.FromWorkList = JSON.parse(data).home[2].data.webAheadData;
    },
     toDetails() {
      this.$router.push({
        name: "webAheadDetails",
        query: {
          name:'架构'
        }
      });
    },
    firstComment() {
      if (this.showFirstComment) {
        this.showFirstComment = false;
      } else {
        this.showFirstComment = true;
      }
    }
  }

};
</script>
