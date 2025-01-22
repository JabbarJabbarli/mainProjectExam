import React from "react";

const CardsSection = ({ features }) => {
  return (
    <section className="mt-24">
      <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 py-8 gap-16">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start sm:w-fit rounded-xl "
          >
            <div className="p-3  bg-neutral-50 rounded-full">
              <img
                src={`http://localhost:1337${item.reviewIcon.url}`}
                className="w-6 h-6"
              />
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
