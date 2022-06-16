<template>
  <div>
    <p>转换前</p>
     <ag-grid-vue
      style="height: 200px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import cellItem from './cell-item.vue'
import columnHeader from './column-header.vue'
import customHeaderComponent from './custom-header-component.vue'

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
        headerName: '产品类型',
        groupId: 'productType',
        styleStatus: 'normal', 
        children: [
          { field: "label", headerName: '产品小类' },
        ]
      },
      {
        headerName: '办公用品',
        groupId: 'workGoods',
        styleStatus: 'normal',
        children: [
          { field: "value.xingfen", headerName: '信封', },
          { field: "value.zhiZhang", headerName: '纸张' },
        ]
      },
      {
        headerName: '家具产品',
        groupId: 'furniture',
        styleStatus: 'normal',
        children: [
          { field: "value.shuJia", headerName: '书架' },
          { field: "value.dengzi", headerName: '凳子' },
        ]
      },
    ];

    this.rowData = [
      { 
        label: '订单金额',
        value: {
          'xingfen': 500 ,
          'zhiZhang': 800, 
          'shuJia': 400,
          'dengzi': 400,
        },
      },
      {
        label: '单价',
        value: {
          'xingfen': 500 ,
          'zhiZhang': 800, 
          'shuJia': 400,
          'dengzi': 400,
        },
      },
    ];
  },
}
</script>

<style>

</style>