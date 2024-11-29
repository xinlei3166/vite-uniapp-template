<template>
  <view class="register">
    <view class="register-title">注册账号</view>
    <uni-forms
      ref="formRef"
      :label-width="80"
      :model-value="form"
      class="login-form uni-form-custom"
    >
      <uni-forms-item
        label="账号"
        required
        name="account"
        :rules="[{ required: true, errorMessage: '请输入账号' }]"
      >
        <uni-easyinput v-model="form.account" class="form-item-input" placeholder="请输入账号" />
      </uni-forms-item>
      <uni-forms-item
        label="手机号"
        required
        name="phone"
        :rules="[
          { required: true, errorMessage: '请输入手机号' },
          {
            validateFunction: (rule, value, data, callback) => {
              if (!validatePhone(value)) {
                callback('手机号格式不正确')
              }
              return true
            }
          }
        ]"
      >
        <uni-easyinput
          v-model="form.phone"
          type="number"
          class="form-item-input"
          placeholder="请输入手机号"
        />
      </uni-forms-item>
      <uni-forms-item label="验证码" name="code">
        <uni-easyinput
          v-model="form.code"
          type="number"
          class="form-item-input"
          placeholder="请输入验证码"
        >
          <template #right>
            <button
              v-if="countdown === 0"
              style="border-radius: 0; margin-left: 8rpx"
              :disabled="!validatePhone(form.phone)"
              size="mini"
              type="primary"
              @click="onSendCode"
            >
              发送验证码
            </button>
            <button v-else style="border-radius: 0; margin-left: 8rpx" disabled size="mini">
              {{ countdown }}s后重试
            </button>
          </template>
        </uni-easyinput>
      </uni-forms-item>
      <uni-forms-item
        label="密码"
        required
        name="password1"
        :rules="[{ required: true, errorMessage: '请输入密码' }]"
      >
        <uni-easyinput
          v-model="form.password1"
          class="form-item-input"
          type="password"
          placeholder="请输入密码"
        />
      </uni-forms-item>
      <uni-forms-item
        label="确认密码"
        required
        name="password2"
        :rules="[
          { required: true, errorMessage: '请再次输入密码' },
          {
            validateFunction: (rule, value, data, callback) => {
              if (!validateTwoPassword(value)) {
                callback('两次密码输入不一致')
              }
              return true
            }
          }
        ]"
      >
        <uni-easyinput
          v-model="form.password2"
          class="form-item-input"
          type="password"
          placeholder="请再次输入密码"
        />
      </uni-forms-item>
      <view class="uni-form-btn-wrap">
        <button class="uni-form-btn" block type="primary" @click="onSubmit">注册</button>
      </view>
    </uni-forms>
    <view class="tip-btn-wrap">
      <text>
        已有账号？
        <text class="text-btn" @click="onLogin">去登录</text>
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeUnmount } from 'vue'
import { login } from '@/api'
import { doSM3, phonePattern } from '@packages/utils'
import { useTimer } from '@packages/hooks'

// ====================== Hooks ======================
const { initTimer, clearTimer } = useTimer()

// ====================== Lifecycle ======================
onBeforeUnmount(() => {
  clearTimer()
})

// ====================== Components ======================
const formRef = ref()
const form = reactive<Record<string, any>>({
  account: undefined,
  phone: undefined,
  code: undefined,
  password1: undefined,
  password2: undefined
})

const validatePhone = (val: any) => {
  return phonePattern.test(val)
}

const validateTwoPassword = (val: any) => {
  return !(form.password1 && val && form.password1 !== val)
}

const onBlurValidate = (prop: string) => {
  formRef.value.validate(prop)
}

const onSubmit = async (values: Record<string, any>) => {
  formRef.value.validate().then(async () => {
    if (!form.code) {
      uni.showToast({ title: '请输入验证码' })
      return
    }
    console.log('onSubmit', values)
    uni.showToast({ title: '注册成功' })
    onLogin()
  })
}

const countdown = ref(0)
const sendInterval = 60
const cb = () => {
  if (countdown.value === 0) {
    clearTimer()
    return
  }
  countdown.value = countdown.value - 1
}
const onSendCode = async () => {
  countdown.value = sendInterval
  initTimer(cb, 1)
}

const onLogin = () => {
  uni.navigateTo({ url: '/pages/login/index' })
}
</script>

<style lang="scss" scoped>
.register {
  padding: 32rpx 0;
}

.register-title {
  padding: 32rpx;
  font-size: 40rpx;
}

.register-form {
  margin-top: 16rpx !important;
}

.register-field {
  &:not(:nth-last-of-type(1)) {
    margin-bottom: 32rpx !important;
  }
}

.btn-wrap {
  margin: 64rpx 32rpx 32rpx 32rpx;
}

.tip-btn-wrap {
  margin: 0 32rpx 0 32rpx;
  padding-right: 20rpx;
  text-align: right;
  font-size: 28rpx;
}
</style>
