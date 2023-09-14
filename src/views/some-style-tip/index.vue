<template>
  <div class="some-style-tip">
    <div class="routerBox" v-for="(item, index) in list" :key="index">
      <router-link :to="{name: item.routerName}">{{item.name}}</router-link>
    </div>
    <router-view></router-view>

    <!-- <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      @blur="inputBlur"
    >
    </el-input> -->

  </div>
</template>

<script>

export default {
  data() {
    return {
      textarea: '',
      list: [
        {
          name: 'backdrop-filter',
          routerName: 'backdropFilter'
        },
        {
          name: 'dom-event',
          routerName: 'domEvent'
        },
        {
          name: '图片压缩',
          routerName: 'pictureCompression'
        },
        {
          name: 'h5的数据属性',
          routerName: 'data-xxx'
        },
        {
          name: '主题切换',
          routerName: 'theme-change'
        }
      ]
    }
  },
  methods: {
    inputBlur(e) {
      console.log(e, 'event-------');
      console.log(this.textarea,'textarea------');
      console.log(this.textarea.split('\n'), 'splic-----------');
    }
  }
}
</script>

<style lang="scss" scoped>
.some-style-tip {
  .routerBox {
    margin-bottom: 20px;
    // margin-right: 20px;
  }
}
</style>