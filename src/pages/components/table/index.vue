<template>
  <view class="table-card">
    <nut-table :columns="columns" :data="data"></nut-table>
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

const columns = [
  {
    title: 'ID',
    key: 'id'
    // stylehead: 'font-size:20px;color:red;font-weight:bolder;',
    // stylecolumn: 'font-size:10px;color:blue;'
  },
  {
    title: '姓名',
    key: 'name',
    render: (record: Record<string, any>) => {
      return h('text', {}, record.name)
    }
  },
  {
    title: '邮箱',
    key: 'email'
  }
]
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
