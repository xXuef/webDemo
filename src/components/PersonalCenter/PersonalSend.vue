<template>
  <div>
    <span>{{msg}}</span>
    <div class="personalSendContainer">
      <ul>
        <li v-for="(item,index) in liList">
          <a href="javascript:;">
            <span class="title" @click="toDetails"><b>我的发布{{item.title}}</b></span></a>
          <a href="#">
            <p>
              {{item.content}}</p>
          </a>
          <br>
          <a href="#"><i class="el-icon-user"></i><span class="userName">{{item.name}}</span></a>
          <a href="#" class="sendTime">2018-01-10</a>
          <a href="#" class="liStar"><i class="el-icon-star-off"></i><span class="textStart">收藏</span></a>
          <a href="#" class="liComment"><i class="el-icon-s-comment"></i><span class="textComment">评论</span></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import '../../mock/homeList.js'
export default {

  data() {
    return {
      liList: []
    }
  },
  props: ['msg'],
  created() {
    this.getList()
  },
  //使用keep-alive之后生命钩子只会执行这个
  activated() {
    this.$emit('func', 'mySend')
  },
  methods: {
    getList() {
      this.$http.get("/home/list").then(res => {
        this.liList = res.body.articles
      })
    },
    toDetails() {
      this.$router.push({
        name: 'webAheadDetails',
        query: {
          id: 10012
        }
      })
    }
  }
}

</script>
<style scoped>
.personalSendContainer {
  background: #FFFFFF;
}

.personalSendContainer ul li {
  padding: 10px 10px 20px;
  border-bottom: 1px solid rgba(245, 245, 245, 1);
  list-style: none;
}

.personalSendContainer ul li a {
  text-decoration: none;
  color: #35ABA3;
}

.personalSendContainer .title {
  color: #333333;
  font-size: 18px;
}

.personalSendContainer .userName {
  margin-left: 5px;
  color: #35ABA3;
  font-size: 12px;
}

.personalSendContainer .sendTime {
  margin-left: 20px;
  color: #666666;
  font-size: 12px;
}

.personalSendContainer .liComment,
.personalSendContainer .liStar {
  display: block;
  float: right;
  color: #666666;
  font-size: 14px;
}

.personalSendContainer ul li a p {
  margin-top: 12px;
  color: #666;
  font-size: 14px;
  line-height: 21px;
}

.personalSendContainer .textComment,
.personalSendContainer .textStart {
  margin-left: 5px;

}

.personalSendContainer .textComment {
  margin-right: 30px;
}

</style>
