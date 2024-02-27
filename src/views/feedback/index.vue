<script setup lang="ts">
import axios from 'axios'

const test = () => {
  axios
    .get('/api/test')
    .then((res) => {
      console.log(res)
    })
    .catch((e) => {
      console.log(e)
    })
}
</script>

<template>
  <el-button @click="test">Test</el-button>
</template>

<style scoped></style>
