<template>
  <div id="app">
    <nav>
      <router-link to="/view/x6FlowChart" exact>x6(这里现在没有东西)</router-link> |
      <router-link to="/ag-demo">ag-grid</router-link> |
      <router-link to="/view/routerTest">router-test</router-link> |
      <!-- <router-link to="/view/piniaTest">pinia-test</router-link> | -->
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
