// vite.config.ts
import { defineConfig } from "file:///D:/Project/gpt-vue3-project/node_modules/.pnpm/vite@5.1.4_@types+node@20.11.20_sass@1.71.1/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Project/gpt-vue3-project/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.4_vue@3.4.19/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { viteMockServe } from "file:///D:/Project/gpt-vue3-project/node_modules/.pnpm/vite-plugin-mock@2.9.6_mockjs@1.1.0_rollup@2.79.1_vite@5.1.4/node_modules/vite-plugin-mock/dist/index.js";
var vite_config_default = defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        localEnabled: command === "serve"
        //保证开发阶段可以使用mock接口
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src")
        // 相对路径别名配置，使用 @ 代替 src
      }
    },
    //scss全局变量的一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "@/style/variable.scss";'
        }
      }
    },
    server: {
      // 配置服务器代理，实现跨域
      proxy: {
        //所有以 '/api'为前缀的接口都转向http://localhost:8000
        "/api": {
          target: "http://47.115.210.248:7418/api",
          changeOrigin: true,
          //去掉接口中的 '/api'以便和后端接口匹配
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXGdwdC12dWUzLXByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RcXFxcZ3B0LXZ1ZTMtcHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdC9ncHQtdnVlMy1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgdml0ZU1vY2tTZXJ2ZSh7XG4gICAgICAgIGxvY2FsRW5hYmxlZDogY29tbWFuZCA9PT0gJ3NlcnZlJywgLy9cdTRGRERcdThCQzFcdTVGMDBcdTUzRDFcdTk2MzZcdTZCQjVcdTUzRUZcdTRFRTVcdTRGN0ZcdTc1Mjhtb2NrXHU2M0E1XHU1M0UzXG4gICAgICB9KSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKCcuL3NyYycpLCAvLyBcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcdTUyMkJcdTU0MERcdTkxNERcdTdGNkVcdUZGMENcdTRGN0ZcdTc1MjggQCBcdTRFRTNcdTY2RkYgc3JjXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy9zY3NzXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHU3Njg0XHU0RTAwXHU0RTJBXHU5MTREXHU3RjZFXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCJAL3N0eWxlL3ZhcmlhYmxlLnNjc3NcIjsnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgLy8gXHU5MTREXHU3RjZFXHU2NzBEXHU1MkExXHU1NjY4XHU0RUUzXHU3NDA2XHVGRjBDXHU1QjlFXHU3M0IwXHU4REU4XHU1N0RGXG4gICAgICBwcm94eToge1xuICAgICAgICAvL1x1NjI0MFx1NjcwOVx1NEVFNSAnL2FwaSdcdTRFM0FcdTUyNERcdTdGMDBcdTc2ODRcdTYzQTVcdTUzRTNcdTkwRkRcdThGNkNcdTU0MTFodHRwOi8vbG9jYWxob3N0OjgwMDBcbiAgICAgICAgXCIvYXBpXCI6IHtcbiAgICAgICAgICB0YXJnZXQ6IFwiaHR0cDovLzQ3LjExNS4yMTAuMjQ4Ojc0MTgvYXBpXCIsXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgIC8vXHU1M0JCXHU2Mzg5XHU2M0E1XHU1M0UzXHU0RTJEXHU3Njg0ICcvYXBpJ1x1NEVFNVx1NEZCRlx1NTQ4Q1x1NTQwRVx1N0FFRlx1NjNBNVx1NTNFM1x1NTMzOVx1OTE0RFxuICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCBcIlwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVEsU0FBUyxvQkFBb0I7QUFDdFMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUc5QixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFFBQVEsTUFBTTtBQUMzQyxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixjQUFjO0FBQUEsUUFDWixjQUFjLFlBQVk7QUFBQTtBQUFBLE1BQzVCLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxPQUFPO0FBQUE7QUFBQSxNQUMzQjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osbUJBQW1CO0FBQUEsVUFDbkIsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBO0FBQUEsTUFFTixPQUFPO0FBQUE7QUFBQSxRQUVMLFFBQVE7QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQTtBQUFBLFVBRWQsU0FBUyxDQUFDQSxVQUFTQSxNQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsUUFDOUM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
