<template>
  <div class="wang-editor1">
    <div>文本框组件</div>
    <div class="txt-box">
      <Editor
        style="border: 1px solid #ccc; height: 500px;"
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
        @onChange="onChange"
      />
    </div>
  </div>
</template>

<script>
import { Editor } from '@wangeditor/editor-for-vue'
import { mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  components: { Editor },
  data() {
    return {
      html: '<p>模拟 Ajax 异步设置内容 HTML</p>',
      toolbarConfig: { },
      editorConfig: {
        placeholder: '请输入内容...',
        MENU_CONF: {
          fontSize : {
            fontSizeList: [
              '16px'
            ]
          }
        }
      },
      // mode: 'default', // or 'simple'
    }
  },
  computed: {
    ...mapState('editor',['editor', 'mode']),
  },
  methods: {
    onCreated(editor) {
      // this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
      this.$store.commit('editor/SET_EDITOR', editor)
    },
    onChange(val) {
      console.log(val, 'val--------');
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
::v-deep .w-e-select-list {
  ul {
    li:nth-child(1) {
      display: none;
    }
  }
}
::v-deep .w-e-text-container {
  background-color: transparent;
  // background-image: url('../../assets/logo.png');
}
.wang-editor {
  .txt-box {
  }
}
</style>