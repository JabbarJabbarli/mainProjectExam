import React from "react";
import { Link } from "react-router-dom";

const BestSelling = ({ products }) => {
  return (
    <section className="my-24">
      <p className="text-neutral-300 text-center text-[15px]">SHOP NOW!</p>
      <h2 className="text-neutral-900 text-center text-[29px] font-bold">
        Best Selling
      </h2>
      <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-16 gap-8 md:gap-16">
        {products.map((item, index) => (
          <Link
            to={`/products/${item.documentId}`}
            className="flex flex-col justify-between"
            key={index}
          >
            <img
              className="w-full h-auto"
              src={`http://localhost:1337${item.images[0].url}`}
              alt={item.name}
            />
            <h3 className="text-neutral-900 mt-4">{item.name}</h3>
            <div className="mt-2 flex items-center gap-5">
              <p className="text-neutral-900 px-4 py-2 w-fit shadow-sm text-[12px] sm:text-[10px] md:text-[12px] font-medium border border-neutral-100 rounded-full">
                {item?.beforePrice ? "IN STOCK" : "OUT OF STOCK"}
              </p>
              <span className="text-neutral-600 text-sm font-bold">
                ${item.price}.00
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
