<template>
  <div class="special">
      <!--      第二导航-->
      <div class="tabContainer" >
        <el-tabs type="border-card" @tab-click="handleClick" v-model='activeName'>
          <el-tab-pane label="前端" name="webHead" class="is-active">
          </el-tab-pane>
          <el-tab-pane label="人工智能" name="AI"></el-tab-pane>
          <el-tab-pane label="架构" name="fromWork"></el-tab-pane>
          <el-tab-pane label="区块链" name="blockChain"></el-tab-pane>
          <el-tab-pane label="编程语言" name="codeLanguage"></el-tab-pane>
        </el-tabs>

        <el-input class="tabInput" placeholder="请输入内容"
                  prefix-icon="el-icon-search" v-model="input2">
        </el-input>
      </div>


    <list-sort></list-sort>
    <div class="specialContainer">
      <ul>
        <li v-for="(item,index) in specialList" class="specialLi" @click="toSpecialDetails" :key="index">

              <img :src="item.pic" alt="">
            <div class="describe">

                <p class="specialTitle"><b>{{item.title}}</b></p>
                <p class="specialContent">{{item.content}}</p>
                <i class="el-icon-user"></i>
                <span class="specialAuthor">{{item.name}}</span>
                <span class="specialTime">2019-06-23</span>

            </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import '../../mock/homeList.js'
  import ListSort from '../page/ListSort.vue'

  export default {
    data() {
      return {
        specialList: []
        ,input2:''
        ,activeName:'webHead'
      }
    },
    components: {
      ListSort,
    },
    created() {
      this.getFalseData()
       this.$emit('nowIndex','2')
    },
    methods: {

      getFalseData() {
        this.$http.get('/home/list').then((res) => {
          this.specialList = res.body.twos
        }, (err) => {
          console.log(err);
        })
      }
      , toSpecialDetails() {
        this.$router.push({
          name: 'specialDetails',
          query: {
            num: 321
          }
        })
      }
      ,handleClick(tab,event){
        console.log(tab,event);
      }
    }
  }
</script>

<style scoped>
  .special {
    height: 100%;
    background: #FFFFFF;
    width: 100%;
  }

  .specialContainer {
    height: 100%;
    overflow: hidden;
  }

  .specialContainer ul {
    width: 100%;
    background: #FFFFFF;
  }

  .specialContainer ul li {
    display: block;
    width: 520px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 4px;
    overflow: hidden;
    margin-top: 10px;
    cursor: pointer;
  }

  /*奇数*/
  .specialContainer ul li:nth-child(odd) {
    float: left;
    margin-left: 42px;
  }

  .specialContainer ul li:nth-child(even) {
    float: right;
    margin-right: 42px;
  }

  .specialContainer ul li a {
    text-decoration: none;
    color: rgba(102, 102, 102, 1);
  }

  .specialContainer ul li a img {
    width: 100%;
    height: 224px;
    margin-bottom: 10px;
  }

  .describe {
    padding: 10px 10px 20px;
  }

  .describe .specialTitle {
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    opacity: 1;
  }

  .describe .specialContent {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: rgba(102, 102, 102, 1);
    opacity: 1;
  }

  .describe .specialAuthor {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    color: rgba(53, 171, 163, 1);
    opacity: 1;
  }

  .describe .specialTime {
    margin-top: 10px;
    float: right;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    color: rgba(102, 102, 102, 1);
  }
</style>
