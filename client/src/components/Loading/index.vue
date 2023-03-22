<template>
  <img class="loading-container" :src="lodingUrl" alt="" />
</template>

<script>
import lodingUrl from "@/assets/loading.svg";
export default {
  data() {
    return {
      lodingUrl,
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.loading-container {
  .self-center();
}
</style>
