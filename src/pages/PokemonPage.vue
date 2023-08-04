<template>
  <h1 v-if="!pokemon">...</h1>
  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <PokemonOptions
      :pokemons="pokemonOptions"
      :selection-pokemon="checkAnswer"
    />

    <div v-if="showAnswer" class="options-container">
      <h2 class="fade-in">{{ message }}</h2>
      <Button @handle-click="newGame" label="Nuevo Juego" />
    </div>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import Button from "@/components/Button.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
    Button,
  },
  data() {
    return {
      pokemonOptions: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonOptions = await getPokemonOptions();
      const rndPokemon = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonOptions[rndPokemon];
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (pokemonId === this.pokemon.id)
        return (this.message = `Correcto el pokemon es, ${this.pokemon.name}`);

      return (this.message = `Opps, el pokemon es, ${this.pokemon.name}`);
    },
    async newGame() {
      this.pokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      await this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};

getPokemonOptions();
</script>

<style scoped>
.options-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>