<template>
  <div id="app">
    <nav>
      <router-link to="/view/x6-flow-chart" exact>x6</router-link> |
      <router-link to="/ag-demo">ag-grid</router-link> |
      <router-link to="/wang-editor">wang-editor</router-link> |
      <router-link to="/about-ele">element相关</router-link> |
      <router-link to="/baidu-map">baidu 地图</router-link> | 
      <router-link to="/some-style-tip">some-style-tip</router-link> | 
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
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
