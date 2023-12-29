<template>
  <view class="components-card card">
    <view class="title">Sortable</view>
    <view class="sortable-wrap">
      <transition-group name="flip-list">
        <view v-for="item in list" :key="item.id" class="row sortable-draggable sortable-handle">
          {{ item.name }}
        </view>
      </transition-group>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useSortable } from '@packages/hooks'

interface Fruit {
  name: string
  id: string | number
}

const list = ref<Fruit[]>([
  { name: 'apple', id: '1' },
  { name: 'banana', id: '2' },
  { name: 'watermelon', id: '3' },
  { name: 'orange', id: '4' },
  { name: 'peach', id: '5' }
])

useSortable(list, '.sortable-wrap')
</script>

<style lang="scss" scoped>
@import '@packages/styles/sortable.scss';
</style>
