<template>
  <div class="wang-editor">
    <editor-box></editor-box>
    <toolbar-box></toolbar-box>
  </div>
</template>

<script>
import './wang-editor/newIndentation'
import EditorBox from './wang-editor/editor-box.vue'
import ToolbarBox from  './wang-editor/toolbar-box.vue'
import Vue from 'vue'

export default Vue.extend({
  components: { EditorBox, ToolbarBox },
  data() {
    return {
     
    }
  },
  methods: {
    
  },
})
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style scoped lang='scss'>
.wang-editor {
  display: flex;
  justify-content: space-around;
}
</style>