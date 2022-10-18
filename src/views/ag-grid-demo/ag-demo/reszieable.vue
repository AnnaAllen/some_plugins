<template>
  <div>
    <ag-grid-vue
      v-show="aaa"
      style="height: 400px;"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef='defaultColDef'
      @grid-ready="onGridReady"
      @first-data-rendered="onFirstDataRendered"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import customHeaderComponent from './custom-header-component.vue'
import columnHeader from './column-header.vue'

export default {
  components: {
    AgGridVue,
    agColumnGroupHeader: customHeaderComponent,
    agColumnHeader: columnHeader,
  },
  data() {
    return {
      aaa: true,
      columnDefs: null,
      rowData: null,
      gridApi: null,
      columnApi: null,
      defaultColDef: {
        resizable: true,
        // lockPinned: true
      },
    }
  },
  beforeMount() {
    this.columnDefs = [
      {
        suppressMovable: true,
        headerName: '根节点',
        groupId: 'root',
        // 存储深度
        level: {
          level0: {label: 'root', value: '根节点'},
        },
        children: [
          {
            suppressMovable: false,
            field: "label",
            headerName: '标识列 - 一级',
            groupId: 'special',
            styleStatus: 'special',
            level: {
              level0: {label: '根节点', value: '根节点'},
              level1: {label: '标识列 - 一级', value: '标识列 - 一级'},
            },
            children: [
              {
                field: "label",
                headerName: '产品类型 - 二级',
                groupId: 'productType',
                styleStatus: 'normal', 
                level: {
                  level0: {label: '根节点', value: '根节点'},
                  level1: {label: '标识列 - 一级', value: '标识列 - 一级'},
                  level2: {label: '产品类型 - 二级', value: '产品类型 - 二级'}
                },
                children: [
                  { field: "label", 
                  headerName: '产品小类数据数据环境设计好久好久 - 三级', 
                  groupId: 'unitProduct', 
                  suppressMovable: true,
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
              // {
              //   headerName: '家具产品 - 二级',
              //   groupId: 'furniture',
              //   styleStatus: 'normal',
              //   level: {
              //     level0: {label: '根节点', value: '根节点'},
              //     level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
              //     level2: {label: '家具产品 - 二级', value: '家具产品 - 二级'}
              //   },
              //   children: [
              //     { field: "value.c4.value", headerName: '书架 - 三级',
              //       level: {
              //         level0: {label: '根节点', value: '根节点'},
              //         level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
              //         level2: {label: '家具产品 - 二级', value: '家具产品 - 二级'},
              //         level3: {label: '书架 - 三级', value: '书架 - 三级'}
              //       },
              //     },
              //     { field: "value.c5.value", headerName: '凳子 - 三级',
              //       level: {
              //         level0: {label: '根节点', value: '根节点'},
              //         level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
              //         level2: {label: '家具产品 - 二级', value: '家具产品 - 二级'},
              //         level3: {label: '凳子 - 三级', value: '凳子 - 三级'}
              //       },
              //     },
              //     { field: "value.c6.value", headerName: '产品小类-总计',
              //       level: {
              //         level0: {label: '根节点', value: '根节点'},
              //         level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
              //         level2: {label: '家具产品 - 二级', value: '家具产品 - 二级'},
              //         level3: {label: '产品小类-总计', value: '产品小类-总计'}
              //       },
              //     },
              //   ]
              // },
              // 测试表头列
              {
                headerName: 'test1 - 二级',
                groupId: 'furniture',
                styleStatus: 'normal',
                level: {
                  level0: {label: '根节点', value: '根节点'},
                  level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                  level2: {label: '家具产品 - 二级', value: '家具产品 - 二级'}
                },
                children: [{
                  field: "label", headerName: 'test - 三级', groupId: 'unitProduct',spanning: 3
                }]
              },
              {
                headerName: 'test2 - 二级',
                groupId: 'furniture',
                styleStatus: 'normal',
                level: {
                  level0: {label: '根节点', value: '根节点'},
                  level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                  level2: {label: '家具产品 - 二级', value: '家具产品 - 二级'}
                },
                children: [{}]
              },
              {
                headerName: 'test3 - 二级',
                groupId: 'furniture',
                styleStatus: 'normal',
                level: {
                  level0: {label: '根节点', value: '根节点'},
                  level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                  level2: {label: '家具产品 - 二级', value: '家具产品 - 二级'}
                },
                children: [{}]
              },
              // 产品总计
              {
                headerName: '产品类型-总计-二级',
                // field: "value.c7.value",
                groupId: 'type-sum',
                styleStatus: 'normal',
                level: {
                  level0: {label: '根节点', value: '根节点'},
                  level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                  level2: {label: '产品类型-总计-二级', value: '产品类型-总计-二级'}
                },
                children: [ 
                  {
                    headerName: '',
                    field: "value.c7.value",
                    groupId: 'type-sum-3',
                    level: {
                      level0: {label: '根节点', value: '根节点'},
                      level1: {label: '详情列 - 一级', value: '详情列 - 一级'},
                      level2: {label: '产品类型-总计-二级', value: '产品类型-总计-二级'},
                      level2: {label: '产品类型-总计-三级', value: '产品类型-总计-三级'}
                    },
                  } 
                ],
                rowSpan: 2
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
  methods: {
    // 自动将列扩到能看见表头全部字体
    // 网格在创建时并未附加到 DOM（因此api.sizeColumnsToFit()应该会失败）。网格在 100 毫秒后再次检查，并再次尝试调整大小。
    onFirstDataRendered(params) {
      this.aaa = false
      const allColumnIds = [];
      params.columnApi.columnModel.columnsForQuickFilter.forEach((column) => {
        allColumnIds.push(column.colId);
      });
      params.columnApi.autoSizeColumns(allColumnIds, false);
      this.aaa = true
      console.log(params.columnApi.columnModel.columnsForQuickFilter, 'columnsForQuickFilter------------');
      console.log(params, 'onFirstDataRendered---------');
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    },
  }
}
</script>

<style scoped lang="scss">

</style>