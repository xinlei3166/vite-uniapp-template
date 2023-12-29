<template>
  <view class="card flex flex-wrap">
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/store/index')"
    >
      <text class="icon-wrap order1">
        <nut-icon class="icon" name="edit" />
      </text>
      <text class="text">Store</text>
    </view>
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/provide/index')"
    >
      <text class="icon-wrap order3">
        <nut-icon class="icon" name="star-n" />
      </text>
      <text class="text">Provide</text>
    </view>
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/bus/index')"
    >
      <text class="icon-wrap order2">
        <nut-icon class="icon" name="success" />
      </text>
      <text class="text">Bus</text>
    </view>
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/table/index')"
    >
      <text class="icon-wrap order4">
        <nut-icon class="icon" name="date" />
      </text>
      <text class="text">Table</text>
    </view>
    <view
      class="card-menu-item flex flex-col items-center"
      @click="onClickMenu('/pages/components/sortable/index')"
    >
      <text class="icon-wrap order5">
        <nut-icon class="icon" name="category" />
      </text>
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
  //&:nth-of-type(n + 4) {
  //  margin-top: 40rpx;
  //}
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
    font-size: 42rpx;
    color: #fff;
  }
  .text {
    margin-top: 16rpx;
    font-size: 24rpx;
  }
}
</style>
