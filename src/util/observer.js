// 具体实现步骤
// 1： 通过属性  保存选项的数据
// 2： 把data中的成员 转换为getter和setter  注入到vue实例中 方便使用
// 3：调用observer对象 监听数据变化
// 4：调用compiler 解析指令和插值表达式
class Vue {
  constructor(options) {
      // 通过属性  保存选项的数据
      this.$options = options || {}; // 如果我们在调用vue构造函数的时候 没有传入参数 我们初始化一个空对象
      this.$data = options.data || {};
      this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el; // 如果我们是传入的选择器 则将选择器转换为dom对象
      
      // 把data中的成员 转换为getter和setter  注入到vue实例中 方便使用
      this._proxyData(this.$data)
      
      // 初始化observer模板，监听数据变化
      new Observer(this.$data)
  }

  // vue传过来的参数 转换为getter和setter
  _proxyData(data) { 
      // 遍历data的所有属性
      // data是一个对象
      // Object.defineProperty() 用于在一个对象上定义一个新属性，或者修改一已经存在的属性
      Object.keys(data).forEach(key => {
          Object.defineProperty(this, key, {
              // 可遍历 可枚举
              enumerable: true,
              configurable: true,
              get() {
                  return data[key]
              },
              // set方法注入新值
              set(newValue) {
                  if (newValue === data[key]) {
                      return
                  } else {
                      data[key] = newValue;
                  }
              }
          })
      })
      // 把data中的属性 注入到vue实例中

  }
}
class Observer {
  constructor(data) {
    this.walk(data)
  }
  // 1. 判断数据是否是对象，如果不是对象返回 
  // 2. 如果是对象，递归遍历对象的所有属性，设置为 getter/setter
  walk(data) {
    if (!data || typeof data != 'object') {
        return
    }
    Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key])
    })
  }
  //  定义响应式成员  即对data总的数据实现setter和getter

  defineReactive(data, key, val) {
    const that = this
    // 如果 val 是对象，继续设置它下面的成员为响应式数据 
    this.walk(val)
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
          return val;
      },
      set(newValue) {
        if (val === newValue) {
            return
        }
        // 如果 newValue 是对象，设置 newValue 的成员为响应式 
        that.walk(newValue) // 这里不用this  因为在set方法中 在function的内部 会开启新的作用域 此时的this执行data对象   
        val = newValue;
      }
    })
  }
}

let vm = new Vue({
  el: '#app',
  data: {
      msg: 'hello',
      count: 123,
      person: {
          name: 'zs'
      }
  }
})
vm.msg={'sex':'ada'}
