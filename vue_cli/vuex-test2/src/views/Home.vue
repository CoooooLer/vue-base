<template>
  <div class="home">
    {{ $store.state.a }}
    <cmp1/>
    <table-cmp :fields="fields" :datas="datas" :parent="this" />
  </div>
</template>

<script>
// @ is an alias to /src
import TableCmp from '@/components/common/table.vue';
import Cmp1 from '@/components/common/cmp1.vue';

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
  methods: {
    del(id) {
      this.datas = this.datas.filter(data => data.id != id);
    }
  }
}
</script>
