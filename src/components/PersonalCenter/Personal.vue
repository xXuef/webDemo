<template>
  <div class="perContainer">
    <img :src="userIconUrl" alt />
    <div class="divName">
      <a href="javascript:;">
        <span class="personalName">{{name}}</span>
      </a>
      <a href="javascript:;">
        <span class="edit">
          <i class="el-icon-edit-outline"></i>
        </span>
      </a>
    </div>
    <div class="divPw">
      <a href="javascript:;" class="accountTxt">
        账号:
        <span class="Account">{{account}}</span>
      </a>
      <a href="javascript:;" class="pwTxt">
        密码:
        <span class="Pw">***</span>
      </a>
      <a href="javascript:;" class="edit">修改</a>
    </div>
    <div class="testPage" @click="toTestPage"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "奥斯特洛夫斯基",
      account: "",
      userIconUrl: ""
    };
  },
  created() {
    this.name = localStorage.getItem("userName") || "王境泽";
    this.account = localStorage.getItem("account") || "123456";
    this.userIconUrl =
      localStorage.getItem("userIcon") ||
      "../../../static/icon_home_want_delete.png";
  },
  methods: {
    toTestPage() {
      this.$router.push({
        name: "test"
      });
    }
  }
};
</script>

<style scoped>
.perContainer {
  text-align: center;
  background-color: #ffffff;
  padding: 10px;
}

a {
  text-decoration: none;
  color: #1d222e;
}

.perContainer img {
  width: 120px;
  height: 120px;
  margin-top: 30px;
  border-radius: 50%;
}
.divName {
  margin-top: 15px;
}
.divName span {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: rgba(27, 41, 69, 1);
  opacity: 1;
}

.divPw {
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: rgba(27, 41, 69, 1);
  opacity: 1;
}

.divPw .pwTxt {
  margin-left: 50px;
}

.divPw .edit {
  margin-left: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: rgba(53, 171, 163, 1);
  opacity: 1;
}
.testPage {
  width: 20px;
  height: 20px;
  background: #ffffff;
}
</style>
