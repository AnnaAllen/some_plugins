<template>
  <div id="container"></div>
</template>

<script>
import { Funnel } from '@antv/g2plot';
export default {
  data() {
    return {
      data: [
        { stage: '简历筛选', number: 253 },
        { stage: '初试人数', number: 151 },
        { stage: '复试人数', number: 113 },
        { stage: '录取人数', number: 87 },
        { stage: '入职人数', number: 59 },
      ]
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const funnelPlot = new Funnel('container', {
        data: this.data,
        xField: 'stage',
        yField: 'number',
        legend: false,
        // shape: 'pyramid', // 尖底
        shape: '', // 矩形
        // dynamicHeight: true, // 完美梯形
        label: {
          formatter: (datum) => {
            return `${(datum[Funnel.PERCENT_FIELD] * 100).toFixed(2)}%`;
          },
        },
        conversionTag: {
          formatter: (datum) => {
            return `${((datum[Funnel.CONVERSATION_FIELD][1] / datum[Funnel.CONVERSATION_FIELD][0]) * 100).toFixed(2)}%`;
          },
        },
        // 关闭 conversionTag 转化率 展示
        // conversionTag: false,
      });

      funnelPlot.render();
    }
  }
}
</script>

<style>

</style>