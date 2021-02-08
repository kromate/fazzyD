<template>
  <div class="metaData">
    <form action="">
      <div class="inputBox">
        <label for="method">DELIVERY METHODS</label>
        <select name="method" id="method">
          <option value="Door Delivery">Door Delivery</option>
          <option value="Pick Up"> Pick Up</option>
        </select>
      </div>
      <div class="inputBox">
        <label for="address">ADDRESS</label>
        <input type="text" id="address" placeholder="Enter Your Address" />
      </div>
      <div class="inputBox">
        <label for="phone">PHONE NUM</label>
        <input type="number" id="phone" placeholder="Enter Your Phone Number" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MetaData",
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
