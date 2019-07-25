<template>
  <div class="eBookContainer">
    <!--      第二导航-->
    <div class="tabContainer">
      <el-tabs type="border-card" @tab-click="handleClick" v-model='activeName'>
        <el-tab-pane label="前端" name="webHead" class="is-active">
        </el-tab-pane>
        <el-tab-pane label="人工智能" name="AI"></el-tab-pane>
        <el-tab-pane label="架构" name="fromWork"></el-tab-pane>
        <el-tab-pane label="区块链" name="blockChain"></el-tab-pane>
        <el-tab-pane label="编程语言" name="codeLanguage"></el-tab-pane>
      </el-tabs>

      <el-input class="tabInput" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2">
      </el-input>
    </div>


    <list-sort></list-sort>
    <div class="books">
      <ul>
        <li v-for="(item,index) in eBookList" @click="toDetails" :key="index"> 
          <img :src="item.bookImg" alt="">
          <span class="bookName">{{item.bookName}}</span>
          <span class="bookAuthor">{{item.bookAuthor}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import ListSort from '../page/ListSort.vue'

  export default {
    name: "EBook",
    data() {
      return {
        eBookList: [],
        activeName: 'webHead',
        input2: ''
      }
    },
    components: {
      ListSort,
    },
    created() {
      this.getFalseData()
    },
    activated() {
      this.$emit('nowIndex', '3')
    },
    methods: {
      getFalseData() {
        this.$http.get('/home/list').then((res) => {
          this.eBookList = res.body.articles
        }, (err) => {
          console.log(err);
        })
      },
      toDetails() {
        this.$router.push({
          name: 'webAheadDetails',
          query: {
            id: 10012
          }
        })
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
  .eBookContainer {
    height: 100%;
    overflow: hidden;
    background: #FFFFFF;
  }

  /* .books {} */

  .books ul li {
    float: left;
    list-style: none;
    width: 25%;
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
  }


  .books ul li img {
    width: 216px;
    height: 306px;
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