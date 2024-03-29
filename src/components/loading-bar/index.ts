/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingBar from './loading-bar'

let loadingBarInstance: any
let color = 'primary'
let duration = 800
let failedColor = 'error'
let height = 2
let timer: number | null | undefined

function getLoadingBarInstance () {
  loadingBarInstance = loadingBarInstance || (LoadingBar as any).NewInstance({
    color: color,
    failedColor: failedColor,
    height: height
  })
  return loadingBarInstance
}

function update (options: { show?: boolean; percent?: any; status?: string }) {
  const instance = getLoadingBarInstance()
  instance.update(options)
}

function hide () {
  setTimeout(() => {
    update({
      show: false
    })
    setTimeout(() => {
      update({
        percent: 0
      })
    }, 200)
  }, duration)
}

function clearTimer () {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

export default {
  start () {
    if (timer) {
      return
    }
    let percent = 0
    update({
      percent: percent,
      status: 'success',
      show: true
    })
    timer = setInterval(() => {
      percent += Math.floor(Math.random() * 3 + 1)
      if (percent > 95) {
        clearTimer()
      }
      update({
        percent: percent,
        status: 'success',
        show: true
      })
    }, 200)
  },
  update (percent: any) {
    clearTimer()
    update({
      percent: percent,
      status: 'success',
      show: true
    })
  },
  finish () {
    clearTimer()
    update({
      percent: 100,
      status: 'success',
      show: true
    })
    hide()
  },
  error () {
    clearTimer()
    update({
      percent: 100,
      status: 'error',
      show: true
    })
    hide()
  },
  config (options: { color: string; duration: number; failedColor: string; height: number }) {
    if (options.color) {
      color = options.color
    }
    if (options.duration) {
      duration = options.duration
    }
    if (options.failedColor) {
      failedColor = options.failedColor
    }
    if (options.height) {
      height = options.height
    }
  },
  destroy () {
    clearTimer()
    const instance = getLoadingBarInstance()
    loadingBarInstance = null
    instance.destroy()
  }
}
