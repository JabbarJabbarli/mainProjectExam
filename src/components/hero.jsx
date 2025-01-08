import React from "react";
const Hero = ({ title, subtitle, btnText, img, btnHref }) => {
  return (
    <main className="bg-neutral-50">
      <div className="container mx-auto pt-[80px] flex flex-col sm:pt-[0px] sm:items-center sm:justify-between sm:flex-row">
        <div>
          <h2 className="text-neutral-800 text-3xl font-semibold mb-4">
            {title}
          </h2>
          <p className="text-neutral-600 text-regular mb-12">{subtitle}</p>
          <button className="bg-neutral-900 text-white rounded-sm px-6 py-3 text-sm font-medium">
            {btnText}
          </button>
        </div>
        <div>
          <img
            src={img}
            className="p-8 mx-auto sm:mx-0 sm:w-[70%] md:w-[75%] lg:w-[100%] translate-y-[7%]"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
