import { loadEnv, defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
import Components from '@uni-helper/vite-plugin-uni-components'
import { NutResolver } from 'nutui-uniapp'
import path from 'path'

const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i

// @ts-ignore
export default ({ mode, command }) => {
  console.log('mode', mode)
  console.log('command', command)
  // const envDir = process.cwd()
  const envDir = path.resolve(process.cwd(), 'env')
  const env = loadEnv(mode, envDir)
  console.log('env', env)

  return defineConfig({
    define: {
      __APP_TITLE__: JSON.stringify(env.VITE_APP_TITLE),
      __DYNAMIC_MENU__: env.VITE_DYNAMIC_MENU
    },
    envDir,
    build: {
      outDir: env.VITE_OUTDIR || 'dist',
      rollupOptions: {
        output: {
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name)
            const driveLetter = match ? match[0] : ''
            // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
            // Otherwise, avoid them because they can refer to NTFS alternate data streams.
            return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
          }
        }
      }
    },
    css: {
      // postcss: {
      //   plugins: [
      //     require('@unocss/postcss')({}),
      //     require('autoprefixer')({
      //       overrideBrowserslist: ['Android >= 4', 'ios >= 8'],
      //       remove: process.env.UNI_PLATFORM !== 'h5'
      //     })
      //   ]
      // },
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `@import "@packages/styles/theme.scss";`
        }
      }
    },
    plugins: [
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: false
      }),
      Components({
        resolvers: [NutResolver()]
      }),
      UnoCSS(),
      uni(),
      createHtmlPlugin({
        inject: {
          data: {
            // title: env.VITE_APP_TITLE
            // injectScript: `<script src="./inject.js"></script>`
          }
        }
      })
    ],
    base: env.VITE_APP_BASE || '/',
    resolve: {
      // preserveSymlinks: true,
      alias: {
        '@': path.resolve(__dirname, 'src'),
        // vue: 'vue/dist/vue.esm-bundler.js',
        '@packages': path.resolve(__dirname, 'src/packages')
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.vue', '.json', '.less', '.scss', '.css']
    },
    esbuild: {
      drop: command === 'build' ? ['console', 'debugger'] : []
    },
    server: {
      proxy: {
        // [env.VITE_API_URL]: {
        //   target: env.VITE_PROXY_TARGET,
        //   changeOrigin: true,
        //   secure: false
        //   // rewrite: path => path.replace(new RegExp(`^${env.VITE_API_URL}`), '')
        // }
      }
    }
  })
}
