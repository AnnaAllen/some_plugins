<template>
  <div>
    <format-com>
      <template v-slot:nav>
        <div class="all-demo-nav">
          <el-tag v-for="item in x6Router" :key="item.value" type="info" @click="getActive(item)">{{item.value}}</el-tag>
        </div>
      </template>

      <template slot="describe">
        <div class="des">{{x6Des[des]}}</div>
      </template>

      <template slot="demo">
        <div class="com-box">
          <component :is="active"></component>
        </div>
      </template>
    </format-com>
    
  </div>
</template>

<script>
import formatCom from '../../components/format/index.vue' // 规范展示

import demo1 from '../../components/x6/demo1/index.vue' // 基础节点和边
import demo2 from '../../components/x6/demo2/index.vue' // 连接桩
import demo3 from '../../components/x6/demo3/index.vue' // 复制粘贴
import demo4 from '../../components/x6/demo4/index.vue' // 复制粘贴

import { mapState } from 'vuex'

export default {
  components: {
    formatCom
  },
  data() {
    return {
      active: demo1,
      des: 'demo1',
      x6Router: [
        { value: 'demo1', 'com': demo1},
        { value: 'demo2', 'com': demo2},
        { value: 'demo3', 'com': demo3},
        { value: 'demo4', 'com': demo4},
      ]
    }
  },
  computed: {
    ...mapState('x6',['x6Des']),
  },
  mounted() {
  },
  methods: {
    getActive(val) {
      this.active = val.com
      this.des = val.value
    }
  }
}
</script>

<style scoped lang="scss">
.com-box {
  width: 100%;
}
.all-demo-nav {
  margin: 5px 0;
  .el-tag {
    margin: 0 10px;
  }
}
.des {
  margin: 20px;
}
</style>