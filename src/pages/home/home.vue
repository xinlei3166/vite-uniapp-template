<template>
  <view class="card">
    <view class="title">{{ title }}</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = import.meta.env.VITE_APP_TITLE
</script>

<style lang="scss" scoped>
.card {
  padding: 20rpx;
  background: #fff;
}
</style>
