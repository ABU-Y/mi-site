// Empty组件测试
<template>
  <div class="test-container">
    <Empty text="你好" />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style>
.test-container {
  position: relative;
  margin: 0 auto;
  width: 400px;
  height: 400px;
  border: 2px solid #000;
}
</style>
