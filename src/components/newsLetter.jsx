import React from "react";

const NewsLetter = ({ title, description, btnText }) => {
  return (
    <section className="mb-24 bg-neutral-50">
      <div className="container p-[80px] flex flex-col items-center sm:flex-row sm:gap-10 sm:items-center sm:justify-between">
        <div className="sm:w-full sm:text-center md:text-start md:w-fit">
          <h1 className="text-neutral-900 text-3xl font-bold mb-3">{title}</h1>
          <p className="text-neutral-500 text-base mb-12">{description}</p>
        </div>
        <div className="flex sm:flex sm:flex-col lg:flex lg:flex-row ">
          <input
            className="sm:text-base flex-1 md:text-lg bg-transparent px-5 py-2 rounded-sm"
            placeholder="Your email address"
          />
          <button className="bg-neutral-900 xl:text-base lg:text-sm md:text-xs sm:text-sm text-xs text-white rounded-sm px-6 py-3  font-medium">
            {btnText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
