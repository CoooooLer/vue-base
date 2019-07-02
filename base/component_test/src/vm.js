import Vue from 'vue/dist/vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/my-dialog.css';
// import Cmp from './cmp1';
import MyDialog from './my-dialog';

let vm = new Vue({
    el: '#app',
    data: {
    },
    template: `
        <div class="panel panel-default my-dialog">
            <div class="panel-heading">
                <slot name="title">标题</slot>
            </div>
            <div class="panel-body">
                的说法都是的士费二维违法未发完大是大非仍无法违法
                <p>131313321321</p>
                <p>131313321321</p>
            </div>
            
        </div>
    `
});


/*let cmp = new Cmp({
    propsData: {
        name: 'jane',
        list: [23, 34, 123]
    }
});*/

// 用于调试
/*let vm = cmp.$mount();
console.log(vm.$el);

if(vm.$el.querySelector('p').innerHTML == 23) {
    console.log('true')
}else {
    console.log('false')
}*/


/*let vm = new Vue({
    el: '#app',
    data: {
        type: '',
    },
    template: `
        <div>

            <input type="text" v-model="type">
            <component :is="type" name="mike" :list="[1,2,3]" />
        </div>
    `,
    // template: `
    //     <div>
    //         <cmp/>
    //     </div>`,
    // components: { // 局部组件
    //     cmp: {
    //         data() {
    //           return {
    //               a: 666
    //           }
    //         },
    //         template: '<div>{{ a }}</div>'
    //     }
    // }
});*/
