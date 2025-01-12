import React from "react";

const Details = () => {
  return (
    <section className="container">
      <div className="flex flex-col ">
        <h1 className="text-neutral-900  text-[23px] mb-[24px] font-semibold">
          Detial
        </h1>
        <p className="text-neutral-500 font-normal text-[15px] leading-loose">
          Elevate your everyday style with our Men's Black T-Shirts, the
          ultimate wardrobe essential for modern men. Crafted with meticulous
          attention to detail and designed for comfort, these versatile black
          tees are a must-have addition to your collection. The classic black
          color never goes out of style. Whether you're dressing up for a
          special occasion or keeping it casual, these black t-shirts are the
          perfect choice, effortlessly complementing any outfit.
        </p>
        <ul className="mt-[56px] list-disc pl-5 flex flex-col gap-3">
          <li>Premium Quality</li>
          <li>Versatile Wardrobe Staple</li>
          <li>Available in Various Sizes</li>
          <li>Tailored Fit</li>
        </ul>
      </div>
    </section>
  );
};

export default Details;
