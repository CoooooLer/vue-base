import Vue from 'vue/dist/vue.esm';
import Axios from 'axios';

let vm = new Vue({
    el: '#app',
    data: {
        name: '',
        age: 0,
        loaded: false,
    },
    async created() { // 异步
        try{
            let res = await Axios.get('./data/user.json');
            let {data} = await Axios.get('./data/user.json');

            this.name = data.name;
            this.age = data.age;
            this.loaded = true;
        }catch(e) {
            alert('数据加载失败，请重新刷新页面。');
        }

    },
    template: `
        <div v-if="loaded">
            <label for="">姓名：</label><span>{{ name }}</span><br>
            <label for="">年龄：</label><span>{{ age }}</span>
        </div>
    `
});
