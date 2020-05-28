const xAxes = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

export function generateDataItem(name: string) {
  return {
    value: Math.random() * 1000,
    name,
  }
}

export function generateCategoryData(seriesNum = 3): any[] {
  const temp: any[] = []
  xAxes.forEach((day) => {
    for (let i = 0; i < seriesNum; i++) {
      const base = {
        day,
        type: '',
        value: 0,
      }
      base.type = `第${i + 1}组`
      base.value = Math.floor(Math.random() * 1000)
      if (base.value < 200) {
        base.value += 200
      }
      temp.push(base)
    }
  })

  return temp
}

export function generateScatterData(seriesNum = 3): any[] {
  const temp: any[] = []
  while (temp.length < 500) {
    for (let i = 0; i < seriesNum; i++) {
      const base = {
        x: Math.floor(Math.random() * 1000),
        type: '',
        value: 0,
      }
      base.type = `第${i + 1}组`
      base.value = Math.floor(Math.random() * 100000)
      temp.push(base)
    }
  }

  return temp
}
