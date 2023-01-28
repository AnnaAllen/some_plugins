<template>
  <div class="bf-box">
    <div class="bf-box-a">
      <div class="ground-glass">毛玻璃效果</div>
    </div>
    <div class="bf-box-b">
      <div class="ground-glass-filter">毛玻璃效果</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bf-box {
  display: flex;
  justify-content: center;
  &-a {
    width: 200px;
    height: 200px;
    background-image: url('../../../assets/logo.png');
    background-color: rgb(252, 239, 223);
    display: flex;
    justify-content: center;
    align-items: center;

    .ground-glass {
      width: 120px;
      height: 120px;
      // filter 是将效果用于元素自身，而 backdrop-filter 则是将效果用于元素的背景
      backdrop-filter: blur(10px);
      border: 1px solid #fff;
      border-radius: 4px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }
  &-b {
    width: 200px;
    height: 200px;
    background-color: rgb(252, 239, 223);
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../../assets/logo.png');
    // filter 是将效果用于元素自身，而 backdrop-filter 则是将效果用于元素的背景
    filter: blur(10px);
    
    .ground-glass-filter {
      width: 120px;
      height: 120px;
      border: 1px solid #fff;
      border-radius: 4px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>