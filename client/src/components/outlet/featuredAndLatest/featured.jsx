import React from "react";
import { useLoaderData } from "react-router-dom";

const Featured = () => {
  const featured = useLoaderData();

  return (
    <section className="my-5">
      <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-16 gap-8 md:gap-16">
        {featured.map((item, index) => (
          <div className="flex flex-col justify-between" key={index}>
            <img className="w-full h-auto" src={item.img} alt={item.title} />
            <h3 className="text-neutral-900 mt-4">{item.title}</h3>
            <div className="mt-2 flex items-center gap-5">
              <p className="text-neutral-900 px-4 py-2 w-fit shadow-sm text-[12px] font-medium border border-neutral-100 rounded-full">
                {item.inStock ? "IN STOCK" : "OUT OF STOCK"}
              </p>
              <span className="text-neutral-600 text-sm font-bold">
                ${item.price}.00
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
