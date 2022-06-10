<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="12"
        ><div class="grid-content bg-purple" />
        <!-- 累计用户 车辆总数 今日订单数 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="total">
              <p class="title">累计用户</p>
              <p class="info">337</p>
              <img
                src="https://test.chejian.jinselu.net/img/cpq1.16b95569.png"
                alt=""
              />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="total">
              <p class="title">累计用户</p>
              <p class="info">337</p>
              <img
                src="https://test.chejian.jinselu.net/img/cpq1.16b95569.png"
                alt=""
              />
            </div>
          </el-col>
           <el-col :span="8">
            <div class="total">
              <p class="title">累计用户</p>
              <p class="info">337</p>
              <img
                src="https://test.chejian.jinselu.net/img/cpq1.16b95569.png"
                alt=""
              />
            </div>
          </el-col>
        </el-row>
         <el-row >
           <el-col>
             <notice></notice>
           </el-col>
         </el-row>
      </el-col>
     
      <el-col :span="12"><div class="grid-content bg-purple" /> 456464</el-col>
    </el-row>
  </div>
</template>

<script setup>
import notice from './notice/notice.vue';
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  background-color: rgb(245, 247, 249);
  .el-row {
    margin-bottom: 20px;
  }
  .total {
    height: 35vh;
    text-align: center;
    position: relative;
    background-color: #fff;
    img {
      width: 100%;
      height: 188px;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .title {
      color: #582412;
      font-size: 20px;
      line-height: 28px;
      padding-top: 40px;
    }
    .info {
      color: #582412;
      font-size: 36px;
      line-height: 50px;
      font-weight: 600;
    }
  }
}
</style>
