import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ footerLink }) => {
  return (
    <footer className="bg-gray-100">
      <div className="container py-24 flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <img
              src={`http://localhost:1337${footerLink.logoImg[0].url}`}
              alt="Footer Logo"
              className="w-12 h-12"
            />
            <p className="text-neutral-800 font-bold text-lg">
              {footerLink.logoText}
            </p>
          </div>
          <p className="text-gray-600 w-[300px]">{footerLink.description}</p>

          {/* Social Media Icons with Links */}
          <div className="flex gap-5">
            {footerLink.socialMediaImages.map((icon, index) => (
              <Link
                key={index}
                to={footerLink.socialMediaLinks[index].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`http://localhost:1337${icon.url}`}
                  alt={`Social Icon ${index}`}
                  className="w-6 h-6"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-3 gap-20">
          {footerLink.links.map((link, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h1 className="font-semibold">{link.title}</h1>
              {link.links.map((sublink, subIndex) => (
                <div key={subIndex} className="flex flex-col gap-5">
                  <Link
                    to={sublink.href}
                    className="text-gray-700 hover:underline"
                  >
                    {sublink.linkName}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Payment Section */}
        <div className="flex">
          <div className="flex flex-col gap-10">
            <h1 className="font-semibold">{footerLink.paymentTitle}</h1>
            <div className="flex items-center gap-5">
              {footerLink.paymentImages.map((item, index) => (
                <div key={index} className="flex items-center gap-5">
                  <img
                    alt="Visa"
                    src={`http://localhost:1337${item.url}`}
                    className="w-12 h-8"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
