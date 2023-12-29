<template>
  <view class="components-card card">
    <view class="title">Bus-相邻组件传值</view>
    <view class="title">可以通过点击A组件中的增加按钮，观察B组件的结果显示</view>
    <A />
    <view class="title">----------------------------------------</view>
    <B />
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import A from './A.vue'
import B from './B.vue'

export default defineComponent({
  components: { A, B }
})
</script>

<style lang="scss" scoped></style>
