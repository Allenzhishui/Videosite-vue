<template>
  <el-menu class="el-menu-demo" mode="horizontal" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/postVideo">投稿</el-menu-item>
    <el-menu-item index="/about">关于</el-menu-item>
    <el-menu-item index="/Login">登陆</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.el-menu-demo {
  margin-bottom: 20px;
}
</style>