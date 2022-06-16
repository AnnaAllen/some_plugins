<template>
  <div>
    <!-- <p>ag-demo-基本</p>
    <ag-demo></ag-demo> -->
    <!-- <ag-grid-column></ag-grid-column> -->
    <!-- <test-right-click></test-right-click> -->
    <!-- <cell-render></cell-render> -->
    <normal-table></normal-table>
    <br>
    <change-table></change-table>
    <!-- <p>ag-demo-行列转换</p>
    <ag-grid-change></ag-grid-change> -->
  </div>
</template>

<script>
import agDemo from '../../components/ag-demo/index.vue'
import agGridColumn from '../../components/ag-demo/ag-grid-column.vue'
import testRightClick from '../../components/ag-demo/test-right-click.vue'
import cellRender from '../../components/ag-demo/cell-render.vue'
import agGridChange from '../../components/ag-demo-change/index.vue'
import normalTable from '../../components/ag-demo/normal.vue'
import changeTable from '../../components/ag-demo-change/change.vue'

export default {
  components: {
    agDemo,
    agGridColumn,
    testRightClick,
    cellRender,
    agGridChange,
    normalTable,
    changeTable
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>