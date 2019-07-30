<template>
  <div class="books">
    <ul>
      <li v-for="(item,index) in eBookList" @click="toDetails" :key="index">
        <img :src="item.bookUrl" alt />
        <span class="bookName">{{item.bookName}}</span>
        <span class="bookAuthor">{{item.bookAuthor}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import "../../mock/homeList.js";
export default {
  data() {
    return {
      eBookList: []
    };
  },
  created() {
    this.getFalseData();
  },
  methods: {
    getFalseData() {
      this.$http.get("../../../static/FalseData/FalseDataForEBook.json").then(
        res => {
          console.log(res.body);
          
          this.eBookList = res.body.eBook[0].eBook01;
        },
        err => {
          console.log(err);
        }
      );
    },
    toDetails() {
      this.$router.push({
        name: "webAheadDetails",
        query: {
          id: 10012
        }
      });
    }
  }
};
</script>

<style scoped>

.books{
  margin-top: 20px;
}
.books ul li {
  float: left;
  list-style: none;
  width: 25%;
  margin-bottom: 20px;
  text-align: center;
  cursor: pointer;
}

.books ul li img {
  width: 90%;
  height: 230px;
  background: rgba(0, 0, 0, 0);
}

.books ul li .bookName {
  margin-top: 12px;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: rgba(40, 41, 35, 1);
  opacity: 1;
}

.books ul li .bookAuthor {
  margin-top: 12px;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: rgba(40, 41, 35, 1);
  opacity: 1;
}
</style>
