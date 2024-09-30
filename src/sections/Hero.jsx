import { useState } from "react";
import { Link } from "react-router-dom";

import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe3 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe3);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-[8] pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Link
          className="flex 
    justify-center gap-4 items-center px-7 py-4 border font-montserrat text-lg leading-none hover:scale-95 transform transition-transform duration-300 ease-in-out bg-coral-red  text-white
      rounded-full sm:w-full lg:w-1/3"
          to="/products"
        >
          Shop Now
          <img src={arrowRight} alt="arrow  " />
        </Link>

        <div className="flex justify-start items-start flex-wrap mt-10 w-full nt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        id="tilt"
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-5 mb-9 hover:scale-95 transform transition-transform duration-300 ease-in-out "
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max:sm:px-6 ml-2 ">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
