import React, { useState } from "react";
import star from "../assets/global/Star.svg";
import share from "../assets/global/Share.svg";

const ProductDetails = ({ product = [] }) => {
  const [active, setActive] = useState();
  const [selectedSize, setSelectedSize] = useState(null);
  if (!product) {
    return <div>No product data available.</div>;
  }

  const { images = [], name, price, info = [] } = product;
  return (
    <section className="my-24">
      {product.map((item) => (
        <div className="container sm:flex sm:flex-col sm:gap-5 md:flex lg:flex-row lg:gap-24">
          <div className="sm:w-[400px] sm:h-[350px] sm:flex sm:items-center sm:justify-center md:w-[1000px] md:h-[550px] bg-[#f6f6f6] flex items-center justify-center ">
            {images.length > 0 && (
              <img
                src={`http://localhost:1337${item.images[0].url}`}
                alt={item.name}
              />
            )}
          </div>
          <div className="flex flex-col gap-[22px] w-full">
            <h2 className="text-neutral-900 text-[24px] sm:text-[16px] md:text-[28px] tracking-wider font-bold">
              {item.name}
            </h2>
            <h3 className="sm:text-[19px] md:text-[24px] font-semibold">
              ${item.price}.00
            </h3>
          </div>
        </div>
      ))}
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
