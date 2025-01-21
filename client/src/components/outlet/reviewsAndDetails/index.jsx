import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import emptyStar from "../../../assets/global/Empty Star.svg";
import more from "../../../assets/global/More.svg";

const ReviewsAndDetails = ({ product }) => {
  const [active, setActive] = useState("details");
  return (
    <section className="sm:my-10 md:my-44 w-full container">
      <div className="flex lg:flex-1 sm:gap-10 md:gap-20 sm:flex sm:flex-col md:flex md:flex-row">
        <div className="w-60 py-[70px] flex flex-col gap-5 shrink-0">
          <Link
            to={``}
            onClick={() => setActive("details")}
            className={`flex items-center gap-5 px-5 py-2 text-center rounded-md bg-transparent  ${
              active === "details" ? " bg-[#f1f1f1]" : "border-transparent"
            }`}
          >
            <img src={more} className="w-7 h-7" alt="details" />
            <button>Details</button>
          </Link>
          <Link
            to={`reviews`}
            onClick={() => setActive("reviews")}
            className={`flex items-center gap-5 px-5 py-2  text-center rounded-md bg-transparent  ${
              active === "reviews" ? " bg-[#f1f1f1]" : "border-transparent"
            }`}
          >
            <img className="w-7 h-7" src={emptyStar} alt="reviews" />
            <button>Reviews</button>
          </Link>
        </div>
        <div className="flex-1 min-w-0">
          <Outlet
            context={{
              reviews: product.reviews,
              detail: product.detail,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsAndDetails;
