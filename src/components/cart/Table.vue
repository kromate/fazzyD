<template>
  <div class="header">
    <p class="firstCol ml">ITEM</p>
    <p class="otherCol ml">QUANTITY</p>
    <p class="otherCol ml hide">UNIT PRICE</p>
    <p class="otherCol ml">SUBTOTAL</p>
  </div>

  <TableRow @total="updateTotal($event)" />

  <div class="header end">
    <p class="otherCol bright">Total</p>
    <p class="otherCol bright ItSel" v-if="total">&#8358; {{ total }}</p>
    <p class="otherCol bright ItSel" v-else>Loading</p>
  </div>
  <div class="header end">
    <p class="dev">Delivery Fees not included Yet</p>
  </div>
</template>

<script>
import TableRow from "@/components/cart/TableRow.vue";
export default {
  name: "Table",
  components: { TableRow },

  computed: {
    total() {
      return this.$store.state.total;
    },
  },
  methods: {
    updateTotal(total) {
      this.total = total;
    },
  },
};
</script>

<style scoped>
.ml {
  margin-left: 15px;
}
.dev {
  font-size: 0.8rem;
  margin-right: 30px;
}
.header {
  margin-bottom: 5px;
  display: flex;
  width: 800px;
  max-width: 90vw;
  /* text-align: center; */
}
.header > p {
  color: #d79947;
  font-weight: 600;
}
.firstCol {
  flex-basis: 40%;
}
.otherCol {
  flex-basis: 20%;
}
.end {
  justify-content: flex-end;

  font-weight: 500;
  font-size: 1.3rem;
  text-align: center;
}
@media (max-width: 600px) {
  .firstCol {
    flex-basis: 60%;
  }
  .otherCol {
    flex-basis: 20%;
  }
  .header > p {
    color: #d79947;
    font-weight: 600;
    font-size: 3vw;
  }
  .bright {
    font-size: 15px !important;
    letter-spacing: 1px;
  }
  .dev {
    margin-right: 0px;
  }
  .ItSel {
    font-size: 0.7rem !important;
  }
}
</style>
