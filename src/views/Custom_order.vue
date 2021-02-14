<template>
  <div class="container">
    <h1 class="title">Custom Order</h1>
    <p>
      This section is for those that have Unique taste and would like something different from the
      already available selection. <br />Fill the form below and we would get back to you
    </p>

    <form action="" @submit.prevent="sumbit">
      <div class="inputBox">
        <label for="method">DELIVERY METHODS</label>
        <select name="method" id="method" v-model="mode">
          <option value="Door Delivery">Door Delivery</option>
          <option value="Pick Up"> Pick Up</option>
        </select>
      </div>
      <div class="inputBox" v-if="mode == 'Door Delivery'">
        <label for="address">ADDRESS</label>
        <input type="text" id="address" placeholder="Enter Your Address" v-model="location" />
      </div>

      <div class="inputBox">
        <label for="phone">PHONE NUM</label>
        <input type="number" id="phone" placeholder="Enter Your Phone Number" v-model="phone" />
      </div>

      <div class="upper" v-if="body">
        <label class="heading">Upper Body Measurement</label>
        <div class="inputBox">
          <label for="Neck">Neck</label>
          <input type="number" id="Neck" placeholder="Enter Size in CM" v-model="body.neck" />
        </div>
        <div class="inputBox">
          <label for="Chest">Chest</label>
          <input type="number" id="Chest" placeholder="Enter Size in CM" v-model="body.chest" />
        </div>
        <div class="inputBox">
          <label for="Body Length">Body Length</label>
          <input
            type="number"
            id="Body Length"
            placeholder="Enter Size in CM"
            v-model="body.BLength"
          />
        </div>
        <div class="inputBox">
          <label for="Arm length(sleeve)">Arm length(sleeve)</label>
          <input
            type="number"
            id="Arm length(sleeve)"
            placeholder="Enter Size in CM"
            v-model="body.ArmLength"
          />
        </div>
        <div class="inputBox">
          <label for="Back">Back</label>
          <input type="number" id="Back" placeholder="Enter Size in CM" v-model="body.back" />
        </div>
        <div class="inputBox">
          <label for="Shoulder">Shoulder</label>
          <input
            type="number"
            id="Shoulder"
            placeholder="Enter Size in CM"
            v-model="body.shoulder"
          />
        </div>
        <div class="inputBox">
          <label for="Arm hole">Arm hole</label>
          <input
            type="number"
            id="Arm hole"
            placeholder="Enter Size in CM"
            v-model="body.ArmHole"
          />
        </div>
        <div class="inputBox">
          <label for="Bicep size (muscle)">Bicep size (muscle)</label>
          <input
            type="number"
            id="Bicep size (muscle)"
            placeholder="Enter Size in CM"
            v-model="body.bicep"
          />
        </div>
        <div class="inputBox">
          <label for="Wrist">Wrist</label>
          <input type="number" id="Wrist" placeholder="Enter Size in CM" v-model="body.wrist" />
        </div>
      </div>
      <div class="lower" v-if="body">
        <label class="heading">Lower Body Measurement</label>
        <div class="inputBox">
          <label for="Waist">Waist</label>
          <input type="number" id="Waist" placeholder="Enter Size in CM" v-model="body.waist" />
        </div>
        <div class="inputBox">
          <label for="Hip">Hip</label>
          <input type="number" id="Hip" placeholder="Enter Size in CM" v-model="body.hip" />
        </div>
        <div class="inputBox">
          <label for="Thigh">Thigh</label>
          <input type="number" id="Thigh" placeholder="Enter Size in CM" v-model="body.thigh" />
        </div>
        <div class="inputBox">
          <label for="Knee">Knee</label>
          <input type="number" id="Knee" placeholder="Enter Size in CM" v-model="body.knee" />
        </div>
        <div class="inputBox">
          <label for="Ankle">Ankle</label>
          <input type="number" id="Ankle" placeholder="Enter Size in CM" v-model="body.ankle" />
        </div>
        <div class="inputBox">
          <label for="Length">Length</label>
          <input type="number" id="Length" placeholder="Enter Size in CM" v-model="body.LLength" />
        </div>
      </div>

      <div class="lower">
        <label class="heading">Upload an image of the custom ware you want</label>
        <div class="inputBox">
          <label class="dropdown cust secondaryBtn" for="pix" data-element="custom-upload-button"
            >{{ title }}
          </label>
          <!-- <div class="status">{{ perc }}</div> -->
          <input
            class="custom"
            id="pix"
            name="book"
            type="file"
            data-behaviour="custom-upload-input"
            @change="update"
          />
        </div>
      </div>
      <div class="inputBox">
        <button class="primaryBtn" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import "firebase/firestore";
import "firebase/storage";

const collection = firebase.firestore().collection("users");
export default {
  data() {
    return {
      title: "Upload",
      mode: "Pick Up",
      location: "",
      phone: "",
      body: {},
    };
  },
  methods: {
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
.custom {
  display: none;
}
.status {
  font-size: 1rem;
}
.cust {
  text-align: center !important;
  border: 1px solid goldenrod;
  width: 275px !important;
}
.heading {
  text-align: center;
  text-transform: uppercase;
  margin-top: 28px;
  border: 1px solid rgb(133, 95, 24);
  padding: 4px;
  width: 292px;
}
.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  padding: 20px;
}
.container > p {
  margin-top: -1rem;
  color: #d79947;

  font-size: 0.9rem;
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
  display: block !important;
  margin-bottom: 10px !important;
  color: #d79947 !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
}
option {
  color: black;
  font-size: 1.2rem;
  padding: 1rem;
  background: #d79947;
  border: none;
  outline: none;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  text-align: start;
}
</style>
