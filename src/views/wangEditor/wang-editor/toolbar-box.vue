<template>
  <div class="wang-editor2">
    <div>工具栏组价</div>
    <div class="option-box">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <Toolbar
        style="width: 600px;"
        :editor="editor"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
    </div>
    <div>调api修改</div>
    <button @click="changeStyle('bold')">加粗</button>
    <button @click="changeStyle('italic')">italic</button>
    <button @click="changeStyle('sub')">sub</button>
    <!-- <button @click="changeNode('indent')">indent</button> -->
  </div>
</template>

<script>
import { Toolbar } from '@wangeditor/editor-for-vue'
import { DomEditor, SlateTransforms  } from '@wangeditor/editor'

import { mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  components: { Toolbar },
  data() {
    return {
      toolbarConfig: { },
      active: [],
    }
  },
  computed: {
    ...mapState('editor',['editor', 'mode']),
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.setToolBarConfig()
    // })
  },
  watch: {
    editor(val) {
      this.$nextTick(() => {
        this.setToolBarConfig(val)
      })
    }
  },
  methods: {
    setToolBarConfig(val) {
      const toolbar = DomEditor.getToolbar(val)
      const curToolbarConfig = toolbar.getConfig()
      curToolbarConfig.toolbarKeys = ['bold', 'underline', 'italic', {key: 'group-indent-1', title: '缩进', menuKeys: ['indent', 'delIndent'] }, 'through', 'code', 'sub', 'sup', 'clearStyle', 'color', 'bgColor', 'fontSize', 'fontFamily', 'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyJustify', 'lineHeight', 'insertImage', 'deleteImage', 'editImage', 'viewImageLink', 'imageWidth30', 'imageWidth50', 'imageWidth100', 'divider', 'emotion', 'insertLink', 'editLink', 'unLink', 'viewLink', 'codeBlock', 'blockquote', 'headerSelect', 'header1', 'header2', 'header3', 'header4', 'header5', 'todo', 'redo', 'undo', 'fullScreen', 'enter', 'bulletedList', 'numberedList', 'insertTable', 'deleteTable', 'insertTableRow', 'deleteTableRow', 'insertTableCol', 'deleteTableCol', 'tableHeader', 'tableFullWidth', 'insertVideo', 'uploadVideo', 'editVideoSize', 'uploadImage', 'codeSelectLang']
      // curToolbarConfig.insertKeys = {
      //     index: 0, // 插入的位置，基于当前的 toolbarKeys
      //     keys: ['menu1']
      // }
      console.log(val.getAllMenuKeys(), 'curToolbarConfig.toolbarKeys-----------' )
    },
    changeStyle(val) {
      if(this.active.indexOf(val) < 0) {
        this.active.push(val)
        this.editor.addMark(val, true)
        this.editor.focus()
      } else {
        let index = this.active.findIndex(item  => item === val)
        this.active.splice(index, 1)
        this.editor.removeMark(val)
        this.editor.focus()
      }
    },
    changeNode(val) {
      this.editor.focus()
      if(this.active.indexOf(val) < 0) {
        SlateTransforms.setNodes(this.editor, {
          // @ts-ignore
          textAlign: 'right',
          lineHeight: '20px',
          textIndent: '2em'
        }, {
          // mode: 'highest' // 针对最高层级的节点
        })
      } else {
        let index = this.active.findIndex(item  => item === val)
        this.active.splice(index, 1)
      }
    }
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  }
})
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style scoped lang='scss'>
.option-box {
  display: flex;
  border: 1px solid #ccc;
}
::v-deep .w-e-bar-item .active {
  background-color: transparent;
  svg {
    color: pink;
    fill: pink;
  }
}
::v-deep .w-e-menu-tooltip-v5:before {
  top: unset ;
  bottom: 40px;
}
::v-deep .w-e-menu-tooltip-v5:after {
  bottom: 30px;
  border-top: 5px solid pink;
  top: 0;
  border-bottom: 0px;

}
.wang-editor {
  
}
</style>