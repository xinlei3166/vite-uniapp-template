<template>
  <view style="padding-bottom: 20rpx">
    <view class="avatar-info">
      <view class="title-setting flex items-center justify-between">
        <text>我的</text>
        <nut-icon class="title-setting-icon" size="22" name="setting" />
      </view>
      <view class="flex items-center">
        <nut-avatar
          size="large"
          custom-style="--nut-avatar-large-width: 100rpx; --nut-avatar-large-height: 100rpx"
        >
          <image src="/static/img/avatar.png" />
        </nut-avatar>
        <view class="username-phone">
          <view class="username">{{ userinfo.name || '君惜' }}</view>
          <view class="phone">{{ hiddenPhone(userinfo.phone) || '188******88' }}</view>
        </view>
        <nut-icon custom-class="text-white ml-auto" name="right" size="14" />
      </view>
    </view>
    <nut-cell-group custom-class="nav-menu" custom-style="margin: 24rpx">
      <nut-cell icon="home" title="Router" @click="onClickMenu('/pages/components/router/index')">
        <template #icon>
          <nut-icon name="home" custom-class="mr-1" />
        </template>
      </nut-cell>
      <nut-cell icon="edit" title="Store" @click="onClickMenu('/pages/components/store/index')">
        <template #icon>
          <nut-icon name="edit" custom-class="mr-1" />
        </template>
      </nut-cell>
      <nut-cell
        icon="star-n"
        title="Provide"
        @click="onClickMenu('/pages/components/provide/index')"
      >
        <template #icon>
          <nut-icon name="star-n" custom-class="mr-1" />
        </template>
      </nut-cell>
      <nut-cell icon="success" title="Bus" @click="onClickMenu('/pages/components/bus/index')">
        <template #icon>
          <nut-icon name="success" custom-class="mr-1" />
        </template>
      </nut-cell>
      <nut-cell icon="date" title="Table" @click="onClickMenu('/pages/components/table/index')">
        <template #icon>
          <nut-icon name="date" custom-class="mr-1" />
        </template>
      </nut-cell>
      <nut-cell
        icon="category"
        title="Sortable"
        @click="onClickMenu('/pages/components/sortable/index')"
      >
        <template #icon>
          <nut-icon name="category" custom-class="mr-1" />
        </template>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group custom-class="nav-menu" custom-style="margin: 24rpx">
      <nut-cell icon="setting" title="Security Settings" is-link>
        <template #icon>
          <nut-icon name="setting" custom-class="mr-1" />
        </template>
      </nut-cell>
      <nut-cell icon="message" title="Notification Settings" is-link>
        <template #icon>
          <nut-icon name="message" custom-class="mr-1" />
        </template>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group custom-class="nav-menu" custom-style="margin: 24rpx">
      <nut-cell icon="my" title="Logout" @click="onLogout">
        <template #icon>
          <nut-icon name="my" custom-class="mr-1" />
        </template>
      </nut-cell>
    </nut-cell-group>
  </view>
</template>

<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'
import { computed } from 'vue'
import { useUserStore } from '@/store/user'
import { removeToken, hiddenPhone, getToken } from '@packages/utils'
import { logout } from '@/api'

onShow(() => {
  console.log('My Show')
  if (!getToken()) {
    uni.navigateTo({ url: '/pages/login/index' }) // 跳转到登录页
    return false
  }
})

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
  margin: 24rpx !important;
}
</style>
