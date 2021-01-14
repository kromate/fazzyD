<template>
  <div class="notify flex">
    <img src="@/assets/icon/Heart.svg" class="icon" />
    <p>Item Successfully Added to Favourite</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.notify {
  background: black;
  width: fit-content;
  padding: 9px;
  position: fixed;
  top: 12px;
  right: 5px;
  z-index: 100000;
  border-radius: 7px;
  color: #d79947;
  display: none;
}
.icon {
  height: 20px;
  margin-right: 0.7rem;
}
</style>
