import React, { useState } from "react";

const ListingSideBar = ({ productDetail }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(800);
  return (
    <section className=" ">
      <div className="border p-7 mx-0 flex-col w-[300px] flex gap-10 ">
        <h1 className="text-neutral-900 text-lg">Categories</h1>

        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center  border-b-2 pb-3 ">
            <input
              className="appearance-none w-5 h-5 border-2 border-slate-200  rounded-md checked:bg-blue-500 checked:border-blue-500 cursor-pointer"
              type="checkbox"
            />

            <p className="text-neutral-700 text-base">Parfume</p>
          </div>
          <div className="flex gap-4 items-center  border-b-2 pb-3 ">
            <input
              className="appearance-none w-5 h-5 border-2 border-slate-200  rounded-md checked:bg-blue-500 checked:border-blue-500 cursor-pointer"
              type="checkbox"
            />

            <p className="text-neutral-700 text-base">Trousers</p>
          </div>{" "}
          <div className="flex gap-4 items-center  border-b-2 pb-3 ">
            <input
              className="appearance-none w-5 h-5 border-2 border-slate-200  rounded-md checked:bg-blue-500 checked:border-blue-500 cursor-pointer"
              type="checkbox"
            />

            <p className="text-neutral-700 text-base">Shoe</p>
          </div>{" "}
          <div className="flex gap-4 items-center  border-b-2 pb-3 ">
            <input
              className="appearance-none w-5 h-5 border-2 border-slate-200  rounded-md checked:bg-blue-500 checked:border-blue-500 cursor-pointer"
              type="checkbox"
            />

            <p className="text-neutral-700 text-base">Handbag</p>
          </div>{" "}
          <div className="flex gap-4 items-center  border-b-2 pb-3 ">
            <input
              className="appearance-none w-5 h-5 border-2 border-slate-200  rounded-md checked:bg-blue-500 checked:border-blue-500 cursor-pointer"
              type="checkbox"
            />

            <p className="text-neutral-700 text-base">Hat</p>
          </div>{" "}
          <div className="flex gap-4 items-center  border-b-2 pb-3 ">
            <input
              className="appearance-none w-5 h-5 border-2 border-slate-200  rounded-md checked:bg-blue-500 checked:border-blue-500 cursor-pointer"
              type="checkbox"
            />

            <p className="text-neutral-700 text-base">Thermos</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-neutral-900 text-lg">Color</h1>

          <div className="flex transition duration-150 gap-3">
            <div
              className={`p-[4px] transition duration-150 cursor-pointer rounded-full border-[1px]`}
            >
              <div
                className="rounded-full sm:w-4 sm:h-4 md:w-7 md:h-7"
              >ZxZ</div>
            </div>
          </div>

          <h1 className="sm:text-[10px] text-neutral-900 text-lg    md:text-[16px] mt-[8px] ">
            Size
          </h1>
          <div className="flex items-center flex-wrap gap-5">
            {["S", "M", "X", "XL", "XXL"].map((size) => (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`sm:w-10 sm:h-10 md:w-[40px] md:h-[40px] flex items-center justify-center sm:text-[10px] md:text-[11px] transition duration-150 rounded-md cursor-pointer border  ${
                  selectedSize === size
                    ? "border-neutral-900 bg-neutral-50"
                    : "border-neutral-100"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div class="relative w-full max-w-md">
          <div className=" max-w-md">
            <h1 className="text-neutral-900 text-lg mb-4">Price</h1>

            <div className="text-neutral-700 text-xl mb-4">${price}</div>

            <input
              type="range"
              min="800"
              max="1500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="appearance-none w-full h-2 bg-black rounded-full outline-none 
          slider-thumb"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingSideBar;
