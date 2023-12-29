<template>
  <view class="register">
    <view class="register-title">注册账号</view>
    <nut-form ref="formRef" :model-value="form" class="register-form nut-form-custom">
      <nut-form-item
        label="账号"
        prop="account"
        :rules="[{ required: true, message: '请输入账号' }]"
      >
        <nut-input
          v-model="form.account"
          placeholder="请输入账号"
          @blur="onBlurValidate('account')"
        />
      </nut-form-item>
      <nut-form-item
        label="手机号"
        prop="phone"
        :rules="[
          { required: true, message: '请输入手机号' },
          { validator: validatePhone, message: '手机号格式不正确' }
        ]"
      >
        <nut-input
          v-model="form.phone"
          type="number"
          placeholder="请输入手机号"
          @blur="onBlurValidate('phone')"
        />
      </nut-form-item>
      <nut-form-item label="验证码" prop="code">
        <nut-input v-model="form.code" type="number" name="code" placeholder="请输入验证码">
          <template #right>
            <nut-button
              v-if="countdown === 0"
              :disabled="!validatePhone(form.phone)"
              size="small"
              type="primary"
              shape="square"
              @click="onSendCode"
            >
              发送验证码
            </nut-button>
            <nut-button v-else disabled size="small" shape="square">
              {{ countdown }}s后重试
            </nut-button>
          </template>
        </nut-input>
      </nut-form-item>
      <nut-form-item
        label="密码"
        prop="password1"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <nut-input
          v-model="form.password1"
          type="password"
          placeholder="请输入密码"
          @blur="onBlurValidate('password1')"
        />
      </nut-form-item>
      <nut-form-item
        label="确认密码"
        prop="password2"
        :rules="[
          { required: true, message: '请再次输入密码' },
          { validator: validateTwoPassword, message: '两次密码输入不一致' }
        ]"
      >
        <nut-input
          v-model="form.password2"
          type="password"
          placeholder="请再次输入密码"
          @blur="onBlurValidate('password2')"
        />
      </nut-form-item>
      <view class="nut-form-btn-wrap">
        <nut-button class="nut-form-btn" block type="primary" @click="onSubmit">注册</nut-button>
      </view>
    </nut-form>
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
  formRef.value.validate().then(async ({ valid, errors }: any) => {
    if (!valid) return
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
