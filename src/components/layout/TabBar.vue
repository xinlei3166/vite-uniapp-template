<template>
  <van-tabbar v-show="showTabBar" v-model="activeTabBar" fixed route>
    <van-tabbar-item v-for="item in tabBars" :key="item.to" :to="item.to" :icon="item.icon">
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'

interface TabBar {
  title: string
  to: string
  icon: string
  [key: string]: any
}

const props = defineProps({
  defaultActiveTabBar: { type: [Number, String], default: '' },
  tabBars: { type: Array as PropType<TabBar[]>, default: () => [] }
})

// ====================== Hooks ======================
const router = useRouter()

// ====================== Components ======================
const internalTabBars = ref<TabBar[]>([
  { title: '首页', to: '/home', icon: 'wap-home-o' },
  { title: '资讯', to: '/news', icon: 'comment-o' },
  { title: '消息', to: '/message', icon: 'chat-o' },
  { title: '我的', to: '/my', icon: 'contact' }
])

const activeTabBar = ref(props.defaultActiveTabBar || internalTabBars.value[0].to)
const tabBars = computed<TabBar[]>(() => {
  return props.tabBars.length ? props.tabBars : internalTabBars.value
})

const showTabBar = computed(() =>
  internalTabBars.value.some(item => item.to === router.currentRoute.value.path)
)
</script>
<style lang="scss" scoped></style>
