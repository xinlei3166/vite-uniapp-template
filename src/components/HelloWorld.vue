<template>
  <view class="card" style="padding-left: 64px">
    <view>
      <image alt="Vue logo" src="../assets/logo.png" />
    </view>
    <text>{{ msg }}</text>

    <text>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">
        Vetur
      </a>
      or
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      (if using
      <code>&lt;script setup&gt;</code>
      )
    </text>

    <text>
      See
      <code>README.md</code>
      for more information.
    </text>

    <text>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </text>

    <button style="margin-bottom: 16px" @click="count++">count is: {{ count }}</button>
    <text>
      Edit
      <code>components/HelloWorld.vue</code>
      to test hot module replacement.
    </text>
  </view>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: false
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

.card {
  padding: 20rpx;
  background: #fff;
}
</style>
