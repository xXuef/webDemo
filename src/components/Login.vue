<template>
  <div class="loginContainer">
    <div style="width: 20px;height: 20px; "></div>
    <div class="centerContent">

      <div class="box">
        <img src="../../static/icon_logo.png" alt />

        <el-input class="elInput inputOne" clearable v-model="inputAccount" placeholder="账号"></el-input>
        <el-input class="elInput inputTwo" type="password" clearable v-model="inputPw" placeholder="密码"></el-input>
        <el-button :plain="true" class="btLogin" @click="btLogin">登录</el-button>
        <el-button :plain="true" class="btLoginCopy" @click="skip">跳过</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputAccount: "",
      inputPw: "",
      loginInfo: {},
      sss:false
    };
  },
  created() {
    if (localStorage.getItem("loginStatus") == "true") {
      // 登录了跳向 /
      console.log("触发");
      this.$router.push("HomeTabForAhead");
    }
  },
  methods: {
    btLogin() {
      //非空判断
      var account = this.inputAccount.trim();
      var pw = this.inputPw.trim();
      if (this.isEmpty(account) || this.isEmpty(pw)) {
        this.$message({
          showClose: true,
          message: "请输入账号密码！"
        });
        return;
      }

      this.$http.get("../../static/FalseData/LoginData.json").then(
        res => {
          console.log(res);
          this.loginInfo = res.body.data[0];
          if (
            this.loginInfo.accountNum == this.inputAccount &&
            this.loginInfo.passWord == this.inputPw
          ) {
            console.log("进来登录逻辑了");
            localStorage.setItem("loginStatus", "true");
            localStorage.setItem("userName", this.loginInfo.userName);
            this.$router.push({
              name: "home"
            });
          } else {
            this.$message({
              showClose: true,
              message: "账号密码错误！"
            });
            return;
          }
        },
        err => {}
      );
    },
    skip() {
      this.$router.push({
        name: "home"
      });
      localStorage.setItem("loginStatus", "false");
    },
    //判断字符是否为空的方法
    isEmpty(obj) {
      if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
/*#1D222F*/


.loginContainer {
 
  background: url("../../static/login_bg.png") no-repeat;
  background-size: cover;
  height: 1080px;
}

.centerContent {
  background: url("../../static/login_bg.png") no-repeat;
  background-size: cover;
  width: 70%;
  height: 500px;
  margin: 130px auto;
}

.box {
  float: right;
  width: 300px;
  height: 500px;
  background: #1d222f;
}

.box img {
  display: block;
  margin:50px auto 0;
}

.elInput {
  width: 240px;
  background: none;
  z-index: 20;
}

.elInput.inputOne {
  margin: 20px auto 0px;
  display: block;
}

.elInput.inputTwo {
  margin: 20px auto 0px;
  display: block;
}

.btLogin {
  margin: 40px auto 0px;
  display: block;
  width: 240px;
  height: 44px;
}

.btLoginCopy {
  margin: 20px auto 0px;
  display: block;
  width: 240px;
  height: 44px;
}
</style>
