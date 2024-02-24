<script setup lang="ts">
import layoutMenu from '@/layout/menu/index.vue'
import layoutLogin from '@/layout/login/index.vue'
import loginDialog from '@/components/loginDialog/index.vue'
import loginLogo from '@/layout/logo/index.vue'
</script>

<template>
  <el-row>
    <el-col :xs="0" :sm="4" class="layout-aside">
      <login-logo />
      <layoutLogin />
      <layoutMenu />

    </el-col>
    <el-col :xs="2" :sm="0" class="layout-aside">左侧小菜单</el-col>
    <el-col :xs="22" :sm="20" class="layout-main">
      <loginDialog />
    </el-col>
  </el-row>
  <!--  登录弹窗-->

</template>

<style scoped lang="scss">
.layout-aside {
  background: #f4f4f5;
  height: 100vh;
}

.layout-main {
  background: grey;
  height: 100vh;
}
</style>