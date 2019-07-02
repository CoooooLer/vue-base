<template>
  <div class="">
    首页
  </div>
</template>

<script>
  export default {
    name: "index",
    async created() {
      let res = await this.axios.get("http://localhost:8081/data/1.json");
      console.log(res);
    }
  }
</script>

<style scoped>

</style>
