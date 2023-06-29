import { useEffect } from "react";
import { PokeList } from "./components/PokeList";
import { Searcher } from "./components/Searcher";
import { Home } from "./pages/Home";
import { getPokemonsData } from "./hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setPokemonsActions } from "./actions";
import { LoadingPage } from "./components/Loading";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const items = await getPokemonsData();

      const pokemonsDetail = await Promise.all(
        items.map(async (poke) => {
          return await getPokemonsData(poke.url);
        })
      );

      dispatch(setPokemonsActions(pokemonsDetail));
      dispatch(setLoading(false));
    };

    fetchPokemons();
  }, []);

  return (
    <Home>
      <Searcher />
      {isLoading ? <LoadingPage /> : <PokeList pokemons={pokemons} />}
    </Home>
  );
}

export default App;
