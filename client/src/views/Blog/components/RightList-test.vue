// RightList组件测试
<template>
  <div class="test-container">
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelected: false },
        {
          name: "b",
          isSelected: true,
          children: [
            { name: "b-1", isSelected: false },
            { name: "b-2", isSelected: false },
            {
              name: "b-3",
              isSelected: false,
              children: [
                { name: "b-3-1", isSelected: false },
                { name: "b-3-2", isSelected: false },
                { name: "b-3-3", isSelected: false },
              ],
            },
          ],
        },
        { name: "c", isSelected: false },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    },
  },
};
</script>

<style></style>
