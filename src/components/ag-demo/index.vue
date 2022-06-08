<template>
  <div>
    <p>----test----</p>
    <div class="demo" @contextmenu="showMenu()">
      <ag-grid-vue style="height: 500px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :suppressRowTransform="true"
        :defaultColDef="defaultColDef"
        getContextMeunItems={this.getContextMenuItem}
        @grid-ready="onGridReady"
        >
      </ag-grid-vue>
      <!-- <button @click="getSelectedRows()">Get Selected Rows</button> -->
    </div>
  </div>
</template>

<script>
  import { AgGridVue } from "ag-grid-vue";
  
  export default {
    name: "App",
    data() {
      return {
        columnDefs: [
          {
            headerName: '组1',
            children: [
              { 
                field: 'area.value', 
                headerName: '区域', 
                rowSpan: function (params) {
                  if(params.data.showC1) {
                    return params.data.showC1.length
                  }
                  return 1
                },
                cellClassRules: {
                  'cell-span': "value !== undefined",
                },
                resizable: true
              },
              { 
                field: 'shop.value', 
                headerName: '商品',
                rowSpan: function (params) {
                  if(params.data.showC2) {
                    return params.data.showC2.length
                  }
                  return 1
                },
                colSpan: (params) => {
                  if (params.data.shop.length) {
                    return params.data.shop.length
                  }
                  return 1
                },
                cellClassRules: {
                  'cell-span': "value !== undefined",
                },
                resizable: true
              },
              { field: 'shopDate.value', headerName: '订单日期', resizable: true},
              { field: 'shopPrice.value', headerName: '订单金额', resizable: true}
            ]
          },
          {
            headerName: '组2',
            children: [
              { 
                field: 'area.value', 
                headerName: '区域', 
                rowSpan: function (params) {
                  if(params.data.showC1) {
                    return params.data.showC1.length
                  }
                  return 1
                },
                cellClassRules: {
                  'cell-span': "value !== undefined",
                },
                resizable: true
              },
              { 
                field: 'shop.value', 
                headerName: '商品',
                rowSpan: function (params) {
                  if(params.data.showC2) {
                    return params.data.showC2.length
                  }
                  return 1
                },
                colSpan: (params) => {
                  if (params.data.shop.length) {
                    return params.data.shop.length
                  }
                  return 1
                },
                cellClassRules: {
                  'cell-span': "value !== undefined",
                },
                resizable: true
              },
              { field: 'shopDate.value', headerName: '订单日期', resizable: true},
              { field: 'shopPrice.value', headerName: '订单金额', resizable: true}
            ]
          },
          
        ],
        rowData: null,
        gridApi: null,
        columnApi: null,
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
      AgGridVue,
    },
    mounted() {
      this.rowData = [
        {
          showC1: {length: 5},
          showC2: {length: 2},
          area: { label: '区域', value: '西北' },
          shop: { label: '商品', value: '信封' }, 
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

    },
    methods: {
      onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
      },
      getSelectedRows() {
        const selectedNodes = this.gridApi.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data );
        const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ');
        alert(`Selected nodes: ${selectedDataStringPresentation}`);
      },
      getContextMenuItem() {
        console.log();
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
    .ag-theme-alpine{
      // margin: auto;
    }
    .cell-span {
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid lightgrey !important;
      border-right: 1px solid lightgrey !important;
      border-bottom: 1px solid lightgrey !important;
    }
  }
</style>