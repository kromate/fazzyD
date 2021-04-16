<template>
  <div class="container">
    <h1 class="title">Gallery</h1>

    <div class="gallery" v-if="catelogue.length">
      <div class="gallery-item" v-for="(cat, index) in catelogue" :key="index">
        <img class="gallery-image" :src="cat.img" v-if="loaded" />
        <Loader w="250" h="375" b="0" v-else />
        <div class="flex">
          <img src="@/assets/icon/Delete.svg" alt="" class="Hicon" @click="Delete(cat.id)" />
        </div>
      </div>
    </div>

    <div v-else>
      <Loader w="250" h="375" b="0" />
      <p class="lood">loading....</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import Loader from "@/components/imgLoader.vue";
// const storageReference = firebase.storage().ref();
export default {
  components: { Loader },
  name: "gallery",
  data() {
    return {
      loaded: false,
      inter: "",
      catelogue: [],
    };
  },

  methods: {
    Delete(id) {
      this.catelogue = [];
      firebase
        .firestore()
        .collection("collection")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.init();
        })
        .catch((error) => {
          console.log(error);
          alert("Error removing document: ", error);
        });
    },
    loadData(querySnapshot) {
      const storageReference = firebase.storage().ref();
      querySnapshot.forEach((doc) => {
        const document = doc.data();
        storageReference
          .child("collection/" + `${document.id}`)
          .getDownloadURL()
          .then((url) => {
            console.log(document);
            const content = {
              img: url,
              name: document.name,
              cat: document.categories,
              details: document.details,
              id: document.id,
              price: document.Price,
            };
            console.log(content);
            this.catelogue.push(content);
          });
        // this.catelogue.push(document);
      });
      this.loading = false;
      console.log(this.catelogue);
    },
    init() {
      this.catelogue = [];
      firebase
        .firestore()
        .collection("collection")
        .orderBy("categories")
        .startAt("Gallery")
        .endAt("Gallery" + "\uf8ff")
        .onSnapshot((querySnapshot) => {
          if (!querySnapshot.empty) {
            this.loadData(querySnapshot);
          } else {
            console.log("empty array ooo");
          }
        });
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
.Hicon {
  background-color: rgba(0, 0, 0, 0.537);
  border-radius: 100%;
  padding: 4px;
  height: 22px;
  width: 22px;
  position: relative;
  top: -39px;
  right: -5px;
  cursor: pointer;
  margin-bottom: 3px;
}
.lood {
  font-size: 1.2rem;
  text-align: center;
  font-weight: 600;
  color: #d79947;
}
.container {
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  justify-content: center;
  /* margin: -1rem -1rem; */
}

.gallery-item {
  /* flex: 1 0 24rem; */
  margin: 1rem;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  /* overflow: hidden; */
  width: fit-content;
  padding: 5px;
}

.gallery-image {
  display: block;
  width: 250px;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease-out;
}

.gallery-item:hover {
  transform: scale(1.15);
}

@supports (display: grid) {
  .gallery {
    /* display: grid; */
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: 2rem;
  }

  .gallery,
  .gallery-item {
    margin: 0;
  }
}
</style>
