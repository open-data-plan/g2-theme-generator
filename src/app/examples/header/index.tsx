import React from 'react'
import { Space, Button } from 'antd'
import {
  DownloadOutlined,
  ExportOutlined,
  ImportOutlined,
  ReloadOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import styles from './index.module.less'

const Functions = () => (
  <div className={styles.header}>
    <Space>
      <Button type="primary" icon={<SyncOutlined />}>
        刷新
      </Button>
      <Button type="primary" icon={<ReloadOutlined />}>
        复原
      </Button>
      <Button type="primary" icon={<DownloadOutlined />}>
        下载主题
      </Button>
      <Button type="primary" icon={<ExportOutlined />}>
        导入配置
      </Button>
      <Button type="primary" icon={<ImportOutlined />}>
        导出配置
      </Button>
    </Space>
  </div>
)

export default Functions
