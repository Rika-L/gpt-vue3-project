<script setup lang="ts">
import showApp from '@/views/home/showApp/inedx.vue'
</script>

<template>

  <el-container style="height: 100%">
    <el-main style="height: 100%">
      <el-scrollbar>
        <el-card style="height: 80vh; margin: 10px 50px" shadow="hover">
          <!--          没有内容时展示这个-->
          <div v-if="true">
            <show-app />
          </div>
        </el-card>
      </el-scrollbar>
    </el-main>
    <el-footer height="12vh">
      <div class="demo-border"></div>
      <div style="text-align: center">
        <el-input placeholder="Please input" class="gpt_input" />
      </div>

    </el-footer>
  </el-container>
</template>

<style scoped>
.demo-border {
  width: 100%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

.gpt_input {
  margin-top: 2vh;
  width: 75vw;
  height: 7vh;
}


</style>
