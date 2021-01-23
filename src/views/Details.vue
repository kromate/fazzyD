<template>
  <div class="container" v-if="name">
    <div class="details">
      <h1>{{ name }}</h1>
      <p class="text">
        {{ details }}
      </p>
      <h2>&#8358;{{ Price }}</h2>

      <!-- <div class="size">
        <p class="sItem">XS</p>
        <p class="sItem">S</p>
        <p class="sItem">M</p>
        <p class="sItem">L</p>
        <p class="sItem">XL</p>
      </div> -->

      <button class="primaryBtn cartbtn">ADD TO CART</button>
    </div>

    <div class="detImg">
      <CardImg />
    </div>
  </div>

  <div v-else class="container2">
    <div v-if="!empty">
      <Loader w="233.39" h="340" b="8" />
      <p class="lood">loading....</p>
    </div>

    <p class="empty" v-else>
      Item not Found <br />
      click <router-link class="box" to="/home" style="margin: 1rem;">Here </router-link> to return
      to home page
    </p>
  </div>
</template>

<script>
import CardImg from "@/components/details/cardImg.vue";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import Loader from "@/components/imgLoader.vue";
export default {
  components: { Loader, CardImg },
  name: "Details",
  data() {
    return {
      empty: false,
    };
  },
  computed: {
    complete() {
      return this.$store.state.detailedItem;
    },
    name() {
      return this.$store.state.detailedItem.name;
    },
    details() {
      return this.$store.state.detailedItem.details;
    },
    Price() {
      return this.$store.state.detailedItem.price;
    },
  },

  methods: {
    getfromId() {
      firebase
        .firestore()
        .collection("collection")
        .doc(this.$route.query.id)

        .get()
        .then((doc) => {
          if (doc.exists) {
            const storageReference = firebase.storage().ref();
            const document = doc.data();
            console.log("Document data:", doc.data());
            storageReference
              .child("collection/" + `${document.id}`)
              .getDownloadURL()
              .then((url) => {
                const content = {
                  img: url,
                  name: document.name,
                  cat: document.categories,
                  details: document.details,
                  id: document.id,
                  price: document.Price,
                };
                console.log(content);
                this.$store.commit("updatedetailedItem", content);
              });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            this.empty = true;
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    },
  },

  created() {
    if (this.$route && this.name == null) {
      console.log(this.$route.query.id);
      this.getfromId();
    } else {
      console.log("1234tfgbn");
    }
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #f4ae53;
}
.empty {
  font-size: 2rem;
  text-align: center;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 4px 2px rgba(0, 0, 0, 0.541);
  font-weight: 900;
  text-decoration: none;
  width: 260px;
  vertical-align: 20px;
  margin-top: 2rem;
}
.lood {
  font-size: 1.2rem;
  text-align: center;
  font-weight: 600;
  color: #d79947;
}
.text {
  margin-left: 1rem;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.315), 0px 2px 1px rgba(0, 0, 0, 0.541);
  font-size: 1.3rem;
}
.cartbtn {
  max-width: 180px;
}
.sItem {
  margin: 0px 4px;
  border: 1px solid #d79947;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-weight: 400;
  color: #d79947;
}
.size {
  display: flex;
  margin-top: 2rem;
}
h2 {
  margin-top: 0.8rem;
  font-size: 2.5rem;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 4px 2px rgba(0, 0, 0, 0.541);
}
h1 {
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 4px 2px rgba(0, 0, 0, 0.541);
  font-size: 4rem;
  margin-left: 1rem;
  margin-top: 6rem;
}

.container {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}
.container2 {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}
.details {
  flex-basis: 45%;
  margin: 12px;
  margin-left: 40px;
  max-width: 400px;
}
.detImg {
  flex-basis: 55%;
  display: flex;
  align-items: flex-end;
}
@media (max-width: 800px) {
  .detImg {
    order: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .details {
    order: 2;
    text-align: center;
    margin: 0px;
    margin-left: 0px;
    max-width: 400px;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -65px;
    max-width: 100%;
  }
  .text {
    margin-left: 0px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    flex-direction: column;
  }
}
</style>
