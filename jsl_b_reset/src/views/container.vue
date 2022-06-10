<template>
    <div>
      <h2 class="title">{{$route.meta.title}}</h2>
      <router-view>
      </router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.title {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 18px;
}
.title::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 24px;
  background-color: #f6b400;
  vertical-align: middle;
  margin-right: 10px;
}
</style> 