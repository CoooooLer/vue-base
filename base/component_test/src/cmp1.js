import Vue from 'vue/dist/vue.esm';

export default Vue.component('cmp1', {
    props: ['name','list'],
    data() {
      return {
          a: 11,
          b: 0,
      }
    },
    template: `
        <div>
            {{ name }}<br>
            <p v-for='(item, index) in list' :key="index">{{ item }}</p>
        </div>
    `
});
