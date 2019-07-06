<template>
  <div>
    <input type="button" value="+5" @click="fn()">
  </div>
</template>

<script>
  export default {
    name: "cmp1",
    methods: {
      fn() {
        // this.$store.state.a += 5;  // 不推荐
        // this.$store.commit('add', 10); // 通过commit调用mutation的方法 不推荐
        this.$store.dispatch('add', 100); // 通过dispatch调用add方法， 推荐
      }
    },
  }
</script>

<style scoped>

</style>
