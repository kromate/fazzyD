<template>
  <div class="header">
    <p class="firstCol ml">ITEM</p>
    <p class="otherCol ml">DETAILS</p>
  </div>

  <TableRow />
</template>

<script>
import TableRow from "@/components/order/OrderTableRow.vue";
export default {
  name: "Table",
  components: { TableRow },
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
  flex-basis: 55%;
}
.otherCol {
  flex-basis: 45%;
}
.end {
  justify-content: flex-end;

  font-weight: 500;
  font-size: 1.3rem;
  text-align: center;
}
@media (max-width: 600px) {
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
}
</style>
