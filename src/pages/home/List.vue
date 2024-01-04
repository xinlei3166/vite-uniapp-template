<template>
  <view class="list flex flex-col">
    <view v-for="(item, index) in data" :key="index" class="list-item flex">
      <view class="list-item-left">
        <image class="list-item-img" src="/static/img/ipad.jpeg" />
      </view>
      <view class="list-item-right flex flex-col justify-between">
        <view class="list-item-title">这是一个{{ tab }}的标题</view>
        <view class="list-item-desc">这是一段描述</view>
        <view>
          <nut-tag custom-color="#969799" class="list-item-tag" plain round>标签</nut-tag>
          <nut-tag custom-color="#969799" class="list-item-tag" plain round>标签</nut-tag>
          <nut-tag custom-color="#969799" class="list-item-tag" plain round>标签</nut-tag>
        </view>
        <view>
          <text class="list-item-price">0.3万/月</text>
          <text class="list-item-space">面积150平</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const props = defineProps({
  data: { type: Array, default: () => [] },
  tab: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>
.list {
  //
}

.list-item {
  margin: 0 32rpx 24rpx 32rpx;
  &:first-of-type {
    margin-top: 24rpx;
  }
}

.list-item-left {
  width: 180rpx;
  height: 200rpx;
  .list-item-img {
    //background: #fff;
    //padding: 24rpx;
    border-radius: 20rpx;
    width: 100%;
    height: 100%;
  }
}

.list-item-right {
  padding: 8rpx 24rpx;
  .list-item-title {
    font-size: 28rpx;
    font-weight: 500;
  }
  .list-item-desc {
    font-size: 24rpx;
    color: $text-color-2;
  }
  .list-item-tag + .list-item-tag {
    margin-left: 12rpx;
  }
  .list-item-price {
    margin-right: 16rpx;
    color: $danger-color;
  }
  .list-item-space {
    color: $text-color-2;
  }
  .list-item-price,
  .list-item-space {
    font-size: 26rpx;
    font-weight: 500;
  }
}
</style>
