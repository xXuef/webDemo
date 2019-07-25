<template>

  <div class="container">

    <img src="../../static/login_bg.png" alt="" class="centerImg">

    <div class="box">
      <img src="../../static/icon_logo.png" alt="">

      <el-input class="elInput inputOne" clearable v-model="inputAccount" placeholder="账号">
      </el-input>
      <el-input class="elInput inputTwo" clearable v-model="inputPw" placeholder="密码"></el-input>
      <el-button :plain="true" class="btLogin" @click="btLogin">登录</el-button>
      <el-button :plain="true" class="btLoginCopy" @click="skip">跳过</el-button>

    </div>

  </div>
</template>

<script>
  export default {

    data() {
      return {
        inputAccount: '',
        inputPw: ''
      }
    }
    , methods: {
      btLogin() {
        var account = this.inputAccount.trim()
        var pw = this.inputPw.trim()
        if (this.isEmpty(account) || this.isEmpty(pw)) {
          this.$message({
            showClose: true,
            message: '请输入账号密码！'
          })
          return false
        }
        this.$router.push({
          name: 'home',
          query: {
            loginBoolean: true,
            textNum: 1,
          }
        })
      },
      skip(){
        this.$router.push({
          name: 'home',
          query: {
            loginBoolean: false,
            textNum: 1,
          }
        })
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
  }
</script>

<style scoped>
  /*#1D222F*/
  .container {
    width: 1920px;
    height: 1080px;
    background: url("../../static/login_bg.png") no-repeat;
    background-size: 1920px 1080px;
    position: relative;
  }

  .centerImg {
    width: 680px;
    height: 600px;
    position: absolute;
    top: 240px;
    left: 460px;
  }

  .box {
    position: absolute;
    width: 320px;
    height: 600px;
    background: #1D222F;
    right: 460px;
    top: 238px;
  }

  .box img {
    display: block;
    margin: 130px auto 0px;
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
