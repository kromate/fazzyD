<template>
  <div class="container">
    <MetaData />

    <SubCart />
  </div>
</template>

<script>
import MetaData from "@/components/checkout/MetaData.vue";
import SubCart from "@/components/checkout/SubCart.vue";
export default {
  components: { MetaData, SubCart },
};
</script>

<style scoped>
.container {
  display: flex;
  padding: 5px;
  justify-content: space-between;
}

@media (max-width: 700px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
