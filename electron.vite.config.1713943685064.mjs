// electron.vite.config.mjs
import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import autoprefixer from "autoprefixer";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@": resolve("src/renderer/src")
      }
    },
    server: {
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: "http://gateway:8900",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },
    plugins: [
      vue(),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections: ["ep"]
          })
        ]
      }),
      AutoImport({
        include: [
          /\.[tj]sx?$/,
          // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/,
          // .vue
          /\.md$/
          // .md
        ],
        imports: ["vue", "vue-router", "pinia"],
        //自动引入vue的ref、toRefs、onmounted等，无需在页面中再次引入
        dirs: [
          "./src/router",
          "./src/pinia",
          "./src/pinia/modules",
          "./src/utils"
        ],
        eslintrc: {
          enabled: true,
          // Default `false`
          filepath: "./.eslintrc-auto-import.json",
          // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true
          // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: "Icon"
          })
        ],
        dts: "./auto-import.d.ts"
      }),
      Icons({
        autoInstall: true,
        compiler: "vue3"
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "@/assets/css/variables.module.scss";'
        }
      },
      postcss: {
        plugins: [
          autoprefixer({
            // 自动添加前缀
            overrideBrowserslist: [
              "Android 4.1",
              "iOS 7.1",
              "Chrome > 31",
              "ff > 31",
              "ie >= 8",
              "last 2 versions",
              // 所有主流浏览器最近2个版本
              "> 1%"
            ],
            grid: true
          })
        ]
      }
    }
  }
});
export {
  electron_vite_config_default as default
};
