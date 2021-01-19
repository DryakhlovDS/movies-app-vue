<template>
  <div class="movie mb-4">
    <div class="movie__bg" :style="posterBg">
      <!-- <img :src="posterUrl" alt="" style="display: block;"> -->
    </div>
    <div class="movie__inner">
      <h4 class="movie__title">{{ movie.Title }}</h4>
      <p class="movie__year">{{ movie.Year }}</p>
      <div class="movie__control">
        <b-button class="movie__btn">Edit</b-button>
        <b-button
          class="movie__btn"
          variant="danger"
          @click.prevent="deleteMovie"
          >Delete</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Movie",
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    posterBg() {
      return {
        "background-image": `url(${this.posterUrl})`,
      };
    },
    posterUrl() {
      return this.movie.Poster === "N/A"
        ? "assets/img/no_cover.jpg"
        : this.movie.Poster;
    },
  },
  methods: {
    ...mapActions("modal", ["setInfoMovie"]),
    deleteMovie() {
      const movieInfo = {
        id: this.movie.imdbID,
        title: this.movie.Title,
      };
      this.setInfoMovie(movieInfo);
      this.$bvModal.show("confirm");
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 445px;
  cursor: pointer;
  transition: box-shadow 0.2s linear, transform 0.2s linear;

  &:hover {
    box-shadow: 0 5px 40px rgba(255, 255, 255, 0.7);
    transform: scale(1.02);

    & .movie__bg::before {
      background: #00000080;
    }

    & .movie__inner {
      opacity: 1;
    }
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      transition: all 0.2s linear;
    }
  }

  &__inner {
    position: relative;
    padding: 20px;
    height: 100%;
    // top: 0;
    // left: 0;
    // bottom: 0;
    // right: 0;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    text-align: left;
    opacity: 0;
    transition: all 0.2s linear;
  }

  &__control {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }

  &__btn {
    width: 40%;
    border: 2px solid #ffffff;
    background: transparent;
  }
}
</style>
