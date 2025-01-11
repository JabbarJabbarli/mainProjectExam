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
      title: "Quality Assurance",
      subtitle:
        "We ensure the highest quality in all our products. Experience excellence.",
    },
    {
      img: shieldCheck,
      title: "Secure Payments",
      subtitle:
        "Your privacy is important to us. Enjoy secure and safe transactions.",
    },
  ];

  return (
    <section className="mt-24">
      <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 py-8 gap-16">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start sm:w-fit rounded-xl "
          >
            <div className="p-3  bg-neutral-50 rounded-full">
              <img src={item.img} alt={item.title} className="w-6 h-6" />
            </div>
            <h2 className="mt-4 mb-2 text-xl font-semibold ">{item.title}</h2>
            <p className="text-neutral-500 text-sm">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
