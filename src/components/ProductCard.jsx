import { star } from "../assets/icons";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";

const PopularProductCard = ({ id, imgURL, name, price }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItemToCart({ id, name, price }));
  };

  return (
    <div className="flex flex-1 flex-col w-full cursor-pointer max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] hover:scale-95 transform transition-transform duration-300 ease-in-out"
      />
      <div className="mt-4 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>

      <h3
        title={name}
        className="mt-2 text-2xl leading-normal font-semibold font-palanquin truncate w-3/4"
      >
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal">
        ${parseFloat(price).toFixed(2)}
      </p>
      <button
        className="h-12 w-[280px] bg-coral-red text-white text-lg mt-2  rounded-full hover:scale-95 transform transition-transform duration-300 ease-in-out"
        onClick={addToCartHandler}
      >
        Add to cart
      </button>
    </div>
  );
};

export default PopularProductCard;
