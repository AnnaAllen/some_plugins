<template>
  <div class="some-style-tip">
    <div class="routerBox">
      <router-link v-for="(item, index) in list" :key="index" :to="{name: item.routerName}">{{item.name}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [
        {
          name: 'backdrop-filter',
          routerName: 'backdropFilter'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.some-style-tip {
  .routerBox {
    margin-bottom: 20px;
  }
}
</style>