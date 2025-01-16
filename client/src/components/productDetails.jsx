import React, { useState } from "react";

const ProductDetails = ({ productDetail }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [count, setCount] = useState(0);

  return (
    <section className="my-24">
      {productDetail.map((item, index) => (
        <div
          key={index}
          className="container sm:flex sm:flex-col sm:gap-5 md:flex lg:flex-row lg:gap-24"
        >
          <div>
            <div className="md:w-[553px] sm:w-[300px] sm:h-[300px] sm:flex sm:items-center sm:justify-center bg-[#f6f6f6] flex items-center justify-center md:h-[574px]">
              <img
                src={item.mainImg}
                alt={item.name}
                className="sm:w-[150px] md:w-fit"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[22px] w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-neutral-900 text-[24px] sm:text-[16px] md:text-[28px] tracking-wider font-bold">
                {item.name}
              </h2>
              <img alt="Share" src={item.shareIcon} className="w-7 h-7" />
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-[#f6f6f6] flex gap-2 py-1 px-5 rounded-full">
                <img
                  src={item.starIcon}
                  className="sm:w-[15px] md:w-[22px]"
                  alt="Star"
                />
                <p className="text-[#5c5f6a] sm:text-[11px] md:text-[14px] flex items-center justify-center text-center">
                  {item.reviews}
                </p>
              </div>
              <p className="px-3 py-1 rounded-full font-normal sm:text-[11px] md:text-[14px] border text-neutral-500 border-neutral-100">
                {item.stock}
              </p>
            </div>

            <h3 className="sm:text-[19px] md:text-[24px] font-semibold">
              ${item.price}.00
            </h3>

            <p className="sm:text-[10px] md:text-[16px] mt-[8px] text-[#5c5f6a]">
              {item.colorTitle}
            </p>
            <div className="flex transition duration-150 gap-3">
              {item.colors.map((color) => (
                <div
                  key={color.name}
                  className={`p-[4px] transition duration-150 cursor-pointer rounded-full border-[1px] ${
                    selectedColor === color.name
                      ? "border-neutral-900"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedColor(color.name)}
                >
                  <div
                    className="rounded-full sm:w-4 sm:h-4 md:w-7 md:h-7"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                </div>
              ))}
            </div>

            <p className="sm:text-[10px] md:text-[16px] mt-[8px] text-[#5c5f6a]">
              SELECT SIZE
            </p>
            <div className="flex items-center gap-5">
              {["S", "M", "X", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`sm:w-6 sm:h-6 md:w-10 md:h-10 flex items-center justify-center sm:text-[10px] md:text-[13px] transition duration-150 rounded-sm cursor-pointer border  ${
                    selectedSize === size
                      ? "border-neutral-900 bg-neutral-50"
                      : "border-slate-200"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>

            <p className="sm:text-[10px] md:text-[16px] mt-[8px] text-[#5c5f6a]">
              QUANTITY
            </p>

            <div className="border sm:w-[100px] md:w-[164px] rounded-md flex items-center justify-between px-2 py-1 gap-3">
              <button
                onClick={() =>
                  setCount((prevCount) => Math.max(0, prevCount - 1))
                }
                className="p-2"
              >
                <img src={item.minusIcon} alt="Decrease" />
              </button>

              <p className="text-center sm:text-[14px] md:text-[18px] font-medium">
                {count}
              </p>

              <button
                onClick={() => setCount((prevCount) => prevCount + 1)}
                className="p-2"
              >
                <img src={item.addIcon} alt="Increase" />
              </button>
            </div>

            <div className="flex items-center w-fit gap-5">
              <button className="sm:w-[200px] sm:h-[30px] md:w-[284px] md:h-[44px] sm:text-[15px] md:text-[20px] rounded-md bg-neutral-950 text-white">
                {item.btnText}
              </button>
              <div className="border-neutral-100 rounded-md sm:w-[30px] sm:h-[30px] md:w-[44px] md:h-[44px] flex items-center justify-center border">
                <img
                  className="sm:w-[20px] sm:h-[20px] md:w-[30px] md:h-[30px]"
                  src={item.heartIcon}
                  alt="Wishlist"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductDetails;
