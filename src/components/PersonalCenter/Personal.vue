<template>
  <div class="perContainer">
    <img src="../../../static/icon_home_want_delete.png" alt="">
    <div class="divName">
      <a href="#">
        <span class="personalName">Name</span> </a>
      <a href=""><span class="edit"><i class="el-icon-edit-outline"></i></span>
      </a>
    </div>
    <div class="divPw">
      <a href="#" class="accountTxt">账号:<span class="Account">123123213</span></a>
      <a href="#" class="pwTxt">密码:<span class="Pw">********</span></a>
      <a href="#" class="edit">修改</a>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: "Personal"
  }
</script>

<style scoped>

  .perContainer {
    text-align: center;
    background-color: #FFFFFF;
    padding: 10px;
  }

  a {
    text-decoration: none;
    color: #1D222E;
  }

  .perContainer img {
    width: 120px;
    height: 120px;
    margin-top: 30px;
    border-radius: 50%;
  }
  .divName{
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
    font-size:16px;
    font-weight:400;
    line-height:22px;
    color:rgba(53,171,163,1);
    opacity:1;
  }
</style>
