<template>
  <transition name="slide" appear>
    <div class="bg" v-if="showModal" @click="$emit('close')">
      <div class="card">
        <twitter-button :url="url" :description="description" />
        <FacebookButton appID="326715318704987" :url="url" :description="description" />
        <WhatsappButton :url="url" :description="description" />
        <TelegramButton :url="url" :description="description" />
      </div>
    </div>
  </transition>
</template>

<script>
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
import WhatsappButton from "vue-share-buttons/src/components/WhatsAppButton";
import TelegramButton from "vue-share-buttons/src/components/TelegramButton";
export default {
  name: "success",
  data() {
    return {
      description: `Check out this nice wear on ${window.location.origin}`,
    };
  },
  components: {
    TwitterButton,
    FacebookButton,
    WhatsappButton,
    TelegramButton,
  },
  props: ["showModal", "url"],
};
</script>

<style scoped>
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
