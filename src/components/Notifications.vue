<template>
  <transition name="slide" appear>
    <div class="notify flex" v-if="showNotify">
      <img :src="notifyImage" class="icon" />
      <p>{{ notifyText }}</p>
    </div>
  </transition>

  <transition name="slide" appear>
    <div class="bg" v-if="showModal" @click="close()">
      <div class="card">
        <loader />
        <h2>Loading...</h2>
      </div>
    </div>
  </transition>
</template>

<script>
import loader from "@/components/iconLoader.vue";
export default {
  components: { loader },
  name: "Notification",
  data() {
    return {
      showModal: true,
    };
  },
  computed: {
    notifyImage() {
      return this.$store.state.showNotifyImage;
    },
    notifyText() {
      return this.$store.state.showNotifyText;
    },
    showNotify() {
      return this.$store.state.showNotify;
    },
  },
  watch: {
    showNotify() {
      this.close();
    },
  },
  methods: {
    close() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.notify {
  background: black;
  width: fit-content;
  padding: 9px;
  position: fixed;
  top: 12px;
  right: 5px;
  z-index: 100000;
  border-radius: 4px;
  color: #d79947;
  border: 1px solid goldenrod;
}
.icon {
  height: 20px;
  margin-right: 0.7rem;
}

.bg {
  position: fixed;
  top: 0;
  background-color: rgba(26, 25, 25, 0.859);
  min-width: 100%;
  min-height: 100%;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  margin-top: 5rem;
  padding: 1rem;
  width: 420px;
  max-width: 85vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  text-align: center;
  border-radius: 4px;
}
h2 {
  margin-bottom: 1rem;
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
