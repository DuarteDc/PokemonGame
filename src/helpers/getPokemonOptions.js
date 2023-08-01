

const getPokemons = () => {
    const pokemonArr = Array.from(Array(650));

    return pokemonArr.map((__, index) => index + 1);
}
