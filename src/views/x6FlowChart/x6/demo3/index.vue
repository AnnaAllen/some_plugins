<template>
  <div>
    <el-button @click="fun('copy')">复制</el-button>
    <el-button @click="fun('paster')">粘贴</el-button>
    <el-button @click="fun2('undo')" :disabled="disUndo">撤销</el-button>
    <el-button @click="fun2('redo')" :disabled="disRedo">重做</el-button>
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
      history: null,
      disRedo: false,
      disUndo: false
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    // history: {
    //   handler(val) {
    //     console.log(val, 'watch-val-------');
    //     this.disRedo = val.canRedo()
    //     this.disUndo = val.canUndo()
    //   },
    //   deep: true
    // }
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
        // 自定义样式
        attrs: {
          body: {
            stroke: 'pink'
          },
        },
        ports: {
          /*
            当连接桩的内容相同时，可以给连接桩设置分组，在分组中指定样式和数量，避免冗余
           */
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
            // {
            //   id: 'port2-ellipse',
            //   group: 'group1', // 指定分组名称
            // },
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
        container: document.getElementById('container'),
        history: true, // 开启撤销重做
        clipboard: {
          enabled: true, // 开启复制
          useLocalStorage: true // 关闭浏览器重新打开后也能正常复制粘贴
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
      
      // 重置节点
      function reset () {
        const nodes = graph.getNodes()
        const edges = graph.getEdges()

        nodes.forEach((node) => {
          node.attr('body/stroke', '#000')
        })

        edges.forEach((edge) => {
          edge.attr('line/stroke', 'black')
          edge.prop('labels/0', {
            attrs: {
              body: {
                stroke: 'black',
              },
            },
          })
        })
      }

      // 点击节点
      graph.on('node:click', ({ node }) => {this.clickNode(node, reset())})

      this.graph = graph
      this.history = graph.history
      console.log(this.history.canRedo(), this.history.canUndo(), 'graph.history-----------');
    },

    // 点击节点
    clickNode(node, reset) {
      reset
      this.cells = []
      this.cells.push(node)
      node.attr('body/stroke', 'orange')
      console.log(node, 'node------');
    },

    fun(type) {
      if(type === 'copy') {
        if (this.cells && this.cells.length > 0) {
          this.graph.copy(this.cells)
          console.log('复制成功');
        } else {
          console.log('请先选中节点再复制');
        }
        return
      }

      if (this.graph.isClipboardEmpty()) {
        console.log('剪切板为空');
      } else {
        const cells = this.graph.paste(this.cells)
        this.graph.cleanSelection()
        this.graph.select(cells)
      }
    },

    fun2(type) {
      if(type === 'undo') {
        this.history.undo()
        return
      }
      this.history.redo()
    }
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