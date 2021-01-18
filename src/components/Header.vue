<template>
  <div class="header">
    <b-container>
      <b-navbar toggleable="lg" type="dark" variant="dark" class="header__nav">
        <b-navbar-brand href="#">Movies App</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form @submit.prevent="fetchSearch">
              <b-form-input
                name="search"
                size="sm"
                class="mr-sm-2 header__search"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>
            <b-button size="sm" class="my-2 ml-3">Add</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  methods: {
    ...mapActions("movies", ["fetchSearch"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00000080;
  color: #ffffff;

  &__nav {
    background: inherit !important;
  }

  &__search {
    background-color: #00000019;
    border-color: #00000096;

    &::placeholder {
      color: #ffffff;
    }

    &:focus {
      box-shadow: none;
      background-color: #ffffff80;
      border-color: #ffffff;
    }
  }
}
</style>
