<template>
  <div class="container">
    <OrderDetails :showModal="showModal" :item="OD" @close="showModal = false" />
    <details>
      <summary><h2>Orders</h2> </summary>
      <div v-if="ordersLoading">
        <h2>loading...</h2>
      </div>
      <div v-else-if="orders ? orders.length : false">
        <div class="O_card" v-for="n in orders" :key="n.id" @click="showO(n)">
          <p>{{ n.date }}</p>
        </div>
      </div>
      <div v-else>
        <h2>You have no orders yet</h2>
      </div>
    </details>
  </div>
</template>

<script>
import OrderDetails from "@/components/profile/OrderDetails.vue";
export default {
  components: { OrderDetails },
  data() {
    return {
      OD: {},
      // orders: [
      //   {
      //     id: "345678908765",
      //     name: "Hoodie and long sleeves With a touch of rass rass",
      //     price: "12000",
      //     total: "",
      //     date: "20-2-2021",
      //     completed: "No",
      //     delivered: "No",
      //   },
      // ],
      showModal: false,
      title: "Upload",
      mode: "Pick Up",
      location: "",
      phone: "",
      body: {},
      check: false,
    };
  },
  computed: {
    ordersLoading() {
      return this.$store.state.ordersLoading;
    },
    orders() {
      return this.$store.state.Admin_orders;
    },
  },
  methods: {
    showO(data) {
      let Array_Order = [];
      Object.keys(data.order).map((key) => {
        Array_Order.push(data.order[key]);
      });
      console.log(Array.from(Array_Order));
      console.log("qwerty", typeof data.order);
      this.OD = Array.from(Array_Order);
      this.showModal = true;
      // console.log(data);
    },
  },
  mounted() {
    this.$store.dispatch("getAdminOrders");
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.O_card {
  background: rgb(255, 255, 255);
  width: fit-content;
  display: inline-block;
  margin: 1rem;
  cursor: pointer;
}

.cartbtn {
  width: auto !important;
  font-size: 0.7rem;
  margin-top: 0;
  padding: 0.3rem;
}
details {
  text-align: center;
  border-radius: 0.2rem;
  width: 85vw;
  max-width: 550px;
  background-color: black;
  border: none;
  height: fit-content;
  margin: 0.3rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  color: #ff9305;
  transition: 0.5s;
}
details[open] summary {
  background-color: rgba(48, 45, 45, 0.802);
  transition: 0.5s;
}
h5 {
  margin: 0.5rem 0rem !important;
}
summary {
  border-radius: 0.2rem;
  cursor: pointer;
  outline: none;
  padding: 0.2rem 0.8rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  border: 1px solid;
}

p {
  padding: 1rem;
}

summary::-webkit-details-marker {
  display: none;
}
</style>
