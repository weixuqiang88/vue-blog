<template>
    <el-menu :default-active="activeIndex" class="topnav" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">网站首页</el-menu-item>
        <el-menu-item index="2"><el-input></el-input></el-menu-item>
        <span style="float:right;padding-top:20px;margin-right:1%;">
            <el-dropdown>
                <span class="el-dropdown-link" style="color:white">
                    admin<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
            </el-dropdown>
        </span>        
    </el-menu>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
/*.topnav {
    float: left;
}*/
</style>
