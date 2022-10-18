<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import { Graph } from '@antv/x6'

export default {
  data() {
    return {
      graph: null,
      cells: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 方法创建节点
    createdNode(graph) {
      const ellipse = graph.addNode({
        id: 'node2', // String，节点的唯一标识
        x: -100,      // Number，必选，节点位置的 x 值
        y: -50,      // Number，必选，节点位置的 y 值
        width: 80,   // Number，可选，节点大小的 width 值
        height: 40,  // Number，可选，节点大小的 height 值
        label: 'node2', // String，节点标签
        shape: 'ellipse', // 使用 ellipse 渲染
        ports: {
          groups: {
            group1: { 
              position: 'right', // 指定连接桩的位置， 默认为left
              label: {
                position: 'right',  // 标签位置
              },
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                },
              },
            },
          },
          // 数组的每一项表示一个链接桩
          items: [
            {
              id: 'port1-ellipse',
              group: 'group1', // 指定分组名称
              attrs: {
                text: {          // 标签选择器
                  text: 'port1-ellipse', // 标签文本
                },
              },
            },
          ],
        }
      })
      
      const circle = graph.addNode({
        id: 'node1',
        x: 60,
        y: 50,
        shape: 'circle',
        width: 100,
        height: 100,
        label: 'In Ports & Out Ports',
        ports: {
          groups: {
            group1: { 
              position: 'top',
              attrs: {
                circle: {
                  magnet: true,
                  stroke: '#31d0c6',
                  fill: '#fff',
                },
              },
            },
          },
          // 数组的每一项表示一个链接桩
          items: [
            {
              id: 'port1-circle',
              group: 'group1', // 指定分组名称
              attrs: {
                text: {          // 标签选择器
                  text: 'port1-circle', // 标签文本
                },
              },
            },
          ],
        }
      })
      return { ellipse, circle }
    },
    
    // 初始化
    init() {
      const graph = new Graph({
        selecting: true,
        multiple: true,
        multipleSelectionModifiers: 'ctrl',
        container: document.getElementById('container'),
        height: 600,
        background: {
          color: '#fffbe6', // 设置画布背景颜色
        },
        grid: {
          size: 10,      // 网格大小 10px
          visible: true, // 渲染网格背景
        },
      })
      // graph.fromJSON(data) 全局data
      graph.centerContent()
      const node = this.createdNode(graph)
      
      // 重置节点
      // function reset () {
      //   const nodes = graph.getNodes()
      //   const edges = graph.getEdges()

      //   nodes.forEach((node) => {
      //     node.attr('body/stroke', '#000')
      //   })

      //   edges.forEach((edge) => {
      //     edge.attr('line/stroke', 'black')
      //     edge.prop('labels/0', {
      //       attrs: {
      //         body: {
      //           stroke: 'black',
      //         },
      //       },
      //     })
      //   })
      // }

      // 点击节点
      // graph.on('node:click', ({ node }) => {this.clickNode(node, reset())})

      this.graph = graph
    },

    // 点击节点
    // clickNode(node, reset) {
    //   reset
    //   this.cells = []
    //   this.cells.push(node)
    //   node.attr('body/stroke', 'orange')
    //   console.log(node, 'node------');
    // },

  }
}
</script>

<style lang="scss" scoped>
.fun {
  display: inline-block;
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
  border: 1px solid orange;
}
#container {
  width: 100% !important;
  // border: 1px dashed orange;
}
</style>