<template>
  <div class="exception-wrap">
    <van-empty description="抱歉，服务器出错了">
      <Buttons />
    </van-empty>
  </div>
</template>

<script setup lang="ts">
import Buttons from './buttons.vue'
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
