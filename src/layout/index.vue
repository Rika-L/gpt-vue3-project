<script setup lang="ts">
import layoutMenu from '@/layout/menu/index.vue'
import layoutLogin from '@/layout/login/index.vue'
import loginDialog from '@/components/loginDialog/index.vue'
import layoutLogo from '@/layout/logo/index.vue'
import layoutCount from '@/layout/count/index.vue'
import { ref } from 'vue'
import { Moon, Sunny } from '@element-plus/icons-vue'

let dark = ref(false)

const changeDark = () => {
  //获取HTML根节点
  let html = document.documentElement
  dark.value ? (html.className = 'dark') : (html.className = '')
}
</script>

<template>
  <el-row>
    <el-col :xs="0" :sm="4" class="layout-aside">
      <layout-logo />
      <layoutLogin />
      <layoutMenu />
      <layout-count />
      <div style="text-align: center">
        <el-switch
          v-model="dark"
          :active-icon="Moon"
          :inactive-icon="Sunny"
          style="--el-switch-on-color: black"
          size="large"
          @change="changeDark"
        />
      </div>
    </el-col>
    <el-col :xs="4" :sm="0" class="layout-aside">
      <layoutLogin />
      <layoutMenu collapse="true" />
      <!--      切换主题组件-->
      <div style="text-align: center">
        <el-switch
          v-model="dark"
          :active-icon="Moon"
          :inactive-icon="Sunny"
          style="--el-switch-on-color: black"
          size="large"
          @change="changeDark"
          inline-prompt
        />
      </div>
    </el-col>
    <el-col :xs="20" :sm="20" class="layout-main">
      <router-view></router-view>
    </el-col>
  </el-row>
  <!--  登录弹窗-->
  <loginDialog />
</template>

<style scoped lang="scss">
.layout-aside {
  height: 100vh;
  border-right: 1px solid var(--el-border-color);
}

.layout-aside-small {
  height: 100vh;
}

.layout-main {
  height: 100vh;
}
</style>
