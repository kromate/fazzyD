<template>
  <div class="container" v-if="Empty_Fav">
    <h1>Favourite</h1>
    <div class="favImg">
      <Catelogue />
    </div>
  </div>

  <p class="empty" v-else>
    You currently Have no item in Favourite <br />
    click <router-link class="box" to="/home" style="margin: 1rem;">Here </router-link> to go to
    home page
  </p>
</template>

<script>
import Catelogue from "@/components/favourite/Catelogue.vue";
export default {
  components: { Catelogue },
  computed: {
    Empty_Fav() {
      return this.$store.state.Empty_Fav;
    },
  },
};
</script>

<style scoped>
.empty {
  font-size: 1.8rem;
  text-align: center;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 4px 2px rgba(0, 0, 0, 0.541);
  font-weight: 900;
  text-decoration: none;
  width: 260px;
  vertical-align: 10px;
  margin-top: 2rem;
  color: #f4ae53;
  margin: 2rem auto;
}
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
