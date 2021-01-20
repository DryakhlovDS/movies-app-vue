<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Title:"
        label-for="title"
        description="Full original title"
      >
        <b-form-input
          id="title"
          v-model="movie.Title"
          type="text"
          placeholder="Enter title"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description:" label-for="plot">
        <b-form-textarea
          id="plot"
          v-model="movie.Plot"
          placeholder="Enter description"
          rows="5"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-row>
        <b-form-group
          id="input-group-4"
          label="Year:"
          label-for="year"
          content-cols-md="12"
        >
          <b-form-input
            id="year"
            v-model="movie.Year"
            placeholder="Enter year"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-3"
          label="Type:"
          label-for="input-3"
          content-cols-md="12"
        >
          <b-form-select
            id="input-3"
            v-model="movie.Type"
            :options="foods"
            required
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-4"
          label="Year:"
          label-for="year"
          content-cols-md="12"
        >
          <b-form-input
            id="year"
            v-model="movie.Year"
            placeholder="Enter year"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-4"
          label="Year:"
          label-for="year"
          content-cols-md="12"
        >
          <b-form-input
            id="year"
            v-model="movie.Year"
            placeholder="Ente"
            required
          ></b-form-input>
        </b-form-group>
      </b-form-row>
      <b-button type="submit" variant="outline-success">Submit</b-button>
      <b-button type="reset" variant="outline-danger" class="ml-3"
        >Reset</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  name: "EditMovie",
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    form: {
      title: "",
    },
    foods: [{ text: "Select one", value: null }, "movie", "series"],
  }),
  methods: {
    onSubmit() {
      console.log(this.movie);
    },
    onReset() {
      this.movie = {};
    },
  },
};
</script>

<style lang="scss" scoped>
.form-row {
  margin-right: 1rem;
}
</style>
