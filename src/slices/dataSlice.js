import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  loading: true,
  favorite: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      state.favorite = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setPokemons, setFavorite, setLoading } = dataSlice.actions;

export default dataSlice.reducer;
