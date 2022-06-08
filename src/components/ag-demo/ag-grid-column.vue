<template>
  <div>
    <p>test column</p>
    <ag-grid-vue
      style="height: 250px;"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      @grid-ready="onGridReady"
      :rowData="rowData">
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
export default {
  components: {
    AgGridVue,
  },
  data() {
    return {
      columnDefs: null,
      gridApi: null,
      columnApi: null,
      defaultColDef: {
        width: 100,
        editable: true,
      },
      rightAligned: {
        headerClass: 'table-header',
        cellClass: 'ag-right-aligned-cell'
      },
      rowData: null,
    }
  },
  created() {
    this.columnDefs = [
        { 
          headerName: 'Group A',
          type: 'rightAligned' ,
          headerValueGetter: (params) => {
            return '组1'
          },
          children: [
            { field: 'name' },
            { field: 'medals.gold' },
            { field: 'person.age' }
          ]
        },
        { 
          field: 'medals.gold',
          type: 'rightAligned' ,
          headerValueGetter: (params) => {
            return '组2'
          },
          children: [
            { field: 'athlete' },
            { field: 'sport' },
            { field: 'age' }
          ]
        },
        { 
          field: 'person.age' ,
          type: 'rightAligned' ,
          headerValueGetter: (params) => {
            return '组3'
          },
          children: [
            { field: 'athlete' },
            { field: 'sport' },
            { field: 'age' }
          ]
        },
      ]
    this.rowData = [
      {
        name: 'Michael Phelps',
        person: {
          age: 23,
          country: 'United States',
        },
        medals: {
          gold: 8,
          silver: 0,
          bronze: 0,
        },
      },
      {
        name: 'Michael Phelps',
        person: {
          age: 23,
          country: 'United States',
        },
        medals: {
          gold: 8,
          silver: 0,
          bronze: 0,
        },
      },
    ]
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    },
  },
}
</script>

<style lang="scss" >
  .table-header{
    background-color: pink !important;
  }
</style>