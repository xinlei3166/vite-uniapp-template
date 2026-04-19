<template>
  <view class="title">A组件</view>
  <view class="title">当前结果：{{ number }}</view>
  <button class="uni-btn-custom" type="primary" @click="onAdd">增加</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useEvent } from '@packages/hooks/event'

export default defineComponent({
  setup() {
    const event = useEvent()
    const number = ref(0)

    function onAdd() {
      number.value++
      event.emit('change-number', number.value)
    }

    return { number, onAdd }
  }
})
</script>

<style lang="scss" scoped></style>
