<template>
  <div ref="checkBox" class="check-box" @mousedown="mousedown" @mouseup="mouseup">
    <div class="normal" v-for="item in 20" :key="item">{{ item }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    mousedown(event) {
      console.log(event, '鼠标按下------');
      let createDiv = document.createElement('div')
      createDiv.style.cssText = 
        `position:absolute; 
        width:0px; 
        height:0px; 
        font-size:0px; 
        margin:0px; 
        padding:0px; 
        border:1px dashed #0099FF; 
        z-index:1000; 
        filter:alpha(opacity:60); 
        opacity:0.6; 
        display:none`
      createDiv.id = 'createDiv'
      createDiv.style.left = event.x
      createDiv.style.right = event.y

      // 监听鼠标移动
      this.$refs.onmousemove = () => {}
      console.log(this.$refs.onmousemove);
      // document.onmousemove = (event) => {
      //   console.log(event, '鼠标移动------')
      // }
    },
    // mousemove(event) {
    //   console.log(event, '鼠标移动------');
    // },
    mouseup(event) {
      // console.log(event, '鼠标抬起------');
    }
  }
}
</script>

<style lang="scss" scoped>
.check-box {
  display: flex;
  flex-wrap: wrap;
}
.normal {
  width: 100px;
  height: 100px;
  background-color: burlywood;
  border: 1px solid;
  margin: 10px;
}
</style>