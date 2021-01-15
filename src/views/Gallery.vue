<template>
  <div class="container">
    <h1 class="title">Gallery</h1>

    <div class="gallery">
      <div class="gallery-item">
        <img class="gallery-image" src="@/assets/gallery/black_hoodie.png" />
      </div>

      <div class="gallery-item">
        <img class="gallery-image" src="@/assets/gallery/trousers.png" />
      </div>

      <div class="gallery-item">
        <img class="gallery-image" src="@/assets/gallery/f_crop.png" />
      </div>

      <div class="gallery-item">
        <img class="gallery-image" src="@/assets/gallery/sf_crop.png" />
      </div>

      <div class="gallery-item">
        <img class="gallery-image" src="@/assets/gallery/white_hoodie.png" />
      </div>

      <div class="gallery-item">
        <img class="gallery-image" src="@/assets/gallery/brown_hoodie.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  justify-content: center;
  /* margin: -1rem -1rem; */
}

.gallery-item {
  /* flex: 1 0 24rem; */
  margin: 1rem;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  /* overflow: hidden; */
  width: fit-content;
  padding: 5px;
}

.gallery-image {
  display: block;
  width: 250px;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease-out;
}

.gallery-item:hover {
  transform: scale(1.15);
}

@supports (display: grid) {
  .gallery {
    /* display: grid; */
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: 2rem;
  }

  .gallery,
  .gallery-item {
    margin: 0;
  }
}
</style>
