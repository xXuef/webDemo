<template>
  <div id="app">

    <!--    总路由  在home界面中还有一个    个人中心也有一个-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data() {
      return {
        Login: false
      }
    },
    created() {
      this.LogonBoolean();
    }, methods: {
      LogonBoolean() {
        if (!this.Login) {//没有登录
          // 跳向 /
          this.$router.push('login');
        }
      }
    }
  }
</script>


<style>


</style>
