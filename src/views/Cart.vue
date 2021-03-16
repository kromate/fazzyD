<template>
  <div class="container" v-if="Empty_Cart">
    <Table />
    <div class="flex end length ">
      <button class="primaryBtn shopBtn" @click="$router.push('home')">CONTINUE SHOPPING</button>
      <button class="secondaryBtn shopBtn" @click="$router.push('checkout')">
        PROCEED TO PAYMENT
      </button>
    </div>
  </div>

  <p class="empty" v-else>
    You currently Have no item in cart <br />
    click <router-link class="box" to="/home" style="margin: 1rem;">Here </router-link> to return to
    home page
  </p>
</template>

<script>
import Table from "@/components/cart/Table.vue";

export default {
  components: { Table },
  name: "Cart",
  computed: {
    Empty_Cart() {
      return !this.$store.state.Empty_Cart;
    },
  },

  created() {
    this.$store.dispatch("getCart");
  },
};
</script>

<style scoped>
.length {
  width: 837px;
  max-width: 90vw;
  display: flex;
}

.shopBtn {
  margin: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  width: 15rem;
}
a {
  text-decoration: none;
}
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
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-top: 2rem;
}

.end {
  justify-content: flex-end;

  font-weight: 500;
  font-size: 1.3rem;
  text-align: center;
}
@media (max-width: 600px) {
  button {
    font-size: 0.63rem;
    padding: 0;
  }
}
</style>
