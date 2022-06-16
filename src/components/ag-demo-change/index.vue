<template>
  <div>
    <p>----test----</p>
    <div class="demo" @contextmenu="showMenu()">
      <ag-grid-vue 
        v-if="rowData"
        style="height: 300px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :suppressRowTransform="true"
        :context="context"
        :columnHoverHighlight= "columnHoverHighlight"
        :defaultColDef="defaultColDef"
        :rowHeight="rowHeight"
        :headerHeight="headerHeight"
        @grid-ready="onGridReady"
        >
      </ag-grid-vue>
      <!-- <button @click="getSelectedRows()">Get Selected Rows</button> -->
    </div>
  </div>
</template>

<script>
  import { AgGridVue } from "ag-grid-vue";
  import cellItem from '../ag-demo/cell-item.vue'
  import columnHeader from '../ag-demo/column-header.vue'
  import customHeaderComponent from '../ag-demo/custom-header-component.vue'
  
  export default {
    name: "App",
    data() {
      return {
        columnDefs: [
          // 特殊列组
          {
            headerName: '城市',
            groupId: 'special',
            styleStatus: 'special',
            children: [
              {
                field: 'special.label',
                colId: 'special-1',
                headerName: '商品',
                rowSpan: null,
                colSpan: null,
                styleStatus: 'special',
                cellClassRules: {},
                resizable: true,
                cellRenderer: "cellItem"
              }
            ]
          },
          // 普通列组
          {
            headerName: '吉林',
            groupId: 'first',
            styleStatus: 'normal',
            children: [
              { 
                field: 'jiLing-qianBi.value', 
                colId: 'first-area',
                headerName: '信封',
                rowSpan: null, 
                styleStatus: 'normal',
                resizable: true,
              },
              { 
                field: 'jiLing-qianBi.value', 
                colId: 'first-shop',
                headerName: '铅笔',
                rowSpan: null, 
                styleStatus: 'normal',
                resizable: true,
              },
            ]
          },
          {
            headerName: '辽宁',
            groupId: 'second',
            children: [
              { 
                field: 'liaoNing-xingFen.value', 
                colId: 'second-area',
                headerName: '信封', 
                resizable: true,
              },
              { 
                field: 'liaoNing-qianBi.value', 
                colId: 'second-shop',
                headerName: '铅笔',
                resizable: true,
              },
            ]
          },
          {
            headerName: '黑龙江',
            groupId: 'third',
            children: [
              { 
                field: 'heiLongJiang-qianBi.value', 
                colId: 'third-area',
                headerName: '信封', 
                resizable: true,
              },
              { 
                field: 'heiLongJiang-qianBi.value', 
                colId: 'third-shop',
                headerName: '铅笔',
                resizable: true,
              },
            ]
          },
          // {
          //   groupId: 'group-sum',
          //   children: [
          //     {
          //       colId: 'sum',
          //       headerName: '总计'
          //     }
          //   ]
          // }
        ],
        rowData: null,
        gridApi: null,
        columnApi: null,
        columnHoverHighlight: true,
        context: null,
        rowHeight: 40,
        headerHeight: 40,
        defaultColDef: {
          width: 170,
          resizable: true,
        },
        // 右击
        transferIndex: null, // Show the menu that was clicked
        contextMenuData: {
          menuName: "demo",
          axis: {
            x: null,
            y: null
          },
          menulists: [
            {
              btnName: "选项1",
              icoName: "fa fa-home fa-fw",
              children: [
                {
                  icoName: "fa fa-adn",
                  btnName: "选项1-1",
                  fnHandler: "Handler1"
                }
              ]
            },
            {
              btnName: "选项4",
              disabled: true
            }
          ]
        }
      };
    },
    components: {
      AgGridVue, cellItem,
      agColumnHeader: columnHeader,
      agColumnGroupHeader: customHeaderComponent
    },
    mounted() {
      this.rowData = [
        {
          special: { label: '订单日期', value: null}, // 特殊行
          'jiLing-xingFen': { label: '吉林-信封', value: '2022/5/31'},
          'jiLing-qianBi': { label: '吉林-铅笔', value: '2022/5/31'},
          'liaoNing-xingFen': { label: '辽宁-信封', value: '2022/5/31'},
          'liaoNing-qianBi': { label: '辽宁-信封', value: '2022/5/31'},
          'heiLongJiang-qianBi': { label: '黑龙江-信封', value: '2022/5/31'},
          'heiLongJiang-xingFen': { label: '黑龙江-信封', value: '2022/5/31'}
        },
        {
          special: { label: '订单金额', value: null}, // 特殊行
          'jiLing-xingFen': { label: '吉林-信封', value: '3'},
          'jiLing-qianBi': { label: '吉林-铅笔', value: '3'},
          'liaoNing-xingFen': { label: '辽宁-铅笔', value: '3'},
          'liaoNing-qianBi': { label: '辽宁-信封', value: '3'},
          'heiLongJiang-qianBi': { label: '黑龙江-信封', value: '3'},
          'heiLongJiang-xingFen': { label: '黑龙江-信封', value: '3'}

        },
        {
          special: { label: '订单-总计', value: null}, // 特殊行
          'jiLing-xingFen': { label: '吉林-信封', value: '3'},
          'jiLing-qianBi': { label: '吉林-铅笔', value: '3'},
          'liaoNing-xingFen': { label: '辽宁-铅笔', value: '3'},
          'liaoNing-qianBi': { label: '辽宁-信封', value: '3'},
          'heiLongJiang-qianBi': { label: '黑龙江-信封', value: '3'},
          'heiLongJiang-xingFen': { label: '黑龙江-信封', value: '3'}

        },
      ]
      this.context = { componentParent: this };
    },
    methods: {
      onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
      },
      showMenu(index) {
        this.transferIndex = index; // tranfer index to child component
        event.preventDefault();
        var x = event.clientX;
        var y = event.clientY;
        this.contextMenuData.axis = {
          x,
          y
        };
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
      Handler_A (event) {
        console.log(event);
      },
      mouseclick() {
        console.log(111);
      }
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
      border: 0px;
    }
    .ag-theme-alpine .ag-cell, .ag-theme-alpine .ag-full-width-row .ag-cell-wrapper.ag-row-group {
      padding: 0 !important;
      border: 0px;
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