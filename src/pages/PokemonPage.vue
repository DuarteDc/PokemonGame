<template>
  <h1 v-if="!pokemon">...</h1>
  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture 
        :pokemon-id="pokemon.id" 
        :show-pokemon="showPokemon"
    />
    <PokemonOptions 
        :pokemons="pokemonOptions"
        @selection-pokemon="checkAnswer"
    />
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonOptions: [],
      pokemon: null,
      showPokemon: false,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonOptions = await getPokemonOptions();

      const rndPokemon = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonOptions[rndPokemon];
    },
    checkAnswer(pokemonId) {
        this.showPokemon = true
    }
  },
  mounted() {
    this.mixPokemonArray();
  },
};

getPokemonOptions();
</script>

<style>
</style>