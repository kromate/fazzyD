<template>
  <div class="load"></div>
</template>

<script>
export default {
  name: "loader",
  props: ["h", "w"],

  mounted() {
    document.getElementsByClassName("load").style.display = "block";
    document.getElementsByClassName("load").style.height = "500px";
    document.getElementsByClassName("load").style.width = "500px";
  },
};
</script>

<style></style>
