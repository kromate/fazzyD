<template>
  <transition name="slide" appear>
    <div class="bg" v-if="showModal" @click="close($event)">
      <div class="card">
        <div class="flex">
          <img src="@/assets/gallery/black_hoodie.png" alt="" class="cartImg" />
          <div class="flexd"><span class="tt">Name:</span> <span>Hoodie</span></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "success",
  data() {
    return {
      description: `Check out this nice wear on ${window.location.origin}`,
    };
  },

  props: ["showModal", "url"],

  methods: {
    close(e) {
      if (e.target.className == "bg") {
        this.$emit("close");
      }
    },
  },
};
</script>

<style scoped>
.flexd {
  display: flex;
}
.flex {
  display: flex;
}
.cartImg {
  height: 100px;
  border-radius: 6%;
  flex-basis: fill;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(41, 37, 37, 0.636);
  min-width: 100vw;
  min-height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 100px;
}
.card {
  min-width: 310px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: fit-content;
  flex-wrap: wrap;
  padding: 1rem;
  background: #fff;
}
.card > * {
  margin: 5px 10px;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  transform: scale(0);
}
</style>
