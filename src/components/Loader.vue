<template>
  <div class="loader-wrap" v-if="isLoading">
    <b-spinner label="Loading..." variant="light"></b-spinner>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Loader",
  computed: {
    ...mapGetters(["isLoading"]),
  },
};
</script>

<style lang="scss" scoped>
.loader-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #00000080;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
</style>
