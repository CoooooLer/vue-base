<template>
  <div>
    <div class="animate">
      <button @click="see = !see">toggle</button>
      <transition name="fadeUp">
        <div class="box" v-show="see"></div>
      </transition>

      <input type="button" value="+1" @click="arr.push(Math.random())">
      <transition-group tag="ul" name="bounce">
        <li v-for="(item, index) in arr" :key="item">{{ item }} <button @click="del(index)">del</button></li>
      </transition-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "animate-test",
    data() {
      return {
        see: true,
        arr: ['1', '2', '3', '4', '5']
      }
    },
    methods: {
      del(index) {
        this.arr.splice(index, 1);
      },
    },
  }
</script>

<style lang="stylus" scoped>
.animate
  text-align center
  .box
    width 200px
    height 200px
    background #ff6900
    margin 0 auto
    animation-duration 1s
  ul>li
    width 100px
    height 100px
    background aqua
</style>
