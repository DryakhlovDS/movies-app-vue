<template>
  <div></div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Notification",
  computed: {
    ...mapMutations(["ADD_MESSAGE_POOL"]),
  },
  watch: {
    ADD_MESSAGE_POOL: "makeToast",
  },
  methods: {
    makeToast({ variant = "default", title = "No title", msg = "1" }) {
      this.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        toaster: "b-toaster-bottom-left",
        solid: true,
      });
    },
  },
};
</script>
