<!-- 
  h5的数据属性
  * 允许我们在标准内于 HTML 元素中存储额外的信息
  * 在元素上以data-开头的属性为数据属性
  * 每一个属性都是一个可读写的字符串
  * 他们同样能被CSS访问
 -->
<template>
  <div>
    <div ref="aaaa" data-id="hiyori" data-id-index="3" id="test-dom">
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let test = document.querySelector('#test-dom')
    // console.log(test, 'test-------');
    // console.log(test.dataset.id, 'test.dataset.id-----');
    // console.log(test.dataset.idIndex, 'test.dataset.idIndex-----');
  }
}
</script>

<style lang="scss" scoped>
#test-dom::before {
  content: attr(data-parent);
}
#test-dom[data-id="hiyori"] {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
