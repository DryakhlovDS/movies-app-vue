<template>
  <div id="app">
    <Loader />
    <MainBg :poster="posterUrl" />
    <Header />
    <h2 class="title">IMDB Top 250</h2>
    <MoviesList @changeBg="changePosterUrl" @aboutMovie="changeMovie" />
    <Pagination />
    <ConfirmDelete />
    <Notification :movie="movie" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList.vue";
import Header from "./components/Header.vue";
import MainBg from "./components/MainBg.vue";
import Pagination from "./components/Pagination.vue";
import ConfirmDelete from "./components/ConfirmDelete.vue";
import Notification from "./components/Notification.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: {
    MainBg,
    MoviesList,
    Header,
    Pagination,
    ConfirmDelete,
    Notification,
    Loader,
  },
  data: () => ({
    posterUrl: "",
    movie: {},
  }),
  computed: {
    ...mapGetters(["isLoading"]),
  },
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
    changePosterUrl(url) {
      this.posterUrl = url;
    },
    changeMovie(movie) {
      this.movie = movie;
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
