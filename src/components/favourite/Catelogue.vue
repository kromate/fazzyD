<template>
  <div class="container">
    <div class="catCon">
      <div v-for="(cat, index) in catelogue" :key="index" class="catItem">
        <div class="item">
          <img :src="cat.img" alt="" class="custom" v-if="loaded" />
          <Loader w="133.39" h="200" b="8" v-else />
          <div class="flex">
            <img src="@/assets/icon/Cancel_Heart.svg" alt="" class="icon" />
            <img src="@/assets/icon/addCart.svg" alt="" class="icon" />
          </div>
        </div>
        <p class="name">{{ cat.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../components/Loader.vue";
export default {
  components: { Loader },
  name: "Favcatelogue",
  data() {
    return {
      loaded: false,
      inter: "",
      catelogue: [
        { name: "Hoodie", img: require("@/assets/gallery/black_hoodie.png") },
        { name: "Trousers", img: require("@/assets/gallery/trousers.png") },
        { name: "Zylo", img: require("@/assets/gallery/f_crop.png") },
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
  methods: {
    show() {
      this.inter = setInterval(() => {
        this.imgLoad();
      }, 1000);
    },
    imgLoad() {
      var image = document.querySelector("img");
      console.log(image.complete);
      if (image.complete && image.naturalHeight >= 0) {
        this.loaded = true;
        clearInterval(this.inter);
      }
    },
  },
  mounted() {
    this.show();
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  /* flex-direction: column; */
  /* align-items: baseline; */
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
  top: -40px;
  right: -15px;
  cursor: pointer;
  margin-right: 5px;
}
.name {
  /* text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 2px 2px rgba(206, 199, 184, 0.235); */
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
  margin-top: -1.5rem;
  color: #d79947;
  text-decoration: dotted;
  width: 160px;
}
.catItem {
  margin: 12px;
  width: 133.09px;
}
.catCon {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 90vw;
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
  margin-left: 24px;
  color: #d79947;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
