import { defineConfig, presetAttributify } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

// https://unocss.dev/interactive/
export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    // @ts-ignore
    presetWeapp({ platform: 'uniapp', whRpx: false }),
    // @ts-ignore
    presetWeappAttributify(),
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: false
      // ignoreAttributes: []
    })
  ],
  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    // @ts-ignore
    transformerAttributify(),
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    // @ts-ignore
    transformerClass({
      // transformRules: {
      //   '?': '-wenhao-',
      //   '.': '-d111-',
      //   '/': '-s111-',
      //   ':': '-c111-',
      //   '%': '-p111-',
      //   '!': '-e111-',
      //   '#': '-w111-',
      //   '(': '-b111l-',
      //   ')': '-b111r-',
      //   '[': '-f111l-',
      //   ']': '-f111r-',
      //   $: '-r111-',
      //   ',': '-r222-'
      // }
    })
  ],
  // @ts-ignore opacity: active, disabled
  // rules: [[/^opacity-(active|disabled)$/, ([, d]) => ({ opacity: `var(--van-${d}-opacity)` })]],
  theme: {
    colors: {
      primary: 'var(--uni-primary-color)', // class="bg-primary"
      primaryEnd: 'var(--uni-primary-color-end)', // class="bg-primaryEnd"
      success: 'var(--uni-success-color)',
      danger: 'var(--uni-danger-color)',
      warning: 'var(--uni-warning-color)',
      text: 'var(--uni-title-color)',
      text2: 'var(--uni-title-color2)',
      text3: 'var(--uni-text-color)',
      border: 'var(--uni-border-color)',
      active: 'var(--uni-active-color)',
      help: 'var(--uni-help-color)',
      disable: 'var(--uni-disable-color)',
      required: 'var(--uni-required-color)'
    }
  }
})
