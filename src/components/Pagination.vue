<template>
  <b-container
    v-if="!isQueryMovies"
    class="pt-3 mt-auto d-flex justify-content-center"
  >
    <b-pagination
      first-number
      last-number
      prev-text="Prev"
      next-text="Next"
      size="md"
      :total-rows="totalMovies"
      :per-page="moviesPerPage"
      :value="currentPage"
      @change="changeCurrentPage"
    />
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Pagination",
  computed: {
    ...mapGetters("movies", [
      "totalMovies",
      "currentPage",
      "moviesPerPage",
      "isQueryMovies",
    ]),
  },
  methods: {
    ...mapActions("movies", ["setCurrentPage"]),
    changeCurrentPage(page) {
      this.$router.push({ query: { page } });
      this.setCurrentPage(page);
    },
  },
};
</script>

<style lang="scss" scoped>
.b-pagination::v-deep .page-item {
  color: #ffffff;
  font-size: 1.2rem;
  background-color: transparent;

  &.active {
    & .page-link {
      border-color: #ffffff;
      background-color: #ffffff;
      color: #530f75;
      box-shadow: none;
    }
  }

  & .page-link {
    color: #ffffff;
    font-size: 1.2rem;
    background-color: transparent;
  }
}
</style>
