<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
import { ref } from 'vue'
import userLogin from '@/components/loginDialog/userLogin/index.vue'
import userSignIn from '@/components/loginDialog/userSignIn/index.vue'

const loginOrSignIn = ref('false')

const userStore = useUserStore()
</script>

<template>
  <el-dialog v-model="userStore.loginSwitchStatus" width="500">
    <div style="text-align: center">
      <el-switch
        v-model="loginOrSignIn"
        size="large"
        active-text="注册"
        inactive-text="登录"
        style="--el-switch-off-color: #13ce66"
      />
    </div>

    <!--    登录或者注册组件-->
    <div v-if="!loginOrSignIn">
      <user-login></user-login>
    </div>
    <div v-if="loginOrSignIn"><user-sign-in></user-sign-in></div>
  </el-dialog>
</template>

<style scoped></style>
