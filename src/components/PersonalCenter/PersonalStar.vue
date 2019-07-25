<template>
  <div>
    <div class="personalStarContainer">
      <ul>
        <li v-for="(item,index) in liList">
          <a href="javascript:;">
            <span class="title" @click="toDetails"><b>收藏{{item.title}}</b></span></a>
          <a href="javascript:;">
            <p>
              {{item.content}}</p>
          </a>
          <br>
          <a href="javascript:;"><i class="el-icon-user"></i><span class="userName">{{item.name}}</span></a>
          <a href="javascript:;" class="sendTime">2018-01-10</a>
          <a href="javascript:;" class="liStar"><i class="el-icon-star-on"></i><span class="textStart">收藏</span></a>
          <a href="javascript:;" class="liComment"><i class="el-icon-s-comment"></i><span class="textComment">评论</span></a>
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
    this.$emit('func', 'myStar')
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
.personalStarContainer {
  background: #FFFFFF;
}

.personalStarContainer ul li {
  padding: 10px 10px 20px;
  border-bottom: 1px solid rgba(245, 245, 245, 1);
  list-style: none;
}

.personalStarContainer ul li a {
  text-decoration: none;
  color: #35ABA3;
}

.personalStarContainer .title {
  color: #333333;
  font-size: 18px;
}

.personalStarContainer .userName {
  margin-left: 5px;
  color: #35ABA3;
  font-size: 12px;
}

.personalStarContainer .sendTime {
  margin-left: 20px;
  color: #666666;
  font-size: 12px;
}

.personalStarContainer .liComment,
.personalStarContainer .liStar {
  display: block;
  float: right;
  color: #666666;
  font-size: 14px;
}

.personalStarContainer ul li a p {
  margin-top: 12px;
  color: #666;
  font-size: 14px;
  line-height: 21px;
}

.personalStarContainer .textComment,
.personalStarContainer .textStart {
  margin-left: 5px;

}

.personalStarContainer .textComment {
  margin-right: 30px;
}

</style>
