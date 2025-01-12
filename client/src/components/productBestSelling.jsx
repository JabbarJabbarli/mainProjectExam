import React from "react";
import Featured from "./outlet/featuredAndLatest/featured";
import { featured } from "../data/featured";

const ProductBestSelling = () => {
  return (
    <section className="">
      <div className="container">
        <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-neutral-800 font-semibold mb-4">
          You might also like
        </h2>
        <p className="text-neutral-300 xl:text-sm lg:text-sm md:text-sm text-regular">
          SIMILAR PRODUCTS
        </p>
      </div>
      <Featured  featured={featured}/>
    </section>
  );
};

export default ProductBestSelling;
