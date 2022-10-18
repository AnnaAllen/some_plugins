const editor = {
  namespaced: true,
  state: {
    editor: null,
    mode: 'default',
  },
  getters: {
  },
  mutations: {
    SET_EDITOR: (state, editor) => {
      state.editor = Object.seal(editor)
    },
    // SET_MODE: (state, mode) => {
    //   state.mode = mode
    // }
  },
  actions: {
  }
}

export default editor