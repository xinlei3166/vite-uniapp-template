<template>
  <view style="padding-bottom: 20rpx">
    <view class="avatar-info">
      <view class="title-setting flex items-center justify-between">
        <text>我的</text>
        <view class="iconfont icon-setting title-setting-icon text-6"></view>
      </view>
      <view class="flex items-center">
        <view style="width: 100rpx; height: 100rpx">
          <image class="w-full h-full" src="/static/img/avatar.png" />
        </view>
        <view class="username-phone">
          <view class="username">{{ userinfo.name || '君惜' }}</view>
          <view class="phone">{{ hiddenPhone(userinfo.phone) || '188******88' }}</view>
        </view>
        <view class="iconfont icon-right text-5 text-white ml-auto"></view>
      </view>
    </view>
    <uni-list class="nav-menu" style="margin: 24rpx">
      <uni-list-item
        :show-extra-icon="true"
        :extra-icon="{
          customPrefix: 'iconfont',
          size: '16',
          type: 'icon-home'
        }"
        title="Router"
        clickable
        @click="onClickMenu('/pages/components/router/index')"
      />
      <uni-list-item
        :show-extra-icon="true"
        :extra-icon="{
          customPrefix: 'iconfont',
          size: '16',
          type: 'icon-edit'
        }"
        title="Store"
        clickable
        @click="onClickMenu('/pages/components/store/index')"
      />
      <uni-list-item
        :show-extra-icon="true"
        :extra-icon="{
          customPrefix: 'iconfont',
          size: '16',
          type: 'icon-star'
        }"
        title="Provide"
        clickable
        @click="onClickMenu('/pages/components/provide/index')"
      />
      <uni-list-item
        :show-extra-icon="true"
        :extra-icon="{
          customPrefix: 'iconfont',
          size: '16',
          type: 'icon-check-circle'
        }"
        title="Bus"
        clickable
        @click="onClickMenu('/pages/components/bus/index')"
      />
      <uni-list-item
        :show-extra-icon="true"
        :extra-icon="{
          customPrefix: 'iconfont',
          size: '16',
          type: 'icon-calendar'
        }"
        title="Table"
        clickable
        @click="onClickMenu('/pages/components/table/index')"
      />
      <uni-list-item
        :show-extra-icon="true"
        :extra-icon="{
          customPrefix: 'iconfont',
          size: '16',
          type: 'icon-appstore'
        }"
        title="Sortable"
        clickable
        @click="onClickMenu('/pages/components/sortable/index')"
      />
    </uni-list>
    <uni-list class="nav-menu" style="margin: 24rpx">
      <uni-list-item
        :show-extra-icon="true"
        :extra-icon="{
          customPrefix: 'iconfont',
          size: '16',
          type: 'icon-setting'
        }"
        show-arrow
        title="Security Settings"
      />
      <uni-list-item
        :show-extra-icon="true"
        :extra-icon="{
          customPrefix: 'iconfont',
          size: '16',
          type: 'icon-message'
        }"
        show-arrow
        title="Notification Settings"
      />
    </uni-list>
    <uni-list class="nav-menu" style="margin: 24rpx">
      <uni-list-item
        :show-extra-icon="true"
        :extra-icon="{
          customPrefix: 'iconfont',
          size: '16',
          type: 'icon-logout'
        }"
        title="Logout"
        clickable
        @click="onLogout"
      />
    </uni-list>
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
