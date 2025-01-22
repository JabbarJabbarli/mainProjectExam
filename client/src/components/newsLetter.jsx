import React from "react";
const NewsLetter = ({ emailSection }) => {
  return (
    <section className="mb-24 bg-neutral-50">
      <div className="container p-[80px] flex flex-col items-center sm:flex-row sm:gap-10 sm:items-center sm:justify-between">
        <div className="sm:w-full sm:text-center md:text-start md:w-fit">
          <h1 className="text-neutral-900 text-3xl font-bold mb-3">
            {emailSection.title}
          </h1>
          <p className="text-neutral-500 text-base mb-12">
            {emailSection.subtitle}
          </p>
        </div>
        <div className="flex sm:flex sm:flex-col lg:flex lg:flex-row ">
          <input
            className="sm:text-base flex-1 md:text-lg bg-transparent px-5 py-2 outline-none border border-neutral-100 rounded-md"
            placeholder={emailSection.inputPlaceholder}
          />
          <button className="bg-neutral-900 xl:text-base lg:text-sm md:text-xs sm:text-sm text-xs text-white rounded-sm px-6 py-3  font-medium">
            {emailSection.btnText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
