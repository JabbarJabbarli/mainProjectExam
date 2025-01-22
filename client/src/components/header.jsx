import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next, { changeLanguage } from "i18next";

const Header = ({ data }) => {
  const { i18n, t } = useTranslation();

  if (!data) return null;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    window.location.reload();
  };

  return (
    <header className="">
      <div className="container flex items-center justify-between py-5">
        <div className="flex items-center gap-8 xl:gap-24 sm:gap-3">
          <Link to={"/"} className="flex items-center gap-4 sm:gap-2">
            <img
              src={`http://localhost:1337${data.logoImg.url}`}
              className="w-10 lg:w-10 md:w-8 sm:w-6 xs:w-5"
              alt="Logo"
            />
            <h1 className="text-neutral-900 lg:text-[20px] md:text-[17px] sm:text-[14px] xs:text-[12px] font-extrabold">
              {data.logoText}
            </h1>
          </Link>

          <nav className="hidden xl:flex xl:items-center gap-8">
            {data.links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-md text-neutral-500 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 xl:gap-3">
          <div className="hidden lg:flex items-center gap-2 border border-neutral-100 px-4 py-2 rounded-md">
            <img
              src={`http://localhost:1337${data.inputIcon.url}`}
              className="w-7 h-7 cursor-pointer"
              alt="Search"
            />
            <input
              className="focus:outline-none text-[#5d5f6a] w-[224px] pl-9 font-medium"
              placeholder={data.inputPlaceHolder}
            />
          </div>

          <img
            src={`http://localhost:1337${data.userIcon.url}`}
            className="lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 xs:w-5 xs:h-5 cursor-pointer"
            alt="User"
          />
          <img
            src={`http://localhost:1337${data.basketIcon.url}`}
            className="lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 xs:w-5 xs:h-5 cursor-pointer"
            alt="Cart"
          />
          <img
            src={`http://localhost:1337${data.menuIcon.url}`}
            className="lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 xs:w-5 xs:h-5 cursor-pointer"
            alt="Menu"
          />
          <img
            src={`http://localhost:1337${data.darkModeIcon.url}`}
            className="lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 xs:w-5 xs:h-5 cursor-pointer"
            alt="Dark mode"
          />
          <img
            src={`http://localhost:1337${data.lightModeIcon.url}`}
            className="lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 xs:w-5 xs:h-5 cursor-pointer"
            alt="Light mode"
          />
          <select
            className="bg-white text-neutral-900 border border-neutral-300 rounded-md px-2 py-1"
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="en">English</option>
            <option value="az">Azerbaijani</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
