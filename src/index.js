import {
  getSpanArr
} from './getSpanArr'
/**
 * 
 * @param {*} e element plus表格合并的默认参数
 * @param {*} param1（data, rule） data: 表格的所有数据，rule: 表格合并的规则 例如：[{index: 0, name: 'name'}] 
 * index 代表合并的列索引，name 代表合并的列名（也就是决定根据什么值决定合并）
 * @returns 
 */
export const objectSpanMethod = (e,{
  data, rule
}) => {
  if(rule.length == 0){
    return
  }
  const {
    row,
    column,
    rowIndex,
    columnIndex,
  } = e
  // console.log(row)
  let obj = rule.filter(item => item.index == columnIndex)[0]
  if(obj){
    const span = getSpanArr({
      param: obj.name,
      data,
    })
    const r = span[rowIndex]
    const l = span[rowIndex] > 0 ? 1 : 0
    return {
      rowspan: r,
      colspan: l,
    }
  }
}
