<script setup lang="ts">
import { Refresh } from '@element-plus/icons-vue'

import useUserStore from '@/stores/modules/user'

const userStore = useUserStore()

const refreshInfo = async () => {
  await userStore.getUserInfo()
}
</script>

<template>
  <div class="count">
    <el-badge :value="userStore.count" :max="10000">
      <el-button disabled>剩余次数</el-button>
    </el-badge>
    <el-button
      :icon="Refresh"
      circle
      style="margin-left: 20px"
      @click="refreshInfo"
    />
  </div>
</template>

<style scoped lang="scss">
.count {
  height: 5%;
  margin-top: 5%;
  text-align: center;
}
</style>
