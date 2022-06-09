<template>
  <router-view></router-view>
</template>
<script setup>
  import {useStorage} from '@/utils'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
  const store = useStore()
  const router = useRouter()
  const tokenBo =  useStorage('tokenBo')
  console.log(tokenBo);
  if(tokenBo){
    store.commit('user/setTokenBo',tokenBo)
  }else {
   router.push('/login')
  }
</script>
<style lang="scss">
</style>
