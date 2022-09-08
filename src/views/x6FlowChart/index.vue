<template>
  <div>
    <format-com>
      <template v-slot:describe>
        基础节点和边
      </template>
      <template v-slot:demo>
        <!-- <x6-demo-1></x6-demo-1> -->
        <x6-demo-2></x6-demo-2>
        <!-- <x-6-demo-3></x-6-demo-3> -->
      </template>
    </format-com>
  </div>
</template>

<script>
import formatCom from '../../components/format/index.vue' // 规范展示

import x6Demo1 from '../../components/x6/demo1/index.vue' // 基础节点和边
import x6Demo2 from '../../components/x6/demo2/index.vue' // 连接桩
import x6Demo3 from '../../components/x6/demo3/index.vue' // 复制粘贴
export default {
  components: {
    x6Demo1,
    x6Demo2,
    x6Demo3,
    formatCom
  }
}
</script>

<style>

</style>