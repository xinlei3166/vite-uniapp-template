<template>
  <view class="avatar-info">
    <view class="title-setting flex items-center justify-between">
      <text>我的</text>
      <nut-icon class="title-setting-icon" size="44rpx" name="setting" />
    </view>
    <view class="flex items-center">
      <nut-avatar
        size="large"
        style="--nut-avatar-large-width: 100rpx; --nut-avatar-large-height: 100rpx"
      >
        <image :src="avatar" />
      </nut-avatar>
      <view class="username-phone">
        <view class="username">{{ userinfo.name || '君惜' }}</view>
        <view class="phone">{{ hiddenPhone(userinfo.phone) || '188******88' }}</view>
      </view>
      <nut-icon class="text-white ml-auto" name="right" size="32rpx" />
    </view>
  </view>
  <nut-cell-group class="nav-menu">
    <nut-cell icon="home" title="Router" @click="onClickMenu('/pages/components/router/index')">
      <template #icon>
        <nut-icon name="home" class="mr-1" />
      </template>
    </nut-cell>
    <nut-cell icon="edit" title="Store" @click="onClickMenu('/pages/components/store/index')">
      <template #icon>
        <nut-icon name="edit" class="mr-1" />
      </template>
    </nut-cell>
    <nut-cell icon="star-n" title="Provide" @click="onClickMenu('/pages/components/provide/index')">
      <template #icon>
        <nut-icon name="star-n" class="mr-1" />
      </template>
    </nut-cell>
    <nut-cell icon="success" title="Bus" @click="onClickMenu('/pages/components/bus/index')">
      <template #icon>
        <nut-icon name="success" class="mr-1" />
      </template>
    </nut-cell>
    <nut-cell icon="date" title="Table" @click="onClickMenu('/pages/components/table/index')">
      <template #icon>
        <nut-icon name="date" class="mr-1" />
      </template>
    </nut-cell>
    <nut-cell
      icon="category"
      title="Sortable"
      @click="onClickMenu('/pages/components/sortable/index')"
    >
      <template #icon>
        <nut-icon name="category" class="mr-1" />
      </template>
    </nut-cell>
  </nut-cell-group>
  <nut-cell-group class="nav-menu">
    <nut-cell icon="setting" title="Security Settings" is-link>
      <template #icon>
        <nut-icon name="setting" class="mr-1" />
      </template>
    </nut-cell>
    <nut-cell icon="message" title="Notification Settings" is-link>
      <template #icon>
        <nut-icon name="message" class="mr-1" />
      </template>
    </nut-cell>
  </nut-cell-group>
  <nut-cell-group class="nav-menu">
    <nut-cell icon="my" title="Logout" @click="onLogout">
      <template #icon>
        <nut-icon name="my" class="mr-1" />
      </template>
    </nut-cell>
  </nut-cell-group>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/store/user'
import avatar from '@/assets/avatar.png'
import { removeToken, hiddenPhone } from '@packages/utils'
import { logout } from '@/api'

const userStore = useUserStore()
const userinfo = computed(() => userStore.Userinfo)

const onClickMenu = (path: string) => {
  uni.navigateTo({ url: path })
}

const onLogout = async () => {
  const res = await logout()
  if (!res || res.code !== 0) return
  uni.showToast({ title: '退出登录成功' })
  uni.navigateTo({ url: '/pages/login/index' })
  removeToken()
  userStore.cleanup()
}
</script>

<style lang="scss" scoped>
.avatar-info {
  padding: 0 32rpx;
  width: 100%;
  height: 240rpx;
  background: $primary-color;
}

.title-setting {
  height: 108rpx;
  font-size: 32rpx;
  color: #fff;
}

.username-phone {
  margin-left: 24rpx;
  .username {
    font-weight: 500;
    font-size: 32rpx;
    line-height: 44rpx;
    color: #fff;
  }
  .phone {
    margin-top: 2rpx;
    font-size: 24rpx;
    line-height: 36rpx;
    color: #dcdee0;
  }
}

.nav-menu {
  margin: 24rpx;
  :deep(.van-cell__left-icon) {
    margin-right: 12rpx;
  }
}
</style>
