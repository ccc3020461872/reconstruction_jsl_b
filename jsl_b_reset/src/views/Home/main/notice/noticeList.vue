<template>
  <div>
    <el-card>
      <template #header> 通知公告 </template>
      <el-table :data="tableData" style="width: 100%" stripe size="large" highlight-current-row table-layout="fixed" header-row-class-name="header">
        <el-table-column type="index" width="200" label="序号" align="center"/>
        <el-table-column label="标题"   property="title" align="center">
        </el-table-column>
        <el-table-column label="创建时间"  property="createTimeString" align="center">
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template #default="scope">
            <span class="detail" @click="showDetail(scope.row)">详情</span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <detail-pop :noticeDetail="noticeDetail" :isShowDetail="isShowDetail">
    </detail-pop>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { queryNotice } from "@/service/apis/main";
import detailPop from "./cpns/detailPop.vue";
const queryParams = ref({
  page_no: 1,
  page_size: 10,
});
const total = ref();
const tableData = ref([]) 
const noticeDetail = ref(null) //详情
//  获取列表
const doQueryNotice = async () => {
  try {
    const res = await queryNotice(queryParams.value);
    console.log(res.data.list);
    tableData.value = res.data.list
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
const isShowDetail = ref(false);
doQueryNotice();
// 点击详情
const showDetail = (e) => {
  isShowDetail.value = true
  noticeDetail.value = e
}
</script>

<style lang="scss" scoped>


.detail {
  position: relative;
  color: rgb(255, 153, 0);
  cursor: pointer;
}

.detail::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -3px;
  width: 100%;
  height: 2px;
  background-color: rgb(255, 153, 0);
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: transform 0.3s ease-in-out;
  
}

.detail:hover::before {
  transform: translate(-50%, 0) scaleX(1);
}
::v-deep .header {
  font-weight: 700;
  color: #000;
  background-color: red;
}
</style>
