import { is } from './is'
import { delay } from './util'

type UploadFile = any

export function base64ToURL(base64String: string, type = 'application/pdf;chartset=UTF-8') {
  const bstr = window.atob(base64String)
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  const blob = new Blob([u8arr], { type })
  const url = window.URL.createObjectURL(blob)
  return url
}

export function downFile(
  base64String: string,
  fileName: string,
  type = 'application/pdf;chartset=UTF-8'
) {
  const url = base64ToURL(base64String, type)
  const elink = document.createElement('a')
  elink.download = fileName
  elink.style.display = 'none'
  elink.href = url
  document.body.appendChild(elink)
  elink.click()
  document.body.removeChild(elink)
}

export function openFile(base64String: string, type = 'application/pdf;chartset=UTF-8') {
  if (base64String) {
    const url = base64ToURL(base64String, type)
    const elink = document.createElement('a')
    elink.style.display = 'none'
    elink.href = url
    elink.target = '_blank'
    document.body.appendChild(elink)
    elink.click()
    document.body.removeChild(elink)
  }
}

export function hasFileType(file: UploadFile, type: string | string[]): boolean {
  // @ts-ignore
  const mime = file.name.split('.').pop().toLowerCase()
  if (is(type, 'Array')) {
    return type.includes(mime)
  } else if (is(type, 'String')) {
    return type === mime
  } else {
    return false
  }
}

export function hasExcelFile(file: UploadFile): boolean {
  const mimes = [
    'xlsx',
    'xlsm',
    'xlsb',
    'xltx',
    'xltm',
    'xls',
    'xlt',
    'xml',
    'xlam',
    'xlw',
    'xlr',
    'csv'
  ]
  return hasFileType(file, mimes)
}

export const writeFile = async (
  filename: string,
  content: any,
  options: Record<string, any> = {}
) => {
  const a = document.createElement('a')
  const blob = new Blob([content], { type: 'text/plain', ...options })
  a.download = filename
  a.href = URL.createObjectURL(blob)
  a.click()
  await delay(100)
  a.remove()
}

export const writeBase64File = async (
  filename: string,
  base64Str: string,
  options: Record<string, any> = {}
) => {
  const bStr = atob(base64Str)
  let n = bStr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bStr.charCodeAt(n)
  }
  await writeFile(filename, u8arr, options)
}
