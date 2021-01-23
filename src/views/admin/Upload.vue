<template>
  <div class="metaData">
    <form action="" @submit.prevent="submit">
      <div class="inputBox">
        <label for="cat">DELIVERY METHODS</label>
        <select name="cat" id="cat" v-model="cat" required>
          <option v-for="(n, index) in categories" :key="index" :value="n.name">{{
            n.name
          }}</option>
        </select>
      </div>
      <div class="inputBox">
        <label for="product">Name</label>
        <input
          type="text"
          id="product"
          placeholder="Enter the Product Name"
          v-model="Pname"
          required
        />
      </div>
      <div class="inputBox">
        <label for="details">SubDetails</label>
        <input
          type="text"
          id="details"
          placeholder="Enter the Product SubDetails"
          v-model="Pdetails"
          required
        />
      </div>
      <div class="inputBox">
        <label for="details">Price in naira</label>
        <input
          type="number"
          id="details"
          placeholder="Enter the Product SubDetails"
          v-model="Pprice"
          required
        />
      </div>
      <div class="inputBox">
        <label class="dropdown cust secondaryBtn" for="pix" data-element="custom-upload-button"
          >{{ title }}
        </label>
        <div class="status">{{ perc }}</div>
        <input
          class="custom"
          id="pix"
          name="book"
          type="file"
          data-behaviour="custom-upload-input"
          @change="update"
          required
        />
      </div>

      <div class="inputBox">
        <button class="primaryBtn">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import "firebase/firestore";
import "firebase/storage";

const collection = firebase.firestore().collection("collection");
export default {
  name: "MetaData",
  data() {
    return {
      Pname: "",
      Pdetails: "",
      Pprice: "",
      cat: "",
      perc: "",
      title: "Upload",
      categories: [
        { name: "Home" },
        { name: "New" },
        { name: "Crops" },
        { name: "Trousers" },
        { name: "Hoodie" },
        { name: "Jackets" },
      ],
    };
  },
  methods: {
    update(evt) {
      const input = evt.currentTarget.value.split("\\").pop();
      console.log(input);
      this.title = input;
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

          uploadTask
            .on("state_changed", (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              this.title = Math.floor(progress) + "% uploaded";
            })
            .then(() => {
              location.reload();
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
.status {
  font-size: 1rem;
}
.cust {
  text-align: center !important;
  border: 1px solid goldenrod;
  width: 275px !important;
}
.custom {
  display: none;
}
.metaData {
  display: flex;
  justify-content: center;

  flex-basis: 100%;
  /* border: 1px solid black; */
  padding: 10px;
  width: 100%;
  max-width: 95vw;
  max-height: 300px;
}
.inputBox {
  margin-top: 15px;
}
::placeholder {
  color: #d79947a5;
}
input {
  padding: 10px;
  background: rgba(0, 0, 0, 0.445);
  outline: none;
  border: 1px solid black;
  color: #d79947;
  font-weight: 600;
  font-size: 1rem;
  width: 279px;
}
select {
  padding: 10px;
  background: rgba(0, 0, 0, 0.445);
  outline: none;
  border: 1px solid black;
  color: #d79947;
  font-weight: 600;
  font-size: 1rem;
  width: 300px;
}
label {
  display: block;
  margin-bottom: 10px;
  color: #d79947;
  font-weight: 600;
  font-size: 1rem;
}
option {
  color: black;
  font-size: 1.2rem;
  padding: 1rem;
  background: #d79947;
  border: none;
  outline: none;
}
@media (max-width: 700px) {
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .metaData {
    margin-bottom: 1rem;
  }
}
</style>
