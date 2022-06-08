<template>
  <div>
    <p>cell-render</p>
    <ag-grid-vue
      style="width: 600px; height: 500px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :context="context"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import cellItem from './cell-item.vue'
import columnHeader from './column-header.vue'
export default {
  data() {
    return {
      columnDefs: null,
      rowData: null,
      context: null,
      gridApi: null,
      columnApi: null,
    };
  },
  components: {
    AgGridVue, cellItem,
    agColumnHeader: columnHeader
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: '组1',
        groupId: 'first',
        children: [
          { field: "make", cellRenderer: "cellItem", hide: false, colId: 'make'},
          { field: "model", hide: false, colId: 'model' },
          { field: "price", hide: false, colId: 'price' },
        ]
      }
    ];
    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxster", price: 72000 },
      { make: "Porsche", model: "Boxster", price: 72000 },
      { make: "Porsche", model: "Boxster", price: 72000 },
      { make: "Porsche", model: "Boxster", price: 72000 },
      { make: "Porsche", model: "Boxster", price: 72000 },
    ];
    this.context = { componentParent: this };
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    },
    // 隐藏
    hideColumn({colId}) {
      const index = this.columnDefs.findIndex(item => item.colId = colId)
      this.columnDefs[index].hide =  true
      this.gridColumnApi.applyColumnState({
        state: [this.columnDefs[index]],
      });
      console.log(this.columnDefs);
    },
    // 仅保留
    retain({colId, groupId}) {
      const hideArr = this.columnDefs
        .filter(item => item.colId !== colId)
        .map(item => {
          return {...item, hide: true}
        })
      const parentArr = this.columnDefs.filter(item => item.groupId == groupId)
      const hideChildrenArr = parentArr[0].children
        .filter(item => item.colId !== colId)
        .map(item => {
          return {...item, hide: true}
        })
      this.gridColumnApi.applyColumnState({
        state: hideChildrenArr,
      });
    },
    methodFromParent(cell) {
      alert("单元格"+ cell );
    },
  }
}
</script>

<style>

</style>