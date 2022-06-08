<template>
  <div>
    <p>ag-demo</p>
    <ag-demo></ag-demo>
    <!-- <ag-grid-column></ag-grid-column> -->
    <!-- <test-right-click></test-right-click> -->
    <!-- <cell-render></cell-render> -->
  </div>
</template>

<script>
import agDemo from '../../components/ag-demo/index.vue'
import agGridColumn from '../../components/ag-demo/ag-grid-column.vue'
import testRightClick from '../../components/ag-demo/test-right-click.vue'
import cellRender from '../../components/ag-demo/cell-render.vue'

export default {
  components: {
    agDemo,
    agGridColumn,
    testRightClick,
    cellRender
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>