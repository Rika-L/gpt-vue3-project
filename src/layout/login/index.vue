<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
import { UserFilled } from '@element-plus/icons-vue'

const userStore = useUserStore()
const logout = () => {
  userStore.userLogout()
}
</script>

<template>
  <div class="login">
    <el-tooltip
      effect="light"
      content="点我登录"
      placement="top"
      v-if="!userStore.token"
    >
      <el-avatar
        size="large"
        @click="userStore.loginSwitchStatus = !userStore.loginSwitchStatus"
        :icon="UserFilled"
      ></el-avatar>
    </el-tooltip>
    <el-tooltip
      effect="light"
      content="点我退出"
      placement="top"
      v-if="userStore.token"
    >
      <div>
        <el-popconfirm
          title="确认退出吗"
          v-if="userStore.token"
          trigger="click"
          @confirm="logout"
        >
          <template #reference>
            <el-avatar size="large" class="avatar">
              {{ userStore.userName.slice(0, 1) }}
            </el-avatar>
          </template>
        </el-popconfirm>
      </div>
    </el-tooltip>
  </div>
</template>

<style scoped lang="scss">
.login {
  text-align: center;
  height: 20%;
  margin-top: 50px;

  .avatar {
    background-color: $base-color;
    font-size: 30px;
  }
}
</style>
