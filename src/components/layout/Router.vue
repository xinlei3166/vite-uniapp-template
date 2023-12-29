<!-- 不需要头部导航/嵌套app有头部导航时使用这个布局 -->
<template>
  <div id="layout">
    <div class="layout-content">
      <keep-alive v-if="keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-else />
    </div>
    <TabBar class="layout-tabbar" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, computed } from 'vue'
import { useRouter } from 'vue-router'
import TabBar from '@/components/layout/TabBar.vue'

// ====================== Hooks ======================
const router = useRouter()

// ====================== Components ======================
const keepAlive = computed(() => router.currentRoute.value.meta.keepAlive)

const data = ref()
provide('data', data)
</script>

<style lang="scss" scoped></style>
