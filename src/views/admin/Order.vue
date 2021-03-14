<template>
  <div class="container">
    <Table />
  </div>
</template>

<script>
import Table from "@/components/order/OrderTable.vue";
export default {
  components: { Table },
  created() {
    let date = new Date()
      .toUTCString()
      .split(" ")
      .slice(0, 5)
      .join(" ");
    console.log(date);
  },
};
</script>

<style></style>
