<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/stores/modules/user'
import { ElNotification } from 'element-plus'
const userStore = useUserStore()

let loginForm = reactive({ username: 'admin', password: '111111' })
let loading = ref(false)
let loginForms = ref()

const validatorUserName = (_rule: any, value: any, callback: any) => {
  //rule为校验规则对象
  //value为表单文本的内容
  //callback函数,如果符合条件,通过callback放行
  //如果不符合条件,注入错误信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}

const validatorPassword = (_rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('密码长度至少五位'))
  }
}

//定义表单校验需要的配置对象
const rules = {
  username: [
    {
      trigger: 'change',
      validator: validatorUserName,
    },
  ],
  password: [
    {
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
}

//确定登录的方法
const login = async () => {
  //保证全部表单校验通过后发请求
  await loginForms.value.validate()
  loading.value = true
  try {
    //保证登录成功
    await userStore.userLogin(loginForm)
    ElNotification({
      type: 'success',
      title: `HI`,
      message: '欢迎回来',
    })
    loading.value = false
    userStore.loginSwitchStatus = false
    //登录成功后携带token发送获取用户信息请求
    await userStore.getUserInfo()
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>

<template>
  <div>
    <el-form :model="loginForm" :rules="rules" ref="loginForms">
      <el-form-item prop="username">
        <el-input
          :prefix-icon="User"
          v-model="loginForm.username"
          placeholder="UserName"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          :prefix-icon="Lock"
          v-model="loginForm.password"
          show-password
          placeholder="Password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          size="default"
          class="login_btn"
          @click="login"
          style="width: 100vw"
        >
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
