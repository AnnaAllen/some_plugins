<template>
  <div @contextmenu.prevent="onContextmenu">
    <div ref="cell" id="cell" >
      {{value}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      contextMenuData: {
        menuName: "demo",
        axis: {
          x: null,
          y: null
        },
        menulists: [
          {
            btnName: "选项1",
            icoName: "fa fa-home fa-fw",
            children: [
              {
                icoName: "fa fa-adn",
                btnName: "选项1-1",
                fnHandler: "Handler1"
              }
            ]
          },
          {
            btnName: "选项4",
            disabled: true
          }
        ]
      },
      contextMenuTarget: ''
    }
  },
  mounted() {
    this.value = this.valueSquared();
  },
  methods: {
    valueSquared() {
      return this.params.value;
    },
    invokeParentMethod() {
      // console.log(this.params.value);
      this.params.context.componentParent.methodFromParent(this.params.value)
    },
    onContextmenu(event) {
      this.$contextmenu({
        items: [
          { label: "隐藏"},
          { label: "抑制"},
          { label: "仅保留"},
          { label: "排除"},
          { label: "自定义计算"},
          { 
            label: "上卷",
            onClick: () => {
              this.invokeParentMethod()
            }
          },
          { label: "下钻"},
          { label: "移除此维度"}
        ],
        event,
        //x: event.clientX,
        //y: event.clientY,
        customClass: "class-a",
        zIndex: 3,
        minWidth: 230
      });
      return false;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>