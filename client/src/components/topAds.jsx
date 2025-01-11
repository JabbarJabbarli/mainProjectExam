import React from "react";
import { Link } from "react-router-dom";

const TopAds = ({ text, btnText, btnHref }) => {
  return (
    <header className="flex justify-center gap-1 items-center bg-neutral-900 py-2">
      <p className="text-white font-light">{text}</p>
      <Link
        to={`/${btnHref}`}
        className="text-white text-sm border-b border-transparent hover:border-white trasition duration-150"
      >
        {btnText}
      </Link>
    </header>
  );
};

export default TopAds;
