<template>
  <view class="title">A组件</view>
  <view class="title">当前结果：{{ number }}</view>
  <nut-button type="primary" shape="square" size="small" block @click="onAdd">增加</nut-button>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from 'vue'
import type { Emitter } from 'mitt'

export default defineComponent({
  setup() {
    const bus = inject('bus') as Emitter<any>
    const number = ref(0)

    function onAdd() {
      number.value++
      bus.emit('change-number', number.value)
    }

    return { number, onAdd }
  }
})
</script>

<style lang="scss" scoped></style>
