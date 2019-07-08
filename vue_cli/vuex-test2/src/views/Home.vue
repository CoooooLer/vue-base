<template>
  <div class="home">
    <div>a: {{ a }}</div>
    <div>b: {{ b }}</div>
    <div>count: {{ count }}</div>
    <input type="button" value="a+10" @click="addA(10)">
    <input type="button" value="b+100" @click="addB(100)">
    <input type="button" value="上线" @click="setOnline(1)">
    <ul>
      <li v-for="user in online">
        姓名： {{ user.name }}
        年龄： {{ user.age }}
      </li>
    </ul>
<!--    <div>count:{{ $store.getters.count }}</div>-->
<!--    <div>count: {{ count }}</div>-->
<!--    <cmp1/>-->
<!--    <table-cmp :fields="fields" :datas="datas" :parent="this" />-->
  </div>
</template>

<script>
// @ is an alias to /src
import TableCmp from '@/components/common/table.vue';
import Cmp1 from '@/components/common/cmp1.vue';
import {mapState, mapActions, mapGetters} from 'vuex';

export default {
  name: 'home',
  components: {
    TableCmp,
    Cmp1,
  },
  data() {
     return  {
        fields: [
            'ID',
            '姓名',
            '年龄'
        ],
        datas: [
          { id: '1', name: 'mike', age: '11' },
          { id: '22', name: 'jane', age: '22' },
          { id: '3', name: 'box', age: '33' },
        ]
     }
  },
  async created() {
    await this.readUser();
  },
  methods: {
    del(id) {
      this.datas = this.datas.filter(data => data.id != id);
    },
    ...mapActions(['addA', 'addB', 'setOnline', 'readUser']),
  },
  computed: { // 可读可写
    ...mapState(['a', 'b', 'users']),
    ...mapGetters(['count', 'online']),
    // count: {
    //   get(){
    //     return this.$store.getters.count;
    //   },
    // }
  },
}
</script>
