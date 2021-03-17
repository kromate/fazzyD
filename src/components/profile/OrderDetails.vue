<template>
  <transition name="slide" appear>
    <div class="bg" v-if="showModal">
      <div class="cardx">
        <button class="primaryBtn floatR" @click="$emit('close')">X</button>
        <div class="flexb" v-for="(index, data) in item" :key="index">
          <img :src="data.img" alt="" class="cartImg" />
          <div class="flexd">
            <p class="block">
              <span class="tt">Name: </span> <span>{{ data }}</span>
            </p>
            <p class="block">
              <span class="tt">Price: </span> <span>&#8358; {{ data.price }}</span>
            </p>
            <p class="block">
              <span class="tt">Total Price:</span>
              <span>&#8358; {{ data.total ? data.total : "-" }}</span>
            </p>
            <p class="block">
              <span class="tt">Ordered date: </span> <span>{{ data.date }}</span>
            </p>
            <p class="block">
              <span class="tt">Completed: </span> <span>{{ data.completed }}</span>
            </p>
            <p class="block">
              <span class="tt">Delivered: </span> <span>{{ data.delivered }}</span>
            </p>
          </div>
        </div>

        <button class="primaryBtn" @click="$emit('close')">Close</button>
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

  props: ["showModal", "item"],

  methods: {
    close(e) {
      console.log("itemhvcgcgh", this.item);
      if (e.target.className == "bg") {
        this.$emit("close");
      }
    },
  },
};
</script>

<style scoped>
.tt {
  font-weight: 700;
  border-bottom: 1px solid white;
}
.floatR {
  width: fit-content;
  display: block;
  padding: 0;
  border: none;
  font-size: 1.3rem;
  margin: 0;
  margin-left: auto;
}
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
  background-color: #292017;
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
  margin-bottom: 3px;
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
