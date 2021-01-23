<template>
  <div class="container">
    <div class="details">
      <h1>{{ name }}</h1>
      <p class="text">
        {{ details }}
      </p>
      <h2>&#8358;{{ Price }}</h2>

      <!-- <div class="size">
        <p class="sItem">XS</p>
        <p class="sItem">S</p>
        <p class="sItem">M</p>
        <p class="sItem">L</p>
        <p class="sItem">XL</p>
      </div> -->

      <button class="primaryBtn cartbtn">ADD TO CART</button>
    </div>

    <div class="detImg">
      <CardImg />
    </div>
  </div>
</template>

<script>
import CardImg from "@/components/details/cardImg.vue";
export default {
  name: "Details",
  components: { CardImg },
  computed: {
    complete() {
      return this.$store.state.detailedItem;
    },
    name() {
      return this.$store.state.detailedItem.name;
    },
    details() {
      return this.$store.state.detailedItem.details;
    },
    Price() {
      return this.$store.state.detailedItem.price;
    },
  },

  // methods:{
  //   getfromId(){
  //     if ()
  //   }
  // }

  
};
</script>

<style scoped>
.text {
  margin-left: 1rem;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.315), 0px 2px 1px rgba(0, 0, 0, 0.541);
  font-size: 1.3rem;
}
.cartbtn {
  max-width: 180px;
}
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
@media (max-width: 800px) {
  .detImg {
    order: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .details {
    order: 2;
    text-align: center;
    margin: 0px;
    margin-left: 0px;
    max-width: 400px;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -65px;
    max-width: 100%;
  }
  .text {
    margin-left: 0px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    flex-direction: column;
  }
}
</style>
