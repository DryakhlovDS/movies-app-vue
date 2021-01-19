<template>
  <h2 class="title" v-if="isQueryMovies">
    {{ moviesList.length }} movies found
  </h2>
  <h2 class="title" v-else>IMDB Top {{ totalMovies }}</h2>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Title",
  computed: {
    ...mapGetters("movies", ["totalMovies", "isQueryMovies", "moviesList"]),
  },
};
</script>

<style scoped>
.title {
  margin: 2rem;
  font-size: 2rem;
}
</style>
