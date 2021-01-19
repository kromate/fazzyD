<template>
  <div class="Hcontainer">
    <h1>{{ title }}</h1>
    <div class="HcatCon">
      <div v-for="(cat, index) in catelogue" :key="index" class="HcatHitem">
        <div class="Hitem">
          <img :src="cat.img" alt="" class="Hcustom" v-if="loaded" />
          <Loader w="133.39" h="200" b="8" v-else />
          <div class="flex">
            <img src="@/assets/icon/Heart.svg" alt="" class="Hicon" @click="favourite" />
            <img src="@/assets/icon/addCart.svg" alt="" class="Hicon" @click="cart" />
            <img src="@/assets/icon/share.svg" alt="" class="Hicon" />
          </div>
        </div>
        <p class="Hname">{{ cat.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  components: { Loader },
  name: "homeCatelogue",
  data() {
    return {
      loaded: false,
      inter: "",
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
  methods: {
    cart() {
      this.$store.commit("ShowNotifyCart");
    },
    favourite() {
      this.$store.commit("ShowNotifyFav");
    },
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
  computed: {
    title() {
      return this.$store.state.homeCategoryView;
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
  flex-direction: column;
  align-items: baseline;
}
.Hitem {
  width: 133.33px;
}
.Hicon {
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
.Hname {
  /* text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 2px 2px rgba(206, 199, 184, 0.235); */
  font-size: 1.2rem;
  text-align: center;
  font-weight: 600;
  margin-top: -5.5rem;
  color: #d79947;
  text-decoration: dotted;
}
.HcatHitem {
  margin: 12px 9px;
}
.HcatCon {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 500px) {
  .HcatCon {
    justify-content: center;
  }
}
.Hcustom {
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
.Hcontainer {
  display: flex;
  flex-direction: column;
}
</style>
