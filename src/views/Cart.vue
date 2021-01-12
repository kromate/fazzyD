<template>
  <div class="container">
    <div class="header">
      <p class="firstCol">ITEM</p>
      <p class="otherCol">QUANTITY</p>
      <p class="otherCol">UNIT PRICE</p>
      <p class="otherCol">SUBTOTAL</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style scoped>
.header {
  margin-bottom: 5px;
  display: flex;
  width: 800px;
  max-width: 90vw;
}
.firstCol {
  flex-basis: 40%;
}
.otherCol {
  flex-basis: 20%;
}
.container {
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
}
.header > p {
  color: #d79947;
  font-weight: 600;
}
</style>
