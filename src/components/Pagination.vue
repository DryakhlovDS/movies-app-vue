<template>
  <b-container class="pt-3 d-flex justify-content-center">
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
    ...mapGetters("movies", ["totalMovies", "currentPage", "moviesPerPage"]),
  },
  methods: {
    ...mapActions("movies", ["setCurrentPage"]),
  },
};
</script>

<style lang="scss" scoped>

</style>
