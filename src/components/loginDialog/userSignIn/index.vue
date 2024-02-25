<script setup lang="ts">
import { reactive } from 'vue'
import { ChatLineSquare, Lock, User } from '@element-plus/icons-vue'

const signInForm = reactive({
  username: '',
  password: '',
  email: '',
})
</script>

<template>
  <el-form :model="signInForm" label-width="100px" style="margin-right: 100px">
    <el-form-item label="用户名">
      <el-input
        v-model="signInForm.username"
        :prefix-icon="User"
        placeholder="UserName"
      />
    </el-form-item>
    <el-form-item label="密码">
      <el-input
        v-model="signInForm.password"
        :prefix-icon="Lock"
        placeholder="Password"
      />
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input
        v-model="signInForm.email"
        :prefix-icon="ChatLineSquare"
        placeholder="eMail"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        size="default"
        class="login_btn"
        style="width: 100vw"
      >
        SignIn
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped></style>
