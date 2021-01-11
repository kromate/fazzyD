<template>
  <div class="container">
    <h1>Home</h1>
    <div class="catCon">
      <div v-for="(cat, index) in catelogue" :key="index" class="catItem">
        <div class="item">
          <img :src="cat.img" alt="" class="custom" />
          <div class="flex">
            <img src="@/assets/icon/Heart.svg" alt="" class="icon" />
            <img src="@/assets/icon/addCart.svg" alt="" class="icon" />
            <img src="@/assets/icon/share.svg" alt="" class="icon" />
          </div>
        </div>
        <p class="name">{{ cat.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "catelogue",
  data() {
    return {
      catelogue: [
        { name: "Hoodie", img: require("@/assets/gallery/black_hoodie.png") },
        { name: "Trousers", img: require("@/assets/gallery/trousers.png") },
        { name: "Crops", img: require("@/assets/gallery/f_crop.png") },
        { name: "Crops", img: require("@/assets/gallery/sf_crop.png") },
        { name: "Trousers", img: require("@/assets/gallery/trousers.png") },
        { name: "Crops", img: require("@/assets/gallery/f_crop.png") },
        { name: "Crops", img: require("@/assets/gallery/sf_crop.png") },
        { name: "Hoodie", img: require("@/assets/gallery/black_hoodie.png") },
        { name: "Trousers", img: require("@/assets/gallery/trousers.png") },
        { name: "Crops", img: require("@/assets/gallery/f_crop.png") },
      ],
    };
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.item {
  width: 133.33px;
}
.icon {
  background-color: rgba(0, 0, 0, 0.537);
  border-radius: 100%;
  padding: 4px;
  height: 22px;
  position: relative;
  top: -105px;
  right: -5px;
  cursor: pointer;
  margin-bottom: 3px;
}
.name {
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 2px 2px rgba(206, 199, 184, 0.235);
  font-size: 1.2rem;
  /* text-align: center; */
  font-weight: 600;
  margin-top: -1.5rem;
}
.catItem {
  margin: 12px 9px;
}
.catCon {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
}
.custom {
  height: 200px;
  border-radius: 8px;
}
h1 {
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 4px 2px rgba(0, 0, 0, 0.541);
  font-weight: 700;
  font-size: 1 0.8rem;
  margin-bottom: 1rem;
  margin-left: 9px;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
