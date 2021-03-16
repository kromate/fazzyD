<template>
  <div class="container">
    <div class="catCon" v-if="favourite.length">
      <div v-for="(cat, index) in favourite" :key="index" class="catItem">
        <div class="item">
          <img
            :src="cat.img"
            alt=""
            class="custom"
            v-if="loaded"
            @click="switchToDetailPage(cat)"
          />
          <Loader w="133.39" h="200" b="8" v-else />
          <div class="flex">
            <img
              src="@/assets/icon/Cancel_Heart.svg"
              alt=""
              class="icon"
              @click="removeFavourite(cat)"
            />
            <img src="@/assets/icon/addCart.svg" alt="" class="icon" @click="cart(cat)" />
            <img src="@/assets/icon/share.svg" alt="" class="icon" @click="share(cat.id)" />
          </div>
        </div>
        <p class="name">{{ cat.name }}</p>
      </div>
    </div>

    <div v-else>
      <Loader w="133.39" h="200" b="8" />
      <p class="lood">loading....</p>
    </div>
  </div>
  <ShareProduct :showModal="showModal" :url="url" @close="showModal = !showModal" />
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import Loader from "@/components/imgLoader.vue";
import ShareProduct from "@/components/home/ShareProduct.vue";
export default {
  components: { Loader, ShareProduct },
  name: "Favcatelogue",
  data() {
    return {
      loaded: false,
      showModal: false,
      inter: "",
      favourite: [],
    };
  },
  methods: {
    switchToDetailPage(data) {
      this.$store.commit("updatedetailedItem", data);
      this.$router.push("/details");
    },
    cart(data) {
      let item = { count: 1, ...data };
      this.$store.commit("updatedetailedItem", item);
      this.$store.dispatch("addToCart");
    },
    removeFavourite(data) {
      console.log(data);
      const collection = firebase.firestore().collection("users");
      collection
        .doc(this.$store.state.user.uid)
        .update({
          favourite: firebase.firestore.FieldValue.arrayRemove(data),
        })
        .then(() => {
          this.$store.commit("RemoveNotifyFav");
          this.init();
        })
        .catch((err) => {
          this.$store.commit("wrong");
          console.log(err);
        });
    },
    init() {
      this.favourite = [];
      const collection = firebase.firestore().collection("users");
      collection
        .doc(this.$store.state.user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            if (this.favourite) {
              this.favourite = doc.data().favourite;
            } else {
              this.$store.commit("updateFavState", false);
            }
          } else {
            console.log("Not Found");
          }
        });
    },
    share(data) {
      if (navigator.share) {
        navigator
          .share({
            title: "Fazzy D ",
            text: `Check out this nice wear on ${window.location.origin}`,
            url: `${window.location.origin}/details/?id=${data} `,
          })
          .then(() => console.log("Successful share"))
          .catch((error) => console.log("Error sharing", error));
      } else {
        this.url = `${window.location.origin}/details/?id=${data} `;
        this.showModal = true;
      }
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
    this.init();
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
  width: 22px;
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
.lood {
  font-size: 1.2rem;
  text-align: center;
  font-weight: 600;
  color: #d79947;
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
