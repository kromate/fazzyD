<template>
  <div class="container">
    <div class="header">
      <p class="firstCol ml">ITEM</p>
      <p class="otherCol ml">QUANTITY</p>
      <p class="otherCol ml">UNIT PRICE</p>
      <p class="otherCol ml">SUBTOTAL</p>
    </div>

    <div class="row" v-for="n in 2" :key="n">
      <div class="firstCol bod flex align">
        <img src="@/assets/gallery/black_hoodie.png" class="cartImg" />
        <div class="cartDet">
          <h1>Zylo Hoodie</h1>
          <p>Color: black</p>
          <p>Size: XL</p>
          <div class=" flex opt">
            <div class="flex align point">
              <img src="@/assets/icon/Heart.svg" class="icon" />
              <p class="iconText">Add To Favourite</p>
            </div>
            <div class="flex align ml point">
              <img src="@/assets/icon/Delete.svg" class="icon" />
              <p class="iconText">Remove</p>
            </div>
          </div>
        </div>
      </div>

      <p class="otherCol ItSel justify align flex bod">
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </p>
      <p class="otherCol ItSel justify align flex bod">$ 20</p>
      <p class="otherCol ItSel justify align flex ">$ 20</p>
    </div>

    <div class="header end">
      <p class="otherCol bright">Total</p>
      <p class="otherCol bright">$ 100</p>
    </div>
    <div class="header end">
      <p class="dev">Delivery Fees not included Yet</p>
    </div>

    <div class="flex end length ">
      <button class="primaryBtn shopBtn">CONTINUE SHOPPING</button>
      <button class="secondaryBtn shopBtn">PROCEED TO PAYMENT</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
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
  /* font-size: 0.5rem; */
}
.dev {
  font-size: 0.8rem;
  margin-right: 30px;
}
select {
  background: transparent;
  color: #d79947;
  font-size: 1.3rem;
  border: none;
}
.ItSel {
  color: #d79947;
  font-weight: 600;
  font-size: 1.4rem;
}
.ml {
  margin-left: 15px;
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
  margin-bottom: 15px;
}
.header {
  margin-bottom: 5px;
  display: flex;
  width: 800px;
  max-width: 90vw;
  /* text-align: center; */
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

.end {
  justify-content: flex-end;

  font-weight: 500;
  font-size: 1.3rem;
  text-align: center;
}
</style>
