<template>
  <div :class="params.columnGroup.groupId === 'special'?'group-hearder-special':'group-hearder'" @contextmenu.prevent="onContextmenu">
    {{displayName}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayName: null
    }
  },
  mounted() {
    this.displayName = this.getDisplayName()
    // console.log(this.params.columnGroup.groupId);
  },
  methods: {
    getDisplayName() {
      return this.params.displayName
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
    retain() {
      console.log(this.params.columnGroup.groupId);
      const groupId = this.params.columnGroup.groupId
      const colId = null
      this.params.context.componentParent.retain({colId: colId, groupId: groupId})
    }
  }
}
</script>

<style>
.group-hearder{
  width: 100%;
  height: 100%;
  align-content: center;
  font-size: 20px;
}
.group-hearder-special{
  font-size: 15px;
  font-weight: normal;
  text-align: center;
  width: 100%;
  background-color: #f8f8f8;
  height: 100%;
  border-right: 1px solid #babfc7;
}
</style>