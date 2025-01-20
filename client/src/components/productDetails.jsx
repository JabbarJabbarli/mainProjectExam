import React, { useState } from "react";
import star from "../assets/global/Star.svg";
import heart from "../assets/global/Heart.svg";

const ProductDetails = ({ product, colorTitle, sizeTitle }) => {
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [imgCounter, setImgCounter] = useState(0);
  const [count, setCount] = useState(0);
  const currentColorSizes = product.info[activeColorIndex]?.size || [];

  if (!product) {
    return <div>No product data available.</div>;
  }

  let sumOfStars = product.reviews.reduce((acc, review) => {
    return acc + review.stars;
  }, 0);

  let reviewStarsMiddle = (sumOfStars / product.reviews.length).toFixed(1);

  console.log(reviewStarsMiddle);

  return (
    <section className="my-24">
      <div className="container sm:flex sm:flex-col sm:gap-5 md:flex lg:flex-row lg:gap-24">
        <div className="sm:w-[400px] sm:h-[350px] md:w-[1000px] md:h-[550px] flex flex-col items-center justify-center bg-[#f6f6f6] relative">
          <img
            src={`http://localhost:1337${product.images[imgCounter].url}`}
            alt={product.name}
          />
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3">
            {product.images.map((item, index) => (
              <button
                key={index}
                onClick={() => setImgCounter(index)}
                className={`w-[10px] h-[10px] rounded-full ${
                  index == imgCounter ? "bg-neutral-900" : "bg-slate-500"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[13px] w-full">
          <h2 className="text-neutral-900 text-[24px] sm:text-[16px] md:text-[28px] tracking-wider font-bold">
            {product.name}
          </h2>

          <div className="flex items-center bg-neutral-100 w-fit px-4 py-[2px]  rounded-full gap-2 item-center mb-6">
            <img src={star} />
            <p className="  text-neutral-500 flex items-center gap-2">
              {reviewStarsMiddle} - {product.reviews.length} Reviews
            </p>
          </div>

          <h3 className="sm:text-[13px] md:text-[24px] font-semibold">
            ${product.price}.00
          </h3>

          <h3 className="sm:text-[10px] md:text-[13px] mt-[8px] text-[#5c5f6a]">
            {colorTitle}
          </h3>

          <div className="flex items-center gap-3">
            {product.info.map((item, index) => (
              <div
                onClick={() => setActiveColorIndex(index)}
                key={index}
                className={`flex bg-transparent transition duration-150 cursor-pointer items-center justify-center ${
                  activeColorIndex === index
                    ? "p-[4px] border border-slate-900"
                    : "p-[6px]"
                } rounded-full`}
              >
                {console.log(index)}
                <div
                  className={`rounded-full  bg-[${item.color}] sm:w-4 sm:h-4 md:w-8 md:h-8`}
                  style={{ background: item.color || "bg-black" }}
                ></div>
              </div>
            ))}
          </div>

          <h3 className="sm:text-[10px] md:text-[13px] mt-[8px] text-[#5c5f6a]">
            {sizeTitle}
          </h3>

          <div className="flex flex-wrap gap-3 ">
            {currentColorSizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(size.name)}
                className={`px-4 w-12 h-12 text-sm transition duration-150 flex items-center justify-center py-2 border rounded-md ${
                  selectedSize === size.name
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 hover:border-slate-900"
                }`}
              >
                {size.name}
              </button>
            ))}
          </div>

          <h3 className="sm:text-[10px] md:text-[13px] mt-[8px] text-[#5c5f6a]">
            QUANTITY
          </h3>
          <div className="flex items-center justify-between border w-[164px] rounded-[5px] px-5 py-3">
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <div className="flex items-center gap-5">
            <button className="bg-neutral-900 w-[284px] rounded-md text-white px-25 py-3  ">
              <p>Add to cart</p>
            </button>
            <div className="border w-[50px] rounded-md h-[50px] flex items-center justify-center">
              <img src={heart} className="w-[30px] h-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
{
  /* <div className="flex flex-col gap-[22px] w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-neutral-900 text-[24px] sm:text-[16px] md:text-[28px] tracking-wider font-bold">
                {item.name}
              </h2>
              <img src={share} />
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-[#f6f6f6] flex gap-2 py-1 px-5 rounded-full">
                <img src={star} />
                <p className="text-[#5c5f6a] sm:text-[11px] md:text-[14px] flex items-center justify-center text-center">
                  4.2- 54 Reviews
                </p>
              </div>
              <p className="px-3 py-1 rounded-full font-normal sm:text-[11px] md:text-[14px] border text-neutral-500 border-neutral-100">
                IN STOCK
              </p>
            </div>

            <h3 className="sm:text-[19px] md:text-[24px] font-semibold">
              ${item.price}.00
            </h3>

            <p className="sm:text-[10px] md:text-[16px] mt-[8px] text-[#5c5f6a]">
              AVAILABLE COLOR
            </p>

            <div className="flex border-1 gap-4 ">
              {item.info.map((item) => (
                <div className="flex flex-col">
                  <div
                    onClick={() => setActive(item.color)}
                    className={`p-[4px] transition duration-150 cursor-pointer rounded-full border-[1px] ${
                      active === item.color
                        ? "border-neutral-900"
                        : "border-transparent"
                    }`}
                  >
                    <div
                      className="rounded-full sm:w-4 sm:h-4 md:w-7 md:h-7"
                      style={{ background: item.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <p className="sm:text-[10px] md:text-[16px] mt-[8px] text-[#5c5f6a]">
              SELECT SIZE
            </p>
            <div className="flex">
              {item.info.map((item) => (
                <div className="flex gap-10">
                  {item.size.map((item) => (
                    <div
                      key={item.name}
                      onClick={() => setSelectedSize(item.name)}
                      className={`sm:w-6 sm:h-6 md:w-10 md:h-10 flex items-center justify-center sm:text-[10px] md:text-[13px] transition duration-150 rounded-sm cursor-pointer border  ${
                        selectedSize === item.name
                          ? "border-neutral-900 bg-neutral-50"
                          : "border-slate-200"
                      }`}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div> */
}
