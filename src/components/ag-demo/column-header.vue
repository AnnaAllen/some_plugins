<template>
  <div @click="onMenuClicked($event)" @contextmenu.prevent="onContextmenu" class="column-hearder">
    <div>
      {{params.displayName}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    onMenuClicked() {
      console.log(this.params);
    },
    onContextmenu(event) {
      this.$contextmenu({
        items: [
          { 
            label: "隐藏",
            onClick: () => {
              this.hideColumn()
            }
          },
          { 
            label: "抑制",
            onClick: () => {
            }
          },
          { 
            label: "仅保留",
            onClick: () => {
              this.retain()
            }
          },
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
    },
    invokeParentMethod() {
      this.params.context.componentParent.methodFromParent(this.params.displayName)
    },
    hideColumn() {
      console.log(this.params);
      this.params.context.componentParent.hideColumn(this.params.column.colId)
    },
    retain() {
      this.params.context.componentParent.retain(this.params.column.colId)
    }
  }
}
</script>

<style lang="scss" scoped>
.column-hearder{
  background-color: pink;
  width: 100%;
  height: 100%;
  font-size: 30px;
  color: white;
}
</style>