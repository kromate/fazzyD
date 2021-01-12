<template>
  <div class="container">
    <div class="header">
      <p class="firstCol">ITEM</p>
      <p class="otherCol">QUANTITY</p>
      <p class="otherCol">UNIT PRICE</p>
      <p class="otherCol">SUBTOTAL</p>
    </div>

    <div class="row">
      <div class="firstCol bod flex align">
        <img src="@/assets/gallery/black_hoodie.png" class="cartImg" />
        <div class="cartDet">
          <h1>Zylo Hoodie</h1>
          <p>Color: black</p>
          <p>Size: XL</p>
          <div class=" flex opt">
            <div class="flex align">
              <img src="@/assets/icon/Heart.svg" class="icon" />
              <p class="iconText">Add To Favourite</p>
            </div>
            <div class="flex align ml">
              <img src="@/assets/icon/Delete.svg" class="icon" />
              <p class="iconText">Remove</p>
            </div>
          </div>
        </div>
      </div>

      <p class="otherCol ItSel justify align flex bod">QUANTITY</p>
      <p class="otherCol ItSel justify align flex bod">UNIT PRICE</p>
      <p class="otherCol ItSel justify align flex ">SUBTOTAL</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style scoped>
.ItSel {
  color: #d79947;
}
.ml {
  margin-left: 12px;
}

.iconText {
  font-size: 9px;
  font-weight: 600;
}
.opt {
  margin-top: 10px;
}
.icon {
  height: 15px;
}
.cartDet > p {
  font-size: 0.9rem;
  font-weight: 500;
  font-style: italic;
}
h1 {
  font-size: 1.3rem;
  margin-bottom: 5px;
}
.cartDet {
  display: flex;
  flex-direction: column;
  color: #d79947;
  margin-left: 10px;
}
.bod {
  border-right: 1px solid #d79947;
  height: 86px;
}
.cartImg {
  height: 70px;
  border-radius: 4%;
}
.row {
  background: #000;
  width: 800px;
  max-width: 90vw;
  display: flex;
  padding: 3px 9px;
  height: 100px;
  align-items: center;
}
.header {
  margin-bottom: 5px;
  display: flex;
  width: 800px;
  max-width: 90vw;
  text-align: center;
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
  margin-top: 2rem;
}
.header > p {
  color: #d79947;
  font-weight: 600;
}
</style>
