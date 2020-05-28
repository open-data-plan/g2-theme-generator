import React, { FC } from 'react'
import { Layout } from 'antd'
import BasicHeader from '@/components/basic-header'
import styles from './index.module.less'

const { Content } = Layout

const BasicLayout: FC = ({ children }) => {
  return (
    <Layout className={styles.basicLayout}>
      <BasicHeader />
      <Content className={styles.basicLayoutContent}>{children}</Content>
    </Layout>
  )
}

export default BasicLayout
