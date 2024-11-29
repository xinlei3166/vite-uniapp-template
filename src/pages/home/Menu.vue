<template>
  <view class="card flex flex-wrap">
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/store/index')"
    >
      <view class="icon-wrap order1">
        <view class="iconfont icon icon-edit"></view>
      </view>
      <text class="text">Store</text>
    </view>
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/provide/index')"
    >
      <view class="icon-wrap order3">
        <view class="iconfont icon icon-star"></view>
      </view>
      <text class="text">Provide</text>
    </view>
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/bus/index')"
    >
      <view class="icon-wrap order2">
        <view class="iconfont icon icon-check-circle"></view>
      </view>
      <text class="text">Bus</text>
    </view>
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/table/index')"
    >
      <view class="icon-wrap order4">
        <view class="iconfont icon icon-calendar"></view>
      </view>
      <text class="text">Table</text>
    </view>
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/sortable/index')"
    >
      <view class="icon-wrap order5">
        <view class="iconfont icon icon-appstore"></view>
      </view>
      <text class="text">Sortable</text>
    </view>
  </view>
</template>

<script setup lang="ts">
const onClickMenu = (path: string) => {
  uni.navigateTo({ url: path })
}
</script>

<style lang="scss" scoped>
.card {
  background: #fff;
  padding: 24rpx 0;
  //margin: -32rpx 32rpx 0 32rpx;
  //border-radius: 40rpx;
  //position: relative;
}

.card-menu-item {
  width: 20%;
  .icon-wrap.order1 {
    background: #f87171;
  }
  .icon-wrap.order2 {
    background: #fbbf24;
  }
  .icon-wrap.order3 {
    background: #34d399;
  }
  .icon-wrap.order4 {
    background: #60a5fa;
  }
  .icon-wrap.order5 {
    background: #818cf8;
  }
  .icon-wrap.order6 {
    background: #a78bfa;
  }
  .icon-wrap {
    border-radius: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80rpx;
    height: 80rpx;
  }
  .icon {
    font-size: 52rpx !important;
    color: #fff !important;
  }
  .text {
    margin-top: 16rpx;
    font-size: 24rpx;
  }
}
</style>
