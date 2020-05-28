import React, { FC, ReactNode } from 'react'
import styles from './index.module.less'
import { Layout } from 'antd'
import BasicLogo from '../basic-logo'

const { Header } = Layout

interface Props {
  left?: ReactNode | null
  right?: ReactNode | null
}

const BasicHeader: FC<Props> = ({ left = <BasicLogo />, right = null }) => {
  return (
    <Header className={styles.basicHeader}>
      <div className={styles.basicHeaderLeft}>{left}</div>
      <div className={styles.basicHeaderRight}>{right}</div>
    </Header>
  )
}

export default BasicHeader
