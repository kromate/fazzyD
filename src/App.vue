<template>
  <Navbar v-if="true" />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "APP",
  components: { Navbar },
};
</script>
