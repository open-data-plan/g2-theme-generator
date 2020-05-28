import App from '@/app'
import { ConfigProvider } from 'antd'
import React from 'react'

let locale: any

if (process.env.NODE_ENV === 'test') {
  locale = require('antd/lib/locale/en_US').default
} else {
  locale = require('antd/es/locale/en_US').default
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

const Root = () => (
  <ConfigProvider locale={locale}>
    <App />
  </ConfigProvider>
)

export default Root
