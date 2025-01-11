import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ footerLinks, footerPayment, footerData }) => {
  return (
    <footer className="bg-gray-100">
      <div className="container py-24 flex justify-between  ">
        {footerData.map((item) => (
          <div key={item.title} className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <img src={item.icon} alt="Footer Logo" className="w-12 h-12" />
              <p className="text-neutral-800 font-bold text-lg">{item.title}</p>
            </div>
            <p className="text-gray-600 w-[300px]">{item.description}</p>

            <div className="flex gap-5">
              {item.socialIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt={`Social Icon ${index}`}
                  className="w-6 h-6"
                />
              ))}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-3 gap-20">
          {footerLinks.map((item) => (
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold">{item.title}</h1>
              {item.links.map((link) => (
                <div className="flex flex-col gap-5">
                  <Link to="#" className="text-gray-700 hover:underline">
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex">
          {footerPayment.map((item) => (
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">{item.title}</h1>
              <div className="flex items-center gap-5">
                {item.payment.map((payment) => (
                  <div className="">
                    <img src={payment} alt="Visa" className="w-12 h-8" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
