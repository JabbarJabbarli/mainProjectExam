import React from "react";
import { Outlet } from "react-router-dom";
import TopAds from "../components/topAds";
import Header from "../components/header";
import FeaturedAndLatestBtn from "../components/outlet/featuredAndLatest";
import NewsLetter from "../components/newsLetter";
import { footerData, footerLinks, footerPayment } from "../data/footer";
import Footer from "../components/footer";
import ProductDetails from "../components/productDetails";
import { productDetail } from "../data/productDetail";

const ProductPage = () => {
  return (
    <>
      <TopAds
        text={"Get 25% OFF on your first order."}
        btnText={"Order Now!"}
        btnHref="ads"
      />
      <Header />

      <ProductDetails productDetail={productDetail} />

      <section className="">
        <div className="container">
          <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-neutral-800 font-semibold mb-4">
            You might also like
          </h2>
          <p className="text-neutral-300 xl:text-sm lg:text-sm md:text-sm text-regular">
            SIMILAR PRODUCTS
          </p>
        </div>
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
