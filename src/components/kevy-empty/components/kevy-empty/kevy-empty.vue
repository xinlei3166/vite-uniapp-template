<template>
  <view class="t-content">
    <view :class="['t-wh', { 'full-screen': fullScreen }]">
      <view v-if="show" class="t-empty">
        <image
          class="t-icon"
          :src="icon"
          :style="{ width: imageSize + 'rpx', height: imageSize + 'rpx' }"
        ></image>
        <view
          v-if="description"
          class="t-text"
          :style="{ color: textColor, 'font-size': textSize + 'rpx' }"
        >
          {{ description }}
        </view>
      </view>
      <slot></slot>
    </view>
  </view>
</template>

<script>
const typeMap = {
  address: '无地址哦~',
  car: '购物车空空如也~',
  comment: '无评论哦~',
  coupon: '无优惠券哦~',
  data: '无数据哦~',
  equipment: '无设备哦~',
  error: '出错了~',
  goods: '无商品哦~',
  history: '无历史记录哦~',
  list: '无列表哦~',
  loading: '努力加载中...',
  maintain: '正在维护中...',
  money: '无余额哦~',
  network: '无网络哦~',
  news: '无新闻哦~',
  notice: '无通知哦~',
  order: '无订单哦~',
  permission: '无权限哦~',
  points: '无积分哦~',
  search: '无搜索结果哦~',
  task: '无任务哦~',
  404: '页面走丢了~',
  500: '服务器出错了~'
}
export default {
  name: 'KevyEmpty',
  props: {
    /**
     * 类型：支持address、car、comment、coupon、data、equipment、error、favor、goods、history、list、loading、maintain、message、money、network、news、notice、order、permission、points、search、task、404、500
     */
    type: {
      type: String,
      default: 'data'
    },
    /**
     * 自定义图标链接，传此参数则优先级高于type显示图片，图标为正方形1:1大小
     */
    image: {
      type: String,
      default: undefined
    },
    /**
     * 描述文字
     */
    text: {
      type: String,
      default: ''
    },
    /**
     * 描述文字颜色
     */
    textColor: {
      type: String,
      default: '#969799'
    },
    /**
     * 描述文字大小，单位rpx
     */
    textSize: {
      type: [String, Number],
      default: '28'
    },
    /**
     * 图标大小，单位rpx
     */
    imageSize: {
      type: [String, Number],
      default: '320'
    },
    /**
     * 是否显示
     */
    show: {
      type: Boolean,
      default: false
    },
    /**
     * 是否全屏展示
     */
    fullScreen: {
      type: [Boolean, String],
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    //计算图标链接
    icon: function () {
      return this.image ? this.image : '/uni_modules/kevy-empty/static/empty/' + this.type + '.png'
    },
    //技术描述文字
    description: function () {
      return this.text ? this.text : typeMap[this.type]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.t-content {
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  padding: 20rpx 0rpx 30rpx;
  position: relative;
}

.t-wh {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.t-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .t-text {
    margin-top: 16rpx;
  }
}

.full-screen {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100rpx;
  background: #ffffff;
  position: fixed;
  top: 0rpx;
  left: 0rpx;
  bottom: 0rpx;
  right: 0rpx;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
