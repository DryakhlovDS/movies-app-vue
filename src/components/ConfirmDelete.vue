<template>
  <b-modal
    id="confirm"
    centered
    hide-footer
    hide-header-close
    :title="titleConfirm"
    header-bg-variant="dark"
    header-text-variant="light"
    modal-header-close="close"
  >
    <div class="d-block text-center">
      <h4>{{ titleMovie }}</h4>
    </div>
    <div class=" mt-3 d-flex justify-content-end">
      <b-button
        class="mt-3 w-auto"
        variant="outline-secondary"
        block
        @click="hideModal"
      >
        Cancel
      </b-button>
      <b-button
        class="mt-3 w-auto ml-3"
        variant="outline-danger"
        block
        @click="confirm"
      >
        Confirm
      </b-button>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ConfirmDelete",
  data: () => ({
    titleConfirm: "Please, confirm that you want delete:",
  }),
  computed: {
    ...mapGetters("modal", ["titleMovie", "movieId"]),
  },
  methods: {
    confirm() {
      this.deleteMovie(this.movieId);
      this.fetchMovies();
      this.hideModal();
    },
    hideModal() {
      this.$bvModal.hide("confirm");
    },
    ...mapActions("movies", ["deleteMovie", "fetchMovies"]),
  },
};
</script>
