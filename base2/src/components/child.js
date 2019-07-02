import Vue from 'vue';

export default Vue.component('child', {
  data(){
    return {
      num: 0,
    }
  },
  props: {

  },
  methods: {

  },
  created() {
    this.$on('add', function (e) {
      this.num += parseInt(e);
    });
  },
  template: `
    <div>
      子级{{ num }}
    </div>
  `
});
