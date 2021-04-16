<template>
  <div class="Hcontainer">
    <h1>{{ title }}</h1>
    <div class="HcatCon">
      <div class="HcatCon" v-if="catelogue.length">
        <div v-for="(cat, index) in catelogue" :key="index" class="HcatHitem">
          <div class="Hitem">
            <img :src="cat.img" alt="" class="Hcustom" v-if="loaded" />
            <Loader w="133.39" h="200" b="8" v-else />
            <div class="flex">
              <img src="@/assets/icon/Delete.svg" alt="" class="Hicon" @click="Delete(cat.id)" />
            </div>
          </div>
          <p class="Hname">{{ cat.name }}</p>
        </div>
      </div>
      <div v-else>
        <Loader w="133.39" h="200" b="8" />
        <p class="lood">loading....</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import Loader from "@/components/imgLoader.vue";
const storageReference = firebase.storage().ref();
export default {
  components: { Loader },
  name: "homeCatelogue",
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
              price: document.price,
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
        .startAt(this.title)
        .endAt(this.title + "\uf8ff")
        .onSnapshot((querySnapshot) => {
          if (!querySnapshot.empty) {
            this.catelogue = [];
            this.loadData(querySnapshot);
          } else {
            console.log("empty array ooo");
          }
        });
      // .get()
      // .then((querySnapshot) => {
      //   this.loadData(querySnapshot);
      // });
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
  watch: {
    title() {
      this.catelogue = [];
      this.init();
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
.Hname {
  /* text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 2px 2px rgba(206, 199, 184, 0.235); */
  font-size: 1.2rem;
  text-align: center;
  font-weight: 600;
  margin-top: -1.5rem;
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
  max-width: 133.39px;
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
