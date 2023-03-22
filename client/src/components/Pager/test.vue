<template>
  <div>
    <h1>Pager组件测试</h1>
    <Pager :total="300" :current="current" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Pager from "./";
export default {
  data() {
    return {
      current: 22,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>

<style scoped></style>
