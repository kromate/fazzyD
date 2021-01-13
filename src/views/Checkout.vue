<template>
  <div class="container">
    <MetaData />

    <div class="subCart">
        
    </div>
  </div>
</template>

<script>
import MetaData from "@/components/checkout/MetaData.vue";
export default {
  components: { MetaData },
};
</script>

<style scoped>
.container {
  display: flex;
  padding: 5px;
}

.subCart {
  flex-basis: 50%;
}
</style>
