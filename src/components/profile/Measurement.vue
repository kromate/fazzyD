<template>
  <details>
    <summary
      ><h2>Measurement</h2>
      <button class="primaryBtn cartbtn">Edit</button>
    </summary>
  </details>
</template>

<script>
export default {};
</script>

<style scoped>
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
