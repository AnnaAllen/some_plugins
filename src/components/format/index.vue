<template>
  <div class="format">
    <div class="describe">
      <div class="describe-title">描述：</div>
      <div class="describe-content">
        <slot name="describe"></slot>
      </div>
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

  &-content {
    width: 100%;
    padding: 0 50px;
    box-sizing: border-box;
    // height: 500px;
    // background: pink;
  }
}
</style>