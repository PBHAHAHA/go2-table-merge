/**
 * 根据数据源和 param 计算出对应的 span 数组
 * @param {*} param0  
 * @returns 
 */
export const getSpanArr = ({param ,data}) => {
  const arr = []
  let pos = 0
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      arr.push(1)
      pos = 0
    } else if (data[i][param] === data[i - 1][param]) {
      // 判断当前元素与上一个元素是否相同
      arr[pos] += 1
      arr.push(0)
    } else {
      arr.push(1)
      pos = i
    }
  }
  return arr
}