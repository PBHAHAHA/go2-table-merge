// let param = "name"
// const getSpanArr = ({param ,data}) => {
//   const arr = []
//   let pos = 0
//   for (let i = 0; i < data.length; i++) {
//     if (i === 0) {
//       arr.push(1)
//       pos = 0
//     } else if (data[i][param] === data[i - 1][param]) {
//       // 判断当前元素与上一个元素是否相同
//       arr[pos] += 1
//       arr.push(0)
//     } else {
//       arr.push(1)
//       pos = i
//     }
//   }
//   return arr
// }
// var colIndex = [1]
// const indexArr = ref([])
// const objectSpanMethod = (e,{
//   data, rule
// }) => {
//   console.log(rule)
//   indexArr.value = rule
//   if(rule.length == 0){
//     return
//   }
//   console.log(e, indexArr)
//   const {
//     row,
//     column,
//     rowIndex,
//     columnIndex,
//   } = e
//   // console.log(row)
//   let obj = rule.filter(item => item.index == columnIndex)[0]
//   if(obj){
//     const span = getSpanArr({
//       param: obj.name,
//       data,
//     })
//     const r = span[rowIndex]
//     const l = span[rowIndex] > 0 ? 1 : 0
//     return {
//       rowspan: r,
//       colspan: l,
//     }
//   }
// }
