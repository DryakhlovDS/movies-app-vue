<template>
  <b-modal
    id="aboutMovie"
    centered
    size="xl"
    hide-footer
    :title="movie.Title"
    header-bg-variant="dark"
    header-text-variant="light"
  >
    <div class="about">
      <div class="about__aside">
        <img :src="movie.Poster" alt="poster" />
        <div class="about__control">
          <b-button class="about__btn">Edit</b-button>
          <b-button
            class="about__btn"
            variant="danger"
            @click.prevent="deleteMovie"
            >Delete</b-button
          >
        </div>
      </div>

      <div class="about__main">
        <p v-for="(value, key) in movie" :key="key">{{ key }}: {{ value }}</p>
        {{ movie }}
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "About",
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {},
  methods: {
    ...mapActions("modal", ["setInfoMovie"]),
    async deleteMovie() {
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
.about {
  display: flex;

  &__aside {
    width: 30%;
    margin-right: 2rem;
  }

  &__control {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  &__btn {
    width: 40%;
    border: 2px solid #545b62;
    color: #545b62;
    background: transparent;
  }
}
</style>
