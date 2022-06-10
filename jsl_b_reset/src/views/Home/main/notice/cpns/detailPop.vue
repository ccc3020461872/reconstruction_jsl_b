<template>
  <div>
    <!-- 详情 -->
    <el-dialog
      v-model="isShowDetail"
      title="通知公告详情"
      width="50%"
      custom-class="notice-pop"
    >
      <p class="title">{{ noticeDetail.title }}</p>
      <p class="notice-content" v-html="noticeDetail.content"></p>

      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="isShowDetail = false"
            >关闭</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
 import { defineProps } from 'vue';
  const props = defineProps({
      isShowDetail: Boolean,
      noticeDetail: Object,
  })
</script>

<style lang="scss" scoped>
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
