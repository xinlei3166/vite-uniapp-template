<template>
  <view class="card flex flex-wrap">
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/store/index')"
    >
      <view class="icon-wrap order1">
        <nut-icon custom-class="icon" size="21" custom-color="#fff" name="edit" />
      </view>
      <text class="text">Store</text>
    </view>
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/provide/index')"
    >
      <view class="icon-wrap order3">
        <nut-icon custom-class="icon" size="21" custom-color="#fff" name="star-n" />
      </view>
      <text class="text">Provide</text>
    </view>
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/bus/index')"
    >
      <view class="icon-wrap order2">
        <nut-icon custom-class="icon" size="21" custom-color="#fff" name="success" />
      </view>
      <text class="text">Bus</text>
    </view>
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/table/index')"
    >
      <view class="icon-wrap order4">
        <nut-icon custom-class="icon" size="21" custom-color="#fff" name="date" />
      </view>
      <text class="text">Table</text>
    </view>
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/sortable/index')"
    >
      <view class="icon-wrap order5">
        <nut-icon custom-class="icon" size="21" custom-color="#fff" name="category" />
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
    font-size: 42rpx !important;
    color: #fff !important;
  }
  .text {
    margin-top: 16rpx;
    font-size: 24rpx;
  }
}
</style>
