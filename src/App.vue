<template>
  <div id="app">

    <!--    总路由 
    
   在home界面中还有一个    个人中心也有一个-->
   <!-- 只有一个home login -->
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data() {
      return {
        Login: null
      }
    },
    created() {
      this.LogonBoolean();
    
    }, methods: {
      LogonBoolean() {

        var LoginOrNo=localStorage.getItem("loginStatus")
        console.log('TTT'+LoginOrNo);
        
        if (LoginOrNo=='true') {
          // 登录了跳向 /
          this.$router.push('home');
        }else if(LoginOrNo=='false'){
            this.$router.push('login');
        }   
      }
    }
  }
</script>


<style>
#app{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

</style>
