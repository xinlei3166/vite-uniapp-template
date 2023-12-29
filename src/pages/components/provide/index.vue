<template>
  <view class="components-card card">
    <view class="title">Provide-Inject</view>
    <view class="title">可以通过点击父组件中的增加按钮，观察B组件的结果显示</view>
    <view class="title">父组件</view>
    <view class="title">当前结果：{{ number }}</view>
    <nut-button type="primary" shape="square" size="small" block @click="onAdd">增加</nut-button>
    <view class="title">----------------------------------------</view>
    <Child />
  </view>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import Child from './Child.vue'

export default defineComponent({
  components: { Child },
  setup() {
    const number = ref(0)

    provide('number', number)

    function onAdd() {
      number.value++
    }

    return { number, onAdd }
  }
})
</script>

<style lang="scss" scoped></style>
