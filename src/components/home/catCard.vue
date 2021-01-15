<template>
  <div class="catCardCont">
    <div v-for="(card, index) in cardsIcon" :key="index">
      <label :for="card.name" class="card">
        {{ card.name }}
        <img :src="card.img" alt="" />
      </label>
      <input type="radio" :id="card.name" :value="card.name" name="item" />
    </div>

    <div v-for="(card, index) in cardsImage" :key="index">
      <label :for="card.name" class="card">
        {{ card.name }}
        <img :src="card.img" alt="" class="custom" />
      </label>
      <input type="radio" :id="card.name" :value="card.name" name="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: "catCard",
  data() {
    return {
      cardsIcon: [
        { name: "Home", img: require("@/assets/icon/Home.svg") },
        { name: "Popular", img: require("@/assets/icon/Star.svg") },
      ],
      cardsImage: [
        { name: "Hoodie", img: require("@/assets/gallery/black_hoodie.png") },
        { name: "Trousers", img: require("@/assets/gallery/trousers.png") },
        { name: "Crops", img: require("@/assets/gallery/f_crop.png") },
      ],
    };
  },
};
</script>

<style scooped>
.catCardCont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
}
@media (max-width: 800px) {
  .catCardCont {
    flex-direction: row;
  }
}
.card {
  padding: 0px 0.8rem;
  background-color: black;
  color: #d79947;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 7px;
  border-radius: 7px;
  width: 110px;
  height: 50px;
}

.card + input {
  display: none;
}

label img {
  height: 25px;
  margin-left: 12px;
}
.custom {
  position: relative;
  right: -12px;
  height: 48px;
  border-radius: 4px;
}
</style>
