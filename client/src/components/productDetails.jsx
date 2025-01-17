import React from "react";
import star from "../assets/global/Star.svg";
import share from "../assets/global/Share.svg";

const ProductDetails = ({ productDetail = [] }) => {
  return (
    <section className="my-24">
      {productDetail.map((item) => (
        <div
          className="container sm:flex sm:flex-col sm:gap-5 md:flex lg:flex-row lg:gap-24"
          key={item.id}
        >
          <div className="sm:w-[400px] sm:h-[350px] sm:flex sm:items-center sm:justify-center md:w-[1000px] md:h-[550px] bg-[#f6f6f6] flex items-center justify-center ">
            <img
              src={`http://localhost:1337${item.images && item.images[0]?.url}`}
              alt={item.name}
              onError={(e) => (e.target.src = "fallback-image.jpg")} // Optional: Fallback image for missing images
            />
          </div>
          <div className="flex flex-col gap-[22px] w-full">
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

            <div className="flex gap-2">
              <div
                key={index}
                className="w-[30px] h-[30px] rounded-full"
                style={{ backgroundColor: color.color }}
              >
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductDetails;
