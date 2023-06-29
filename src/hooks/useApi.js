const API = "https://pokeapi.co/api/v2/pokemon?limit=80";

const getPokemonsData = async (query = API) => {
  try {
    const response = await fetch(query);
    const data = await response.json();
    if (query === API) {
      return data.results;
    } else {
      return data;
    }
  } catch (error) {
    return console.log(error);
  }
};

export { getPokemonsData };
