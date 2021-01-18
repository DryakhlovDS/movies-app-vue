<template>
  <div id="app">
    <MainBg :poster="posterUrl" />
    <Header />
    <h2 class="title">IMDB Top 250</h2>
    <MoviesList @changeBg="changePosterUrl" />
    <Pagination />
    <ConfirmDelete />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MoviesList from "./components/MoviesList.vue";
import Header from "./components/Header.vue";
import MainBg from "./components/MainBg.vue";
import Pagination from "./components/Pagination.vue";
import ConfirmDelete from "./components/ConfirmDelete.vue";

export default {
  name: "App",
  components: {
    MainBg,
    MoviesList,
    Header,
    Pagination,
    ConfirmDelete,
  },
  data: () => ({
    posterUrl: "",
  }),
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
    changePosterUrl(url) {
      this.posterUrl = url;
    },
  },
};
</script>

<style lang="scss">
#app {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dadada;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.title {
  margin: 2rem;
  font-size: 2rem;
}
</style>
