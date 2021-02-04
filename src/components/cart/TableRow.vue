<template>
  <div v-if="cart.length">
    <div class="row" v-for="(cat, index) in cart" :key="index">
      <div class="firstCol bod flex align">
        <img :src="cat.img" class="cartImg" />
        <div class="cartDet">
          <h1>{{ cat.name }}</h1>
          <p>{{ cat.details }}</p>
          <!-- <p>Size: XL</p> -->
          <div class=" flex opt">
            <div class="flex align point" @click="favourite(cat)">
              <img src="@/assets/icon/Heart.svg" class="icon" />
              <p class="iconText">Add to Fav</p>
            </div>
            <div class="flex align ml point" @click="removeCart(cat)">
              <img src="@/assets/icon/Delete.svg" class="icon" />
              <p class="iconText">Remove</p>
            </div>
          </div>
        </div>
      </div>

      <p class="otherCol ItSel justify align flex bod">
        <select v-model="units">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </p>
      <p class="otherCol ItSel justify align flex bod hide">&#8358; {{ cat.price }}</p>
      <p class="otherCol ItSel justify align flex ">&#8358;{{ cat.price * units }}</p>
    </div>
  </div>

  <div v-else>
    <Loader w="689" h="106" b="4" />
    <p class="lood">loading....</p>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import Loader from "@/components/imgLoader.vue";
export default {
  name: "TableRow",
  components: { Loader },
  data() {
    return {
      units: "1",
      cart: [],
    };
  },

  methods: {
    favourite(data) {
      this.$store.commit("updatedetailedItem", data);
      this.$store.dispatch("addToFaV");
    },
    removeCart(data) {
      console.log(data);
      const collection = firebase.firestore().collection("users");
      collection
        .doc(this.$store.state.user.uid)
        .update({
          cart: firebase.firestore.FieldValue.arrayRemove(data),
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
      this.cart = [];
      const collection = firebase.firestore().collection("users");
      collection
        .doc(this.$store.state.user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.cart = doc.data().cart;
          } else {
            console.log("Not Found");
          }
        });
    },
  },
  created() {
    this.init();
  },
};
</script>

<style scoped>
.lood {
  font-size: 1.2rem;
  text-align: center;
  font-weight: 600;
  color: #d79947;
}
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
