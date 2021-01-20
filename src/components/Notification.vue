<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Notification",
  computed: {
    ...mapGetters(["lastMessage"]),
  },
  watch: {
    lastMessage: "makeToast",
  },
  methods: {
    makeToast({ variant = "default", title = "No title", msg = "message" }) {
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
