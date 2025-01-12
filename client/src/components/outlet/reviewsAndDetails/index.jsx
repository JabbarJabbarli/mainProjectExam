import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import emptyStar from "../../../assets/global/Empty Star.svg";
import more from "../../../assets/global/More.svg";

const ReviewsAndDetails = () => {
  const [active, setActive] = useState("details");
  return (
    <section className="my-52 container">
      <div className="flex items-center border min-h-[351px]">
        <div className="flex flex-col gap-5 ">
          <Link
            to={`details`}
            onClick={() => setActive("details")}
            className={`flex items-center gap-5 px-5 py-2 w-[241px] text-center rounded-md bg-transparent border ${
              active === "details" ? " bg-[#fafafa]" : "border-transparent"
            }`}
          >
            <img src={more} className="w-7 h-7" />
            <button>Details</button>
          </Link>
          <Link
            to={`reviews`}
            onClick={() => setActive("reviews")}
            className={`flex items-center gap-5 px-5 py-2 w-[241px] text-center rounded-md bg-transparent border ${
              active === "reviews" ? " bg-[#fafafa]" : "border-transparent"
            }`}
          >
            <img className="w-7 h-7" src={emptyStar} />
            <button>Reviews</button>
          </Link>
        </div>
        <div className="min-h-full">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default ReviewsAndDetails;
