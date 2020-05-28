import React, { FC, Suspense, lazy } from 'react'
import { hot } from 'react-hot-loader/root'
import { BasicLayout } from '@/layouts'
import PageLoading from '@/components/page-loading'
import '@/styles/index.less'
import Configurations from './configurations'
import { Layout } from 'antd'

const Examples = lazy(() => import('./examples'))

const App: FC = () => (
  <BasicLayout>
    <Suspense fallback={<PageLoading />}>
      <Layout style={{ height: '100%' }}>
        <Layout.Sider theme="light" width={400}>
          <Configurations />
        </Layout.Sider>
        <Layout.Content>
          <Examples />
        </Layout.Content>
      </Layout>
    </Suspense>
  </BasicLayout>
)

export default hot(App)
