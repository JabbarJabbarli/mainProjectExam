import React, { useState } from "react";
import { Link } from "react-router-dom";

const FeaturedAndLatestBtn = ({ basePath = "/" }) => {
  const [active, setActive] = useState("featured");

  return (
    <div className="mt-20">
      <div className="flex items-center justify-center gap-10">
        <Link to={`${basePath}`}>
          <button
            onClick={() => setActive("featured")}
            className={`px-5 py-2 rounded-full border ${
              active === "featured"
                ? "border border-b-neutral-200"
                : "border-transparent"
            }`}
          >
            Featured
          </button>
        </Link>
        <Link to={`${basePath}latest`}>
          <button
            onClick={() => setActive("latest")}
            className={`px-5 py-2 rounded-full border ${
              active === "latest"
                ? "border border-b-neutral-200"
                : "border-transparent"
            }`}
          >
            Latest
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedAndLatestBtn;
