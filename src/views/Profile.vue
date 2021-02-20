<template>
  <div class="container">
    <h1>Profile</h1>
    <Measurement />
  </div>
</template>

<script>
import Measurement from "@/components/profile/Measurement.vue";
export default {
  components: { Measurement },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  margin-bottom: 2rem;
  text-align: center;
  color: #ff9305;
  stroke: black;
  stroke-width: 4px;
  width: fit-content;
  border: 2\pxsolidrgba(101, 67, 22, 0.74);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
