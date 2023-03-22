// Loading组件测试
<template>
  <div class="test-container" style="position: relative">
    <Loading v-if="isLoading" />
    <button
      @click="
        {
          isLoading = !isLoading;
        }
      "
    >
      切换显示/隐藏
    </button>
  </div>
</template>

<script>
import Loading from "./";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: true, // 是否正在加载中
    };
  },
};
</script>

<style></style>
