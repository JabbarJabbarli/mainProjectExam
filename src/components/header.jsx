import React from "react";
import logoMark from "../assets/headerIcon/Logomark.svg";
import menu from "../assets/global/Menu.svg";
import user from "../assets/global/User-1.svg";
import cart from "../assets/global/Cart.svg";
import search from "../assets/global/Search.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container  flex items-center justify-between py-5">
        <div className="flex items-center gap-8 xl:gap-24">
          <Link to={"/"} className="flex items-center gap-6">
            <img src={logoMark} className="w-10 y-10" />
            <h1 className="text-neutral-900 font-extrabold text-[20px] ">
              Ecommerce
            </h1>
          </Link>

          <nav className="hidden lg:flex lg:items-center gap-8">
            <Link className="text-md text-neutral-500 font-medium">Home</Link>
            <Link className="text-md text-neutral-500 font-medium">
              Categories
            </Link>
            <Link className="text-md text-neutral-500 font-medium">About</Link>
            <Link className="text-md text-neutral-500 font-medium">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-3">
          <div className="hidden md:flex items-center gap-2 border border-neutral-100 px-4 py-2 rounded-md">
            <img src={search} className="w-7 y-7 cursor-pointer" />
            <input
              className="focus:outline-none text-[#5d5f6a] w-[224px] pl-9 font-medium "
              placeholder="Search products"
            />
          </div>
          <img src={user} className="w-7 y-7 cursor-pointer" />
          <img src={cart} className="w-7 y-7 cursor-pointer" />
          <img src={menu} className="w-8 y-8 cursor-pointer lg:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
