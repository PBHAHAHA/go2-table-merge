# table-merge
用于element-plus表格合并

## 使用指南
通过npm安装
```bash
npm install go2-table-merge
```

在vue文件中引入
```javascript
import {objectSpanMethod} from 'go2-table-merge'
```

在需要使用表格合并的地方使用
```html
<el-table
  :data="tableData"
  :span-method="(e) => objectSpanMethod(e,{
    data: tableData,
    rule: [{name: 'name', index: 1},{name: 'amount1', index: 2}],
  })"
>
    ...
</el-table>
<script>
const tableData = ref([
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom1',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
  {
    id: '12987126',
    name: 'To2',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
])
</script>
```