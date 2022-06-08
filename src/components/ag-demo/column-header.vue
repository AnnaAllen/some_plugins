<template>
  <div @click="onMenuClicked($event)" @contextmenu.prevent="onContextmenu" class="column-hearder">
    <div>
      {{params.displayName}} <i class="el-icon-edit"></i>
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
          { label: "移除度量"}
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
      // console.log(this.params.column.parent.groupId);
      const groupId = this.params.column.parent?.groupId
      const colId = this.params.column.colId
      this.params.context.componentParent.retain({colId: colId, groupId: groupId})
    }
  }
}
</script>

<style lang="scss" scoped>
.column-hearder{
  // background-color: pink;
  width: 100%;
  height: 100%;
  font-size: 20px;
  // color: white;
}
</style>