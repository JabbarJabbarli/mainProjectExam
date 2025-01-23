import React from "react";

const FashionParadise = ({ heroes, img }) => {
  return (
    <main className="bg-neutral-50">
      <div className="container pt-[30px] flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="sm:w-full sm:text-center md:text-start md:w-fit">
          <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-neutral-800 font-semibold mb-4">
            {heroes.title}
          </h2>
          <p className="text-neutral-600 xl:text-xl lg:text-lg md:text-base text-regular mb-12">
            {heroes.subtitle}
          </p>
          <button className="bg-neutral-900 xl:text-base lg:text-sm md:text-xs sm:text-xs text-xs text-white rounded-sm px-6 py-3  font-medium">
            {heroes.btnText}
          </button>
        </div>
        <div className="sm:w-full sm:flex sm:justify-center md:w-auto">
          <img
            src={img}
            className="p-8 mx-auto sm:mx-0  w-[80%] sm:w-[50%] md:w-[75%] lg:w-[100%] translate-y-[7%]"
          />
        </div>
      </div>
    </main>
  );
};

export default FashionParadise;
