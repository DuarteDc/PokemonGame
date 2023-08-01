<template>
  <h1>¿Quién es este pokemon?</h1>
  <PokemonPicture :pokemonId="5" :showPokemon="true"/>
  <PokemonOptions />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

export default {
    components: {
        PokemonPicture,
        PokemonOptions,

    }
};
</script>

<style>
</style>