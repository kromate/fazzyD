<template>
  <section class="showcase" id="swipe">
    <img :src="selected" alt="" class="caro" />
  </section>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      index: 0,
      selected: require("@/assets/logo.jpeg"),
      imageArray: [require("@/assets/logo.jpeg"), require("@/assets/aboutUs.png")],
    };
  },
  methods: {
    autoSlide() {
      setInterval(() => {
        this.incrementImage();
      }, 4000);
    },

    decrementImage() {
      if (this.index == 0) {
        this.index = this.imageArray.length - 1;
        this.selected = this.imageArray[this.index];
      } else {
        this.selected = this.imageArray[this.index - 1];
        this.index--;
      }
    },
    incrementImage() {
      if (this.index == this.imageArray.length - 1) {
        this.index = 0;
        this.selected = this.imageArray[this.index];
      } else {
        this.selected = this.imageArray[this.index + 1];
        this.index++;
      }
    },

    addSwipeEvent() {
      const swipeFrontElement = document.getElementById("swipe");
      if (window.PointerEvent) {
        swipeFrontElement.addEventListener("pointerdown", this.handleGestureStart, true);
      } else {
        swipeFrontElement.addEventListener("touchstart", this.handleGestureStart, true);
        swipeFrontElement.addEventListener("mousedown", this.handleGestureStart, true);
      }
    },
    handleGestureStart(e) {
      if (e.offsetX > 120) {
        this.incrementImage();
      } else {
        this.decrementImage();
      }
    },
  },
  mounted() {
    this.addSwipeEvent();
    this.autoSlide();
  },
};
</script>

<style scoped>
img.caro {
  width: 700px;
  border-radius: 20px;
  max-width: 95vw;
  height: -webkit-fill-available;
}
.showcase {
  background: black;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 10px;
  width: 900px;
  height: 270px;
  max-width: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 800px) {
  .showcase {
    height: 180px;
  }
}
</style>
