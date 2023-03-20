<template>
  <div class="box-1" @click="box1">
    <div class="box-2" @click="box2">
      <div class="box-3" @click.stop="box3"></div>
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
    box1() {
      console.log(1111);
    },
    box2() {
      console.log(2222);
    },
    box3() {
      console.log(3333);
    }
  }
}
</script>

<style lang="scss" scoped>
.box-1{
  margin: auto;
  width: 100px;
  height: 100px;
  background-color: pink;
  .box-2{
    width: 80px;
    height: 80px;
    background-color: cadetblue;
    .box-3{
      width: 50px;
      height: 50px;
      background-color: chocolate;
    }
  }
}
</style>