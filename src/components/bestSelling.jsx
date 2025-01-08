import React from "react";
import tShirt1 from "../assets/global/Image.png";
import tShirt2 from "../assets/global/Image(1).png";
import tShirt3 from "../assets/global/Image(2).png";
import tShirt4 from "../assets/global/Image(3).png";

const BestSelling = () => {
  const cardsInfo = [
    {
      img: tShirt1,
      title: "Classic Monochrome Tees",
      inStock: true,
      price: 45,
    },
    {
      img: tShirt2,
      title: "Monochromatic Wardrobe",
      inStock: true,
      price: 64,
    },
    {
      img: tShirt3,
      title: "Essential Neutrals",
      inStock: true,
      price: 87,
    },
    {
      img: tShirt4,
      title: "UTRAANET Black",
      inStock: true,
      price: 23,
    },
  ];

  return (
    <section className="my-24">
      <p className="text-neutral-300 text-center text-[15px]">SHOP NOW!</p>
      <h2 className="text-neutral-900 text-center text-[29px] font-bold">
        Best Selling
      </h2>
      <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-16 gap-8 md:gap-16">
        {cardsInfo.map((item, index) => (
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

export default BestSelling;
