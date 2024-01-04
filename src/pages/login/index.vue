<template>
  <view class="login">
    <view class="login-title">登录账号</view>
    <nut-form ref="formRef" :model-value="form" custom-class="login-form nut-form-custom">
      <nut-form-item
        label="账号"
        prop="account"
        :rules="[{ required: true, message: '请输入账号' }]"
      >
        <nut-input
          v-model="form.account"
          custom-class="form-item-input"
          placeholder="请输入账号"
          @blur="onBlurValidate('account')"
        />
      </nut-form-item>
      <nut-form-item
        label="密码"
        prop="password"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <nut-input
          v-model="form.password"
          custom-class="form-item-input"
          type="password"
          placeholder="请输入密码"
          @blur="onBlurValidate('password')"
        />
      </nut-form-item>
      <view class="nut-form-btn-wrap">
        <nut-button custom-class="nut-form-btn" block type="primary" @click="onSubmit">
          登录
        </nut-button>
      </view>
    </nut-form>
    <view class="tip-btn-wrap">
      <text>
        没有账号？
        <text class="text-btn" @click="onRegister">去注册</text>
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { login } from '@/api'
import { doSM3, setToken } from '@packages/utils'
import { useUserStore } from '@/store/user'

// ====================== Hooks ======================

// ====================== Components ======================
const formRef = ref()
const form = reactive<Record<string, any>>({
  // account: undefined,
  // password: undefined,
  account: 'admin',
  password: '123456'
})

const validateTwoPassword = (val: any) => {
  return !(form.password1 && val && form.password1 !== val)
}

const onBlurValidate = (prop: string) => {
  formRef.value.validate(prop)
}

const onSubmit = async () => {
  formRef.value.validate().then(async ({ valid, errors }: any) => {
    if (!valid) return
    const res = await login({
      userAccount: form.account,
      password: doSM3(form.password)
    })
    if (!res || res.code !== 0) return
    setToken(res.data.accessToken)
    const userStore = useUserStore()
    await userStore.setUserinfo()
    await userStore.setUserinfo()
    uni.showToast({ title: '登录成功' })
    uni.switchTab({ url: '/pages/home/index' })
  })
}

const onRegister = () => {
  uni.navigateTo({ url: '/pages/login/register' })
}
</script>

<style lang="scss" scoped>
.login {
  padding: 32rpx 0;
}

.login-title {
  padding: 32rpx;
  font-size: 40rpx;
}

.login-form {
  margin-top: 16rpx !important;
}

.tip-btn-wrap {
  margin: 0 32rpx 0 32rpx;
  padding-right: 20rpx;
  text-align: right;
  font-size: 28rpx;
}
</style>
