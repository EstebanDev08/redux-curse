import { PokeCard } from "../components/PokeCard";

const PokeList = ({ pokemons }) => {
  return (
    <div className=" grid grid-cols-4 gap-6 mt-10 PokeList">
      {pokemons.map((pokemon) => (
        <PokeCard
          key={pokemon.name}
          name={pokemon.name}
          img={pokemon?.sprites?.front_default}
        />
      ))}
    </div>
  );
};

export { PokeList };
