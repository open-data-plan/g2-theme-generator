import React from 'react'
import Header from './header'
import { Layout } from 'antd'
import {
  LineChart,
  StepLineChart,
  AreaChart,
  StackedAreaChart,
  GroupedColumnChart,
  StackedColumnChart,
  PieChart,
  DonutChart,
  ScatterChart,
} from '@opd/g2plot-react'
import styles from './index.module.less'
import { generateCategoryData, generateScatterData } from '@/utils/helpers'

export default () => {
  const data = generateCategoryData()
  const singleData = generateCategoryData(1)
  const scatterData = generateScatterData()
  return (
    <Layout>
      <Header />
      <Layout.Content className={styles.examplesContainer}>
        <LineChart
          title={{ visible: true, text: '折线图' }}
          data={data}
          xField="day"
          yField="value"
          seriesField="type"
        />
        <StepLineChart
          title={{ visible: true, text: '折线图' }}
          data={data}
          xField="day"
          yField="value"
          seriesField="type"
        />
        <AreaChart
          title={{ visible: true, text: '面积图' }}
          data={singleData}
          xField="day"
          yField="value"
        />
        <StackedAreaChart
          title={{ visible: true, text: '堆叠面积图' }}
          data={data}
          xField="day"
          yField="value"
          stackField="type"
        />
        <GroupedColumnChart
          title={{ visible: true, text: '分组柱状图' }}
          data={data}
          xField="day"
          yField="value"
          groupField="type"
        />
        <StackedColumnChart
          title={{ visible: true, text: '堆叠柱状图' }}
          data={data}
          xField="day"
          yField="value"
          stackField="type"
        />
        <PieChart data={singleData} angleField="value" colorField="day" />
        <DonutChart data={singleData} angleField="value" colorField="day" />
        <ScatterChart
          data={scatterData}
          colorField="type"
          xField="x"
          yField="value"
        />
      </Layout.Content>
    </Layout>
  )
}
