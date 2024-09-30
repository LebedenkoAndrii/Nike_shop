import React from "react";
import Nav from "../components/Nav";
import Footer from "../sections/Footer";
import { products } from "../constants";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  return (
    <>
      <main className="relative ">
        <Nav />
        <div className="xl:padding-l wide:padding-r padding-b"></div>
        <section id="products" className="max-container padding max-sm:mt-12">
          <div className="flex flex-col justify-start gap-5">
            <h2 className="text-4xl font-palanquin font-bold">
              Our<span className="text-coral-red"> Products</span>
            </h2>
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
              Discover a world of comfort, design, and value
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  grid-cols-1 sm:gap-4 gap-14 ">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className="bg-black padding-x padding-t pb-8 mt-20">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default ProductsPage;
