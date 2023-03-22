export default function (refValue) {
  return {
    mounted() {
      this.$bus.$on("setMainScroll", this.handlesetMainScroll);
      this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
    },
    beforeDestroy() {
      this.$bus.$emit("mainScroll");
      this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
      this.$bus.$off("setMainScroll", this.handlesetMainScroll);
    },
    methods: {
      handleMainScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
      handlesetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop;
      },
    },
  };
}
