import Vue from 'vue';

import Parent from './components/parent';
// import Cmp1 from './components/cmp1.vue';
import App from './app.vue';
import router from './routers'

import VueAxios from 'vue-axios';
import Axios from 'axios';

Vue.use(VueAxios, Axios);

let vm = new Vue({
  el: '#app',
  data: {},
  components: {
    Parent,
    App,
    // Cmp1,
  },
  router,
  template: `
    <div>
      <App></App>
<!--      <Parent></Parent>-->
<!--      <cmp1></cmp1>-->
    </div>
  `
});
