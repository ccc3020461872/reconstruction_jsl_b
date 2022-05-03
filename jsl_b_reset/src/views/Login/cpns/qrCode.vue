<template>
    <div class="qr_code">
        <template v-for="(item, index) in list">
           <div class="info">
               <img :src="item.img" alt="">
               <p>{{item.title}}</p>
           </div>
        </template>
     </div>
</template>

<script setup>
  const list = [
      {
      title: '客服微信',
      img: 'https://test.chejian.jinselu.net/img/servicewx.7633c2bd.jpg'
  },
  {
      title: '服务支持',
      img: 'https://test.chejian.jinselu.net/img/servicewx.7633c2bd.jpg'
  },
  {
      title: '微信公众号',
      img: 'https://test.chejian.jinselu.net/img/servicewx.7633c2bd.jpg'
  },
  {
      title: '智慧车检站小程序',
      img: 'https://test.chejian.jinselu.net/img/servicewx.7633c2bd.jpg'
  },
  {
      title: '爱车慧生活小程序',
      img: 'https://test.chejian.jinselu.net/img/servicewx.7633c2bd.jpg'
  },
  {
      title: '星级车管家小程序',
      img: 'https://test.chejian.jinselu.net/img/servicewx.7633c2bd.jpg'
  },
  ]
</script>

<style lang="scss" scoped>
  .qr_code {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-bottom: 20px;

  }
  .info {
      text-align: center;
      font-size: 14px;
      margin-top: 20px;
      img {
          width: 110px;
          height: 110px;
          margin-bottom: 10px;
      }
  }
</style>