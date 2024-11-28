<template>
  <swiper
    class="swiper"
    circular
    :indicator-dots="swiperState.indicatorDots"
    :indicator-color="swiperState.indicatorColor"
    :indicator-active-color="swiperState.indicatorActiveColor"
    :autoplay="swiperState.autoplay"
    :interval="swiperState.interval"
    :duration="swiperState.duration"
  >
    <swiper-item>
      <view class="swiper-item">明心见性</view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item">学习思考</view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item">坚持不懈</view>
    </swiper-item>
    <swiper-item>
      <view class="swiper-item">收放自如</view>
    </swiper-item>
  </swiper>
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

const swiperState = {
  background: ['#0077FA', '#0077FA', '#0077FA'],
  indicatorDots: true,
  indicatorColor: '#dddddd',
  indicatorActiveColor: '#426543',
  autoplay: true,
  interval: 3000,
  duration: 500
}
const active = ref(0)
</script>

<style lang="scss">
@import '@packages/styles/theme.scss';

.swiper {
  height: 300rpx;
}
.swiper-item {
  color: #fff;
  font-size: 32rpx;
  line-height: 300rpx;
  text-align: center;
  background-color: $primary-color;
}

.tabs {
  margin-top: 24rpx;
  .tab-pane {
    padding: 0;
    background: $bg-color;
  }
}
</style>
