<template>
  <div class="button-option" @click="$emit('handle-click', pokemon?.id)">
    <div class="button-label">
      {{ pokemon?.name || label}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
    },
    label:{
        type: String
    }
  },
};
</script>

<style scoped>
.button-option {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  margin: 5px 0;
  cursor: pointer;
}
.button-option:hover::after {
  transform: scaleX(-1);
}

.button-option::before {
  content: "";
  display: block;
  position: absolute;
  top: -1px;
  right: -2px;
  bottom: -1px;
  left: -1.5px;
  background: linear-gradient(260.63deg, #254fa9 24.31%, #11307e 89.99%);
  z-index: 0;
  -webkit-clip-path: polygon(
    19px 0%,
    calc(100% - 19px) 0%,
    100% 50%,
    calc(100% - 19px) 100%,
    19px 100%,
    0% 50%
  );
  clip-path: polygon(
    19px 0%,
    calc(100% - 19px) 0%,
    100% 50%,
    calc(100% - 19px) 100%,
    19px 100%,
    0% 50%
  );
}

.button-option::after {
  content: "";
  display: block;
  position: absolute;
  top: -1px;
  right: -2px;
  bottom: -1px;
  left: -1.5px;
  background: linear-gradient(
    105.42deg,
    #ffffff 6.2%,
    rgba(255, 255, 255, 0) 98.75%
  );
  z-index: 1;
  transition: all 0.18s ease;
  -webkit-clip-path: polygon(
    19px 0%,
    calc(100% - 19px) 0%,
    100% 50%,
    calc(100% - 19px) 100%,
    19px 100%,
    0% 50%
  );
  clip-path: polygon(
    19px 0%,
    calc(100% - 19px) 0%,
    100% 50%,
    calc(100% - 19px) 100%,
    19px 100%,
    0% 50%
  );
}
.button-label {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
  position: relative;
  z-index: 10;
  -webkit-clip-path: polygon(
    18px 0%,
    calc(100% - 18px) 0%,
    100% 50%,
    calc(100% - 18px) 100%,
    18px 100%,
    0% 50%
  );
  clip-path: polygon(
    18px 0%,
    calc(100% - 18px) 0%,
    100% 50%,
    calc(100% - 18px) 100%,
    18px 100%,
    0% 50%
  );
  background: linear-gradient(260.63deg, #254fa9 24.31%, #11307e 89.99%);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 160px;
}
.options-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>