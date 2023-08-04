<template>
  <div class="pokemon-container">
    <img
      v-if="!showPokemon"
      :src="imageSrc"
      class="hidden-pokemon"
      alt="pokemon"
    />

    <img v-else 
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
    },
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
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  filter: drop-shadow(0px 0px 20px #0091ff);
  
  max-height: 150px;
  min-height: 100px;
  height: 8rem;
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