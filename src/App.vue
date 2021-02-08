<template>
  <Navbar />
  <Notifications />
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
