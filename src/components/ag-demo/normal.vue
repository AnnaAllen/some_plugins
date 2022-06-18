<template>
  <div>
    <p>转换后</p>
     <ag-grid-vue
      style="height: 400px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
// import cellItem from './cell-item.vue'
// import columnHeader from './column-header.vue'
// import customHeaderComponent from './custom-header-component.vue'

export default {
  data() {
    return {
      columnDefs: null,
      rowData: null,
    }
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: '根节点',
        groupId: 'root',
        // 存储深度
        level: {
          level0: {label: 'root', value: '根节点'},
        },
        children: [
          {
            headerName: '标识列 - 一级',
            groupId: 'special',
            styleStatus: 'special',
            level: {
              level0: {label: '根节点', value: '根节点'},
              level1: {label: '标识列 - 一级', value: '标识列 - 一级'},
            },
            children: [
              {
                headerName: '产品类型 - 二级',
                groupId: 'productType',
                styleStatus: 'normal', 
                level: {
                  level0: {label: '根节点', value: '根节点'},
                  level1: {label: '标识列 - 一级', value: '标识列 - 一级'},
                  level2: {label: '产品类型 - 二级', value: '产品类型 - 二级'}
                },
                children: [
                  { field: "label", headerName: '产品小类 - 三级', groupId: 'unitProduct', 
                    level: {
                      level0: {label: '根节点', value: '根节点'},
                      level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                      level2: {label: '办公用品 - 二级', value: '办公用品 - 二级'},
                      level3: {label: '产品小类 - 三级', value: '产品小类 - 三级'}
                    }, 
                  },
                ]
              },
    
            ]
          },
          {
            headerName: '详情列 - 一级',
            groupId: '1-level',
            styleStatus: '1-level',
            level: {
              level0: {label: '根节点', value: '根节点'},
              level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
            },
            children: [
              // 产品类型节点
              {
                headerName: '办公用品 - 二级',
                groupId: 'workGoods',
                styleStatus: 'normal',
                level: {
                  level0: {label: '根节点', value: '根节点'},
                  level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                  level2: {label: '办公用品 - 二级', value: '办公用品 - 二级'}
                },
                children: [
                  { field: "value.c1.value", headerName: '信封 - 三级',
                    level: {
                      level0: {label: '根节点', value: '根节点'},
                      level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                      level2: {label: '办公用品 - 二级', value: '办公用品 - 二级'},
                      level3: {label: '信封 - 三级', value: '信封 - 三级'}
                    },  
                  },
                  { field: "value.c2.value", headerName: '纸张 - 三级', 
                    level: {
                      level0: {label: '根节点', value: '根节点'},
                      level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                      level2: {label: '办公用品 - 二级', value: '办公用品 - 二级'},
                      level3: {label: '纸张 - 三级', value: '纸张 - 三级'}
                    }, 
                  },
                  { field: "value.c3.value", headerName: '产品小类-总计' ,
                    level: {
                      level0: {label: '根节点', value: '根节点'},
                      level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                      level2: {label: '办公用品 - 二级', value: '办公用品 - 二级'},
                      level3: {label: '产品小类-总计', value: '产品小类-总计'}
                    }, 
                  },
                ]
              },
              {
                headerName: '家具产品 - 二级',
                groupId: 'furniture',
                styleStatus: 'normal',
                level: {
                  level0: {label: '根节点', value: '根节点'},
                  level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                  level2: {label: '家具产品 - 二级', value: '家具产品 - 二级'}
                },
                children: [
                  { field: "value.c4.value", headerName: '书架 - 三级',
                    level: {
                      level0: {label: '根节点', value: '根节点'},
                      level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                      level2: {label: '家具产品 - 二级', value: '家具产品 - 二级'},
                      level3: {label: '书架 - 三级', value: '书架 - 三级'}
                    },
                  },
                  { field: "value.c5.value", headerName: '凳子 - 三级',
                    level: {
                      level0: {label: '根节点', value: '根节点'},
                      level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                      level2: {label: '家具产品 - 二级', value: '家具产品 - 二级'},
                      level3: {label: '凳子 - 三级', value: '凳子 - 三级'}
                    },
                  },
                  { field: "value.c6.value", headerName: '产品小类-总计',
                    level: {
                      level0: {label: '根节点', value: '根节点'},
                      level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                      level2: {label: '家具产品 - 二级', value: '家具产品 - 二级'},
                      level3: {label: '产品小类-总计', value: '产品小类-总计'}
                    },
                  },
                ]
              },
              // 产品总计
              {
                headerName: '产品类型-总计-二级',
                groupId: 'type-sum',
                styleStatus: 'normal',
                level: {
                  level0: {label: '根节点', value: '根节点'},
                  level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                  level2: {label: '产品类型-总计-二级', value: '产品类型-总计-二级'}
                },
                children: [ 
                  {
                    headerName: undefined,
                    field: "value.c7.value",
                    groupId: 'type-sum-3',
                    level: {
                      level0: {label: '根节点', value: '根节点'},
                      level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                      level2: {label: '产品类型-总计-二级', value: '产品类型-总计-二级'},
                      level2: {label: '产品类型-总计-三级', value: '产品类型-总计-三级'}
                    },
                  } 
                ]
              },
            ]
          }
        ]
      },
    ];

    this.rowData = [
      { 
        label: '订单金额',
        value: {
          c1: { label: '信封', value: 500, level:3, type: 'value'},
          c2: { label: '纸张', value: 800, level:3, type: 'value'},
          c3: { label: '产品小类-总计', value: 1300, level:3, type: 'sum'},
          c4: { label: '书籍', value: 400, level:3, type: 'value'},
          c5: { label: '凳子', value: 400, level:3, type: 'value'},
          c6: { label: '产品小类-总计', value: 800, level:3, type: 'sum'},
          c7: { label: '产品类型 - 总计', value: 2100, level: 2, type: 'sum'}
        },
      },
      {
        label: '单价',
        value: {
          c1: { label: '信封', value: 500, level:3, type: 'value'},
          c2: { label: '纸张', value: 800, level:3, type: 'value'},
          c3: { label: '产品小类-总计', value: 1300, level:3, type: 'sum'},
          c4: { label: '书籍', value: 400, level:3, type: 'value'},
          c5: { label: '凳子', value: 400, level:3, type: 'value'},
          c6: { label: '产品小类-总计', value: 800, level:3, type: 'sum'},
          c7: { label: '产品类型 - 总计', value: 2100, level: 2, type: 'sum'}
        },
      },
    ];
  },
  mounted() {
    this.getChangeRow()
  },
  methods: {
    // 行列装换后使用装换前的 columnDefs 来构造转换后的 rowData
    getChangeRow() {
      // 拿到详情节点和标识列
      let detailColumn = this.columnDefs[0].children[0].children.length > this.columnDefs[0].children[1].children.length ? this.columnDefs[0].children[0].children : this.columnDefs[0].children[1]
      let tagColumn = this.columnDefs[0].children[0].children.length < this.columnDefs[0].children[1].children.length ? this.columnDefs[0].children[0].children : this.columnDefs[0].children[1].children
      // console.log('详情列：', detailColumn);
      // console.log('标识列', tagColumn);
      let level = 0
      let arr = []
      let newColumn = this.recursion(this.columnDefs, arr, level)
      console.log('新表头', newColumn);
    },
    // 递归遍历，查找不到children时停止,得到新表头
    recursion(tagColumn,arr,level) {
      // console.log('标识列', tagColumn);
      if(tagColumn[0].children) {
        let obj = {
          level: level,
          headerName: tagColumn[0].headerName,
          groupId: tagColumn[0].groupId
        }
        arr.push(obj)
        level++
        this.recursion(tagColumn[0].children,arr,level)
        // console.log(arr);
      } else {
        let obj = {
          level: level,
          headerName: tagColumn[0].headerName,
          groupId: tagColumn[0].groupId
        }
        arr.push(obj)
      }
      
      return arr
    },
    newRowData() {
      let row = [
        {'level-0': null, 'level-1': null, 'level-2': '办公产品-二级', 'level-3': '信封-三级'},
        {'level-0': null, 'level-1': null, 'level-2': '办公产品-二级', 'level-3': '纸张-三级'},
        {'level-0': null, 'level-1': null, 'level-2': '办公产品-总计', 'level-3': null},
        {'level-0': null, 'level-1': null, 'level-2': '家具产品-二级', 'level-3': '书架-三级'},
        {'level-0': null, 'level-1': null, 'level-2': '家具产品-二级', 'level-3': '凳子-三级'},
        {'level-0': null, 'level-1': null, 'level-2': '家具产品-总计', 'level-3': null},
      ]
    }
  }
}
</script>

<style>

</style>