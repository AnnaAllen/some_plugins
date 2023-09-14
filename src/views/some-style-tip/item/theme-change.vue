<template>
  <div class="theme-change" @click="change">
    主题切换
  </div>
</template>

<script>
export default {
  methods: {
    change() {
      if (!document.documentElement.hasAttribute('theme')) {
        document.documentElement.setAttribute('theme', 'dark');
      }else{
        document.documentElement.removeAttribute('theme')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-change {
  color: var(--color-primary);
  background-color: var(--bg-primary);
  cursor: pointer;
}
</style>