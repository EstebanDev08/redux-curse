const API = "https://pokeapi.co/api/v2/pokemon?limit=151";

const getPokemonsData = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return console.log(error);
  }
};

export { getPokemonsData };
