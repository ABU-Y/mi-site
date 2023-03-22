// Layout 组件测试
<template>
  <div class="test-container">
    <Layout>
      <!-- <template #left>
        <div class="left">左边栏区域，宽度适应内容，溢出隐藏</div>
      </template> -->
      <div class="main">主区域，宽度占满剩余空间，溢出隐藏</div>
      <template #right>
        <div class="right">右边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
import "@/styles/global.less";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 80%;
  height: 600px;
  border: 2px solid;
  white-space: nowrap;
  margin: 0 auto;
}
.left {
  width: 200px;
  height: 100%;
  background: lightpink;
}
.main {
  width: 100%;
  height: 100%;
  background: lightseagreen;
}
.right {
  width: 150px;
  height: 100%;
  background: lightblue;
}
</style>
