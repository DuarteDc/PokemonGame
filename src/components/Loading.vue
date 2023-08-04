<template>
  <img :src="pokeBall" alt="loading" width="100"  class="imgr"/>
</template>

<script>
import pokeBall from "../../public/assets/pokeball.svg";

export default {
  computed: {
    pokeBall() {
      return pokeBall;
    },
  },
};
</script>

<style scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.imgr {
  -webkit-animation: 3s rotate linear infinite;
  animation: 3s rotate linear infinite;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}

</style>