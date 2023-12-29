<template>
  <div class="exception-wrap">
    <van-empty description="抱歉，你访问的页面不存在">
      <Buttons />
    </van-empty>
  </div>
</template>

<script lang="ts" setup>
import Buttons from './buttons.vue'
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
