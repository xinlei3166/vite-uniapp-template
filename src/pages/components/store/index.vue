<template>
  <view class="components-card card">
    <view class="title">Store</view>
    <nut-input v-model="name" clearable placeholder="请输入用户名">
      <template #right>
        <nut-button size="small" shape="square" type="primary" @click="onSubmit">提交</nut-button>
      </template>
    </nut-input>
    <view class="title">当前用户：{{ userinfo.userName }}</view>
  </view>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useUserStore } from '@/store/user'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const userinfo = computed(() => userStore.userinfo)
    const name = ref(userinfo.value.userName)

    function onSubmit() {
      userStore.setUserName(name.value)
    }

    return { name, onSubmit, userinfo }
  }
})
</script>

<style lang="scss" scoped></style>
