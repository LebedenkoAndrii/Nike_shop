import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import CartIcon from "../assets/icons/package.png";
import { hamburger, cross } from "../assets/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartModal from "../components/CartModal";

const Nav = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="LOGO" width={130} height={29} />
          </a>

          {/* Основне меню для великих екранів */}
          <ul className="flex-1 flex justify-center items-center gap-4 lg:gap-10 font-bold text-xl ">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <div
              className="flex justify-center items-center gap-2 font-bold text-xl cursor-pointer max-lg:hidden"
              onClick={toggleModal}
            >
              <img className="w-8 z-50" src={CartIcon} alt="cart" />
              <span className="text-2xl lg:text-xl">{totalQuantity}</span>
            </div>

            <div
              className="flex justify-center p-4 h-20 lg:h-24 border-2 border-black rounded-3xl backdrop-blur-lg items-center gap-2 font-bold text-xl cursor-pointer fixed bottom-4 lg:bottom-10 right-4 lg:right-10"
              onClick={toggleModal}
            >
              <img className="w-8 lg:w-10 z-50" src={CartIcon} alt="cart" />
              <span className="text-2xl lg:text-xl">{totalQuantity}</span>
            </div>
          </ul>

          {isModalOpen && <CartModal toggleModal={toggleModal} />}
        </nav>
      </header>
    </>
  );
};

export default Nav;
