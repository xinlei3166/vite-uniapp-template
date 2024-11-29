<template>
  <view class="components-card card">
    <view class="title">Store</view>
    <view class="uni-form-custom" style="padding: 20rpx 24rpx">
      <uni-easyinput v-model="name" class="form-item-input" placeholder="请输入用户名">
        <template #right>
          <button style="margin-left: 8rpx" size="mini" type="primary" @click="onSubmit">
            提交
          </button>
        </template>
      </uni-easyinput>
    </view>
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
