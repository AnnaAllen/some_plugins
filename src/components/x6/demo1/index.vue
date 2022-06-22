<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import { Graph, Shape } from '@antv/x6'
// 节点和边的数据
const data = {
  // 节点
  nodes: [
    {
      id: 'node1', // String，可选，节点的唯一标识
      x: 40,       // Number，必选，节点位置的 x 值
      y: 40,       // Number，必选，节点位置的 y 值
      width: 80,   // Number，可选，节点大小的 width 值
      height: 40,  // Number，可选，节点大小的 height 值
      label: 'hello', // String，节点标签
      shape: 'rect', // 使用 rect 渲染
      attrs: {  // 定制节点样式
        body: {
          stroke: '#000',
          strokeDasharray: '10,2',
        },
        label: {
          text: 'Hello',
          fill: '#333',
          fontSize: 13,
        }
      }
    },
    {
      id: 'node2', // String，节点的唯一标识
      x: 160,      // Number，必选，节点位置的 x 值
      y: 180,      // Number，必选，节点位置的 y 值
      width: 80,   // Number，可选，节点大小的 width 值
      height: 40,  // Number，可选，节点大小的 height 值
      label: 'world', // String，节点标签
      shape: 'ellipse', // 使用 ellipse 渲染
    },
  ],
  // 边
  edges: [
    {
      source: 'node1',
      target: 'node2',
      // 边样式
      attrs: {
        line: {
          stroke: 'orange',
        },
      },
    },
  ],
};

export default {
  data() {
    return {

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 节点嵌套
    nodeNest(graph) {
      const child = graph.addNode({
        x: 120,
        y: -200,
        width: 120,
        height: 60,
        zIndex: 10,
        label: 'Child\n(embedded)',
        attrs: {
          body: {
            fill: 'green',
          },
          label: {
            fill: '#fff',
          },
        },
      })

      const parent = graph.addNode({
        x: 80,
        y: -240,
        width: 320,
        height: 240,
        zIndex: 1,
        label: 'Parent\n(try to move me)',
      })

      parent.addChild(child)
    },
    // 方法创建节点
    createdNode(graph) {
      const rect = graph.addNode({
        id: 'node3',
        shape: 'rect', // 指定使用何种图形，默认值为 'rect'
        x: -250,
        y: -200,
        width: 80,
        height: 40,
        attrs: {
          body: {
            fill: 'skyblue',
          },
          label: {
            text: 'node3',
            fill: 'white',
          },
        },
      })
      const ellipse = graph.addNode({
        id: 'node2', // String，节点的唯一标识
        x: -100,      // Number，必选，节点位置的 x 值
        y: -50,      // Number，必选，节点位置的 y 值
        width: 80,   // Number，可选，节点大小的 width 值
        height: 40,  // Number，可选，节点大小的 height 值
        label: 'node2', // String，节点标签
        shape: 'ellipse', // 使用 ellipse 渲染
      })
      return {rect,ellipse}
    },
    // 方法创建边
    createdge(graph, {rect,ellipse}) {
      const edge  = graph.addEdge({
        shape: 'edge', // 指定使用何种图形，默认值为 'edge'
        source: rect,
        target: ellipse,
      })
    },
    // 初始化
    init() {
      const graph = new Graph({
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
      this.createdge(graph, node)
      this.nodeNest(graph)
    }
  }
}
</script>

<style lang="scss" scoped>
#container {
  // border: 1px solid skyblue;
}
</style>