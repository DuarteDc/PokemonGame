<template>
  <template v-if="loading">
    <Loading />
  </template>
  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <PokemonOptions
      v-if="!showAnswer"
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
import Loading from "@/components/Loading.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
    Button,
    Loading,
  },
  data() {
    return {
      pokemonOptions: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
      loading: true,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.loading = true;
      this.pokemonOptions = await getPokemonOptions();
      const rndPokemon = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonOptions[rndPokemon];
      this.loading = false;
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (pokemonId === this.pokemon.id)
        return (this.message = `Correcto, es ${this.pokemon?.name}`);

      return (this.message = `Opps, es ${this.pokemon?.name}`);
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
  align-items: center;
}
</style>