<template>
  <div>
    <!-- <g2p></g2p> -->
    <br>
    <!-- --------------------------------------- -->
    <br>
    <!-- <g2p-funnel></g2p-funnel> -->
    <br>
    <!-- --------------------------------------- -->
    <br>
    <!-- <g2-normal></g2-normal> -->
    <br>
    <!-- <scatter-plot></scatter-plot> -->
    <bubble-pattern></bubble-pattern>
  </div>
</template>

<script>
import scatterPlot from './g2-normal/scatter-plot.vue'
import bubblePattern from './g2-normal/bubble-pattern.vue'
import g2Normal from './g2-normal'
import g2p from './g2p'
import g2pFunnel from './g2p/funnel.vue'
export default {
  components: {
    g2Normal,
    g2p,
    g2pFunnel,
    scatterPlot, // 散点图
    bubblePattern // 气泡图
  }
}
</script>

<style>

</style>