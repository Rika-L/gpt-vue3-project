import { createApp } from 'vue'
import pinia from '@/stores'

import App from './App.vue'

//引入elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import '@/style/index.scss'

//引入路由
import router from '@/router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'


const app = createApp(App)

app.use(pinia)

//注册路由
app.use(router)

//安装插件
app.use(ElementPlus, {
  locale: zhCn,
})

// 注册全部图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//引入路由鉴权文件
import "./permisstion.ts";

app.mount('#app')
