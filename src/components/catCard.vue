<template>
  <div class="catCardCont">
    <div>
      <label for="card" class="card">
        Home
        <img src="@/assets/icon/Home.svg" alt="" />
      </label>
      <input type="checkbox" id="card" />
    </div>

    <div>
      <label for="card" class="card">
        Popular
        <img src="@/assets/icon/Star.svg" alt="" />
      </label>
      <input type="checkbox" id="card" />
    </div>
    <div>
      <label for="card" class="card">
        Hoodie
        <img src="@/assets/gallery/black_hoodie.png" alt="" class="custom" />
      </label>
      <input type="checkbox" id="card" />
    </div>
    <div>
      <label for="card" class="card">
        Trousers
        <img src="@/assets/gallery/trousers.png" alt="" class="custom" />
      </label>
      <input type="checkbox" id="card" />
    </div>

    <div>
      <label for="card" class="card">
        Crops
        <img src="@/assets/gallery/f_crop.png" alt="" class="custom" />
      </label>
      <input type="checkbox" id="card" />
    </div>
  </div>
</template>

<script>
export default {
  name: "catCard",
};
</script>

<style scoped>
.catCardCont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
}
@media (max-width: 800px) {
  .catCardCont {
    flex-direction: row;
  }
}
.card {
  padding: 0px 0.8rem;
  background-color: black;
  color: #d79947;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  border-radius: 7px;
  width: 110px;
  height: 50px;
}
input {
  display: none;
}

label img {
  height: 25px;
  margin-left: 12px;
}
.custom {
  position: relative;
  right: -12px;
  height: 48px;
  border-radius: 4px;
}
</style>
