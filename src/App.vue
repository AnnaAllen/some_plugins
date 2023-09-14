<template>
  <div id="app">
    <nav>
      <router-link to="/view/x6-flow-chart" exact>x6</router-link> |
      <router-link to="/ag-demo">ag-grid</router-link> |
      <router-link to="/wang-editor">wang-editor</router-link> |
      <router-link to="/about-ele">element相关</router-link> |
      <router-link to="/baidu-map">baidu 地图</router-link> | 
      <router-link to="/some-style-tip">some-style-tip</router-link> | 
      <router-link to="/view/check-box">check-box</router-link> | 
      <router-link to="/view/g2">G2</router-link> | 
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  // 动态引入主题样式文件
  mounted() {
    setTimeout(() => {
      // 修改全局变量
      // document.getElementsByTagName('body')[0].style.setProperty('--color-primary', 'red');
    }, 3000);
  },
}

</script>

<style lang="scss">
@import '@/assets/style/test2/theme.scss';
.text-color {
  color: var(--color-primary);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
