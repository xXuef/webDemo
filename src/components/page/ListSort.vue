<template>

    <div class="allSort">
      <el-button class="active" size="small" @click="btSort('all')">全部</el-button>
      <el-button size="small"  @click="btSort('newest')">最新</el-button>
      <el-button size="small"  @click="btSort('hot')">最热</el-button>
    </div>

</template>

<script>

  export default {
    data(){
      return{

      }
    }
    ,methods:{
      btSort(str) {

      },
    }
  }
</script>

<style scoped>


  .allSort:first-child {
    margin-left: 15px;
    margin-bottom: 10px;
  }

  /*  button 修改*/
  .allSort .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: none;
    border: none;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 15px 10px 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    padding: 10px 15px;
    font-size: 12px;
    border-radius: 4px;
  }

  .allSort .el-button.active {
    border: 1px solid #dcdfe6;
    color: white;
    background: #ccc;
  }

</style>
