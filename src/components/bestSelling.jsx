import React from "react";
import clothesImg from "../assets/global/Image.png";

const BestSelling = () => {
  const cardsInfo = [
    {
      img: clothesImg,
      title: "Classic Monochrome Tees",
      inStock: true,
      price: 45,
    },
    {
      img: clothesImg,
      title: "Monochromatic Wardrobe",
      inStock: true,
      price: 64,
    },
    {
      img: clothesImg,
      title: "Essential Neutrals",
      inStock: true,
      price: 87,
    },
    {
      img: clothesImg,
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
      <div className="container border flex justify-between items-center lg:flex-wrap  py-14">
        {cardsInfo.map((item, index) => (
          <div className=" h-[434px] " key={index}>
            <img className="" src={item.img} alt={item.title} />
            <h3 className="text-neutral-900 mt-4">{item.title}</h3>
            <div className="mt-2">
              <p>{item.inStock ? "In Stock" : "Out of Stock"}</p>
              <span className="text-neutral-700 font-bold">${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
