<template>
  <OrderDetails :showModal="showModal" :data="OD" @close="showModal = false" />
  <details>
    <summary><h2>Orders</h2> </summary>
    <div>
      <div class="card" v-for="n in orders" :key="n.id" @click="showO(n)">
        <p>Date:{{ n.date }}</p>
      </div>
    </div>
  </details>
</template>

<script>
import firebase from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import "firebase/firestore";
import "firebase/storage";
import OrderDetails from "./OrderDetails.vue";

const collection = firebase.firestore().collection("users");
export default {
  components: { OrderDetails },
  data() {
    return {
      OD: {},
      orders: [
        {
          id: "345678908765",
          name: "Hoodie and long sleeves With a touch of rass rass",
          price: "12000",
          total: "",
          date: "20-2-2021",
          completed: "No",
          delivered: "No",
        },
        {
          id: "3456789765",
          name: "Skirt",
          price: "12000",
          total: "15000",
          date: "23-1-2021",
          completed: "Yes",
          delivered: "No",
        },
        {
          id: "3456789763455",
          name: "Suits",
          price: "32000",
          total: "35000",
          date: "23-12-2020",
          completed: "Yes",
          delivered: "Yes",
        },
      ],
      showModal: false,
      title: "Upload",
      mode: "Pick Up",
      location: "",
      phone: "",
      body: {},
      check: false,
    };
  },
  methods: {
    showO(data) {
      this.OD = data;
      this.showModal = true;
      // console.log(data);
    },
    sumbit() {
      console.log("body", this.body);
    },

    submit() {
      let uid = uuidv4();
      let data = {
        id: uid,
        categories: this.cat,
        name: this.Pname,
        details: this.Pdetails,
        Price: this.Pprice,
      };
      console.log(data);
      collection
        .doc(uid)
        .set(data)
        .then(() => {
          console.log("UPLOAD-FILE called!");
          var storageReference = firebase.storage().ref();
          var file = document.getElementById("pix").files[0];

          let uploadTask = storageReference.child("collection/" + uid).put(file);

          uploadTask.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.title = Math.floor(progress) + "% uploaded";
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.card {
  background: rgb(255, 255, 255);
  width: fit-content;
  display: inline-block;
  margin: 1rem;
  cursor: pointer;
}

.cartbtn {
  width: auto !important;
  font-size: 0.7rem;
  margin-top: 0;
  padding: 0.3rem;
}
details {
  text-align: center;
  border-radius: 0.2rem;
  width: 85vw;
  max-width: 550px;
  background-color: black;
  border: none;
  height: fit-content;
  margin: 0.3rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  color: #ff9305;
  transition: 0.5s;
}
details[open] summary {
  background-color: rgba(48, 45, 45, 0.802);
  transition: 0.5s;
}
h5 {
  margin: 0.5rem 0rem !important;
}
summary {
  border-radius: 0.2rem;
  cursor: pointer;
  outline: none;
  padding: 0.2rem 0.8rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  border: 1px solid;
}

p {
  padding: 1rem;
}

summary::-webkit-details-marker {
  display: none;
}
</style>
