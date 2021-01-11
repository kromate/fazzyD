<template>
  <div class="container">
    <div class="details">
      <h1>Zylo Hoodie</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora facilis molestias laborum
        ratione rerum, voluptate magnam vel maiores, porro ipsum esse animi optio veritatis numquam
        voluptatibus facere consequatur libero quam.
      </p>
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
h1 {
  font-size: 4rem;
  margin-left: 2rem;
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
