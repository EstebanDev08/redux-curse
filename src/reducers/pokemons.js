import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: true,
  favorite: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_FAVORITE:
      return { ...state, favorite: action.payload };
    default:
      return state;
  }
};
