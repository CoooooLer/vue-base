import Vue from 'vue/dist/vue.esm';

export default Vue.component('my-dialog', {
    data() {
        return {

        }
    },
    template: `
        <div>
            <template slot="title"></template>
            <slot></slot>
        </div>
    `
});
