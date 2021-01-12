<template>
  <Navbar />
  <Notifications v-if="false" />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Notifications from "@/components/Notifications.vue";

export default {
  name: "APP",
  components: { Navbar, Notifications },
};
</script>
