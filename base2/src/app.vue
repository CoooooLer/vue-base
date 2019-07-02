<template>
  <div>
    <router-link :to="{name: 'index', params: {} }">首页</router-link>
    <router-link :to="{name: 'news', params: {} }">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',

  }
</script>

<style lang="stylus" scoped>

</style>
