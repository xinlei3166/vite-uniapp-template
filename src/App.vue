<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { onMounted } from 'vue'
import { useUserStore } from '@/store/user'
import { getToken, interceptRoute } from '@packages/utils'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

const userStore = useUserStore()
onMounted(async () => {
  console.log('App Mounted')
  const token = getToken()
  if (!token) return
  await userStore.setUserinfo()
})

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
  interceptRoute()
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">
@import 'nutui-uniapp/styles/index';
</style>
