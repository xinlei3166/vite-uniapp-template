import { ref } from 'vue'
type UploadProps = any
type UploadFile = any
export interface UploadConfig {
  upload?: boolean
  maxCount?: number
  maxSize?: number // MB
  accept?: string // .zip,.jpg
}

export function useUpload({ maxCount, maxSize, accept, upload = true }: UploadConfig) {
  const fileList = ref<UploadFile[]>([])
  const uploading = ref<boolean>(false)

  const beforeUpload: UploadProps['beforeUpload'] = (file: any) => {
    if (maxCount && fileList.value.length === maxCount) {
      uni.showToast({ title: `最多只能上传${maxCount}个文件` })
      return false
    }
    if (maxSize && file.size > maxSize * 1024 * 1024) {
      uni.showToast({ title: `上传文件大小不能超过${maxSize}MB` })
      fileList.value.pop()
      return false
    }
    const suffixes = accept?.split(',') || []
    const sIndex = file.name.lastIndexOf('.')
    const suffix = file.name.slice(sIndex).toLowerCase()
    if (suffixes?.length && !suffixes.includes(suffix)) {
      uni.showToast({ title: `文件格式错误，请上传${accept}格式的文件` })
      return false
    }
    if (upload) return true
    fileList.value = [...fileList.value, file]
    return false
  }

  const onRemove: UploadProps['onRemove'] = (file: any) => {
    const index = fileList.value?.indexOf(file)
    const newFileList = fileList.value?.slice()
    newFileList?.splice(index!, 1)
    fileList.value = newFileList
  }

  const onUpload = () => {
    const formData = new FormData()
    fileList.value?.forEach((file: UploadFile) => {
      formData.append('files[]', file as any)
    })
    uploading.value = true

    // request('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
    //   method: 'post',
    //   data: formData
    // })
    //   .then(() => {
    //     fileList.value = []
    //     uploading.value = false
    //     message.success('upload successfully.')
    //   })
    //   .catch(() => {
    //     uploading.value = false
    //     message.error('upload failed.')
    //   })
  }

  return { fileList, uploading, onRemove, beforeUpload, onUpload }
}
