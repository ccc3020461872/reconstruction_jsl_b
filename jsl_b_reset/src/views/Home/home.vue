<template>
  <el-container class="container">
    <el-header class="header">Header</el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item v-for="(item, index) in navList" :index="index + ''">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { reactive } from "vue";
const navList = reactive([
  {
    title: "首页",
    path: "",
  },
  {
    title: "首页",
    path: "",
  },
  {
    title: "首页",
    path: "",
  },
  {
    title: "首页",
    path: "",
  },
  {
    title: "首页",
    path: "",
  },
  {
    title: "首页",
    path: "",
  },
  {
    title: "首页",
    path: "",
  },
  {
    title: "首页",
    path: "",
  },
  {
    title: "首页",
    path: "",
  },
]);
const handleOpen = () => {
    console.log('handOpen');
}
const handleClose = () => {
    console.log('handleClose');
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.header {
  background-color: red;
}
.aside {
  background-color: aqua;
}
.main {
  background-color: aquamarine;
}
</style>
