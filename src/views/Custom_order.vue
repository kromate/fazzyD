<template>
  <div class="container">
    <h1 class="title">Custom Order</h1>
    <p>
      This section is for those that have Unique taste and would like something different from the
      already available selection. <br />Fill the form below and we would get back to you
    </p>

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
      <div class="upper">
        <label class="heading">Upper Body Measurement</label>
        <div class="inputBox">
          <label for="phone">PHONE NUM</label>
          <input type="number" id="phone" placeholder="Enter Your Phone Number" />
        </div>
      </div>
      <div class="lower">
        <label class="heading">Lower Body Measurement</label>
        <div class="inputBox">
          <label for="phone">PHONE NUM</label>
          <input type="number" id="phone" placeholder="Enter Your Phone Number" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.heading {
  text-align: center;
  text-transform: uppercase;
  margin-top: 28px;
  border: 1px solid rgb(133, 95, 24);
  padding: 4px;
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
