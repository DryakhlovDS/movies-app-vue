<template>
  <div id="app">
    <Loader />
    <MainBg :poster="posterUrl" />
    <Header />
    <Title />
    <MoviesList @changeBg="changePosterUrl" @aboutMovie="changeMovie" />
    <Pagination />
    <ConfirmDelete />
    <b-modal
      id="aboutMovie"
      centered
      size="xl"
      hide-footer
      :title="movie.Title"
      header-bg-variant="dark"
      header-text-variant="light"
    >
      <About :movie="movie" />
    </b-modal>
    <Notification />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList.vue";
import Header from "./components/Header.vue";
import Title from "./components/Title.vue";
import MainBg from "./components/MainBg.vue";
import Pagination from "./components/Pagination.vue";
import ConfirmDelete from "./components/ConfirmDelete.vue";
import Notification from "./components/Notification.vue";
import Loader from "./components/Loader.vue";
import About from "./components/About.vue";
// add rout query

export default {
  name: "App",
  components: {
    MainBg,
    MoviesList,
    Header,
    Title,
    Pagination,
    ConfirmDelete,
    Notification,
    Loader,
    About,
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
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dadada;
}
</style>
