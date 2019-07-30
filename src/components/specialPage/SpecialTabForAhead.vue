<template>
  <div class="specialContainer">
    <ul>
      <li
        v-for="(item,index) in specialList"
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
import "../../mock/homeList.js";
export default {
  data() {
    return {
      specialList: []
    };
  },
  created() {
    this.getFalseData();
    this.$emit("nowIndex", "2");
  },
  methods: {
    getFalseData() {
      // var data = sessionStorage.getItem("specaialFlaseData");
      // if (data = !null) {
      //   var data = sessionStorage.getItem("specaialFlaseData");

      //   this.specialList = JSON.parse(data).special[0].special01;
      //   return;
      // }
      this.$http.get("../../../static/FalseData/FalseDataForSpecial.json").then(
        res => {
          console.log(res.body);
          sessionStorage.setItem("specaialFlaseData", JSON.stringify(res.body));
          this.specialList = res.body.special[0].special01;
        },
        err => {
          console.log(err);
        }
      );
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


<style>
/* 直接解开   其他界面也要用 */
.specialContainer {
  height: 100%;
  overflow: hidden;
}

.specialContainer ul {
  width: 100%;
  background: #ffffff;
}

.specialContainer ul li {
  width: 45%;
  height: 25%;
  float: left;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 10px;
  cursor: pointer;
}
.specialContainer ul li:nth-child(odd) {
  float: right;
  margin-right: 30px;
}
.specialContainer ul li:nth-child(even) {
  float: left;
  margin-left: 30px;
}

.specialContainer a {
  text-decoration: none;
  color: rgba(102, 102, 102, 1);
}

.specialContainer ul li img {
  width: 100%;
  height: 224px;
  margin-bottom: 10px;
}

.specialContainer .describe {
  padding: 10px 10px 20px;
}

.specialContainer .describe .specialTitle {
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  color: rgba(51, 51, 51, 1);
  opacity: 1;
}

.specialContainer .describe .specialContent {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(102, 102, 102, 1);
  opacity: 1;
}
.specialContainer .describe .forUser {
  margin-top: 10px;
}
.specialContainer .describe .forUser .userIcon {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 25px;
  float: left;
}
.specialContainer .describe .forUser .specialAuthor {
  font-size: 12px;
  font-weight: 400;
  line-height: 25px;
  color: rgba(53, 171, 163, 1);
  float: left;
  margin-left: 10px;
}

.specialContainer .describe .forUser .specialTime {
  float: right;
  font-size: 12px;
  font-weight: 400;
  line-height: 25px;
  color: rgba(102, 102, 102, 1);
}
</style>
