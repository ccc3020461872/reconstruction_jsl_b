<template>
  <div class="header">
    <div class="left">
      <div class="logo" v-show="!isCollapse">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div class="icon" @click="doCollapse">
        <el-icon :size="25" color="#f6b400">
          <component :is="isCollapse ? Fold : Expand" />
        </el-icon>
      </div>
      <div class="title">中国质量检验协会机动车服务平台</div>
    </div>
    <div class="setting_group">
      <div class="user" @click="alterPsd">
        <el-link> <i class="iconfont icon-201yonghu_yonghu2"></i> cc</el-link>
      </div>
      <div class="login_out" @click="doExit">
        <el-link target="_blank">
          <i class="iconfont icon-tuichu"></i>
          退出</el-link
        >
      </div>
    </div>
  </div>
  <!-- 修改密码模态框 -->
  <el-dialog v-model="isAlterPsdSHow" width="30%" title="修改密码">
    <el-form :model="psdForm" label-width="120px" ref="ruleFormEl"  :rules="rules">
      <el-form-item label="旧密码" prop="old_password">
        <el-input
          size="large"
          placeholder="旧密码"
          v-model="psdForm.old_password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="新密码" prop="new_password">
        <el-input
          size="large"
          placeholder="新密码"
          v-model="psdForm.new_password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="重复新密码" prop="code_password">
        <el-input
          size="large"
          placeholder="重复新密码"
          v-model="psdForm.code_password"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
    <template #footer> </template>
  </el-dialog>
</template>

<script setup>
import { Expand, Fold, Place } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { useStorage } from "@/utils";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const emit = defineEmits(["doCollapse"]);
const store = useStore();
const router = useRouter();
const isCollapse = ref(false);
const isAlterPsdSHow = ref(false);
const ruleFormEl = ref();
const psdForm = reactive({
  old_password: "",
  new_password: "",
  code_password: "",
});
 const validateNew_password = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入旧密码'))
  } else {
     
    callback()
  }
}
const validateCode_password = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入旧密码'))
  } else {
     if(value !== psdForm.new_password){
       callback(new Error('请与新密码保持一致'))
     }
    callback()
  }
}
const rules = reactive({
  old_password: [{ required: true, message: "请输入旧密码", trigger: "blur" }],
  new_password: [{ validator: validateNew_password, trigger: "blur" }],
  code_password: [{ validator: validateCode_password, trigger: "blur" }],
});
const doCollapse = () => {
  isCollapse.value = !isCollapse.value;
  emit("doCollapse", isCollapse.value);
};
// 退出
const doExit = () => {
  useStorage("tokenBo", null, true);
  store.commit("user/setTokenBo", "");
  router.push("/login");
};
// 修改密码
const alterPsd = () => {
  isAlterPsdSHow.value = true;
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
  }
  .icon {
    margin-left: 10px;
    margin-right: 60px;
  }
  .title {
    color: rgb(247, 180, 0);
    font-size: 22px;
    font-weight: 600;
  }
  .setting_group {
    font-size: 16px;
    display: flex;
    .user {
      margin-right: 20px;
    }
  }
}
</style>
