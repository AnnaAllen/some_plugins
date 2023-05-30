<template>
  <div>
    <div id="c1"></div>
  </div>
</template>

<script>
import { Chart, registerInteraction } from '@antv/g2';

export default {
  data() {
    return{
      data: [
        {
          action: '浏览网站',
          pv: 50000,
          percent: 100
        }, 
        {
          action: '放入购物车',
          pv: 35000,
          percent: 50
        }, 
        {
          action: '生成订单',
          pv: 25000,
          percent: 20

        }, 
        {
          action: '支付订单',
          pv: 15000,
          percent: 10
        }, 
        {
          action: '完成交易',
          pv: 8000,
          percent: 5
        }
      ],
    }
  },
  mounted() {
    this.initChart()
    // console.log(registerInteraction, 'registerInteraction------');
    /**
     * chart.removeInteraction(FUNNEL_LEGEND_FILTER)
     * funnel-afterrender
     * registerInteraction(FUNNEL_LEGEND_FILTER, {
        start: [interactionStart],
      });
     */
      
  },
  methods: {
    initChart() {
      // Step 1: 创建 Chart 对象
      const chart = new Chart({
        container: 'c1', // 指定图表容器 ID
        width: 600, // 指定图表宽度
        height: 300, // 指定图表高度
        forceFit: true, // 自动根据容器大小 resize 画布
        // padding: [20, 120, 95],
        // height: window.innerHeight,
      });

      // Step 2: 载入数据源
      chart.data(this.data, {
        percent: {
          nice: false
        }
      });

      // 是否打开坐标轴
      chart.axis(false);
      
      // 配置坐标系
      chart
        .coordinate({
          // type 坐标系类型
          type: 'rect',
          // type: 'polar',
          // cfg 用于极坐标，不知道咋用
          // cfg: {
          //   radius: 0.85,
          // },
          // actions 打横打竖
          // actions: [['transpose']],
        })
        .transpose() // 打横打竖
        .scale(1, -1); // 旋转角度

      // 数据处理
      this.data.forEach((obj) => {
        // 中间标签文本
        chart.guide()
          .text({
            top: true,
            position: {
              action: obj.action,
              percent: 'median'
            },
            // 显示的文本内容
            content: obj.percent + '%', 
            // 字体样式
            style: {
              fill: '#000',
              fontSize: '18',
              textAlign: 'center',
              shadowBlur: 2,
              shadowColor: 'rgba(1,1,1,1)'
            }
          });
      });

      // 绘制图表
      chart
        .interval()
        .adjust('symmetric')
        // [{ x: 'A', y: 10, color: 'red' }]
        // .position('action*percent')
        .position({
          fields: ['action', 'percent'],
          color: '#000'
        })
        // .shape('funnel')
        .color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'])
        .label(
          'action*pv',
          (action, pv) => {
            // console.log(action, pv, 'label------');
            return {
              content: `${action} ${pv}`,
            };
          },
          {
            offset: 35,
            labelLine: {
              style: {
                lineWidth: 1,
                stroke: 'rgba(0, 0, 0, 0.15)',
              },
            },
          }
        )
        .tooltip('action*pv*percent', (action, pv, percent) => {
          // console.log(action, pv, percent, 'tooltip----');
          return {
            name: action,
            percent: percent + '%',
            pv,
          };
        })
        .animate({ // 渲染图表时的加载动画
          appear: {
            animation: 'fade-in'
          },
          update: {
            annotation: 'fade-in'
          }
        });
        

      // 框选
      // chart.interact('brush', {
      //   type: 'X' | 'Y' | 'XY' | 'POLYGON', // 设置框选的类型，默认为 'XY'
        // draggable: boolean, // 框选框是否允许拖拽，默认为 false
        // inPlot: boolean, // 是否将框选范围限制在绘图区域内，默认为 true
        // style: object, // 设置选择框的绘图属性样式
        // filter: boolean, // 框选结束后是否对数据进行过滤，，默认为 false
        // xField: string, // 设置 X 值对应的字段名
        // yField: string, // 设置 Y 轴对应的字段名
        // onStart: function, // 交互触发的回调
        // onEnd: function, // 交互结束的回调
        // onBrushstart: function, // 框选开始时的钩子
        // onBrushmove: function, // 框选过程中的钩子
        // onBrushend: function, // 框选结束时的钩子
        // onDragstart: function, // 拖拽开始时的钩子
        // onDragmove: function, // 拖拽过程中的钩子
        // onDragend: function, // 拖拽结束时的钩子
      // });


      // 渲染图表
      chart.render();
    },
  }
}
</script>

<style>

</style>