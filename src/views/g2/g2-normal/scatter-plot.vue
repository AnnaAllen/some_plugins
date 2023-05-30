<!-- 散点图 -->
<template>
  <div>
    <div id="c1"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
  data() {
    return {
      scatterPlotData: [
        { genre: 'Sports', sold: 275, other: 105 },
        { genre: 'Strategy', sold: 115, other: 10 },
        { genre: 'Sports', sold: 120, other: 20 },
        { genre: 'Strategy', sold: 350, other: 50 },
        { genre: 'Sports', sold: 150, other: 100 },
      ]

    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      // Step 1: 创建 Chart 对象
      const chart = new Chart({
        container: 'c1', // 指定图表容器 ID
        autoFit: true,
        width: 500, // 指定图表宽度
        height: 400, // 指定图表高度
      });

      // Step 2: 载入数据源
      chart.data(this.scatterPlotData);

      // Step 3: 创建图形语法，绘制柱状图
      // chart.interval().position('genre*sold');

      chart.scale({
        sold: { nice: true },
        other: { nice: true },
      });

      chart
      .point()
      .label('other', { // 标签的展示
        style: {
          fill: 'red',
        },
        layout: { // 标签碰撞检测
          type: 'overlap'
        }
      })
      .position('sold*other')
      .size(21) // 点的大小
      .color('genre')
      .shape('circle')
      .tooltip('genre*sold*other', (genre, sold, other) => {
        return {
          name: genre,
          value: sold + other
        };
      })
      .style({
        fillOpacity: 0.5
      });

      // Step 4: 渲染图表
      chart.render();
    }
  }
}
</script>

<style>

</style>