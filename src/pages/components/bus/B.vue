<template>
  <view class="title">B组件</view>
  <view class="title">当前结果：{{ number }}</view>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, inject } from 'vue'
import type { Emitter } from 'mitt'

export default defineComponent({
  setup() {
    const bus = inject('bus') as Emitter<any>
    const number = ref(0)

    const changeNumber = value => {
      number.value = value
    }

    onMounted(() => {
      bus.on('change-number', changeNumber)
    })

    onBeforeUnmount(() => {
      bus.off('change-number', changeNumber)
    })

    return { number }
  }
})
</script>

<style lang="scss" scoped></style>
