<template>
  <view class="title">子组件</view>
  <view class="title">当前结果：{{ number }}</view>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const number = inject('number')

    return { number }
  }
})
</script>

<style lang="scss" scoped></style>
