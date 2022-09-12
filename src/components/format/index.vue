<template>
  <div class="format">
    <div class="nav">
      <slot name="nav"></slot>
    </div>
    
    <div class="describe">
      <slot name="describe"></slot>
    </div>

    <div class="format-content">
      <slot name="demo"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.format {
  .describe {
    &-title {
      font-size: 20px;
      font-weight: bold;
    }
    &-content {
      padding: 20px 50px;
      width: 100%;
      box-sizing: border-box;
    }
  }

}
</style>