import React from 'react'
import { Collapse } from 'antd'
import * as themes from '../themes'

console.log(themes)

const Configurations = () => (
  <Collapse bordered={false} expandIconPosition="right">
    <Collapse.Panel key="basic" header="基本配置">
      xxxx
    </Collapse.Panel>
    <Collapse.Panel key="geometryProperties" header="图形属性映射">
      xxxx
    </Collapse.Panel>
    <Collapse.Panel key="geometryStyle" header="图形样式">
      xxxx
    </Collapse.Panel>
    <Collapse.Panel key="axis" header="坐标轴">
      xxxx
    </Collapse.Panel>
    <Collapse.Panel key="legend" header="图例">
      xxxx
    </Collapse.Panel>
    <Collapse.Panel key="tooltip" header="Tooltip">
      xxxx
    </Collapse.Panel>
    <Collapse.Panel key="annotation" header="Annotation">
      xxxx
    </Collapse.Panel>
    <Collapse.Panel key="label" header="Labels">
      xxxx
    </Collapse.Panel>
  </Collapse>
)

export default Configurations
