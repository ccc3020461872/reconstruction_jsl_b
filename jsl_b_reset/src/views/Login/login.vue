<template>
    <div id="login">
       <div class="title">
         <a href="https://www.google.cn/intl/zh-CN/chrome/">谷歌浏览器下载</a>
         <span>申请试用</span>
       </div>
      <login-frame></login-frame>
      <div class="copyright">
        <p>无锡金色鹿车辆检测服务有限公司</p>
        <p>苏ICP备2020061264号</p>
         <p>技术支持 金色鹿</p>
      </div>
      <thumbtack/>
    </div>
</template>

<script setup>
   import loginFrame from './cpns/loginFrame.vue';
   import thumbtack from './cpns/thumbtack'
   components: {
       loginFrame,
       thumbtack
   }
</script>

<style lang="scss" scoped>
  #login {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      position: relative;
      padding: 0;
      background: url(https://test.chejian.jinselu.net/img/Fill.ec3d026e.png) top center no-repeat;
      background-size: 100% 100%;
      .title {
        text-align: right;
        line-height: 80px;
        a,span {
          font-size: 20px;
          color: #fff;
          margin-right: 30px;
          text-decoration: none;
        }
      }
      .copyright {
        text-align: center;
        color: #fff;
        position: absolute;
        width: 100%;
        bottom: 30px;
        line-height: 20px;
        font-size: 14px;
      }
  }
</style>