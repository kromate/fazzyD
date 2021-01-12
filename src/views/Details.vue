<template>
  <div class="container">
    <div class="details">
      <h1>Zylo Hoodie</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora facilis molestias laborum
        ratione rerum, voluptate magnam vel maiores, porro ipsum esse animi optio veritatis numquam
        voluptatibus facere consequatur libero quam.
      </p>
      <h2>$20</h2>

      <div class="size">
        <p class="sItem">XS</p>
        <p class="sItem">S</p>
        <p class="sItem">M</p>
      </div>
    </div>

    <div class="detImg">
      <img src="@/assets/gallery/black_hoodie.png" class="main" />
      <div class="casing">
        <img src="@/assets/gallery/black_hoodie.png" class="mini" />
        <img src="@/assets/gallery/brown_hoodie.png" class="mini" />
        <img src="@/assets/gallery/white_hoodie.png" class="mini" />
        <img src="@/assets/gallery/white_hoodie.png" class="mini" />
        <img src="@/assets/gallery/white_hoodie.png" class="mini" />
        <img src="@/assets/gallery/white_hoodie.png" class="mini" />
        <img src="@/assets/gallery/white_hoodie.png" class="mini" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sItem {
  margin: 0px 4px;
  border: 1px solid #d79947;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-weight: 400;
  color: #d79947;
}
.size {
  display: flex;
  margin-top: 2rem;
}
h2 {
  margin-top: 0.8rem;
  font-size: 2.5rem;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 4px 2px rgba(0, 0, 0, 0.541);
}
h1 {
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.315), 0px 4px 2px rgba(0, 0, 0, 0.541);
  font-size: 4rem;
  margin-left: 1rem;
  margin-top: 6rem;
}
.casing {
  display: flex;
  flex-wrap: wrap;
  max-height: 500px;
  align-items: flex-start;
}
.casing img {
  margin: 2px 4px;
}
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}
.details {
  flex-basis: 45%;
  margin: 12px;
  margin-left: 40px;
  max-width: 400px;
}
.detImg {
  flex-basis: 55%;
  display: flex;
  align-items: flex-end;
}

img {
  margin: 0pc 4px;
}
img.main {
  height: 500px;
  /* width: 210px; */
  border-radius: 6px;
}
img.mini {
  height: 100px;
  border-radius: 6px;
}
</style>
