<template>
  <div id="loginFrame">
    <h1 class="title">Hello,欢迎使用管理后台</h1>
    <el-form
      class="el-form"
      label-position="top"
      ref="formEl"
      :model="formData"
      :rules="rules"
    >
      <el-form-item class="el-form-item" label="用户名" prop="userName">
        <el-input class="el-input" v-model="formData.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          class="el-input"
          v-model="formData.password"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="el-button" type="primary" @click="doLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { accountLogin } from "@/service/apis/main";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import {useStorage,useToLine} from '@/utils'
import { useStore } from "vuex";
const router = useRouter()
const store = useStore()
const formEl = ref(null);
const formData = reactive({
  userName: "",
  password: "",
});
const rules = {
  userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};
// 登录
const login = async () => {
  try {
    const res = await accountLogin({
      account: formData.userName,
      password: formData.password,
    });
    if (res.code != "0") {
      ElMessage({
        message: res.msg,
        grouping: true,
        type: "warning",
      });
      console.log("code");
    }else {
      useStorage('tokenBo',useToLine(res.data.tokenBo))
      store.commit('user/setTokenBo',useToLine(res.data.tokenBo))
      router.push('/home')
    }
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
// 点击登录
const doLogin = async () => {
  await formEl.value.validate((valid, fields) => {
    if (valid) {
      login();
    } else {
      console.log("error submit!", fields);
    }
  });
};
window.addEventListener('keyup',function(e){
  if(e.key === 'Enter'){
    doLogin()
  }
})
</script>

<style lang="scss" scoped>
#loginFrame {
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 20px;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-60%);
  padding: 20px;

  .title {
    font-size: 28px;
    color: #666;
    text-align: center;
    font-weight: 700;
  }
  .el-form {
    padding: 10px;
  }
  .el-form-item {
    margin-bottom: 40px;
  }
  ::v-deep .el-form-item__label {
    margin-bottom: 10px;
  }
  ::v-deep .el-input__wrapper {
    background-color: #e8f0fe;
  }
  .el-input {
    height: 40px;
  }
  .el-button {
    width: 100%;
    height: 50px;
    font-size: 21px;
    margin-top: 40px;
    border-radius: 25px;
  }
}
</style>
