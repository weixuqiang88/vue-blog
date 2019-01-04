<template>
    <el-menu default-active="2" class="sidenav" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>博客管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">
                    <div @click="addBlog('/home/addblog')">添加</div>
                </el-menu-item>
                <el-menu-item index="1-2">
                    <div @click="addBlog('/home/addblog')">编辑</div>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-tickets"></i>
            <span slot="title">标签管理</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-share"></i>
            <span slot="title">分类管理</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-edit"></i>
            <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">修改密码</span>
        </el-menu-item>  
    </el-menu>
</template>

<script>
export default {
    data() {
      return {
        
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      addBlog(url){
        this.$router.push(url)
      }
    }
}
</script>
<style>
.bl-sub{
    width: 2px;
}
</style>
