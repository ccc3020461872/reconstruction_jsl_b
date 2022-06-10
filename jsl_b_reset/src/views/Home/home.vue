<template>
  <el-container class="container">
    <el-header class="header">
      <Header @doCollapse="setCollapse"/>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
       <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        background-color="#eeeeee"
        :default-active="activeIndex"
        active-text-color="#fff"
        mode="vertical"
       @select="doSelect"
      >
       <template v-for="(item, index) in navList" :key="index">
        <el-menu-item :index="item.path" :route="item" class="menu-item">
          <el-icon><setting /></el-icon>
          <span>{{item.meta.title}}</span>
        </el-menu-item>
       </template>
      </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view>
        </router-view>
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
import { reactive, ref } from "vue";
import {homeChildren} from "@/router/routes";
import Header from "./Header/header.vue";
import { queryBNewIndexVo } from '@/service/apis/main'
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
const navList = homeChildren
const router = useRouter()
const store = useStore()
const activeIndex = ref('')
console.log(navList);
const isCollapse = ref(false)
const handleOpen = () => {
    console.log('handOpen');
}
const handleClose = () => {
    console.log('handleClose');
}
const setCollapse = (v) => {
  isCollapse.value = v
}
const doQueryBNewIndexVo = async() => {
  try{
  const res = await queryBNewIndexVo()
  if(res.code === '0'){
    store.commit('app/setHomeInfo',res.data)
  }else {
     ElMessage({
    message: res.msg,
    type: 'warning',
  })
  }
  }catch(err){
    console.log(err);
  }


}
// 激活菜单
const doSelect = (e) => {
  console.log(e);
  activeIndex.value = e
  router.push(`/home/${e}`)
}

doQueryBNewIndexVo()
</script>

<style lang="scss" scoped>

.container {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.menu-item {
  height: 75px;
  width: 100%;
}

.aside {
}
.main {
}
::v-deep .is-active {
  background-color: #f6b400 !important;
}
::v-deep .el-menu-item:hover {
  background-color: #ffd461 !important;
}
::v-deep .el-main{
  background-color: rgb(245, 247, 249);
  
}
</style>
