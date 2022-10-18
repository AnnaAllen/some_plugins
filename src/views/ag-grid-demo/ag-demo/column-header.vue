<template>
<!-- column-hearder -->
  <div 
  @click="onMenuClicked($event)" 
  @contextmenu.prevent="onContextmenu"
  class="header-item"
  :class="params.column.colDef.spanning? 'column-header-special' : 'column-hearder'">
    <div ref='specialCell' class="content">
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
  mounted() {
    this.$nextTick(() => {
     console.log(this.$refs.specialCell.clientWidth, 'this.$refs[]--------------');
    })
  },
  methods: {
    onMenuClicked() {
      console.log(this.params);
    },
    onContextmenu(event) {
      this.$contextmenu({
        minWidth: 160,
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
          { 
            label: "排除",
            icon:'',
            children: [
              {label: "小数", icon: 'el-icon-check',}
            ]
          },
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
  font-size: 16px;
  border-right: 1px solid #babfc7;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  // color: white;
}
.column-header-special{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: normal;
  background-color: #f8f8f8;
  // border-right: 1px solid #babfc7;
}
</style>