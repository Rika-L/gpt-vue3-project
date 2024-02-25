<script setup lang="ts">
import { useRouter } from 'vue-router'

let $router = useRouter()
const goHome = () => {
  $router.push('/home');
}

const goFeedback = () => {
  $router.push('/feedback');
}

const goPurchase = () => {
  $router.push('/purchase');
}
</script>

<template>
  <el-menu style="border: 0" :default-active="$route.path">
    <el-menu-item index="/home" @click="goHome">
      <template #title>对话</template>
    </el-menu-item>
    <el-menu-item index="/feedback" @click="goFeedback">
      <template #title>问题反馈</template>
    </el-menu-item>
    <el-menu-item index="/purchase" @click="goPurchase">
      <template #title>购买次数</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped></style>
