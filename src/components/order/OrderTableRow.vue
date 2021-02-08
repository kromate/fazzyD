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
            <p class="progress">Progress: In Transit</p>
          </div>
        </div>
      </div>
    </div>

    <div class="otherCol justify align flex ">
      <p class="detailText">Your Order has been received and it’s currently being processed</p>
      <button class="cancel">
        <img src="@/assets/icon/cancel.svg" alt="" />
        <p>Cancel Order</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableRow",
};
</script>

<style scoped>
.cancel {
  display: flex;
  align-items: center;
  padding: 6px;
  margin-top: 0.6rem;
  background: #fc940c81;
  border-radius: 3px;
}
.cancel > img {
  height: 20px;
  margin-right: 0.5rem;
}
.progress {
  font-size: 0.9rem;
  font-size: 900;
}
.ml {
  margin-left: 15px;
}
h1 {
  font-size: 1.3rem;
  margin-bottom: 5px;
}

.firstCol {
  flex-basis: 55%;
}
.otherCol {
  flex-basis: 45%;
  margin-left: 1rem;

  flex-direction: column;
}
.row {
  background: #000;
  width: 800px;
  max-width: 90vw;
  display: flex;
  padding: 3px 9px;
  min-height: 120px;
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
  margin: 0px 10px;
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

.detailText {
  font-size: 0.8rem;
  font-weight: normal;
  text-align: center;
  color: #d79947;
}

@media (max-width: 600px) {
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

  .progress {
    font-size: 0.66rem;
    font-size: 900;
  }
}
</style>
