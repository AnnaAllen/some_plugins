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
      bubblePatternData: [
        {
          "continent": "Americas",
          "Country": "Argentina",
          "LifeExpectancy": 75.32,
          "GDP": 12779.37964,
          "Population": 40301927
        },
        {
          "continent": "Americas",
          "Country": "Brazil",
          "LifeExpectancy": 72.39,
          "GDP": 9065.800825,
          "Population": 190010647
        },
        {
          "continent": "Americas",
          "Country": "Canada",
          "LifeExpectancy": 80.653,
          "GDP": 36319.23501,
          "Population": 33390141
        },
        {
          "continent": "Americas",
          "Country": "Chile",
          "LifeExpectancy": 78.553,
          "GDP": 13171.63885,
          "Population": 16284741
        },
        {
          "continent": "Americas",
          "Country": "Colombia",
          "LifeExpectancy": 72.889,
          "GDP": 7006.580419,
          "Population": 44227550
        },
      ],
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const colorMap = {
        Asia: '#1890FF',
        Americas: '#2FC25B',
        Europe: '#FACC14',
        Oceania: '#223273',
      };
      // Step 1: 创建 Chart 对象
      const chart = new Chart({
        container: 'c1', // 指定图表容器 ID
        // autoFit: true,
        width: 500, // 指定图表宽度
        height: 400, // 指定图表高度
      });

      // Step 2: 载入数据源
      chart.data(this.bubblePatternData);

      // 为各个字段设置别名
      chart.scale({
        LifeExpectancy: {
          alias: '人均寿命（年）',
          nice: true,
        },
        Population: {
          type: 'pow',
          alias: '人口总数',
          nice: true,
        },
        GDP: {
          alias: '人均国内生产总值($)',
          nice: true,
        },
        Country: {
          alias: '国家/地区',
          nice: true,
        }
      });

      chart.point().position('GDP*LifeExpectancy')
        .size('Population', [4, 65])
        .shape('circle')
        .color('continent', val => {
          return colorMap[val];
        })
        .style('continent', (val) => {
        return {
          lineWidth: 1,
          strokeOpacity: 1,
          fillOpacity: 0.3,
          opacity: 0.65,
          stroke: colorMap[val],
        };
      });
      chart.render();
    }
  }
}
</script>

<style>

</style>