<script setup lang="ts">
import { useRouter } from 'vue-router'

let $router = useRouter()
const goHome = () => {
  $router.push('/home')
}

const goFeedback = () => {
  $router.push('/feedback')
}

const goPurchase = () => {
  $router.push('/purchase')
}

defineProps(['collapse'])
</script>

<template>
  <el-menu
    style="border: 0; width: 100%"
    :default-active="$route.path"
    :collapse="collapse"
  >
    <el-menu-item index="/home" @click="goHome">
      <el-icon>
        <ChatDotSquare />
      </el-icon>
      <template #title>对话</template>
    </el-menu-item>
    <el-menu-item index="/feedback" @click="goFeedback">
      <el-icon>
        <QuestionFilled />
      </el-icon>
      <template #title>问题反馈</template>
    </el-menu-item>
    <el-menu-item index="/purchase" @click="goPurchase">
      <el-icon>
        <Money />
      </el-icon>
      <template #title>购买次数</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped></style>
