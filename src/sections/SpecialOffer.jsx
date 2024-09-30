import { offer } from "../assets/images";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="display of offered products"
          width={773}
          height={687}
        />
      </div>
      {/* for content */}
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Discover an incredible opportunity today with our exclusive special
          offer! At [Your Company Name], we're excited to bring you unbeatable
          savings on [Product/Service]. Whether you're looking for a stylish
          upgrade, a tech-savvy gadget, or a relaxing getaway, our special offer
          has something for everyone
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Don't miss out on the chance to experienc like never before. Act now
          to enjoy [Discount Amount] off, and elevate your [Product/Service]
          experience to a whole new level. This limited-time offer won't last
          forever, so seize the opportunity and treat yourself to the best with
          <span className="text-pink-500 font-bold"> SHOP</span>
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Link
            className="flex 
    justify-center gap-4 items-center px-7 py-4 border font-montserrat text-lg leading-none hover:scale-95 transform transition-transform duration-300 ease-in-out bg-coral-red  text-white
      rounded-full sm:w-full lg:w-1/3"
            to="/products"
          >
            Shop Now
            <img src={arrowRight} alt="arrow  " />
          </Link>
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-grap"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
