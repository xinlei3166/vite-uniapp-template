<template>
  <view class="table-card">
    <uni-table ref="table" :loading="loading" border empty-text="暂无更多数据">
      <uni-tr>
        <uni-th width="100">ID</uni-th>
        <uni-th width="100">姓名</uni-th>
        <uni-th width="100">邮箱</uni-th>
      </uni-tr>
      <uni-tr v-for="item in data" :key="item.id">
        <uni-td>{{ item.id }}</uni-td>
        <uni-td>{{ item.name }}</uni-td>
        <uni-td>{{ item.email }}</uni-td>
      </uni-tr>
    </uni-table>
  </view>
</template>

<script setup lang="ts">
import { onBeforeMount, computed, reactive, h } from 'vue'
import type { Pagination } from '@packages/types'
import { useData } from '@packages/hooks'
import { getList } from '@/api'

const params = computed(() => ({}))
const { loading, data, pagination, init, onSearch } = useData(getList, {
  params,
  pagination: { pageSize: 10 } // 不传，默认为10
})

onBeforeMount(async () => {
  await init()
})

const search = reactive<Record<string, any>>({
  name1: undefined
})

async function onReset() {
  Object.keys(search).forEach(key => (search[key] = undefined))
  await onSearch()
}

async function onTableChange(pag: Pagination) {
  pagination.current = pag.current
  pagination.pageSize = pag.pageSize
  await init()
}

function onEdit() {
  window.open('https://baidu.com')
}

function onPreview() {
  window.open('https://baidu.com')
}
</script>

<style lang="scss" scoped>
.table-card {
  background: #fff;
  padding: 24rpx;
}
</style>
