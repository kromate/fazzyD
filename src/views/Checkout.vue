<template>
  <div class="container">
    <MetaData />

    <div class="subCart">
      <div class="row" v-for="n in 3" :key="n">
        <div class="firstCol">
          <img src="@/assets/gallery/black_hoodie.png" class="subCartImg" />
          <div class="subCartDet">
            <h3>Zylo Hoodie</h3>
            <p>Qty: 1</p>
          </div>
        </div>

        <div class="otherCol">
          <h2>$ 20</h2>
        </div>
      </div>
      <div class="pricing">
        <div class="firstCol">
          <h1>Subtotal</h1>
        </div>
        <div class="otherCol">
          <h2>$ 60</h2>
        </div>
      </div>
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
  justify-content: space-between;
}
.row {
  background: rgba(0, 0, 0, 0.459);
  display: flex;
  padding: 3px;
  min-height: 60px;
  align-items: center;
  margin: 10px 0px;
}
.pricing {
  display: flex;
  padding: 3px;
  min-height: 60px;
  align-items: center;
  margin: 10px 0px;
}
.subCart {
  flex-basis: 50%;
  background: #c4c4c42a;
  padding: 5px;
}
.subCartImg {
  height: 60px;
  border-radius: 3px;
}
.subCartDet {
  margin-left: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0px;
}
.subCartDet > p {
  color: #fc940c;
  font-weight: 600;
  letter-spacing: 1.5px;
}
h3 {
  color: #d79947;
}
h2 {
  color: #fc940c;
  font-size: 2rem;
}
h1 {
  color: #fc940c;
}
.firstCol {
  display: flex;
  flex-basis: 75%;
}
.otherCol {
  display: flex;
  flex-basis: 25%;
}
</style>
