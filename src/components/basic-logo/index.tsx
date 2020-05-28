import React, { FC, useCallback, SyntheticEvent } from 'react'
import Animate from 'rc-animate'
import styles from './index.module.less'

interface LogoProps {
  collapsed?: boolean
}

const BasicLogo: FC<LogoProps> = ({ collapsed }) => {
  const handleImgLoadError = useCallback(
    (e: SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.style.visibility = 'hidden'
    },
    []
  )
  return (
    <div className={styles.appLogo}>
      <span className={styles.appImg}>
        <img src="/logo.png" onError={handleImgLoadError} />
      </span>
      <Animate component="" transitionName="fade">
        {!collapsed ? (
          <span key="app-name" className={styles.appName}>
            {process.env.APP_NAME}
          </span>
        ) : null}
      </Animate>
    </div>
  )
}

export default BasicLogo
