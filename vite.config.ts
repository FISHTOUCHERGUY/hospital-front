import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//引入node提供内置模块path获取绝对路径
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  //配置代理跨域
  server:{
    proxy:{
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
});
