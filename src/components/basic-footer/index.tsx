import React from 'react'
import { Layout } from 'antd'
import { CopyrightOutlined } from '@ant-design/icons'
import styles from './index.module.less'

const { Footer } = Layout

const BasicFooter = () => (
  <Footer className={styles.basicFooter}>
    Copyright <CopyrightOutlined /> 2019
  </Footer>
)

export default BasicFooter