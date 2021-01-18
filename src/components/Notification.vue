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
    <div class="d-block text-center">
      {{ movie }}
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "Notification",
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {},
};
</script>
