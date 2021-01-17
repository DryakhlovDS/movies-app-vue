<template>
  <div class="main-bg" :style="posterBg"></div>
</template>

<script>
export default {
  name: "MainBg",
  props: {
    poster: {
      type: String,
      default: "",
    },
  },
  computed: {
    posterBg() {
      return {
        "background-image": this.background,
      };
    },
    background() {
      return this.poster
        ? `url(${this.poster})`
        : "linear-gradient(45deg, #000326 0%, #530f75 100%)";
    },
  },
};
</script>

<style lang="scss" scoped>
.main-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, #000326 0%, #530f75 100%);
    opacity: 0.7;
  }
}
</style>
