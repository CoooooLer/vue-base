<template>
  <div>
    <div class="title">cmp1</div>
    <input type="button" value="+1" @click="fn()">
    <child ref="child1"></child>
  </div>
</template>

<script>
  import Child from './child.vue'

  export default {
    name: 'cmp1',
    components: {
      Child,
    },
    methods: {
      fn() {
        this.$refs.child1.num++;
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .title
    color: #ff6900;
</style>
