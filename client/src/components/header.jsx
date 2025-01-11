import React from "react";
import logoMark from "../assets/headerIcon/Logomark.svg";
import menu from "../assets/global/Menu.svg";
import user from "../assets/global/User-1.svg";
import cart from "../assets/global/Cart.svg";
import search from "../assets/global/Search.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <div className="container flex items-center justify-between py-5">
        <div className="flex items-center gap-8 xl:gap-24 sm:gap-3">
          <Link to={"/"} className="flex items-center gap-4 sm:gap-2">
            <img src={logoMark} className="w-10 lg:w-10 md:w-8 sm:w-6 xs:w-5" />
            <h1 className="text-neutral-900 lg:text-[20px] md:text-[17px] sm:text-[14px] xs:text-[12px] font-extrabold">
              Ecommerce
            </h1>
          </Link>

          <nav className="hidden xl:flex xl:items-center gap-8">
            <Link to={"/"} className="text-md text-neutral-500 font-medium">Home</Link>
            <Link
              to={"/product"}
              className="text-md text-neutral-500 font-medium"
            >
              Product
            </Link>
            <Link className="text-md text-neutral-500 font-medium">
              Categories
            </Link>
            <Link className="text-md text-neutral-500 font-medium">About</Link>
            <Link className="text-md text-neutral-500 font-medium">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 xl:gap-3">
          <div className="hidden lg:flex items-center gap-2 border border-neutral-100 px-4 py-2 rounded-md">
            <img src={search} className="w-7 h-7 cursor-pointer" />
            <input
              className="focus:outline-none text-[#5d5f6a] w-[224px] pl-9 font-medium"
              placeholder="Search products"
            />
          </div>
          <img
            src={user}
            className="lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 xs:w-5 xs:h-5 cursor-pointer"
          />
          <img
            src={cart}
            className="lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 xs:w-5 xs:h-5 cursor-pointer"
          />
          <img
            src={menu}
            className="lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 xs:w-5 xs:h-5 cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
