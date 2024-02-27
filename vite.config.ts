import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      viteMockServe({
        localEnabled: command === 'serve', //保证开发阶段可以使用mock接口
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    //scss全局变量的一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "@/style/variable.scss";',
        },
      },
    },
    server: {
      // 配置服务器代理，实现跨域
      proxy: {
        //所有以 '/api'为前缀的接口都转向http://localhost:8000
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          changeOrigin: true,
          //去掉接口中的 '/api'以便和后端接口匹配
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
