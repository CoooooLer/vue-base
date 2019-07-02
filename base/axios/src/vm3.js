import Vue from 'vue/dist/vue.esm';

let vm = new Vue({
    el: '#app',
    data: {
        result: 0,
    },
    methods: {
      async fn_submit() {
          let form = this.$refs['form1'];
          let data = new FormData(form);

          let res = await fetch(form.action, {
             method: form.method,
             body: data
          });

          let r = await res.json();

          alert(r)
          this.result = r;
      }
    },
    template: `
    <div>
        <form @click.prevent="fn_submit" action="data/sum.php" method="post" ref="form1">
            <input type="text" name="a">
            <input type="text" name="b">
            <input type="submit" value="计算">
        </form>
        {{ result }}
    </div>
    `
});
