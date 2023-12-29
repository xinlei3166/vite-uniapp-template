<!-- 需要头部导航/未嵌套app没有头部导航时使用这个布局 -->
<template>
  <div id="layout">
    <!--left-text="返回"-->
    <van-nav-bar
      class="layout-navbar"
      :title="title"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
    />
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
import { ref, computed, provide } from 'vue'
import { useRouter } from 'vue-router'
import TabBar from '@/components/layout/TabBar.vue'

// ====================== Hooks ======================
const router = useRouter()

// ====================== Components ======================
const title = computed(() => router.currentRoute.value.meta.title)
const onClickLeft = () => history.back()
const leftArrow = computed(() => router.currentRoute.value.meta.showLeftArrow !== false)
const keepAlive = computed(() => router.currentRoute.value.meta.keepAlive)

const data = ref()
provide('data', data)
</script>

<style lang="scss" scoped>
#layout {
  --van-nav-bar-icon-color: $text-color-2;
}
</style>
