<template>
    <el-container>
      <el-aside width="240"><sidenav/></el-aside>
      <el-container>
        <el-header><topnav/></el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
</template>
<script>
import topnav from './nav/topnav'
import sidenav from './nav/sidenav'

export default {
    data(){
        return{};
    },
    components:{topnav,sidenav}
}
</script>
<style>
.el-header, .el-footer {
    padding: 0px;
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  /*.el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }*/
</style>
