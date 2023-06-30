import { SET_POKEMONS } from "../actions-noused/types";

const orderPokemon = (store) => (next) => (action) => {
  if (action.action.type === SET_POKEMONS) {
    const alphabetPokemon = action.action.payload
      .map((poke) => poke.name)
      .sort();
    const pokemonPayload = action.action.payload.map((poke, index) => ({
      ...poke,
      name: alphabetPokemon[index],
    }));

    const myFormatAction = { ...action, payload: pokemonPayload };
    next(myFormatAction);
  } else {
    next(action);
  }
};

const logger = (store) => (next) => (action) => {
  if (action.action.type === SET_POKEMONS) {
    const updatedPayload = [{ name: "aaa" }, ...action.action.payload];
    const updatedAction = { ...action, payload: updatedPayload };
    next(updatedAction);
  } else {
    next(action);
  }
};

export { logger, orderPokemon };
