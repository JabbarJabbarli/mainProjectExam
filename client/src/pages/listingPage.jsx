import React from "react";
import TopAds from "../components/topAds";
import Header from "../components/header";
import ListingSideBar from "../components/listingSideBar";
import { productDetail } from "../data/productDetail";
import CardSide from "../components/cardSide";
import { listingCard } from "../data/listingCard";
import { footerData, footerLinks, footerPayment } from "../data/footer";
import NewsLetter from "../components/newsLetter";
import Footer from "../components/footer";
const LisringPage = () => {
  return (
    <>
      <TopAds
        text={"Get 25% OFF on your first order."}
        btnText={"Order Now!"}
        btnHref="ads"
      />
      <Header />

      <section className="flex container my-24 gap-20">
        <ListingSideBar productDetail={productDetail} />
        <CardSide listingCard={listingCard} />
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

export default LisringPage;
