<template>
  <div class="catCardCont">
    <div v-for="(card, index) in cardsIcon" :key="index">
      <label
        :for="card.name"
        @click="changeCard(card.name)"
        :class="[selected == card.name ? 'select' : '', 'card']"
      >
        {{ card.name }}
        <img :src="card.img" alt="" />
      </label>
      <input type="radio" :id="card.name" :value="card.name" name="item" />
    </div>

    <div v-for="(card, index) in cardsImage" :key="index">
      <label
        :for="card.name"
        @click="changeCard(card.name)"
        :class="[selected == card.name ? 'select' : '', 'card']"
      >
        {{ card.name }}
        <img :src="card.img" alt="" class="custom" v-if="loaded" />
        <Loader w="32.02" h="50" b="8" v-else class="custom" />
      </label>
      <input type="radio" :id="card.name" :value="card.name" name="item" />
    </div>
  </div>
</template>

<script>
// import Loader from "@/components/Loader.vue";
export default {
  components: { Loader },
  name: "catCard",
  data() {
    return {
      inter: "",
      loaded: false,
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
  computed: {
    selected() {
      return this.$store.state.homeCategoryView;
    },
  },
  methods: {
    changeCard(data) {
      this.$store.commit("changeHomeCategoryView", data);
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
  mounted() {
    this.show();
  },
};
</script>

<style scooped>
.select {
  background: #794807d2 !important;
  color: black !important;
  font-weight: 600;
}
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
  cursor: pointer;
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
