import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

//引入elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import '@/style/index.scss'

const app = createApp(App)

app.use(createPinia())

//安装插件
app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
