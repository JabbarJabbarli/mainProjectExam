import React from "react";
import TopAds from "../components/topAds";
import Header from "../components/header";
import NewsLetter from "../components/newsLetter";
import { footerData, footerLinks, footerPayment } from "../data/footer";
import Footer from "../components/footer";
import ProductDetails from "../components/productDetails";
import { productDetail } from "../data/productDetail";
import ReviewsAndDetails from "../components/outlet/reviewsAndDetails";
import Featured from "../components/outlet/featuredAndLatest/featured";
import { featured } from "../data/featured";
import ProductBestSelling from "../components/productBestSelling";

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

      <ReviewsAndDetails />

      <ProductBestSelling />

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
