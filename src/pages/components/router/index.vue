<template>
  <view class="components-card card">
    <view class="title">Router</view>
    <view class="title" style="cursor: pointer" @click="onRedirect">点击跳转到首页</view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const onRedirect = () => {
      uni.switchTab({ url: '/pages/home/index' })
    }

    return { onRedirect }
  }
})
</script>

<style lang="scss" scoped></style>
