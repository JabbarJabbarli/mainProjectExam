import React from "react";
import starBadge from "../assets/global/Star Badge.svg";
import delivery from "../assets/global/Delivery.svg";
import shieldCheck from "../assets/global/Shield Check.svg";

const CardsSection = () => {
  const features = [
    {
      img: delivery,
      title: "Free Shipping",
      subtitle:
        "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
    },
    {
      img: starBadge,
      title: "Free Shipping",
      subtitle:
        "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
    },
    {
      img: shieldCheck,
      title: "Free Shipping",
      subtitle:
        "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
    },
  ];

  return (
    <section>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-8 gap-16 ">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-2 ">
            <div className="p-3 bg-neutral-50 rounded-full">
              <img src={item.img} alt={item.title} className="w-6 h-6" />
            </div>
            <h2 className="mt-4 mb-2 text-xl font-semibold">{item.title}</h2>
            <div className="">
              <p className="text-neutral-500 text-sm w-[300px] ">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
