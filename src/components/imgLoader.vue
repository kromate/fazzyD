<template>
  <div
    class="pulsate"
    :style="{ width: w + 'px', height: h + 'px', 'border-radius': b + 'px' }"
  ></div>
</template>

<script>
export default {
  name: "loader",
  props: ["h", "w", "b"],
};
</script>

<style scoped>
.pulsate {
  max-width: 90vw !important;
  background: linear-gradient(30deg, #6a3f05, #a2691e, #804b0a, #a56417);
  background-size: 400% 400%;
  -webkit-animation: Gradient-04a0d67a 2.25s ease infinite;
  animation: Gradient-04a0d67a 2s ease infinite;
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
