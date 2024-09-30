import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../store/cartSlice";
import { cross } from "../assets/icons/index";
import { ordered } from "../assets/icons/index";

const CartModal = ({ toggleModal }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const removeItemFromCartHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleBuy = () => {
    setIsOrderConfirmed(true);

    setTimeout(() => {
      setIsOrderConfirmed(false);
      toggleModal();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={toggleModal}
      ></div>

      {/* Modal container */}
      <div className="flex justify-center items-center flex-col bg-white p-8 pb-20 lg:pb-8 rounded-2xl shadow-lg relative z-10 h-4/5 lg:h-2/3 w-4/5 lg:w-2/3 max-w-full">
        <button
          className="absolute text-4xl top-2 right-2 text-gray-700 hover:text-red-500"
          onClick={toggleModal}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Your order</h2>
        <ul className="mb-4 overflow-y-scroll">
          {cartItems.length === 0 ? (
            <li>Ваша корзина порожня</li>
          ) : (
            cartItems.map((item) => (
              <li
                key={item.id}
                className="mb-2 hover:bg-gray-100 p-4 rounded-xl"
              >
                <div className="flex justify-between items-center gap-6">
                  <span className="w-2/4">{item.name}</span>
                  <span className="w-1/4 font-bold">{item.quantity} pcs</span>
                  <img
                    className="w-1/4 h-6 cursor-pointer"
                    src={cross}
                    onClick={() => removeItemFromCartHandler(item.id)}
                    alt="delete"
                  />
                </div>
                <div className="text-sm text-gray-500">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))
          )}
        </ul>
        <div className="font-bold text-lg">
          Total price: {totalPrice.toFixed(2)}
        </div>
        <button
          className="bg-[#70e000] absolute bottom-4 lg:bottom-10 lg:right-10 text-white-400 text-xl font-bold rounded-2xl w-2/3 lg:w-36 h-10 mt-4"
          onClick={handleBuy}
        >
          Buy
        </button>
      </div>

      {isOrderConfirmed && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="bg-white p-8 rounded-lg shadow-lg relative z-[110] flex flex-col items-center justify-center w-2/3 h-2/3 lg:w-1/3 lg:h-1/3">
            <img
              src={ordered}
              alt="Order Confirmed"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-bold text-green-600">
              Order accepted!
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
