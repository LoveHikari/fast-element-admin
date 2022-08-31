import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";

import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vueSetupExtend from "vite-plugin-vue-setup-extend";

// 参考：https://cn.vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    // 配置别名
    alias: {
      "@": resolve(__dirname, "./src"),
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
    }
  },
  plugins: [
    vue(),
    viteMockServe({// 更多配置见最下方
      supportTs: true,
      logger: false,
      localEnabled: true, // 是否应用于本地
      mockPath: "./src/mock/" // 文件位置
    }),
    vueSetupExtend(),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        })
      ]
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(__dirname, "src/icons/svg")],
      symbolId: "icon-[dir]-[name]"
    })
  ],
  server: {
    host: "0.0.0.0",
    port: 3001, // 端口号
    open: false, // 是否自动打开浏览器
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:5298',
    //     changeOrigin: true
    //     //rewrite: path => path.replace(/^\/api/, '')
    //   }
    // }
  }
});
