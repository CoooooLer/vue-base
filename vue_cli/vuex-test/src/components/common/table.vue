<template>
  <div>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th v-for="(item, index) in fields" :key="index">{{ item }}</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(items, index) in datas" :key="index">
        <td v-for="(td, index) in items" :key="index">{{ td }}</td>
        <td><button class="btn-danger" @click="fn_del(items.id)">删除</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "table-cmp",
    props: [
        'fields',
        'datas',
        'parent'
    ],
    methods: {
      fn_del(id) {
        this.parent.del(id);
      }
    },
  }
</script>

<style scoped>

</style>
