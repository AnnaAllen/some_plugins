<template>
  <div id="g2plot-sp-funnel"></div>
</template>

<script>
import { Column, G2, addWaterWave } from '@antv/g2plot';
export default {
  data() {
    return {
      X_FIELD: 'stage',
      Y_FIELD: 'count',
      CONVERSTION_RATE: 'conversion-rate',
      data: [
        { stage: '简历投递数', count: 556834 },
        { stage: '简历评估通过数', count: 500000 },
        { stage: '终面通过数', count: 400000 },
        // { stage: '入职', count: 11400 },
        { stage: 'offer 数', count: 320000 },
        { stage: '入职数', count: 114000 },
      ]
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    /*
     * parsePath, function, 用于格式化传入数据为数组
     */
    initChart() {
      const _this = this
      // 自定义 Shape
      G2.registerShape('interval', 'link-funnel', {
        draw(shapeInfo, container) {
          const attrs = _this.getFillAttrs(shapeInfo)

          const { points, nextPoints } = shapeInfo;
          let rectPath = _this.getRectPath(points)
          rectPath = this.parsePath(rectPath)

          const group = container.addGroup();

          // 灰色背景
          group.addShape('path', {
            capture: false,
            attrs: {
              ...attrs,
              fill: '#000',
              fillOpacity: 0.1,
              // lineWidth: 1, // 条形图的边框线
              // * path必填，否则底层报错
              path: this.parsePath([
                  ['M', points[0].x, 0],
                  ['L', points[0].x, 1],
                  ['L', points[2].x, 1],
                  ['L', points[2].x, 0],
                ])
            },
          });

          const boxPath = this.parsePath([
              ['M', points[0].x, 0],
              ['L', points[0].x, 1],
              ['L', points[2].x, 1],
              ['L', points[2].x, 0],
              ['L', points[0].x, 0],
            ]);

          // 存在下一节点, 添加连接带
          if (nextPoints) {
            const linkPath = this.parsePath([
              ['M', points[2].x, points[2].y],
              ['L', points[3].x, points[3].y],
              ['L', nextPoints[0].x, nextPoints[0].y],
              ['L', nextPoints[1].x, nextPoints[1].y],
            ]);
            group.addShape('path', {
              capture: false,
              attrs: {
                ...attrs,
                // 设置透明度
                // fill: '#000',
                fillOpacity: 0.25,
                path: linkPath,
              },
            });
            const rate = shapeInfo.data[_this.CONVERSTION_RATE];
            const point = this.parsePoint({
                x: points[3].x + (nextPoints[0].x - points[3].x) / 2,
                y: (nextPoints[1].y - nextPoints[0].y) / 2,
              });
            group.addShape('text', {
              attrs: {
                ...point,
                text: `${(rate * 100).toFixed(0)}%`,
                // 字体颜色
                fill: '#666',
                textAlign: 'center',
              },
            });
          }

          /** 水波 ---- */
          const centerX = (rectPath[0][1] + rectPath[2][1]) / 2;
          const centerY = (boxPath[0][2] + boxPath[1][2]) / 2;
          const height = boxPath[0][2] - boxPath[1][2];
          const r = 1 - (rectPath[0][2] - rectPath[1][2]) / height;
          // 1. 绘制一个波
          const waves = group.addGroup({
            name: 'waves',
          });

          // console.log(centerX, centerY, height, r, waves);
          // console.log(height, 'height------');
          // console.log(r, 'r-------');
          // console.log(boxPath, 'boxPath------');
          // console.log(rectPath, 'rectPath------');

          const waveLength = 3;
          // 3. 波对应的 clip 裁剪形状
          const clipPath = waves.setClip({
            type: 'path',
            attrs: {
              path: boxPath,
            },
          });

          // 4. 绘制波形
          addWaterWave(
            centerX,
            centerY,
            r,
            2,
            { fill: attrs.fill, opacity: 0.8 },
            waves,
            clipPath,
            height,
            waveLength,
          );

          return group;
        },
      })

      const columnPlot = new Column('g2plot-sp-funnel', {
        data: _this.transformData(_this.data),
        xField: _this.X_FIELD,
        yField: _this.Y_FIELD,
        seriesField: _this.X_FIELD,
        columnBackground: {},
        // isTransposed: true,
        xAxis: false,
        // xAxis: {
        //   label: {
        //     autoHide: true,
        //     autoRotate: false,
        //   },
        // },
        yAxis: false,
        // coordinate: 'transpose', reflectX
        // coordinate: [{ type: 'transpose' }],
        meta: {
          type: {
            alias: '类别',
            range: [0.07, 0.93],
          },
          sales: {
            alias: '销售额',
          },
        },
        label: false,
        legend: false,
        tooltip: {
          showTitle: false,
        },
        shape: 'link-funnel',
        appendPadding: [28, 0, 0, 0],
        annotations: _this.data.map((d) => {
          return {
            type: 'text',
            position: [d[_this.X_FIELD], 'max'],
            content: d[_this.Y_FIELD],
            offsetY: -5,
            style: {
              textAlign: 'center',
              textBaseline: 'bottom',
              fontSize: 18,
            },
          };
        }),
        interactions: [
          {
            type: 'tooltip',
            cfg: {
              // 重新定义 tooltip 的触发时机，只有hover到 name='column'(实际柱子)的时候，才展示 tooltip
              start: [
                {
                  trigger: 'column:mousemove',
                  action: 'tooltip:show',
                  throttle: { wait: 50, leading: true, trailing: false },
                },
                {
                  trigger: 'column:touchmove',
                  action: 'tooltip:show',
                  throttle: { wait: 50, leading: true, trailing: false },
                },
              ],
              end: [
                { trigger: 'column:mouseleave', action: 'tooltip:hide' },
                { trigger: 'column:touchend', action: 'tooltip:hide' },
                { trigger: 'plot:leave', action: 'tooltip:hide' },
              ],
            },
          },
        ],
      })
      columnPlot.render();
    },

    // 添加转化率
    transformData(datas) {
      return datas.reduce((result, d, idx) => {
        if (idx > 0) {
          result[idx - 1][this.CONVERSTION_RATE] = result[idx - 1][this.Y_FIELD] !== 0 ? d[this.Y_FIELD] / result[idx - 1][this.Y_FIELD] : '∞';
        }
        result.push(d);
        return result;
      }, []);
    },

    getRectPath(points) {
      const path = [];
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        if (point) {
          const action = i === 0 ? 'M' : 'L';
          path.push([action, point.x, point.y]);
        }
      }

      const first = points[0];
      path.push(['L', first.x, first.y]);
      path.push(['z']);
      return path;
    },

    getFillAttrs(cfg) {
      const defaultAttrs = {
        lineWidth: 0,
        fill: '#1890FF',
        fillOpacity: 0.85,
      };

      return {
        ...defaultAttrs,
        ...cfg.style,
        fill: cfg.color,
        stroke: cfg.color,
        fillOpacity: cfg.opacity,
      }
    }
  }
}
</script>

<style>

</style>