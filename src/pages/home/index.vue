<template>
  <nut-swiper
    custom-class="my-swiper"
    :init-page="1"
    :pagination-visible="true"
    pagination-color="#426543"
    auto-play="3000"
  >
    <nut-swiper-item>明心见性</nut-swiper-item>
    <nut-swiper-item>学习思考</nut-swiper-item>
    <nut-swiper-item>坚持不懈</nut-swiper-item>
    <nut-swiper-item>收放自如</nut-swiper-item>
  </nut-swiper>
  <Menu />
  <nut-tabs v-model="active" custom-class="tabs">
    <nut-tab-pane custom-class="tab-pane" title="热门推荐">
      <List tab="热门推荐" :data="Array.from({ length: 10 })" />
    </nut-tab-pane>
    <nut-tab-pane custom-class="tab-pane" title="时尚流行">
      <List tab="时尚流行" :data="Array.from({ length: 10 })" />
    </nut-tab-pane>
    <nut-tab-pane custom-class="tab-pane" title="经典怀旧">
      <List tab="经典怀旧" :data="Array.from({ length: 10 })" />
    </nut-tab-pane>
    <nut-tab-pane custom-class="tab-pane" title="其他类型">
      <List tab="其他类型" :data="Array.from({ length: 10 })" />
    </nut-tab-pane>
  </nut-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menu from './Menu.vue'
import List from './List.vue'

const active = ref(0)
</script>

<style lang="scss">
@import '@packages/styles/theme.scss';

.my-swiper {
  .nut-swiper-inner {
    min-height: 300rpx;
  }
  .nut-swiper-item {
    color: #fff;
    font-size: 32rpx;
    line-height: 300rpx;
    text-align: center;
    background-color: $primary-color;
  }
}

.tabs {
  margin-top: 24rpx;
  .tab-pane {
    padding: 0;
    background: $bg-color;
  }
}
</style>
