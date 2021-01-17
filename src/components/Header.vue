<template>
  <div class="header">
    <b-container>
      <div class="header__item">
        <div class="header__logo">
          Movies App
        </div>
      </div>

      <div class="header__item"></div>
      <div class="header__item"></div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00000080;
  color: #ffffff;

  &__logo {
    font-size: 1.3rem;
  }
}
</style>
