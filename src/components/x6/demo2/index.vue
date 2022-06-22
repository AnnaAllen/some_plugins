<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import { Graph, Shape } from '@antv/x6'

export default {
  data() {
    return {

    }
  },
  mounted() {
    this.init()
  },
  methods: {
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
        ports: [
          {
            id: 'port1',
            attrs: {
              circle: {
                r: 6,
                magnet: true, // 连接桩在交互时可以连接上
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff',
              },
            },
          },
          {
            id: 'port2',
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
        ],
      })
      const ellipse = graph.addNode({
        id: 'node2', // String，节点的唯一标识
        x: -100,      // Number，必选，节点位置的 x 值
        y: -50,      // Number，必选，节点位置的 y 值
        width: 80,   // Number，可选，节点大小的 width 值
        height: 40,  // Number，可选，节点大小的 height 值
        label: 'node2', // String，节点标签
        shape: 'ellipse', // 使用 ellipse 渲染
        ports: {
          /*
            当连接桩的内容相同时，可以给连接桩设置分组，在分组中指定样式和数量，避免冗余
           */
          groups: {
            group1: { 
              position: 'top', // 指定连接桩的位置， 默认为left
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
            {
              id: 'port2-ellipse',
              group: 'group1', // 指定分组名称
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
      return {rect, ellipse, circle}
    },
    // 方法创建边
    createdge(graph, { rect, ellipse, circle }) {
      const edge  = graph.addEdge(
        {
          shape: 'edge', // 指定使用何种图形，默认值为 'edge'
          source: {
            cell: 'node3',
            port: 'port2'
          },
          target: {
            cell: 'node2', 
            port: 'port1-ellipse', // 链接桩 ID
          },
        },
        
      )
      const edge2 = graph.addEdge({
          shape: 'edge',
          source: {
            cell: 'node2',
            port: 'port2-ellipse'
          },
          target: { 
            cell: 'node1', 
            port: 'port1-circle',
          },
        })
    },
    // 初始化
    init() {
      const graph = new Graph({
        container: document.getElementById('container'),
        clipboard: {
          enabled: true, // 开启复制
        },
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
    }
  }
}
</script>

<style lang="scss" scoped>
#container {
  // border: 1px solid skyblue;
}
</style>