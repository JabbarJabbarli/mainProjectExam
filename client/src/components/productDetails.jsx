import React, { useState } from "react";

const ProductDetails = ({ productDetail }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [count, setCount] = useState(0);

  return (
    <section className="my-24">
      {productDetail.map((item, index) => (
        <div key={index} className="flex justify-between container">
          <div className="">
            <div className="w-[553px] bg-[#f6f6f6] flex items-center justify-center h-[574px]">
              <img src={item.mainImg} alt={item.name} />
            </div>
          </div>

          <div className="flex flex-col w-[553px] gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-neutral-900 text-[24px] tracking-wider font-bold">
                {item.name}
              </h2>
              <img alt="Share" src={item.shareIcon} className="w-7 h-7" />
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-[#f6f6f6] flex gap-2 py-1 px-5 rounded-full">
                <img src={item.starIcon} alt="Star" />
                <p className="text-[#5c5f6a] text-center">{item.reviews}</p>
              </div>
              <p className="px-3 py-1 rounded-full font-normal text-sm border border-neutral-100">
                {item.stock}
              </p>
            </div>

            <h3 className="text-[24px] font-semibold">${item.price}.00</h3>

            <p className="text-[16px] mt-[8px] text-[#5c5f6a]">
              {item.colorTitle}
            </p>
            <div className="flex gap-3">
              {item.colors.map((color) => (
                <div
                  key={color.name}
                  className={`p-1 cursor-pointer rounded-full border-[1px] ${
                    selectedColor === color.name
                      ? "border-neutral-900"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedColor(color.name)}
                >
                  <div
                    className="rounded-full w-7 h-7"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                </div>
              ))}
            </div>

            <p className="text-[16px] mt-[14px] text-[#5c5f6a]">SELECT SIZE</p>
            <div className="flex items-center gap-5">
              {["S", "M", "X", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={` w-10 h-10 flex items-center justify-center transition duration-150 rounded-md cursor-pointer border ${
                    selectedSize === size
                      ? "border-neutral-500 bg-neutral-100"
                      : "border-neutral-200"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>

            <p className="text-[16px] mt-[14px] text-[#5c5f6a]">QUANTITY</p>
            <div className="border w-[164px] rounded-md flex items-center justify-between px-2 py-1 gap-3">
              <button
                onClick={() =>
                  setCount((prevCount) => Math.max(0, prevCount - 1))
                }
                className="p-2"
              >
                <img src={item.minusIcon} alt="Decrease" />
              </button>

              <p className="text-center font-medium">{count}</p>

              <button
                onClick={() => setCount((prevCount) => prevCount + 1)}
                className="p-2"
              >
                <img src={item.addIcon} alt="Increase" />
              </button>
            </div>
            <div className="flex items-center w-fit gap-5">
              <button className=" w-[284px] h-[44px] rounded-md bg-neutral-950 text-white ">
                {item.btnText}
              </button>
              <div className="border-neutral-100 rounded-md h-[44px] flex items-center justify-center w-[44px]  border">
                <img src={item.heartIcon} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductDetails;
