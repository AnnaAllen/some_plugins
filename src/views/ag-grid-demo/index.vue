<template>
  <div>
    <p>ag-demo-基本</p>
    <!-- <ag-demo></ag-demo> -->
    <!-- <ag-grid-column></ag-grid-column> -->
    <!-- <test-right-click></test-right-click> -->
    <!-- <cell-render></cell-render> -->
    <!-- <normal-table></normal-table> -->
    <!-- <group></group> -->
    <reszieable></reszieable>
    <br>
    <!-- <change-table></change-table> -->
    <!-- <p>ag-demo-行列转换</p>
    <ag-grid-change></ag-grid-change> -->
    <!-- <test-quick-bi-data></test-quick-bi-data> -->
  </div>
</template>

<script>
import agDemo from './ag-demo/index.vue'

import agGridColumn from './ag-demo/ag-grid-column.vue'
import testRightClick from './ag-demo/test-right-click.vue'
import cellRender from './ag-demo/cell-render.vue'
import agGridChange from './ag-demo-change/index.vue'
import normalTable from './ag-demo/normal.vue'
// 分组
import group from './ag-demo/group.vue'
// 列大小
import reszieable from './ag-demo/reszieable.vue'

export default {
  components: {
    agDemo,
    agGridColumn,
    testRightClick,
    cellRender,
    agGridChange,
    normalTable,
    group,
    reszieable
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>