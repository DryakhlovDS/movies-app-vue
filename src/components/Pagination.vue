<template>
  <b-container v-if="!isQueryMovies" class="pt-3 d-flex justify-content-center">
    <b-pagination
      first-number
      last-number
      prev-text="Prev"
      next-text="Next"
      size="md"
      :total-rows="totalMovies"
      :per-page="moviesPerPage"
      :value="currentPage"
      @change="setCurrentPage"
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
