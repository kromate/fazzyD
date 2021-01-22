<template>
  <main>
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
import Catelogue from "@/components/home/AdminCatelogue.vue";
export default {
  name: "Home",
  components: { CatCard, Catelogue },
};
</script>
<style scoped>
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
  .showcase {
    height: 180px;
  }
}
</style>
