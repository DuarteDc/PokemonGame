<template>
  <div class="options-container">
    <Button 
      v-for="pokemon in pokemons"
      :pokemon="pokemon"
      :key="pokemon?.id"
      @handleClick="selectionPokemon"
    />
  </div>
</template>
  
<script>
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
    selectionPokemon: {
      type: Function
    }
  },
};
</script>
