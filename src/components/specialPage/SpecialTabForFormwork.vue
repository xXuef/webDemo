<template>
  <div class="specialContainer">
    <ul>
      <li
        v-for="(item,index) in AIlist"
        class="specialLi"
        @click="toSpecialDetails"
        :key="index"
      >
        <img :src="item.imgUrl" alt />
        <div class="describe">
          <p class="specialTitle">
            <b>{{item.title}}</b>
          </p>
          <p class="specialContent">{{item.content}}</p>
          <div class="forUser">
            <img class="userIcon" :src="item.userIcon" alt />
            <span class="specialAuthor">{{item.userName}}</span>
            <span class="specialTime">{{item.time}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        AIlist:[]
    };
  },
  created() {
    this.getFalseData();
  },
  methods: {
    getFalseData() {

       var data = sessionStorage.getItem("specaialFlaseData");
       console.log(JSON.parse(data));
       
        this.AIlist =JSON.parse(data).special[0].special01
    },
    toSpecialDetails() {
      this.$router.push({
        name: "specialDetails",
        query: {
          num: 321
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
