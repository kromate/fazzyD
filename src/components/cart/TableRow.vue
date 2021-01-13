<template>
  <div class="row" v-for="n in 3" :key="n">
    <div class="firstCol bod flex align">
      <img src="@/assets/gallery/black_hoodie.png" class="cartImg" />
      <div class="cartDet">
        <h1>Zylo Hoodie</h1>
        <p>Color: black</p>
        <p>Size: XL</p>
        <div class=" flex opt">
          <div class="flex align point">
            <img src="@/assets/icon/Heart.svg" class="icon" />
            <p class="iconText">Add to Fav</p>
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
    <p class="otherCol ItSel justify align flex bod hide">$ 20</p>
    <p class="otherCol ItSel justify align flex ">$ 20</p>
  </div>
</template>

<script>
export default {
  name: "TableRow",
};
</script>

<style scoped>
.ml {
  margin-left: 15px;
}
h1 {
  font-size: 1.3rem;
  margin-bottom: 5px;
}
.ItSel {
  color: #d79947;
  font-weight: 600;
  font-size: 1.4rem;
}
.firstCol {
  flex-basis: 40%;
}
.otherCol {
  flex-basis: 20%;
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
.opt {
  margin-top: 10px;
}
.cartImg {
  height: 70px;
  border-radius: 4%;
}
.bod {
  border-right: 1px solid #d79947;
  height: 86px;
}
.cartDet {
  display: flex;
  flex-direction: column;
  color: #d79947;
  margin-left: 10px;
  min-width: 100%;
}
.cartDet > p {
  font-size: 0.9rem;
  font-weight: 500;
  font-style: italic;
}
.icon {
  height: 15px;
}
.iconText {
  font-size: 9px;
  font-weight: 600;
}
select {
  background: transparent;
  color: #d79947;
  font-size: 1.3rem;
  border: none;
}

@media (max-width: 600px) {
  .firstCol {
    flex-basis: 60%;
  }
  .otherCol {
    flex-basis: 20%;
  }
  h1 {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  .cartDet > p {
    font-size: 0.7rem;
    font-weight: 500;
    font-style: italic;
  }
  .opt {
    flex-wrap: wrap;
  }
  .ml {
    margin-left: 4px;
  }
}
</style>
