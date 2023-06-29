import { useEffect } from "react";
import { PokeList } from "./components/PokeList";
import { Searcher } from "./components/Searcher";
import { Home } from "./pages/Home";
import { getPokemonsData } from "./hooks/useApi";
import { connect } from "react-redux";
import { setPokemonsActions } from "./actions";

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const pokemons = async () => {
      const items = await getPokemonsData();
      setPokemons(items);
    };

    pokemons();
  }, []);

  return (
    <Home>
      <Searcher />
      <PokeList pokemons={pokemons} />
    </Home>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
