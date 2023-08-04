import pokemonApi from "@/api/pokemonApi";


const getPokemons = () => {
    const pokemonArr = Array.from(Array(650));

    return pokemonArr.map((__, index) => index + 1);
}

const getPokemonOptions = async() => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
    const res =  await getPokemonNames(mixedPokemons.splice(0, 4));
    return res;
}

const getPokemonNames = async (pokemons = []) => {
    console.log('xd')
    return await Promise.all(pokemons.map(async (pokemon) => {
        const { data } = await pokemonApi.get(`${pokemon}`);
        return {
            id: data.id,
            name: data.name,
        }

    }));
}

export default getPokemonOptions;