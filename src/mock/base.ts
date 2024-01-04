import { uniqueId, delay } from '@packages/utils'

const waitTime = 300
export const response = async (data: any) => {
  uni.showLoading({
    title: '加载中...'
  })
  await delay(waitTime)
  uni.hideLoading()
  return data
}

export const genString = length => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters.charAt(randomIndex)
  }
  return result
}

export const genNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const genPhone = () => {
  let phoneNumber = '1' // 手机号码的开头必须为数字1
  for (let i = 0; i < 10; i++) {
    phoneNumber += Math.floor(Math.random() * 10) // 生成随机数字并添加到手机号码中
  }
  return phoneNumber
}

export const genEmail = () => {
  const prefix = Math.random().toString(36).substring(7)
  const domain = 'example.com' // 你可以替换为你想要的域名
  return prefix + '@' + domain
}

export const genChinese = length => {
  let result = ''
  for (let i = 0; i < length; i++) {
    const unicode = Math.round(Math.random() * (0x9fa5 - 0x4e00) + 0x4e00)
    result += String.fromCharCode(unicode)
  }
  return result
}

export const genSentence = () => {
  const sentences = [
    '阅读是我最喜欢的活动之一。',
    '旅游是他的一大爱好。',
    '音乐是她生活中不可或缺的一部分。',
    '我对摄影有着浓厚的兴趣。',
    '健身是我保持健康的方式。',
    '写作是我表达自我的方式。',
    '烹饪对他来说是一种创造性的表达。',
    '画画是她放松的方式之一。',
    '看电影是我休闲娱乐的首选。',
    '园艺是我放松和学习的爱好。'
  ]
  const randomIndex = Math.floor(Math.random() * sentences.length) // 随机选取一个句子索引
  return sentences[randomIndex] // 返回随机选取的句子
}

export const genName = () => {
  // 随机选择一个常见的中国姓氏
  const surnames = [
    '李',
    '王',
    '张',
    '刘',
    '陈',
    '杨',
    '赵',
    '黄',
    '周',
    '吴',
    '徐',
    '孙',
    '朱',
    '马',
    '胡',
    '郭',
    '林',
    '何',
    '高',
    '梁',
    '郑',
    '罗',
    '宋',
    '谢',
    '唐',
    '许',
    '邓',
    '冯',
    '韩',
    '曹',
    '曾',
    '程',
    '蔡',
    '彭',
    '潘',
    '袁'
  ]
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)]

  // 随机选择一个常见的名字
  const names = [
    '明',
    '亮',
    '伟',
    '杰',
    '勇',
    '强',
    '超',
    '静',
    '秀',
    '芳',
    '海',
    '天',
    '波',
    '和',
    '平',
    '春',
    '夏',
    '秋',
    '冬',
    '国',
    '华',
    '红',
    '金',
    '英',
    '兰',
    '菊',
    '美',
    '爱'
  ]
  const randomName = names[Math.floor(Math.random() * names.length)]

  return randomSurname + randomName
}

export const genAge = (minAge, maxAge) => {
  const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge //生成minAge-maxAge之间的随机整数
  return age
}

export const genTime = (format = 'yyyy-MM-dd HH:mm:ss') => {
  const currentDate = new Date() //获取当前日期和时间
  const minTime = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    0,
    0,
    0
  ) //设置最小时间为今天的凌晨0点
  const randomTime = new Date(
    minTime.getTime() + Math.random() * (currentDate.getTime() - minTime.getTime())
  ).toLocaleString('zh-CN', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  return randomTime
}

export const genImg = () => {
  const str =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAC+lBMVEUAAACu6/+j7/2n3P+u5/+m3P+n2/+o3f+q4P+n2//G7/+m3P+n3P+n2/+n3f+o3f+m3P+n3P+n3P+n3P+n3v+o3f+n3v+n3P+p3f9Evf+n3P+n3P+o3f+n2/+n2/+n3P+o3P+m3P+n3P+p3v+x5P+n3P+o3P+n3f+q3v+n2/+n3P9Dvf+q3/+n3P+n3f+p3v+n3P8hULeo2/9Dvf9Dvf+m3P9Gu/4hULgjUblIwP9Kx/+n2/9Dvf+n3f+o2/8mVbtFvf9Fvv9Gvf8kU7mm3v8iUbgiULhDvf8iUbgnWLxEvf9Evf8hULhEvf8jUrkiUbin3P9Evf9Evf9Evf9CtPtEvf+o3f9Evv+m3P9Evf9Fvf89pPA8pPEwgNdfj9mm2/9DvP////8hULciUrmi1/48pfFCuv5BtvwlVLokU7kpWLwiVLue0/ssWr0xhdul2v9As/o/sPiRxfQwYMAwgdmYzPhRgtIyiN0tdtEjVrw1kOMoV7s4muk6n+0nY8UvXr87ou8vftcsXL4rcM0kXMCg1fwvfNVAcMibz/qTx/ZvoeI0juFcjthIec0pa8qFue4sc89Cc8ooZsY+rfZ1qOYzi99BuP2CtuwoacgyY8H1+PxrnuBilNtVhtRFdswuetQnVruk2v8+q/U8bMaf1PzY4fN6reg2Z8QlXsIkWb5ypeRLe846asU4aMQ1ZcP8/f/f5vU1kuRLvv8mYcNCa8I3l+dfkdpNf9A8ZsEjWL02Yb43lOXx9PuWyveOw/M9qPJ/sus4nOp8sOk3luabsd9mmN0teNM9bsf5+v48qfOLv/HN1+/D0OxVwv/l6/fS3PFZi9Z1k9OJvPDs8fppm9/p7viou+Rkhc1mx/+gtOGBnNdMfc9EdMtOc8ZJcMW3xuh4qudXidVegMuNwfKuwOWP1P+SqdxujdFpic9bxP97l9WK0v8qbcy7yuqywueWrd6Op9tXe8mIotmFn9iX1/9yy/+g1/5UeMiC0P9QdcZ7zv+MpNpRdsdSd8efM2h3AAAAX3RSTlMACAWcDe/0VRz7AvL2a0My6da8o1xGLdJQ/aiASdDJtpLirz0Sy4t4Jtzb9CPCcTX49E7qz4Us07AdDuTblGRXUUk6LRfjyL2ZE52OgFpCcGCxp4FsYmFFzKJ246mea+9wHE4AACw5SURBVHja7NpZbsJADAZgZ53sIRtBWUhCgTaoUAmJx/aJe/j+t+hDpaqqQAotSzwz3xUsZ/zbAYoUKwyYX7ZJs53XUd9NDM+2PWPS9VE93zZJW/osCC0FpNtahmz33kQmDmRGzfuOhUuQrsx5YeUid/GP3HxRshcHpCtYBjtt5eEVeCttF8hu+Qcn9IsOr6wr/FD2yuX0rIxNvBEzLjMdpKGUbF3jzdXrTI5hA7z6jYd34jX+K0jnKVW7wTvbtJVslJOUWWHiQ5jFTNbkF2WfuPhAbrKXNfmmVomBD2cklQoSwLQdQTW+GO0UBKd/zHFU5h8iB5Q3zcTRMbU3EJLu1zhStS9em1iH0bwcpxgHC0QyTWwcOTsR54HPYiQhzkAAapojGXnKezRx0g2Sskl5Pp44LEJyIsZtSfaEPlY/5XvgUbVCslYV8CbcImnbEHhy1JA87Qi8UJ9d5ID7zMkMPOuRE/0M6JsSieXDxNT3Kcp69Eury9hr0qfegFguH6IPgKolB7PVKRrRH4TZBDk1YUCPtUCOLcjdr1Iuosd5RgqU6AVyryB0d3/qUADdE9CgHlAQBxK7lE/q7WY1jTAKA/C0altJKCa0TaHQRUKJi0Lc5yZ6By8cXRgZESLjpgvBjT8ogyCI+ENkJIHEZKmrSBGCkFURd+2i0hspnZk047Q6k5/v+6bPdtDd8J73cOajx07fWHr/H3zN8MmDt2/sPPskedsTH3jrlSrZeHLSKkIIn6dXKS8+gLfTJBmiX3sQ4YOHK8nLEHhr062+AhFCnl1u7QbBW5mstBhECO5KXuTfBncqLRpAjG0PlsTwBvjL06Lo97Nh+6p23QVnG2HJY3YC4O+SlohXmwq4Cnistr+KQIBTWqGjgqeIp7aNuxCiRStVD8GTd6L9qQ9iDGi1gyvw5PPIasu/CUGa5KTSA0ebnhi2XmzBhZ7MoCOoZHfxraLlyGIig6MtD7T28D4cqZk00UG/peBxdXNkcw0AyridpBv5GDjaFz7+vgnBidIhU3yWwqOa2WMcpthpg0xt8BR6Iwm1F4CTwxzdGnbxmGJ9soqPLI8GUTLUwFNgTxJoZw1OClmyyrer541cWquUjxU83GXa2tPHsPrymXTJAnhaE1gRX6/DUYaW0koyHkqZ0I1cHYvUI9JlwNX6a0mQtxE4KtIqR60eHqqm0W/Zlgy7Y9JFi+Aq8lYS4nkQzlq0Wu4YD6bUa+ND/EtbRK4DQSGXjW+DcKFDTtoxMCMnjbCXwVdQwDvyOgI3GuQoXwAzM9KVwFmEe47srMOVBtn1B6VSczC0jEcnBbDSSxh9Hbytc5619tbgTp7sajAclpNk0npgpW3EegG8rXHtI28CcKlMdiPckMtRMpyBFZV/OTQFOHb2cAhuXZPNOSzUHBmaYCSVMOcs/kJhiZMX+3CvSotqsLo0M+ZgBEbOjOCCAPucdr/+LdxB8YisOlh0mSVdPgU2ZkaIxCDAll/i4Okm7qQep1uaDJup+fgUbNQtycXd5lOJPR/uaHpBNzIy/tIkXToGJgqkG0MIn8TcO9xZrNTX+/I3Ff+QmrDN9bj572LsSoy9wr3I0+loWUpcky6dAhMXQm8awfg6aCeCxzck3TFYMKvpHIJEmFb2cAAMjEj3HfeS6mKlCv02hCgBhnXEvwEmOsZoqsCBXJx+qTVb82GlOjlvZBNH8YOo/sv450QufaJVK5l5q/Sj/lNJ4Y+MOW4Ls8Fu+N0GG2PSzbCEMv1xNe+cxMm1aLqaGZRUBcDc6DkQZ1ta8B8cjHZzy3ayBbXUzifo3hJaRjPvUYRhNmq9/MXdffQ2EUQBAN7Qe29CVFEkEAgJiSsnfgPi9oY3eJdgY+zQYmMbG5tiDImxCYQOoVcRBZCoAUICAQ6AkBBNVAFCCA4cEBIHWBdcsGPifWPH+52i3KLJzNt58+ZNTxDlAUZsgCSm67tfrEEqp01QPD37SQL0GADCVKft1itO7DmKtPipB0eWQ5EMEJDVKpsE4ixZnCgPMR1Z0a6JwXk75smF6gVQDJPKJGqdQaQVqFoNd5vXc8zKeCzkrfSYA003nIbWsFVRtslMJcuKYrG2GpyOpoB5XbDKZcOsVp3caoKCo8+hzAWhNmLE4iwD4Qp6ahwGC/tvSp3Tbq50GTGT8s1FGJO5Eqlp3UCoCsyMuypXOsIsb1ZnjTHjmDy/vgQKqts0iVCnMSDU8maO/zjWYm+UmWbRAbFhutUXKqCQxlCm4meBSNufc0zFa5c5LIyEBSMc1qZ1xzDN3utQQLMkMhNAHNOuM5jKt8+hMDIGjGhUfw4HvEZMcWbjWiiYCWQprPEgin/PQkzGq2paGakmjFBYlHyjxYbJFu02QYGMp0pqjQRBKlZwTOVm1FZGQwiLiY1JcYZkJOWZFL13zzmmczBqlagKsRTbLldhklXRInzxhpCkTHqDCNc2YxKbh6MqwKg1oKqFpQubj2PCmo0HoAB69+ioOfcNezgmhOoVdgxVZkZMwYga9i+53oUJR2+CcCSZ+O5Ab0HzKvyLtxjYH7WoWseIuduMTU4vJmz2g3jdJY0mDgByW5fiX0aPlUV4UVXJiNnjH1lZGJKGZGHzAhBtwMQOl1P0b0kajmWW1ODrZcQcsZieXWMwad2qBtE6azyUAmIHmhcmIrlZYX95xMwQWV0KuYO1xR3Cv15svQpxa5dfq75+ZOvW19fvHgIymg6ryqYArbunMI6vs/y72DsYNWWdq8rJcjh/DBMWLj196tTRHYs5Jlm64shaIDFFy9HIZCAUu8wf461jqQJG5CtZkcgrOeayZhdNiJms4V5OT6DkP4hxrgz/tEqrwoon7MWcTvuBQM9hUr4GAaWtqzDGWCOzjue8L/ckIRmRQVKeRgChtSsw7kuYdUiK+SLmcNQEBEbkeSpFGdGvncGYi5dZh7XNsc/FMY77Gmq/BP+oSvzyDRCY0qnodXE392NM0MI6OEtdo6GxNWzZxhLk+J6evwMCeVXOzekNZJoxhttZqaoh7GTTe05R9+gLVmBMQysrXS2oKt8ABPLYr/cHKhvWY8y+bayEWYyElyH7S+01HYj4d2CUsYmVtugU2QwUpkvtNAqIVKzGKJ+BlTgnqhYtAQqjpPaZBzTuLsaokJWVum2c8Ib1pOLsCR8twqhgSYePmFqCIJLf7rDXcCCxfT9GmZkeeFC1CUgM71X4c9vqhRhVw3ShnrR1Ufd2TJCBQOHdIoyqZ/rgRtVRoDGwV0ErsRIdlPl5phNWVK0CIkP+O6s4FQgsXxobjxtMNziqTEBjaqdCTpANZ/Q3HsyHqgrQIJ8pMhy0W7Aeo3SzXiW+e6uByHDpvwwFAiswqnSzu5l4iZuyDC3Ywe0ufX3vxu0j6gLcrsPcYaDddo4Ry5i+LENVM5AZJuU2GDSriG1AgkxnVlL33hos5dSjJ2i19gxGhPSQv0php+4527OH8Nq4REA/Xvr53XTnUfUcyOSumuvSFbR6jRHczXTHSd5ZqGuue4d9QSv/In0lsJIZ6Lsy95XaNho0OnA7dn7OdCiMqqVAaLTUphmg1QWMaNBdQE9ckFsIlGaIrf15xFHFG5kucVQdAkKd2wzp3UCbBacxIsD0yYcqPxDq1lZYnw0a7cYIL9OpEKq2A6XZUnZjQJuKclRd7PD1u/kKCng4YIyoNFaijXupV8Rlt4wyd5I7oTUOtDmh8wWLsXoRXZnHZT267QqamNagyqi/lEnaznDRAaDUtZOg8tFNejyTSiUbBUR1GCUm8e4vj13S1zMv2SWR3En4st6gyUmM0GFOMUm9iLdcu5ZJmcwETaoxopLpmmIU8ZbrTBEr1hbdR/SIFqKEb+41q6wbaLFdT1XVufs93QVK3crobyDcRtVxheldg4gnlEaQt7q8rsuyn+y3cRctAEojM6xYfUCLg6jy6fIUJJWFC3jCrE8Z8a6wWmjWXbbWqS8f1NvtgT/sl887nIY6i8yKwyvigetRxHmszdEJIjNKSqsj4AnWNtgwM6OvNuhZedlZV9ihcaCq3AQUsuezpoIGFcQTRHHbPVXH8X/xY1/W1dywssKQbQK2IlOlNNNAiz2osikUf64hUNmAebHVrrO7ZSbcPhHvvk2jLP/ZUE6zB5HdK6s4asNDnvNhJpQbI5YDpfRyoLGgQTOquIVpYbV7jUjE19JkYeL4BLx3PJbyo3eH5kqsRrMLsyu/dO7X2ycfP3/+/OyPzw8/Pnn789zqcmyTy+OUmRjLBKxZfcroLulsjz/Rkac6c0PmcTj39vOH9/fOXpmf2c6z977e+v7xxyXM4mKlQ2ECGESsWUPpSqxPajkHUewh/Ne5jx9eHb4z/z/tPPzq1sOfqzADY/BGZJ50/DVrMlkF6XKefy2vu8WIaVY/+Xb/yvx8nH314cmlDPPEY2DEllEXXafXlHYBDR6jytb+rIncFMJUiz89PTxfm7Nfn70sxzQuuyJgzeImoPSbuzv/iqqKAwD+LMWyzPbN9tN+Ws7pnH7q1E/9H9/3vg9mgHFwRkkYlhECSUSRQGiaLAmjwBYwKNnKTDIIAwnRsIAyUjR325dz6r13B96s3PfunWFenz+gY3zn3Xu/33vv9y7kNYW8Y+5dA3ttKQaZuDDQInHRc/pIOwbzFNfwH7O2AE/6SWQ5mLfK1JRuz/Gg3njvoMTV6KHD9RikiuPIVUZu7vC0nNPF262oaDMYjk7UaT/bKsWBf/K4E/VOFYmc7EFFfirwo7+SuyQFzHvZeJa+sxln5Q8PSHHTd+ZwBupUpiXvcaCUJVwaXn6BqgaRWqEXZ3WM+aX4GhlrR52qGo6HfDcCT8u4FLK2GkxC3FU46/yklAj7p3WfiVzs4nYc6C3gaSmX3dt3jW3d5unm8qMDUqIMXtDNJs3dIjM392Rdv4/7FJj2kaERq8HHEA42PcfW6qaSBpGVl//FhLsF4l4wb4ORNVaFjAHjA1Ki+Xu7MEDOsXFJ1ncBT/dyeGjqNfqeJq4SDOiYkuaD/698DPDV8Liy/jzwdJWgeQxMW5dOfZ63sBmJjAt+aZ4MDstIeLp5NPFdBRw9xnz1llTeOym+/1oZiX8apXk0NIEBuXUiAx//nfVLBc19YNqHlF1/7FVI5I9J86ulNxMJL8uwlcV/ErmP5OkMu4Uv0F3RcXuRGG+V5t3gUSQ6C1knkbXA0ZVarv4gmPaGTLXo7S9FjfxXi5QMeutRI1ewTiIfAUcPMraxJlNIsxhboQc1a/dLSaJxApmboFfzP1K6mLX2/iHNHZ09MmrGB6Wk0TeMxD5bMnSC1yxnfTD9W20KoYvHcJ+UTMYyUFNiY+lm9jlwdA9rm97MufemCmTUnJOSzEAXW0TcWlKVCtyQRr5XgFnlqHDYYs0fJB4Zh6Sk09qOmipzEdEy3R+AnysYK1lbUOETo0tzoKr+tJSERsaZIlLCv754L9vu1EZUFMeo7jaTeCTN8iqY/yhqtplPDQ8AR8vYVr0vztFqxtVEsvMkjYck9QUikiMaV8D/ROlittLi87HTQlslqtKTNh66iOw124ExE3gh5cWnwaz1qJBtsbcMUJ6SkljfefNdbR3cdw2fZrqIsDn25tQHqBmTkpqfJO2lriToL6dcSrgGzNoQs9Rb40HVSSnJjXagqtImGpTLvQJ/jSAIKWDWgVjFIJsPVeeTo5wYS6PT5FsOOdyXWSmCsABM2xTrCZ0cVHWMSMlvv4yqQlPLrG+BowXCZWDaW6hIi1xxl7UEfUCygmNkGrGLhvSj4mXg6DKWvDAfFa4YG5x4TLKGw6Z6S9lRkbES+FnGcORkBSpkMZI8y0wgmp4uVO0RDenkvu69iiFR/yH6qtfl0TL0JNoAoZtGSu0m1r2bgZ/FDOd6P0XFqejXJ7BXso4jZlZaVaj4DvhZyrBfqKUh+yKlIDIqJqwyYCn8WjYiNxjfNHwF+FnO0HTms6g/qVxUWWOFFbDfRBfoWu6Nru9i6LS4Mdq5935UTUvWctx4MtLNvWnsdQylrDWo2BntA0lPghNYhoxmGr5vX8i98/idwqNg1mtRFopuGRVHJKsh6WGBSG039xaljzK8ULEdFUVRqu7po5LV+LVkxCtSq+Geqt/B0MPhPVQ0RGk1PCxZzyGjn4gdFU7g53aG6vtqVNREvn0nN0rW09JBTm3QsqFCBn6uER4Ck8gGrityFeuwZEXkE0kzuGe4Drh5SLgbzMpHhV0M1oCqpDz2Q/uJ5Bo8mrUCuLlbuBrMklFhi3g2pstKSbpOLypkt7GeJ+uBm6uFRWDS65GLvV5UXJCsqSfT2KGgJt5XEhYJV4JBsQNSgyorTumqk6hoMtYIvhy4uVK4HExaGTEgFahol6yq0dirNF7eNz8vNx8QQJUYrBIVFyXLGjd0tLSNe0AMD1mxA2JzWLDOG2SM3CuetyFrEZgloyJSj2GnRddYip50IzXfNu6TOudlby0qjkoWdtTImNXEe1P9aobEMDNCYliCirOShR0iF1mpNPPOQ+5mKJ1otSx3cKJk9SlEknoyULHbQOkkFbh5iKG4+FZ4tdeOCtkvWdl5A7kh/+IiQ/l9OyrSwuf0DsnSztKXfO3cb4jczrBB9WL4ciTPwpXeGUOokOuoN6hWAz93MGzhvh1+1jobFX9J1tZFnaynoWI78PMowyGH71FREX68IQlvQBsyTT2J7EHFJuDnToZjQFtRkRVeOEniK4UGavAl1L1JXwV+rmM4KLchPINqsnaplxiizkSy+B+UYzhK+mn4D8mBih7J2vrSSYY1p33c77QtZzhs/RUqqsOX5ZLVTVBeTSBD9CfAz1KG6wgfoaIzbFmeL1ndMO2s3sS9EeZihgs7KzNCi1kuVHRJVjdGedShDnlXTuAqlittL4cWfWr+D4n6zEH4asqTpKuBo2Uslz5fCz3nV2Px/duAQVR4xLns5X7WGi5juBZNMsNaloC0jCblEeB6VLjoVr0bgaMFLI0DDoY+PuU2NmT5e3+TEdPPj/VJfI20Moa5HRVpiW+YlcLSWoMkIpVmAzLZhUQHz9y+cbgLEfOnTzPvGhbQXcL9Avi5hqn5zCpUdJoMyFnU8G0A2HdSRuL8IOO6t4Kq1pueCvzcydSeaaWW0bpMLXvPoJ7M6Rvx/42zukzXcM6hIjvxbUmfZmtg9k7IjkgdfWLYsxaDdPXx7MiAjI1WDlEddCjm3+LvMbYWf2tCv2wZFRKFvzBEr8TBFOow3BqapHpjwMv/dcnFbE0wD4b+kDyo8NOuY/T+kTjowGAZrSyZYaUYkysOz1AtY2sT+wkqvKGHTkYpFqYYSu7jVTfX62X5D3lpppD3gKd72Roprw/dffbS7ocMYZhBXjUogmV7v5XmZa193Hen4ArWVuOrUVEUumNoKiCtErOLGOoPltpJKc0huTeBo5tYm/HvCime5KJiiub/OExfrPhduDAkze0Chho3meprGRbFAYeMFcDRPazPVbwSUqfOph64OzDERKxVqEzXbLYXQ02bTGdQ4aAoZL0IPC1nfdDlq5BPuxYVF82MLmdjFEPUWp+zj2VS5x+QJtIJiKfFrE8epWYEHyfdS/2zHM3HIF090SvCE2SSMf7dya1xC0gaqsqBpwd5PwpWpI0+lMmw3pk5B6J6P0NiyD8g2XzPyJFHwZifzdsaPIm4UOGkWxJRDlijTlSdS2DpxD/nDpWtOQ4j1n3sD0tu1iaRkFR9hK5g5ETCeWbOe7E43kJVIqMrLrKvsgpQIT8HPF3K/vRqanrwvnq1kaOLIxfUMb/9XE+sBXI6KjIaaR/7kpH4zXyq2Trn5egS0kOZq8e4PU6cIxK5Btc2I0ONI1TNKY/Qlz2GlUJy/mFtgypOpRM3kqyQq6s4PN/9SvABjVrdXMqztYKzx9CI0zjYIrEYmKu4mK39q1KBq3sF4m4wrRxVrpBlFjeH5qVD9uQcx63tHt7HG8gD98StYN5bqNgZ3Hzbz/lObP2IlFBjc2xQVaBCLgeubhUCloJ5Hwb/mNr4Xkjo0/LH41JiXYx9ltRWioq3ga+lQsAyMO8LVMguUZPL9xHJAVRNSok1jYpuMYo8VG0GvpYJAUtSwLzVQcn6TlSc5zyF9EiJNY6KotgfyHbgK2WJMONaMG8jKnxB68F0P9cbsV1SYrVoA6U79gfyKfB1rTBrOZj3MQY1w2ziOsacm5fj240xKyf2Zs4fiL72TtwADN4Jumu4jWsm0ouKjAQPWVMx05As3h8IcYMwayEw0HLDZhu5mMp1kDlNkafzdyTWOTm3g3wgvC0UdG4H89bL+gvrddq/dz/XZkl4vFVKoIlYr51V8V9ikR4OevcDg7eDvvAqrmPWNGrk8SOHTg8MDSUiMKO6WTFMIZIchLf7BYJ9EtmMqn7dcSWy4cquMR2DtTdK8TYVo9Zra9JmtVXA2w2C3oIrgcG7qMgN6v0+xXNa1+tokeLsOCrKYr3v+yHwduUCIcidwGAHKuQa/TprXOK58iUS0o2rzxn9dkiajIrV64C3O4VgS4FBqlP/m0rj/Hc73ZHYgJxBhWwXw9W18V7yhheyiEeAxdagDt1ezgVB/1i7fhKJ95B1OPrR9+LAjM7fI0KIh4HBikx9vTovcPKcn8be6fZ6bSiM9zprNCPqiFWAKud64O5hIdRdwGKr/s25uub41Mz9g62to1K8XYjauNft4b1xq286E+o2YLEiX78tkmPdN10kP5kPoz9Ivgvi4DYh1IIUYPGhvme63WHdVn+9qGoQw2xD1csrgL+UBUKYW4HFiudR4bVp9TfLvupCHgYriVp0z/gK4uBWIdzNwGQHqmr1Fer2PslqzkV7HaFQRtVBiIebBYH3mLVSS9cdbv3P6ZxkMaP5UfrO9JMJ/RuIhysWCBFcB0xe0r8la2vTvu8hyVqiPb/qLkXVu29APFwnRPIEsPkGdbvrRWjFQWsyygPFLi+qMsshLp4QIlmwCJisd6LCUaNfk5yULGSkK/IT3vZqMqFvhrhYpI1YvMcs2IKqanWlZS9FyzXxnUZVcWgFy4eaLcCOcsQiuSGjTfpX+/egqt4608hZVDXVhXwflaj5DOLkNiGySxYBm+cyUfWBfuuga1Cyhv1yxCWvqxo1ByBOFl0iRHEXMPoUVY5+daVVTSZ2a/TxbV2Lkc42uL2oWQPxcpcQzY3A6gD56l1qP6lOVP1thfdEBjtmZkC9mibU7FoJ8XKjENUdwCh1O6p86jhcJKPqt+SPyEg7qprdwflgaSAeqRAvdwjRPQOsysk0UqL+0LpRM57so9bIBKrk4AmkwIGaV1dC3DwjRLcwBVi9JKNusyoLNRPJPbO3tqMmT9TLQeIAxE/KQiGGS4HZDtSUkaWWpiuZV7+NXajJCUo/cpHYCnR+fP/Ln8GoS4VYHgd2G1H/jRSjJv+MlKwmnRhhgeWuRjRY4D0hiu8bjsjjQky3A7OV36Bmn6goQ+Jkcta1Wi4gURY0fXhQk/4mUPpZ/M/7P4IhtwuxLQV2qZtQU1UXNBJPtErJZ/QoEln64aoMibVfAK1fRBMRWSrEtnARsEv9FjU+NR/ZKaMmvzfpHsmdWotEhX6160Xi8+eA2peiFpGfgN6ihcIc7gcO1r2Amia1cFroQeKP5Dr4MDKNhEN/1r3CgcSaVKD2o0jcYiAiTwpzuexy4GDda6jxFKj5bjUS6UeSJyVpGXMi0bRbnNHgQyLjIBjwtRhwy+9A6fLLhDldBzyk7kIi26aMyfswYO1Ykoxb+ycw4JRLDLDlyEi8/AUY8Pr74izaiFwnzO1G4GLl90j43GpvMw8GtE8lQUiGjmKArEs/0rwYsOYNMOJ3UTQekRsFCtcCH5/JqPHsVdf1pzB5QtJ4GGd4Z4crVxkG1G8BY74Wg1DlI9cKNG4ATj7JRKJKW2114oyuYyPSvNl/FGfIypCqsdV6MOCFVWDMr7eYCMgNApWbgJNV7yHR2a3+ALfhrPrhAWk++A+146zKfjHggyYMyN+wEgz6U9S55QTVkHWTQOd64GXFNxjgUweGtErUaT87KiXY0EknzirdKwYU+XDGpo/AsBOzwfjlx9eByvUCnUseBm521CMhl7nUrXYv6sjnxxIYk9Zj7ajjybHPhKMSZzi3gAnaiHXil59eB1oPXyIk8hMhVm0P/QMUVKOe/NvZhGSLjcfGUc+RNROOQl045FfXgxl/vv8ldTDoPxBiyTXAT+rWDAzorK0jf4BgXcNn4vqh+E8f6cAgzVmumXD4cNZrH0OiXLNEoLYYeFr1As5o1r6S3dscGKJj+FBcio/+/efOp2Mw7846UVOX14az3vsEEmexQG/JTRDTr798HfDLrzC3DZk4w1GsJor2Ci+GcZ6/eKaRX4rS0njo5HgGhpCrCkXCne3BWc4Nr0Pi3ETxgdCe8/1ZVyWg25JZf0AO/4v0Z5diBOkTx4+dGephC0Xr5LHj4/kYzls7O1ZVyfpwHHwDEukJwZD7IKrQpPRroLFqE+o05bi01U1xKUax9o/pi72TA4N9hgIxODDZe3F6Ih0jaspqEImGrFLUef7gOkio+wQKtMdKT4h6XwKdzS+ijnyqW1vl7M7yyRiLs+Ofw8NHzo1NTe4fGGod7PH7+1okTYu/Z3SwtXHg9NTYsSPDh3/ryMDoqnP6RcKe50OmcLC7TTDoUYjuS1MBISHRD10faDGxF5S1oTFyRn1+vYy0mnO73SLh6i6RUe+tHamQaI8KRi2DaEwFhNj8tozB30lFDfkzFWT7HBgPpbkV/WKAO68yJIybXoJ5sEygQHkiyGRAiPKN+RisrbiApGi2/u7iyk7kx1OZ/UGNGGAryvJhsPwD5TAfLhWMe/YKiMx0QIgVG97BUNXZe1wi4SqsKDvVJCMTR3Vuzh63OKsmr8SDIV7c8QbMiyueFUx4ACJjCQjxw4FMDNOUW5FWJwbYagq7c8pKvM3GIuPxlpTldBe6RR3b7orcUgy1ems5zJcHBDMueQgiYgsIkfrmrnqMoE37Yeu5GooKdtZmFe+rOuXztpV2OhyyjBrZ0dlc2uatLskty6rdWVDUYBdDuPdkVTowTOaal2D+PERTVaS/uc4lIKDGJB8jcnirsrrT3GIsNludTYzFXpRXVulBTeg8ngrz6WaBCv1mLntAiNSXNr6HUclNldty8vakuW2iEa60vTn7KksxuowtMJ+uFcy68XKIIDRTPwFMyjfseh7n0NnmK8ktzqroLigs2l3jsteFfC12d0NaYUFeVlmJr8mBFF6B+XP5v+3dX2xTVRwH8LOOwRDFqfgH/A8qCv6bIhsTHWPKf8H///XX/HrVtrRWW1oYUyfTsm5uzOl0NrC5umaT/UucEWLIJmJwcYkJWXgwYQ+QhQeDj8qDT+7e24uXtff23vacs3bweSIksNAv9/zO79xzTq8h+szvmjttVTsDafPWNaE5tq0V+z/+eP/+/T/+WGFDw/rjNrTzdwdJXc4SSOjM7wOK388ABV4nMmTHmHqoU9I75oGpsSSHpGEucOH3KTvNW44H+uw0s+horTuoHqhanHGH1PiaS9KSCxxEe1FibwGRZ7ABKfD17Ov0ekDoQZmjE0RDSsXqmZJEckl6bisA5iJtKHEcBkUrynzHAmNdbjTF3tVwbO9hrwASVw3KnI0gqw2j7EQEuCu4jaRpFjDXirLmBL83HAWAiH+o8Uj33gOnAj1tNX3h6srJZbzS19/R1NB6YG9no9cFaoP9SrRDoAj1qY46czaLpG0hMNad8OYKJZGaKEwWHUNZO8bYtRqL8SqU9flBoXpqArwTWUjSlz8HmBq1o6QVzuMJaCUS6kBZuLb5XCStQUigpRJlTS5QE9qUPwZc5eUTCuYBSyEfShoioKZOJAhq/n6U9YYAvF0Y0+WFOM0OrRmV0ISyeuBpHqFiAbDjadK4qk2VSJM6Ea9PyckFE4IB7e3qx1H7Uw/WTEHPvoDQMeNWYOaA5lVtiRMZdU+etDbbMaZVABXPMd11kugwSmydwMutMwgli4CVRtS73d5zUElEAFmLUjQCEZCph60+1bAlnECZ4yQk5IqVIvsocLKIUPMQsOHy6a0sqRIZkxPpdMQPQuphq7IZYtTthwZXLEi3F7h4iNBjuQmYCKCkzQMaIidQ1iYmUmfTuNute/KwNdiFsqoh0DRYrbqrmrmbLISiu2cCA50oqQqBJnUiR1Fm64bJhvpVw5aq/ejyg46RdtV/CMZm3k2oehLoU24EbAEd55aiGpQibU9QcNTD1klocaraDz2HbdwW458kcTJulbHB0N1HQgOepzJhUVAPWz3q9kNfN8oOA2O5hLac24GyIyjpF0DP5ESqR0CDNGyp1XsgqXrVtJuh23MIdfkFQFXUhyLHCCSjTsTnBU3RAKodBwMiSmMqAEMF+YSBubOBpnqjw7eUiJEirQxbSvthSChW/08BO7PnEiYWg8vlikaDwaAging8HkjZuE0ZsAxQFgOHXaBvvF/Vfhgz6mBeRhYTRoq196I77KL2ykqnyO12V4uqqqp8kvCEflFXV1ffhN7e9lgFGa6RNEnGxtomNIh6Gnp6Dh6VA1ASaQtCMtGDSvthWJ1q8s3EQsLK+iLkzBcCmXDM6T4ggAF17YgdfjAhgJITwMYVMwgz5YXI2QEwLdTZ4gEzXD6Wd+3n3UkY2sw7kT7QNNjqc9acBAoaUeL0Q3Jn/hiYP/DnvxEw6P5FhKlS5MsWBA3jbnpvmOqNfoPnWfE0n6mbFecRxjYhX42QmKeLYpMt9Bn7u84OmN2wuZgw99p7kh9Ev4gOTfhOtFP2ieSLmO0xb5+zLWaXZLfka8mvE3acY9P90o5RRIq1eNyBorAAutSnXef/DcnlEvYsa618fKA7jDSrqgwF+4y0qWfMHge/0kI4KFlm5eJrFFVBYi0YMwY0CGEUObyg4w+r2kAEkrh2BuFixYNWHr5DySAkFHSjrA6oOGwg3gHreZLV9YfzCSfLuSTym/53M59EybAAdPQkfzkz32rmHEaBdgOSpYls1Z/XHgkjOlqjQIm/HUW9tJ6QvGsIR6uXWtnbg6Ia0OQdcQE9x1FyUneSpXYWdMy5j+jJykTeRpE9AnwIvmRT33+NH+W7dBHhrGy+lbWfUTICnHQnmyVEBoyOWPdfTbhbxTyRd5QPiA+l+a8OgpbTqn/zP6Bt9nVkCjzBPJFvURQAXo4k3e57ZsBQHrOIMdn2jOxAUT9wM4winwc0nf1HjGT+n7rj1XVkipQxruyfoMQFvLQoEy09f58+rTu/utRU/ciqudYbyhosNx0o6oA0zFlEptBqph3ilzbeh/w7lXY9ZXmp9B9Z07N/hqI24MYTTvMnFpjtz7MrkV0ocgM/dSjxQmoevpNMuRUMV+N/UT4eboJpvRi+Np9kgBJ2b6w+Z7gdRPdNVbUAKbhyBskIlg1WVn6M7Y/nZ9AWW/Q3L9dCMsUzVkY+ik1DOWpDUQOYdj3JIKyWUbajyCEAP50osvnBnPvnkYzCqCF5HyWjwI/gju12MSVvEckwy1daGXiL++l+ZddcF5hxRQZMdycrecrKwPcoOggcDZmfay/MkOnVJC8zKCS/osgHPPWZHLNmLyYZ6gX6hWQnSkLA0T5zU7uCuSRj0e/af1Ku3uBoHCV+MOT2jOjOufWIb26NHRPhKWxiJpGbQzLbc5RfkexBURPwVG/4Z858nmQ8ysPWNhRVeoCjURTZopDMTXeTLGB5huZs6z2UDAFP1cbeVD6UOYtX+lZTbBLfRUk38BQwUrhuzbjmXFvJ01ZqPp6C2yq7DUx8F2RmM6jlCWq1/dPYSgZPtSiyuUDTnAxbS0xuBa2VlC+UDydFgtfrrR0c9PtDIZcrKggRMMCXpPtZmNHNh4ZVdPr2D9PbCNLpTHTxhL3d6XRXV1X5wuH+rr6+3o7hgyPxRaQeEiuYRbJSyQaKe4GOQkpqHWiQfSTuBOMwJJR7G8lWL6yktheoB1JSh4YF1C9ytU9C3JXBS1fJ5WxMvyfZjaJqMMEDir1oWAOoODW6n9l3ZPpSSTLL096Tckg5/Jlc7cn6nt5qO6KjMlwTOHrEbyaQOlBpSrzd5cop3wdHwao0x61vlB3Q+jwtp3w4ma8XRc6wz1dV7XY6K+0OGybW6olfzjo2abS6jkwLlpfTa0oqDOxd8+/zobb6SdkJQtDlCoX8/sHBWq93aGh8ZMSf6IxvDajMWZwtKyXJrdiQTin5Kzbl0Raqt6OeU2CWF0WV6rnVY2Q6Wb427cOfAmiI7HWivl4wy9OOolqIuedyMt2ULUvz8OeoViUfxmTcYNqwesH3xRvIdLQqxUje0d0LdKQSVSr27N6+89Av332ybcdnW1HhBNMC///Ma6dJLY93yRMrKR7+jG809nzxjVXtt507KlINZJ9SfK6YdQmZvlKLZAeKwhrXL8Rs3faNRv1JKZBmFI0tmTed4xBZnluW6uHPkM6tWbZd7+hMCNwpvsYtKp0+M10dZWtpHf4cdaDsg5+sVrqBhBCLN5MLxfKXTPUlb2oc/oyGUfbrm5p7JFINZPa6cnIhWbHRTPf+VeLLxepRts1qpRxI3h3Z+AYqPSXPGi8muxKW5lobSnZZKQdy42XZ9b6cmtUbDD4mPyTckB5AyR4r1UBm5t5HLlwlzy1LeS+Q34aire8mD6QajLrp0Qv04VAV+I0G3r3vT7BGeBQl2/UHOzOB5N0yHV53pM9S9tJSQ3uBekGtF0UVb1EKZM5VN1wQTYcxllVP62ayPf4ieL9S0Q0EUpW0cFz1QLa/mqUuRy+T91HSGH9N7IfpB3LpgusuppFQTtnGlbqHP4/HNSEVVn27kwWy5JYbLqahZ8WzTy01dBF8A4r2pBPIpTdflhXnCaaa5YWNy+brXASvrum7Uw7kxjuuvvhoGFdS9szapfEXwfsnnzt7O5Ub/Wdeef3VF3y7kQLL8mdffeUN2aG4i+Cr5CfkDX0fyYEEz7l1wWWXT/dXHEyt37xl3ZrCBPt5fGhS4Zp1WzavJxdRcEl56abiosLzNkr1moiiqHhTafnF54K69eWl9z5y8xUzQdRmKIh1W0rLLz4VrOXkXz531uub1hUXr1lTVPT4448XFiIWFk78oqhozZri4nWbtpRuLl+flSsh/wE7MoK2dHfz8wAAAABJRU5ErkJggg=='
  return str
}

export default {
  response,
  genString,
  genNumber,
  genPhone,
  genEmail,
  genChinese,
  genSentence,
  genName,
  genAge,
  genTime,
  genImg,
  genUniqueId: uniqueId
}
