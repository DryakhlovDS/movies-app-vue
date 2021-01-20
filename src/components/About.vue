<template>
  <div class="about">
    <div class="about__aside">
      <img class="about__poster" :src="movie.Poster" alt="poster" />
      <div class="about__control">
        <!-- <b-button class="about__btn">Edit</b-button> -->
        <b-button
          class="about__btn ml-auto"
          variant="danger"
          @click.prevent="deleteMovie"
          >Delete</b-button
        >
      </div>
    </div>

    <div class="about__main">
      <b-form-rating
        v-model="movie.imdbRating"
        stars="10"
        readonly
        show-value
        precision="1"
        no-border
        show-value-max
        variant="warning"
        class="about__rating px-0"
      ></b-form-rating>
      <p class="about__description">{{ movie.Plot }}</p>
      <div class="mt-3 mb-4">
        <b-badge variant="dark" :class="classBadges">
          Year: {{ movie.Year }}
        </b-badge>
        <b-badge variant="dark" :class="classBadges">
          Type: {{ movie.Type }}
        </b-badge>
        <b-badge variant="dark" :class="classBadges">
          Runtime: {{ movie.Runtime }}
        </b-badge>
        <b-badge variant="dark" :class="classBadges">
          Genre: {{ movie.Genre }}
        </b-badge>
        <b-badge variant="dark" :class="classBadges">
          Language: {{ movie.Language }}
        </b-badge>
      </div>
      <table class="table">
        <tbody>
          <tr>
            <th>Production</th>
            <td>{{ movie.Production }}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{{ movie.Country }}</td>
          </tr>
          <tr>
            <th>Director</th>
            <td>{{ movie.Director }}</td>
          </tr>
          <tr>
            <th>Writer</th>
            <td>{{ movie.Writer }}</td>
          </tr>
          <tr>
            <th>Actors</th>
            <td>{{ movie.Actors }}</td>
          </tr>
          <tr>
            <th>Awards</th>
            <td>{{ movie.Awards }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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
  data: () => ({
    classBadges: "mr-2 p-2 mt-2",
  }),
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

  &__poster {
    display: block;
    width: 100%;
    height: auto;
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

  &__main {
    width: 67%;
  }

  &__rating {
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-grow: 0 !important;
    box-shadow: none;

    &::v-deep {
      & .b-rating-star,
      .b-rating-value {
        flex-grow: 0 !important;
        justify-content: flex-start;
        padding: 0;
        margin-right: 0.5rem;
        font-size: 1.3rem;
        font-weight: 300;
      }
    }
  }

  &__description {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: 300;
    text-align: justify;
  }
}
</style>
