import React from "react";
import star from "../../../assets/global/Star.svg";
import emptyStar from "../../../assets/global/Empty Star.svg";
import { useLoaderData } from "react-router-dom";

const Reviews = () => {
  const reviewsDetails = useLoaderData();

  return (
    <section className="flex-1 w-full">
      {reviewsDetails.map((item, index) => (
        <div key={index}>
          <h1 className="text-neutral-900 text-[23px] mb-[16px] font-semibold">
            {item.title}
          </h1>
          <h2 className="text-neutral-900 font-bold mb-[40px] text-[32px]">
            {item.raiting}
            <span className="text-neutral-500 ml-5 text-[14px] font-normal">
              {item.reviewCount}
            </span>
          </h2>
          <button className="text-neutral-900 px-[24px] py-[9.5px] border-2 rounded-md border-neutral-900">
            {item.btnText}
          </button>
          <div className="border-b border-neutral-100 flex justify-end mt-[40px]">
            <select
              className="text-neutral-500 bg-transparent mb-6 text-[12px] uppercase"
              defaultValue="Sort By"
            >
              {item.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {[1, 2, 3].map((_, reviewIndex) => (
            <div
              key={reviewIndex}
              className="pt-9 pb-7 pl-2 pr-4 flex items-start gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                <h2 className="text-primary-900">{item.profileName}</h2>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-sm mb-[6px] font-medium text-neutral-900">
                  {item.userName}
                </h1>
                <p className="mb-4 text-sm font-normal text-neutral-500">
                  {item.lastUpdated}
                </p>
                <p className="text-neutral-500 text-sm">{item.comment}</p>
              </div>
              <div className="flex items-center shrink-0">
                {[1, 2, 3, 4].map((_, i) => (
                  <img key={i} src={star} alt="star" />
                ))}
                <img src={emptyStar} alt="empty star" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Reviews;
