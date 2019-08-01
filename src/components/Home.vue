// 此界面为login之后的第一界面架子
<template>
  <el-container>
    <el-header>
      <!--头部`````````````````````````````````````````````````````````-->
      <div class="allWp">
        <div class="wp">
          <img class="myIcon" src="../../static/icon_home_want_delete.png" alt />
          <el-menu
            :default-active="activeIndex"
            @select="handleSelect"
            class="el-menu-demo"
            mode="horizontal"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">专题</el-menu-item>
            <el-menu-item index="3">电子书</el-menu-item>
            <el-menu-item index="4">个人中心</el-menu-item>
          </el-menu>

          <div class="topRight">
            <ul>
              <li>
                <img
                  class="userIcon"
                  src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2589000459,765914848&fm=26&gp=0.jpg"
                />

                <el-dropdown trigger="click" @command="handleCommand">
                  <span
                    class="el-dropdown-link"
                    style="color:#1B2945;margin:5px;vertical-align: middle;"
                  >{{this.userName}}</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>

              <li @click="toSend">
                <i class="el-icon-edit-outline"></i>
                <span class="topTxt">发布</span>
              </li>

              <li @click="toMyFeel">
                <i class="el-icon-s-opportunity"></i>
                <span class="topTxt">观后感</span>
              </li>
            </ul>
          </div>
          <div class="textLogin">
            <a href="#">
              <span @click="showDialogLogin">账号登录</span>
            </a>
          </div>
        </div>
      </div>
    </el-header>

    <el-main>
      <!--diaLog---------------------------------------------------------------->
      <div class="divToast" v-cloak>
        <el-dialog
          title="提示"
          :visible.sync="centerDialogVisible"
          width="30%"
          :modal-append-to-body="false"
          class="divElDialog"
          center
          @close="closeDialog"
        >
          <div class="dialogBody" style="text-align: center;padding: 0">
            <el-input class="elInput inputOne" clearable v-model="inputOne" placeholder="账号"></el-input>
            <el-input
              class="elInput inputTwo"
              type="password"
              clearable
              v-model="inputTwo"
              placeholder="密码"
            ></el-input>

            <span class="forgetPw">忘记密码</span>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button class="btLogin" type="primary" @click="btForLogin">确定</el-button>
          </span>
        </el-dialog>
      </div>
      <!--内容界面------------------------------------------------------->
      <div class="autoCenter">
        <keep-alive>
          <router-view name="navContainer" @navSelect="getNavSelect"></router-view>
        </keep-alive>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      userName: "",
      centerDialogVisible: false,
      inputOne: "",
      inputTwo: "",
      //  是不是中心界面的nav被触发
      isClickPersonalCenter: false
    };
  },
  created() {
    // 接收参数 外加判断
    this.loginBooleanNow();
    this.loadRoute();
    this.userName = localStorage.getItem("userName");
    this.getNavSelect();
  },

  activated() {
    this.getNavSelect();
    this.$loading({ target: "el-main" });
  },
  methods: {
    // 下拉菜单
    handleCommand(command) {
      if (command == "a") {
        localStorage.setItem("loginStatus", "false");
        $(function() {
          $(".topRight").css("display", "none");
          $(".textLogin").css("display", "block");
        });
      }
    },
    showTabs(value = false) {
      this.tabShow = value;
    },
    getNavSelect(name) {
      console.log("nowNav" + name);

      this.activeIndex = name;
    },
    // 去发布编辑页面
    toSend() {
      this.showTabs(false);
      this.$router.push({
        name: "toSend"
      });
    },
    // 去我的观后感界面
    toMyFeel() {
      this.$router.push({
        name: "personalFeel"
      });
    },
    //加载前端界面路由
    loadRoute() {
      this.$router.push({
        name: "homeMainRoute"
      });
    },
    // nav导航的点击控制
    handleSelect(key, keyPath) {
      if (key == 1) {
        console.log("1");
        this.showTabs(true);
        this.$router.push({
          name: "HomeTabForAhead",
          query: {
            tabName: "webHead"
          }
        });
      } else if (key == 2) {
        this.showTabs();
        console.log("2");
        this.$router.push({
          name: "specialTabForAhead"
        });
      } else if (key == 3) {
        this.showTabs();
        console.log("3");
        this.$router.push({
          name: "eBookTabForAHead"
        });
      } else if (key == 4) {
        console.log("4");
        var loginOrNo = localStorage.getItem("loginStatus");

        if (loginOrNo == "false") {
          this.showDialogLogin();
          this.isClickPersonalCenter = true;
          this.showTabs(false);
          return;
        }

        this.$router.push({
          name: "personalSend"
        });
        this.showTabs(false);
      }
    },
    // 接收上个界面的路由参数判断是否登录
    // 并且显示隐藏右上角的登录跟用户界面
    loginBooleanNow() {
      var LoginOrNo = localStorage.getItem("loginStatus");
      console.log("loginBooleanNow" + LoginOrNo);

      if (LoginOrNo == "true") {
        // console.log("+++++++++++++++++++");

        //如果登录状态为true 登录按钮出来block 另外三个按钮none
        $(function() {
          $(".topRight").css("display", "block");
          $(".textLogin").css("display", "none");
        });
      } else if (LoginOrNo == "false") {
        //如果登录状态为false  登录按钮出来block 另外三个按钮none
        $(function() {
          $(".topRight").css("display", "none");
          $(".textLogin").css("display", "block");
        });
      }
      this.hiddenDialogLogin();
    },
    // 显示登录dialog
    showDialogLogin() {
      this.centerDialogVisible = true;
    },
    // 隐藏Dialog
    hiddenDialogLogin() {
      this.centerDialogVisible = false;
    },
    closeDialog() {
      // console.log("dialog关闭监听");
      // 进来不管啥都给他false
      this.isClickPersonalCenter = false;
      this.inputOne = "";
      this.inputTwo = "";
      let loginStatus = localStorage.getItem("loginStatus");
      if (loginStatus == "false") {
        this.isClickPersonalCenter = false;
      } else if (loginStatus == "true") {
        this.isClickPersonalCenter = true;
      }
    },
    // dialog中的登录按钮
    btForLogin() {
      //非空判断
      var account = this.inputOne.trim();
      var pw = this.inputTwo.trim();
      if (account == "" || pw == "") {
        this.$message({
          showClose: true,
          message: "请输入账号密码！"
        });
        return;
      }

      this.$http.get("../../static/FalseData/LoginData.json").then(
        res => {
          // console.log(res);
          this.loginInfo = res.body.data[0];
          if (
            this.loginInfo.accountNum == this.inputOne &&
            this.loginInfo.passWord == this.inputTwo
          ) {
            console.log("进来登录逻辑了");
            localStorage.setItem("loginStatus", "true");
            localStorage.setItem("userName", this.loginInfo.userName);
            localStorage.setItem("account", this.loginInfo.accountNum);
            localStorage.setItem("userIcon", this.loginInfo.userIcon);
            this.$router.push({
              name: "HomeTabForAhead"
            });
          } else {
            this.$message({
              showClose: true,
              message: "账号密码错误！"
            });
            return;
          }
          $(function() {
            // console.log("click123");
            $(".topRight").css("display", "block");
            $(".textLogin").css("display", "none");
          });
          // diaglog消失
          this.hiddenDialogLogin();
          if (this.isClickPersonalCenter) {
            console.log("触发dialog完事跳转个人中心");
            this.$router.push({
              name: "personalSend",
              activeName: "mySend"
            });
          }
        },
        err => {}
      );
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$loading({ fullscreen: false, target: "el-main" }).close();
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.el-container {
  background: #f2f6fa;
}
.el-header {
  padding: 0;
}
.el-main {
  padding: 0;
  min-height: 1000px;
}
/*background:rgba(242,246,250,1);*/
.autoCenter {
  padding: 0 10px;
  /*background: #ffffff;*/
  width: 80%;
  margin: 0 auto;
}

.allWp {
  width: 100%;
  box-shadow: 0px 0px 2px 0px #ccc;
  background: #ffffff;
}

.wp {
  width: 80%;
  height: 45px;
  margin: 0 auto;
  padding: 0;
  position: relative;
}

.textLogin {
  position: absolute;
  right: 0;
  bottom: 0;
}

.topRight {
  display: none;
  position: absolute;
  right: 0;
  bottom: 0;
}

.textLogin a {
  font-size: 15px;
  line-height: 45px;
  text-decoration: none;
  color: #ccc;
}

.topRight li {
  float: right;
  list-style: none;
  margin-right: 15px;
  cursor: pointer;
  color: #ccc;
  font-size: 15px;
  line-height: 45px;
}
.topRight .userIcon {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  vertical-align: middle;
}
.topRight .topTxt {
  line-height: 45px;
  color: #35aba3;
  vertical-align: middle;
}
.topRight [class*=" el-icon-"],
[class^="el-icon-"] {
  line-height: 45px;
  font-size: 18px;
  vertical-align: middle;
}
.myIcon {
  width: 100px;
  height: 45px;
  cursor: pointer;
  float: left;
}

.myIcon img {
  width: 100px;
  height: 45px;
}

/* Nav设置····························*/
.el-menu--horizontal > .el-menu-item {
  min-width: 50px;
  height: 45px;
  border: none;
  text-align: center;
  margin: 0 15px;
  font-size: 15px;
  line-height: 45px;
}

.el-menu-demo {
  float: left;
  height: 45px;
}

/*顶部nav的底部直线*/
.el-menu.el-menu--horizontal {
  border-bottom: none;
}

/*顶部nav */
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  border-top: 2px solid #1b2945;
  color: #303133;
}

/*nav 设置完事······················*/
/*内容*/

/*Dialog----toast*/

.inputTwo {
  margin-top: 10px;
}

.divToast .elInput {
  width: 95%;
}

.divToast .forgetPw {
  display: block;
  text-align: right;
  margin-right: 5px;
  font-size: 12px;
  margin-top: 20px;
  line-height: 17px;
  color: rgba(53, 171, 163, 1);
  opacity: 1;
}

.divToast .dialogBody .el-input__inner {
  -webkit-appearance: none;
  background: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  outline: 0;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.divToast .btLogin {
  width: 95%;
  height: 40px;
  background: rgba(53, 171, 163, 1);
  opacity: 1;
  border: none;
  border-radius: 4px;
  margin-bottom: 30px;
}

.divElDialog .el-dialog--center .el-dialog__body {
  text-align: initial;
  padding: 25px 25px 5px;
}

/*tab控件css配置开始····在其他界面也是各种用···········*/
.tabContainer {
  width: 100%;
  height: auto;
  margin: 0 auto;
  background: #d4e3fb;
  position: relative;
}

.tabContainer .el-tabs--border-card {
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.tabContainer > .el-tabs--border-card > .el-tabs__header {
  /*background-color: #1D222E;*/
  background-color: #1b2945;
  border: none;
  border-top: 1px solid #1b2945;
  border-radius: 3px;
  margin: 0;
}

.tabContainer .el-tabs--border-card > .el-tabs__header .el-tabs__item {
  color: #ffffff;
  text-align: center;
  border: none;
  min-width: 80px;
}
.tabContainer
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:first-child {
  margin-left: 1px;
}

.tabContainer
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item.is-active {
  color: #1b2945;
  background-color: #fff;
  /*border-right-color: #DCDFE6;*/
  /*border-left-color: #DCDFE6;*/
  border: none;
  box-shadow: none;
}

.el-tabs--border-card > .el-tabs__content {
  margin: 0;
  padding: 0;
  height: 0;
}

.tabContainer
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #409eff;
  /*color: #FFFFFF;*/
}

/*input*/
.tabContainer .tabInput {
  background: none;
  width: 160px;
  height: 28px;
  position: absolute;
  right: 0;
  top: 5px;
  margin-right: 10px;
}

.tabContainer .el-input__inner {
  -webkit-appearance: none;
  background: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: 15px;
  height: 28px;
  line-height: 28px;
  outline: 0;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

.tabContainer .el-input__icon {
  height: 100%;
  width: 25px;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  line-height: 28px;
}

/*# tab配置结束··························*/

.el-dropdown-link {
  cursor: pointer;
  color: #ccc;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>