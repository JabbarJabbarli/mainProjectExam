import React, { useEffect } from "react";
import star from "../../../assets/global/Star.svg";
import emptyStar from "../../../assets/global/Empty Star.svg";
import { useOutletContext } from "react-router-dom";

const Reviews = () => {
  const { reviews } = useOutletContext();
  console.log(reviews);

  let sumOfStars = reviews.reduce((acc, review) => acc + review.stars, 0);
  let reviewStarsMiddle = (sumOfStars / reviews.length).toFixed(1);

  return (
    <section className="flex-1 w-full">
      <h2 className="font-semibold text-neutral-900 mb-6"></h2>
      <h3 className="text-neutral-900 font-bold text-3xl mb-10">
        {reviewStarsMiddle}
        <span className="text-neutral-400 text-sm font-normal">
          -{reviews.length} Reviews
        </span>
      </h3>
      {reviews.map((item, index) => (
        <div key={index}>
          <div className="pt-9 pb-7 pl-2 pr-4 flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
              <h2 className="text-primary-900">{item.author.slice(0, 2)}</h2>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-sm mb-[6px] font-medium text-neutral-900">
                {item.author}
              </h1>
              <p className="mb-4 text-sm font-normal text-neutral-500">
                {item.publishedAt.split("T")[0]}
              </p>
              <p className="text-neutral-500 text-sm">{item.description}</p>
            </div>
            <div className="flex items-center shrink-0">
              {Array.from({ length: item.stars }).map((_, i) => (
                <img key={i} src={star} alt="star" />
              ))}
              {Array.from({ length: 5 - item.stars }).map((_, i) => (
                <img key={i} src={emptyStar} alt="empty star" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Reviews;
