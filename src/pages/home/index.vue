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
  <uni-segmented-control
    class="segment-tabs"
    :current="segmentedState.current"
    :values="segmentedState.items"
    :style-type="segmentedState.styleType"
    :active-color="segmentedState.activeColor"
    @click-item="segmentedState.onClickItem"
  />
  <uni-transition
    :ref="
      el => {
        uniTransitionState.ref = el
      }
    "
    class="segment-content"
    custom-class="transition"
    :mode-class="uniTransitionState.modeClass"
    :styles="uniTransitionState.styles"
    :show="uniTransitionState.show"
  >
    <List class="segment-content-item" tab="热门推荐" :data="Array.from({ length: 10 })" />
    <List class="segment-content-item" tab="时尚流行" :data="Array.from({ length: 10 })" />
    <List class="segment-content-item" tab="经典怀旧" :data="Array.from({ length: 10 })" />
    <List class="segment-content-item" tab="其他类型" :data="Array.from({ length: 10 })" />
  </uni-transition>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
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

const segmentedState = reactive({
  current: 0,
  items: ['热门推荐', '时尚流行', '经典怀旧', '其他类型'],
  styleType: 'text',
  activeColor: `#0077FA`,
  // activeColor: `linear-gradient(90deg, #0077FA 0%, rgba(250, 44, 25, 0.15) 100%)`,
  onClickItem: (e: Record<string, any>) => {
    if (segmentedState.current !== e.currentIndex) {
      // const dv = e.currentIndex - segmentedState.current
      segmentedState.current = e.currentIndex
      uniTransitionState.ref.step(
        {
          translate3d: `${100 * segmentedState.current * -1}%, 0, 0`
        },
        {
          timingFunction: 'ease',
          duration: 300
        }
      )
      uniTransitionState.ref.run()
    }
  }
})

const uniTransitionState = {
  ref: ref(),
  // modeClass: ['fade', 'slide-left'],
  modeClass: ['custom'],
  styles: {
    display: 'flex'
  },
  show: true
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

.segment-tabs {
  margin-top: 24rpx;
}

.segment-content-item {
  width: 100%;
  flex-shrink: 0;
  margin: 0 auto;
}
</style>
