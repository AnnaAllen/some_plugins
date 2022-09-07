<template>
  <div 
  class="header-style-test" 
  :class="params.columnGroup.groupId === 'special'?'group-hearder-special':'group-hearder'" 
  @contextmenu.prevent="onContextmenu"
  >
    <div ref='headerGroup'>
      {{displayName}}
    </div>
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
    this.$nextTick(() => {
      if(this.displayName === '产品类型-总计-二级') {
        this.$refs.headerGroup.parentNode.parentNode.style.height = '100px'
      }
    })
    // console.log(this.params.columnGroup.groupId);
  },
  methods: {
    getDisplayName() {
      return this.params.displayName
    },
    specialStyle() {
      return {
        height: '100px'
      }
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
          { label: "自定义计算1"},
          { label: "自定义计算2"},
          { label: "自定义计算3"},
          { label: "自定义计算4"},
          { label: "自定义计算5"},
          { label: "自定义计算6"},
          { label: "自定义计算7"},
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

<style lang="scss" scoped>
.header-style-test{

}
.group-hearder{
  width: 100%;
  height: 100%;
  align-content: center;
  font-size: 16px;
  border: 1px solid #babfc7;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: center;

}
.group-hearder-special{
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  width: 100%;
  background-color: #f8f8f8;
  height: 100%;
  border-right: 1px solid #babfc7;
}
</style>