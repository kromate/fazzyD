<template>
  <div class="metaData">
    <form action="">
      <div class="inputBox">
        <label for="method">DELIVERY METHODS</label>
        <select name="method" id="method" v-model="mode" aria-placeholder="select">
          <option value="Door Delivery">Door Delivery</option>
          <option value="Pick Up"> Pick Up</option>
        </select>
      </div>
      <div class="inputBox" v-if="mode == 'Door Delivery'">
        <label for="address">ADDRESS</label>
        <input type="text" id="address" placeholder="Enter Your Address" v-model="location" />
        <ul>
          <li v-for="(result, i) in searchResults" :key="i">{{ result }} // list of all places</li>
        </ul>
      </div>

      <div class="inputBox">
        <label for="phone">PHONE NUM</label>
        <input type="number" id="phone" placeholder="Enter Your Phone Number" required />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MetaData",
  data() {
    return {
      mode: "Pick Up",
      location: "",
      searchResults: [],
      service: null, // will reveal this later 🕵️
    };
  },

  metaInfo() {
    return {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=<YOUR_API_KEY>&libraries=places`,
          async: true,
          defer: true,
          callback: () => this.MapsInit(), // will declare it in methods
        },
      ],
    };
  },
};
</script>

<style scoped>
.metaData {
  flex-basis: 40%;
  border: 1px solid black;
  padding: 10px;
  width: 500px;
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
