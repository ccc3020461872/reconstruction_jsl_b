<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <span>公告</span>
        <span class="more">更多></span>
      </div>
    </template>
    <div class="content">
      <div class="info" @click="showDetail(jslNoticeList && jslNoticeList[0])">
        <div class="title">{{ jslNoticeList && jslNoticeList[0].title }}</div>
        <div class="time">
          {{ jslNoticeList && jslNoticeList[0].createTimeString }}
        </div>
        <p v-html="jslNoticeList && jslNoticeList[0].content" class="text"></p>
      </div>
      <div class="list">
        <p
          v-for="(item, index) in jslNoticeList"
          :key="index"
          class="list-item"
          @click="showDetail(item)"
        >
          <span class="title">{{ item.title }}</span>
          <span class="time">{{ item.createTimeString }}</span>
        </p>
      </div>
    </div>
  </el-card>
  <!-- 详情 -->
   <el-dialog
    v-model="isShowDetail"
    title="通知公告详情"
    width="50%"
    custom-class="notice-pop"
  >
    <p class="title">{{noticeDetail.title}}</p>
    <p class="notice-content" v-html="noticeDetail.content"></p>

    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="isShowDetail = false"
          >关闭</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const jslNoticeList = computed(() => {
  console.log(store.state.app.homeInfo);
  return store.state.app.homeInfo?.jslNoticeList;
});
const isShowDetail = ref(false); //控制通知详情是否展示
const noticeDetail = ref(null) //惦记的通知详情
const showDetail = (e) => {
  noticeDetail.value = e
  isShowDetail.value = true
}
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
}
.content {
  .info {
    width: 100%;
    height: 250px;
    .title {
      color: #666;
      font-size: 18px;
      line-height: 25px;
      padding-top: 20px;
      text-align: center;
    }
    .time {
      text-align: center;
      margin: 20px 0;
    }
    .text {
      font-size: 16px;
      line-height: 28px;
        white-space: normal; /*默认*/
    -webkit-line-clamp: 5; /*控制行数*/
    text-overflow: ellipsis; /*打点*/
    display: -webkit-box;
    overflow: hidden; /*隐藏打点*/
    -webkit-box-orient: vertical; /*垂直排列*/
    }
  }

  .list-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 14px;
    line-height: 24px;
    transition: .3s ease-out;
  }
  .list-item:nth-child(2n-1){
    background-color: #f7f7f7;
  }
  .list-item:hover {
    color: #ffa31a;
  }
  .list-item:nth-child(2n-1):hover {
    background-color: #fff7e0;
  }
}
.notice-pop {
  font-size: 14px;
  line-height: 28px;
  .title {
    text-align: center;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .notice-content {
    font-size: 16px;
    line-height: 28px;
  }
}
</style>
