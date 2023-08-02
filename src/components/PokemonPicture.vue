<template>
  <div class="pokemon-container">
    <img
      v-if="!showPokemon"
      :src="imageSrc"
      class="hidden-pokemon"
      alt="pokemon"
    />

    <img
      v-else
      :src="imageSrc"
      class="fade-in"
      alt="pokemon"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
        type: Boolean,
        required: true,
        default: false,
    }
  },
  computed: {
    imageSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-height: 200px;
  min-height: 100px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.hidden-pokemon {
  filter: brightness(0);
}
</style>