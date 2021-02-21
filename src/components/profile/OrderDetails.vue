<template>
  <transition name="slide" appear>
    <div class="bg" v-if="showModal" @click="close($event)">
      <div class="cardx">
        <div class="flexb" v-for="n in 20" :key="n">
          <img src="@/assets/gallery/black_hoodie.png" alt="" class="cartImg" />
          <div class="flexd">
            <p class="block"><span class="tt">Name:</span> <span>Hoodie</span></p>
            <p class="block"><span class="tt">Price:</span> <span>&#8358; 12000</span></p>
            <p class="block"><span class="tt">Total Price:</span> <span>&#8358; Pending</span></p>
            <p class="block"><span class="tt">Ordered date:</span> <span>20-2-2021</span></p>
            <p class="block"><span class="tt">Completed:</span> <span>No</span></p>
            <p class="block"><span class="tt">Delivered:</span> <span>No</span></p>
          </div>
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
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
}
.flexb {
  display: flex;
  width: -webkit-fill-available;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
  background-color: darkcyan;
  padding: 10px;
}
.cartImg {
  height: 100px;
  border-radius: 6%;
  flex-basis: 30%;
}
.block {
  display: block;
  text-align: start;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(41, 37, 37, 0.636);
  width: 99vw;
  min-height: 100vh;
  margin: 0px auto;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 100px;
}
.cardx {
  width: 420px;
  max-width: 90vw;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
  height: fit-content;
  margin: 0px auto;
  /* flex-wrap: wrap; */
  padding: 1rem;
  background: #fff;
  color: goldenrod;
  overflow-y: auto;
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
