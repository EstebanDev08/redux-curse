import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../slices/dataSlice";

const PokeCard = ({ name, img }) => {
  const isFavorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setFavorite(!isFavorite));
  };

  return (
    <div className=" shadow-md p-4">
      <div className=" relative ">
        <p className=" flex items-center justify-between">
          {" "}
          <span>{name}</span>{" "}
          <span onClick={handleClick}>
            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </span>
        </p>
        <img src={img} alt="" />
        <p>tipe</p>
      </div>
    </div>
  );
};

export { PokeCard };
