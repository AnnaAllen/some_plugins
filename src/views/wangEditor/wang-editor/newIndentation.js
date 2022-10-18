import { IDomEditor, ISelectMenu, Boot, IModuleConf  } from '@wangeditor/editor'

class NewFontSize {                       // JS 语法
    
    constructor() {
      this.title = '12px',
      this.tag = 'select'
      this.width = 60,
      this.options = [
        { value: '12px', text: '12px', selected: true},
        { value: '14px', text: '14px', selected: false },
        { value: '16px', text: '16px', selected: false }
      ]
    }

    // 下拉框的选项
    getOptions() {            // JS 语法
      const options = this.options
        return options
    }

    // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
    isActive(editor) {                      // JS 语法
        return false
    }

    // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
    getValue(editor) {                               // JS 语法
        return 'shanghai' // 匹配 options 其中一个 value
    }

    // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
    isDisabled(editor) {                     // JS 语法
        return false
    }

    // 点击菜单时触发的函数
    exec(editor, value) {    
      this.options.forEach(item => {
        if(item.value === value) {
          item.selected = true
          return
        }
        item.selected = false
      })
      // this.getOptions()
      console.log(this.getOptions(), 'options------------');      // JS 语法
        // Select menu ，这个函数不用写，空着即可
    }
}

const menu1Conf = {
  key: 'menu1', // 定义 menu key ：要保证唯一、不重复（重要）
  factory() {
    return new NewFontSize() // 把 `YourMenuClass` 替换为你菜单的 class
  },
}

const module = {                      // JS 语法

menus: [menu1Conf],

// 其他功能，下文讲解...
}
Boot.registerModule(module)