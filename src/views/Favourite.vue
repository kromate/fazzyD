<template>
  <div class="container">
    <h1>Favourite</h1>
    <div class="favImg">
      <Catelogue />
    </div>
  </div>
</template>

<script>
import Catelogue from "@/components/favourite/Catelogue.vue";
export default {
  components: { Catelogue },
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
