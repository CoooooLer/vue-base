import Vue from 'vue';

import Child from './child'

export default Vue.component('parent', {
  components: {
    Child,
  },
  data() {
    return {

    }
  },
  methods: {
   fn() {
     this.$refs.child1.$emit('add', '5')
   }
  },
  template: `
    <div>
      父级 <input type="button" value="+" @click="fn()">
      <div>
        <child ref="child1"></child>
      </div>
    </div>
  `
});
