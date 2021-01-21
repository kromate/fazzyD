<template>
  <img src="@/assets/gallery/black_hoodie.png" class="main" />
  <div class="casing">
    <img src="@/assets/gallery/black_hoodie.png" class="mini selected" />
    <img src="@/assets/gallery/brown_hoodie.png" class="mini " />
    <img src="@/assets/gallery/white_hoodie.png" class="mini" />
    <img src="@/assets/gallery/white_hoodie.png" class="mini" />
    <img src="@/assets/gallery/white_hoodie.png" class="mini" />
  </div>
</template>

<script>
export default {
  name: "CardImg",
};
</script>

<style scoped>
.selected {
  border: 2px solid #d79947;
}
.casing {
  display: flex;
  flex-wrap: wrap;
  max-height: 500px;
  align-items: flex-start;
  margin-bottom: 1rem;
  display: none;
}
.casing img {
  margin: 2px 4px;
}
img {
  margin: 0pc 4px;
}
img.main {
  height: 500px;
  /* width: 210px; */
  border-radius: 6px;
  margin-bottom: 1rem;
}
img.mini {
  height: 80px;
  border-radius: 6px;
}
@media (max-width: 800px) {
  img.main {
    height: 400px;
    max-width: 100vw;
  }
}
</style>
