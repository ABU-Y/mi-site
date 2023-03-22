// ImageLoader组件
<template>
  <div class="test-container">
    <ImageLoader
      src="https://ts1.cn.mm.bing.net/th/id/R-C.4c2c571a8f6f8b141d903e4dc3998a0c?rik=PWV0mx50ruW0TA&riu=http%3a%2f%2fimg.aiimg.com%2fuploads%2fallimg%2f190212%2f1-1Z212145642.jpg&ehk=LDok8%2b9fdFmkS1muBd9A3g%2bbg9z%2bl7%2f2wqUoMtWQPCw%3d&risl=&pid=ImgRaw&r=0"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="3000"
      @load="handleLoader"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoader() {
      console.log("组件加载完成！");
    },
  },
};
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid #000;
  margin: 0 auto;
}
</style>
