<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>公告</span>
        <span class="more">更多></span>
      </div>
    </template>
    <div class="content">
      <div class="info">
        <div class="title">{{ jslNoticeList && jslNoticeList[0].title }}</div>
        <div class="time">
          {{ jslNoticeList && jslNoticeList[0].createTimeString }}
        </div>
        <p v-html="jslNoticeList && jslNoticeList[0].content"></p>
      </div>
      <div class="list">
        <p v-for="(item,idnex) in jslNoticeList" :key="index" class="list-item">
          <span class="title">{{item.title}}</span>
          <span class="time">{{item.createTimeString}}</span>
        </p>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const jslNoticeList = computed(() => {
  console.log(store.state.app.homeInfo);
  return store.state.app.homeInfo?.jslNoticeList;
});
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  .more {
    font-size: 14px;
    cursor: pointer;
    color: var(--theme-color);
  }
  .content {
    .title {
      color: #666;
      font-size: 18px;
      line-height: 25px;
      padding-top: 20px;
    }
    .list-item {
      width: 100%;
      display: flex;
      justify-content: space-between;
    } 
  }
}
</style>
