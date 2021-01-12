<template>
  <main>
    <section class="showcase">
      <img src="@/assets/logo.jpeg" alt="" class="caro" />
    </section>

    <section class="content">
      <div class="categories">
        <CatCard />
      </div>
      <div class="gallery">
        <Catelogue />
      </div>
    </section>
  </main>
</template>

<script>
import CatCard from "@/components/home/catCard.vue";
import Catelogue from "@/components/home/Catelogue.vue";
export default {
  name: "Home",
  components: { CatCard, Catelogue },
};
</script>
<style scoped>
img.caro {
  width: 700px;
  border-radius: 20px;
  max-width: 95vw;
  height: 250px;
}

.showcase {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
.content {
  margin-top: 2rem;
  display: flex;
}

.gallery {
  margin-top: 0.7rem;
  margin-left: 2rem;
}
.categories {
  margin-left: 2rem;
}
@media (max-width: 800px) {
  .content {
    flex-direction: column;
  }
  .categories {
    margin-left: 0rem;
  }
  .gallery {
    margin-top: 0.7rem;
    margin-left: 0rem;
  }
}
</style>
