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
</template>

<script>
import Table from "@/components/cart/Table.vue";

export default {
  components: { Table },
  name: "Cart",
  computed: {
    Empty_Cart() {
      return false;
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
