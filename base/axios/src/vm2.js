import Vue from 'vue/dist/vue.esm';
import Axios from 'axios';
import {stringify} from 'querystring';

const axios = Axios.create({
    transformRequest: [
        // 改变数据格式
        function (data) {
            return stringify(data);

            // let arr = [];
            // for(let name in data) {
            //     arr.push(`${name} = ${data[name]}`)
            // }
            // return arr.join('&')
        }
    ]
});

let vm = new Vue({
   el: '#app',
   data: {
       result: 0,
   },
   async created() {
       let {data} = await axios({
           url: './data/sum.php',
           method: 'post',
           data: {a: 11, b: 22},

       });
       alert(data);
   },
    template: `
    <div>
        {{ result }}
    </div>
    `
});
