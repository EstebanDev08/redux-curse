import { AiOutlineHeart } from "react-icons/ai";

const PokeCard = ({ pokemon }) => {
  return (
    <div>
      <div className=" relative ">
        <p>{pokemon.name}</p>
        <img src="" alt="" />
        <p>tipe</p>

        <div className=" absolute top-0 right-0 p-2">
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  );
};

export { PokeCard };
