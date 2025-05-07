class UniAbortController {
  private _aborted = false
  private _abortHandlers: (() => void)[] = []

  get signal() {
    return {
      aborted: this._aborted,
      addEventListener: (event: 'abort', handler: () => void) => {
        if (event === 'abort') {
          this._abortHandlers.push(handler)
        }
      }
    }
  }

  abort() {
    if (this._aborted) return
    this._aborted = true
    this._abortHandlers.forEach(handler => handler())
  }
}

// Cancel example
// const controller = new UniAbortController()
// requests.get('/data', { id: 1 }, { signal: controller.signal }).catch((err: any) => {
//   if (err.message === 'Request aborted') console.log('Request was canceled')
// })
// Cancel the request
// controller.abort()

export default UniAbortController
