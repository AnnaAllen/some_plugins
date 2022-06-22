<template>
  <div>
    <p>----test----</p>
    <div class="demo">
      <ag-grid-vue 
        v-if="rowData"
        style="height: 500px"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :suppressRowTransform="true"
        :context="context"
        :columnHoverHighlight= "columnHoverHighlight"
        :defaultColDef="defaultColDef"
        @grid-ready="onGridReady"
        >
      </ag-grid-vue>
      <!-- <button @click="getSelectedRows()">Get Selected Rows</button> -->
    </div>
  </div>
</template>

<script>
  import { AgGridVue } from "ag-grid-vue";
  import cellItem from './cell-item.vue'
  import columnHeader from './column-header.vue'
  import customHeaderComponent from './custom-header-component.vue'
  
  const rowSpanC1 = function (params) {
    if(params.data.showC1) {
      return params.data.showC1.length
    }
    return 1
  }

  const rowSpanC2 = function (params) {
    if(params.data.showC2) {
      return params.data.showC2.length
    }
    return 1
  }

  export default {
    name: "App",
    data() {
      return {
        columnDefs: [
          {
            headerName: '组1',
            groupId: 'first',
            styleStatus: 'normal', // 普通列组
            children: [
              { 
                field: 'area.value', 
                colId: 'area',
                headerName: '区域', 
                rowSpan: rowSpanC1, // 跨行
                colSpan: null, // 扩列
                styleStatus: 'normal',
                cellClassRules: {
                  'cell-span': "value !== undefined",
                },
                resizable: true,
                cellRenderer: "cellItem",
              },
              { 
                field: 'shop.value', 
                colId: 'shop',
                headerName: '商品',
                rowSpan: rowSpanC2,
                // 跨列
                colSpan: (params) => { 
                  if (params.data.shop.length) {
                    return params.data.shop.length
                  }
                  return 1
                },
                cellClassRules: {
                  'cell-span': "value !== undefined",
                },
                resizable: true,
              },
              { field: 'shopDate.value', colId: 'shopDate', headerName: '订单日期', resizable: true, rowDrag: true, columnGroupShow: 'open'},
              { field: 'shopPrice.value', colId: 'shopPrice', headerName: '订单金额', resizable: true}
            ]
          },
          // {
          //   headerName: '组2',
          //   groupId: 'second',
          //   children: [
          //     { 
          //       field: 'area.value', 
          //       colId: 'area2',
          //       headerName: '区域', 
          //       rowSpan: rowSpanC1,
          //       cellClassRules: {
          //         'cell-span': "value !== undefined",
          //       },
          //       resizable: true,
          //       cellRenderer: "cellItem",
          //     },
          //     { 
          //       field: 'shop.value', 
          //       colId: 'shop2',
          //       headerName: '商品',
          //       rowSpan: rowSpanC2,
          //       colSpan: (params) => {
          //         if (params.data.shop.length) {
          //           return params.data.shop.length
          //         }
          //         return 1
          //       },
          //       cellClassRules: {
          //         'cell-span': "value !== undefined",
          //       },
          //       resizable: true,
          //     },
          //     { field: 'shopDate.value', colId: 'shopDate2', headerName: '订单日期', resizable: true},
          //     { field: 'shopPrice.value', colId: 'shopPrice2', headerName: '订单金额', resizable: true}
          //   ]
          // },
          // {
          //   headerName: '组3',
          //   groupId: 'third',
          //   children: [
          //     { 
          //       field: 'area.value', 
          //       colId: 'area3',
          //       headerName: '区域', 
          //       rowSpan: rowSpanC1,
          //       cellClassRules: {
          //         'cell-span': "value !== undefined",
          //       },
          //       resizable: true,
          //       cellRenderer: "cellItem",
          //     },
          //     { 
          //       field: 'shop.value', 
          //       colId: 'shop3',
          //       headerName: '商品',
          //       rowSpan: rowSpanC2,
          //       colSpan: (params) => {
          //         if (params.data.shop.length) {
          //           return params.data.shop.length
          //         }
          //         return 1
          //       },
          //       cellClassRules: {
          //         'cell-span': "value !== undefined",
          //       },
          //       resizable: true,
          //     },
          //     { field: 'shopDate.value', colId: 'shopDate3', headerName: '订单日期', resizable: true},
          //     { field: 'shopPrice.value', colId: 'shopPrice3', headerName: '订单金额', resizable: true}
          //   ]
          // },
        ],
        rowDragManaged: true,
        rowData: null,
        gridApi: null,
        columnApi: null,
        columnHoverHighlight: true,
        context: null,
        defaultColDef: {
          width: 170,
          resizable: true,
        },
      };
    },
    components: {
      AgGridVue, cellItem,
      // agColumnHeader: columnHeader,
      agColumnGroupHeader: customHeaderComponent
    },
    mounted() {
      this.rowData = [
        {
          showC1: {length: 5}, // 跨5行
          showC2: {length: 2}, // 跨2行
          area: { label: '区域', value: '西北' },
          shop: { label: '商品', value: '信封' }, 
          shopDate: { label: '订单日期', value: '2022/5/31' }, 
          shopPrice: { label: '订单金额', value: '3' }
        },
        {
          showC1: null, // 不跨行
          showC2: null, // 不跨行
          area: { label: '区域', value: undefined },
          shop: { label: '商品', value: undefined }, 
          shopDate: { label: '订单日期', value: '2022/5/31' }, 
          shopPrice: { label: '订单金额', value: '3' }
        },
        {
          showC1: null,
          showC2: {length: 2},
          area: { label: '区域', value: undefined },
          shop: { label: '商品', value: '铅笔' }, 
          shopDate: { label: '订单日期', value: '2022/5/31' }, 
          shopPrice: { label: '订单金额', value: '3' }
        },
        {
          showC1: null,
          showC2: null,
          area: { label: '区域', value: undefined },
          shop: { label: '商品', value: undefined }, 
          shopDate: { label: '订单日期', value: '2022/5/31' }, 
          shopPrice: { label: '订单金额', value: '3' }
        },
        {
          showC1: null,
          showC2: null,
          area: { label: '区域', value: undefined },
          shop: { label: '商品', value: '商品-总计', length: 2 }, 
          shopDate: { label: '订单日期', value: undefined }, 
          shopPrice: { label: '订单金额', value: '12' }
        },
        {
          showC1: {length: 3},
          showC2: {length: 2},
          area: { label: '区域', value: '东北' },
          shop: { label: '商品', value: '东北大板' }, 
          shopDate: { label: '订单日期', value: '2022/5/31' }, 
          shopPrice: { label: '订单金额', value: '3' }
        },
        {
          showC1: null,
          showC2: null,
          area: { label: '区域', value: undefined },
          shop: { label: '商品', value:  undefined}, 
          shopDate: { label: '订单日期', value: '2022/5/31' }, 
          shopPrice: { label: '订单金额', value: '3' }
        },
        {
          showC1: null,
          showC2: null,
          area: { label: '区域', value: undefined },
          shop: { label: '商品', value: '商品-总计', length: 2 }, 
          shopDate: { label: '订单日期', value: '2022/5/31' }, 
          shopPrice: { label: '订单金额', value: '6' }
        },
      ]
      this.context = { componentParent: this };
    },
    methods: {
      onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.sizeToFit()
      },
      sizeToFit() {
        this.gridApi.sizeColumnsToFit();
      },
      autoSizeAll(skipHeader) {
        const allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach((column) => {
          allColumnIds.push(column.getId());
        });
        this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
      },
      // 仅保留
      retain({colId, groupId}) {
        if(colId) {
          const parentArr = this.columnDefs.filter(item => item.groupId == groupId)
          const hideChildrenArr = parentArr[0].children
            .filter(item => item.colId !== colId)
            .map(item => {
              return {...item, hide: true}
            })
          
          this.gridColumnApi.applyColumnState({
            state: hideChildrenArr,
          });
          return
        }
        let hideChildren = []
        this.columnDefs
          .filter(item => item.groupId != groupId)
          .forEach(item => {
            hideChildren.push(...item.children)
          })
        hideChildren = hideChildren.map(item => { 
          return {...item, hide: true}
        })

        this.gridColumnApi.applyColumnState({
          state: hideChildren,
        });
      },
    },
  }
  
</script>

<style lang="scss">
  @import "~ag-grid-community/dist/styles/ag-grid.css";
  @import "~ag-grid-community/dist/styles/ag-theme-alpine.css";
  .demo {
    .ag-theme-alpine .ag-header-cell, .ag-theme-alpine .ag-header-group-cell{
      // margin: auto;
      padding: 0 !important;
    }
    .ag-theme-alpine .ag-cell, .ag-theme-alpine .ag-full-width-row .ag-cell-wrapper.ag-row-group {
      padding: 0 !important;
    }
    .cell-span {
      background: white;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      border-left: 1px solid lightgrey !important;
      border-right: 1px solid lightgrey !important;
      border-bottom: 1px solid lightgrey !important;
    }
  }
</style>