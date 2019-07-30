<template>
   <div class="HomeContainer">
    <ul>
      <li v-for="(item,index) in AI_List" class="bigComment" :key="index">
        <span class="title" @click="toDetails">
          <b>编程语言{{item.title}}</b>
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
      AI_List:[]
    };
  },
  activated() {
    this.$emit("whatName", "codeLanguage");
  },
  created(){
    this.getLocaData()
  },
  methods:{
    getLocaData(){
      var data = sessionStorage.getItem('homeFlaseData')
      this.AI_List =JSON.parse(data).home[1].data.webAheadData;
    },
     toDetails() {
      this.$router.push({
        name: "webAheadDetails",
        query: {
          name: 'AI'
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
<style scoped>
</style>
