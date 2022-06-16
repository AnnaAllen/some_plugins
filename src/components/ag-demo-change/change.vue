<template>
  <div>
    <p>转换后</p>
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
import normalVue from '../ag-demo/normal.vue';
// import cellItem from '../ag-demo/cell-item.vue'
// import columnHeader from '../ag-demo/column-header.vue'
// import customHeaderComponent from '../ag-demo/custom-header-component.vue'

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
        styleType: 'special', 
        children: [
          { field: "label", headerName: '产品小类' },
        ]
      },
      {
        headerName: '办公用品',
        groupId: 'workGoods',
        styleType: 'normal',
        children: [
          { field: "value.xingfen", headerName: '信封', value: 'xingfen'  },
          { field: "value.zhiZhang", headerName: '纸张', value: 'zhiZhang' },
        ]
      },
      {
        headerName: '家具产品',
        groupId: 'furniture',
        styleType: 'normal',
        children: [
          { field: "value.shuJia", headerName: '书架', value: 'shuJia' },
          { field: "value.dengzi", headerName: '凳子', value: 'dengzi' },
        ]
      },
    ];

    this.rowData = [
      { 
        label: '订单金额',
        tag: 'orderPrice', // 这条数据的标记
        value: {
          'xingfen': 500 ,
          'zhiZhang': 800, 
          'shuJia': 400,
          'dengzi': 400,
        },
      },
      {
        label: '单价',
        tag: 'unitPrice',
        value: {
          'xingfen': 500 ,
          'zhiZhang': 800, 
          'shuJia': 400,
          'dengzi': 400,
        },
      },
    ];
    this.geiRowData(this.columnDefs, this.rowData)
  },
  methods: {
    geiRowData(normalC, normalR) {
      console.log(normalC);
      // 拿到除 index === 0 以外的所有children
      const allChild = []
      const temp = normalC[0]
      let num = 0
      normalC.forEach((item,index) => {
        if(index === 0) return
        item.children.forEach((child,childIndex) => {
          child[`c0`] = null
          child[`c1`] = child.headerName
          normalR.forEach(normalRItem => {
            child[`${child.value}-${normalRItem.tag}`] = normalRItem.value[child.value]
            // console.log(normalRItem.value[child.value]);
            // console.log(child.value, '11111111111');
          })
          child['rowSpanningNum'] = null
          if(childIndex === 0) {
            child['rowSpanningNum'] = item.children.length
            child[`c0`] = item.headerName
          }
        })
        allChild.push(...item.children)
      })
      // 
      console.log(allChild);
    }
  }
}
</script>

<style>

</style>