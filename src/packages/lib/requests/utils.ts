export const parseBlobError = async (blob: any, messageKey: string) => {
  const text = await blob.text()
  try {
    const json = JSON.parse(text)
    return { message: json[messageKey] || '下载失败' }
  } catch {
    return { message: text || '下载失败' }
  }
}
