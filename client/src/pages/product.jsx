import React from "react";
import { Outlet } from "react-router-dom";
import TopAds from "../components/topAds";
import Header from "../components/header";
import FeaturedAndLatestBtn from "../components/outlet/featuredAndLatest";
import NewsLetter from "../components/newsLetter";
import { footerData, footerLinks, footerPayment } from "../data/footer";
import Footer from "../components/footer";

const ProductPage = () => {
  return (
    <>
      <TopAds
        text={"Get 25% OFF on your first order."}
        btnText={"Order Now!"}
        btnHref="ads"
      />
      <Header />

      <section>
        <FeaturedAndLatestBtn basePath="/product/" />
        <Outlet />
      </section>

      <NewsLetter
        title="Join Our Newsletter"
        description="We love to surprise our subscribers with occasional gifts"
        btnText="Subscribe"
      />
      <Footer
        footerData={footerData}
        footerLinks={footerLinks}
        footerPayment={footerPayment}
      />
    </>
  );
};

export default ProductPage;
