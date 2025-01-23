import React, { useState } from "react";
import star from "../assets/global/Star.svg";
import heart from "../assets/global/Heart.svg";
import ShareButton from "./handleShare";
import { useParams } from "react-router-dom";

const ProductDetails = ({ product, colorTitle, sizeTitle }) => {
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [imgCounter, setImgCounter] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(0);
  const currentColorSizes = product.info[activeColorIndex]?.size || [];
  const { documentId } = useParams();
  if (!product) {
    return <div>No product data available.</div>;
  }

  let sumOfStars = product.reviews.reduce((acc, review) => {
    return acc + review.stars;
  }, 0);

  let reviewStarsMiddle = (sumOfStars / product.reviews.length).toFixed(1);

  const selectedSizeIndex = selectedSize
    ? currentColorSizes.findIndex((size) => size.name === selectedSize)
    : null;

  const sizeCount =
    selectedSizeIndex !== null ? currentColorSizes[selectedSizeIndex].count : 0;

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    if (sizeCount > count) {
      setCount(count + 1);
    }
  };

  const toggleIsFavorite = (documentId) => {
    const favoritesString = localStorage.getItem("favorites");
    const favoritesArr = JSON.parse(favoritesString);
    favoritesArr.push(documentId);
    localStorage.setItem("favorites", JSON.stringify(favoritesArr));
    alert(`Item id: ${documentId}`);
  };
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
          <div className="flex items-center justify-between">
            <h2 className="text-neutral-900 text-[24px] sm:text-[16px] md:text-[28px] tracking-wider font-bold">
              {product.name}
            </h2>
            <ShareButton />
          </div>
          <div className="flex items-center bg-neutral-100 w-fit px-4 py-[2px]  rounded-full gap-2 item-center mb-6">
            <img src={star} />
            <p className="text-neutral-500 flex items-center gap-2">
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
                onClick={() => {
                  setActiveColorIndex(index);
                  setSelectedSize(null);
                  setCount(0);
                }}
                key={index}
                className={`flex bg-transparent transition duration-150 cursor-pointer items-center justify-center ${
                  activeColorIndex === index
                    ? "p-[4px] border border-slate-900"
                    : "p-[6px]"
                } rounded-full`}
              >
                <div
                  className={`rounded-full bg-[${item.color}] sm:w-4 sm:h-4 md:w-8 md:h-8`}
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
                onClick={() => {
                  setSelectedSize(size.name);
                  setCount(0);
                }}
                disabled={size.count === 0}
                className={`px-4 w-12 h-12 text-sm transition duration-150 flex items-center justify-center py-2 border rounded-md ${
                  selectedSize === size.name
                    ? "border-slate-900 bg-slate-900 text-white"
                    : size.count === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "border-slate-300 hover:border-slate-900"
                }`}
              >
                {size.name}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            {selectedSize ? `Available stock: ${sizeCount}` : "Select a size"}
          </p>

          <h3 className="sm:text-[10px] md:text-[13px] mt-[8px] text-[#5c5f6a]">
            QUANTITY
          </h3>
          <div className="flex items-center justify-between border w-[164px] rounded-[5px] px-5 py-3">
            <button
              onClick={decrementCount}
              disabled={count === 0}
              className="disabled:opacity-50"
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={incrementCount}
              disabled={count >= sizeCount}
              className="disabled:opacity-50"
            >
              +
            </button>
          </div>

          <div className="flex items-center gap-5">
            <button
              className="bg-neutral-900 w-[284px] rounded-md text-white px-25 py-3"
              disabled={!selectedSize || count === 0}
            >
              <p>Add to cart</p>
            </button>
            <button
              onClick={() => toggleIsFavorite(product.documentId)}
              className="border w-[50px] rounded-md h-[50px] flex items-center justify-center"
            >
              <img src={heart} className="w-[30px] h-[30px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
