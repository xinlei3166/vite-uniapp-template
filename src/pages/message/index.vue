<template>
  <nut-searchbar
    v-model="search.keyword"
    custom-class="search"
    custom-style="margin-bottom: 24rpx;"
    shape="round"
    placeholder="请输入搜索关键词"
  ></nut-searchbar>
  <view class="list flex flex-col">
    <view v-for="(item, index) in data" :key="index" class="list-item flex items-center">
      <view class="list-item-left flex-shrink-0">
        <view class="icon-wrap">
          <nut-icon custom-class="icon" size="28" custom-color="#fff" name="star-n" />
        </view>
      </view>
      <view class="list-item-right flex flex-1 flex-col justify-between">
        <view class="list-item-title flex justify-between">
          <text class="list-item-title-text">生活号</text>
          <text class="list-item-title-time">18:15</text>
        </view>
        <view class="list-item-msg">了不起的打工人</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const data = Array.from({ length: 20 })
const search = reactive<Record<string, any>>({
  keyword: ''
})
</script>

<style lang="scss" scoped>
.search {
  margin-bottom: 24rpx;
}

.list {
  //padding-bottom: 100rpx;
}

.list-item {
  margin: 0 0 24rpx 0;
  padding: 12rpx 24rpx;
  background: #fff;
  //&:first-of-type {
  //  margin-top: 32rpx;
  //}
}

.list-item-left {
  margin-right: 24rpx;
  .icon-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 88rpx;
    height: 88rpx;
    border-radius: 15%;
    background: #60a5fa;
  }
  .icon {
    font-size: 56rpx;
    color: #fff;
  }
}

.list-item-right {
  padding: 8rpx 0;
  .list-item-title {
    margin-bottom: 16rpx;
  }
  .list-item-title-text {
    font-size: 32rpx;
  }
  .list-item-title-time,
  .list-item-msg {
    font-size: 24rpx;
    color: $text-color-2;
  }
}
</style>
