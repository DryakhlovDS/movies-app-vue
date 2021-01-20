<template>
  <b-container class="d-flex flex-wrap list">
    <Movie
      v-for="(movie, key) in moviesList"
      @mouseover.native="onMouseOver(movie.Poster)"
      :movie="movie"
      :key="key"
      @click.native="onClickMovie(movie)"
    />
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import Movie from "./Movie";

export default {
  name: "MoviesList",
  components: {
    Movie,
  },
  computed: {
    ...mapGetters("movies", ["moviesList"]),
  },
  methods: {
    onMouseOver(poster) {
      this.$emit("changeBg", poster);
    },
    onClickMovie(movie) {
      this.$emit("aboutMovie", movie);
      this.$bvModal.show("aboutMovie");
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  justify-content: space-evenly;
  align-items: center;
}
</style>
