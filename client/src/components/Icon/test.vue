<template>
  <div class="test-container">
    <!-- Icon组件测试 -->
    <div class="item" v-for="(n, i) in types" :key="i">
      <Icon :type="n"></Icon>
      <label>{{ n }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style scoped>
.test-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 580px;
  flex-wrap: wrap;
}
.item {
  margin: 1em;
  text-align: center;
}
.iconfont {
  display: block;
}
</style>
