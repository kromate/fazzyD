<template>
  <details>
    <summary
      ><h2>Measurement</h2>
      <button class="primaryBtn cartbtn" v-if="check" @click="edit">Edit</button>
      <button class="primaryBtn cartbtn" v-else @click="submit">Save</button>
    </summary>

    <form action="" @submit.prevent="sumbit">
      <div class="upper">
        <label class="heading">Upper Body Measurement</label>
        <div class="inputBox">
          <label for="Neck">Neck</label>
          <input
            type="number"
            :disabled="check"
            id="Neck"
            placeholder="Enter Size in CM"
            v-model="body.neck"
          />
        </div>
        <div class="inputBox">
          <label for="Chest">Chest</label>
          <input
            type="number"
            :disabled="check"
            id="Chest"
            placeholder="Enter Size in CM"
            v-model="body.chest"
          />
        </div>
        <div class="inputBox">
          <label for="Body Length">Body Length</label>
          <input
            type="number"
            :disabled="check"
            id="Body Length"
            placeholder="Enter Size in CM"
            v-model="body.BLength"
          />
        </div>
        <div class="inputBox">
          <label for="Arm length(sleeve)">Arm length(sleeve)</label>
          <input
            type="number"
            :disabled="check"
            id="Arm length(sleeve)"
            placeholder="Enter Size in CM"
            v-model="body.ArmLength"
          />
        </div>
        <div class="inputBox">
          <label for="Back">Back</label>
          <input
            type="number"
            :disabled="check"
            id="Back"
            placeholder="Enter Size in CM"
            v-model="body.back"
          />
        </div>
        <div class="inputBox">
          <label for="Shoulder">Shoulder</label>
          <input
            type="number"
            :disabled="check"
            id="Shoulder"
            placeholder="Enter Size in CM"
            v-model="body.shoulder"
          />
        </div>
        <div class="inputBox">
          <label for="Arm hole">Arm hole</label>
          <input
            type="number"
            :disabled="check"
            id="Arm hole"
            placeholder="Enter Size in CM"
            v-model="body.ArmHole"
          />
        </div>
        <div class="inputBox">
          <label for="Bicep size (muscle)">Bicep size (muscle)</label>
          <input
            type="number"
            :disabled="check"
            id="Bicep size (muscle)"
            placeholder="Enter Size in CM"
            v-model="body.bicep"
          />
        </div>
        <div class="inputBox">
          <label for="Wrist">Wrist</label>
          <input
            type="number"
            :disabled="check"
            id="Wrist"
            placeholder="Enter Size in CM"
            v-model="body.wrist"
          />
        </div>
      </div>
      <div class="lower">
        <label class="heading">Lower Body Measurement</label>
        <div class="inputBox">
          <label for="Waist">Waist</label>
          <input
            type="number"
            :disabled="check"
            id="Waist"
            placeholder="Enter Size in CM"
            v-model="body.waist"
          />
        </div>
        <div class="inputBox">
          <label for="Hip">Hip</label>
          <input
            type="number"
            :disabled="check"
            id="Hip"
            placeholder="Enter Size in CM"
            v-model="body.hip"
          />
        </div>
        <div class="inputBox">
          <label for="Thigh">Thigh</label>
          <input
            type="number"
            :disabled="check"
            id="Thigh"
            placeholder="Enter Size in CM"
            v-model="body.thigh"
          />
        </div>
        <div class="inputBox">
          <label for="Knee">Knee</label>
          <input
            type="number"
            :disabled="check"
            id="Knee"
            placeholder="Enter Size in CM"
            v-model="body.knee"
          />
        </div>
        <div class="inputBox">
          <label for="Ankle">Ankle</label>
          <input
            type="number"
            :disabled="check"
            id="Ankle"
            placeholder="Enter Size in CM"
            v-model="body.ankle"
          />
        </div>
        <div class="inputBox">
          <label for="Length">Length</label>
          <input
            type="number"
            :disabled="check"
            id="Length"
            placeholder="Enter Size in CM"
            v-model="body.LLength"
          />
        </div>
      </div>
    </form>
  </details>
</template>

<script>
export default {
  data() {
    return {
      title: "Upload",
      mode: "Pick Up",
      location: "",
      phone: "",
      check: true,
    };
  },
  computed: {
    body() {
      return this.$store.state.body ? this.$store.state.body : {};
    },
  },

  methods: {
    edit() {
      this.check = false;
    },
    submit() {
      console.log("body", this.body);
      this.$store.dispatch("setMeasurement", this.body);
      this.check = true;
    },
  },
  mounted() {
    this.$store.dispatch("getMeasurement");
  },
};
</script>

<style scoped>
.heading {
  /* text-align: center; */
  text-transform: uppercase;
  margin-top: 28px;
  /* border: 1px solid rgb(133, 95, 24);
  padding: 4px;
  width: 292px; */
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
  /* width: 279px; */
  text-align: center;
  background: #09248633;
  border: 1.8px solid #ff9305;
}

input:disabled {
  border: none;
  box-shadow: 1px 1px #da3d00, -1px -1px #da3d00;
  color: #da3d00;
}
label {
  display: block !important;
  margin-bottom: 10px !important;
  color: #d79947 !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
  text-align: center;
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
