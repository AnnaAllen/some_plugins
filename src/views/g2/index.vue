<template>
  <div>
    <div id="c1"></div>
    <el-button @click="clickFun">打印</el-button>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'c1',
  width: 600,
  height: 300
});

export default {
  data() {
    return{}
  },
  methods: {
    clickFun() {
      // console.log(G2);
    }
  }
}
</script>

<style>

</style>