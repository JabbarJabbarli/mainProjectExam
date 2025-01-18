import React, { useEffect, useState } from "react";
import TopAds from "../components/topAds";
import Header from "../components/header";
import Hero from "../components/hero";
import CardsSection from "../components/cardsSection";
import categoryImage from "../assets/global/Category Image.svg";
import bodyImage from "../assets/global/Hero Image.svg";
import BestSelling from "../components/bestSelling";
import FeaturedAndLatestBtn from "../components/outlet/featuredAndLatest";
import { Outlet } from "react-router-dom";
import NewsLetter from "../components/newsLetter";
import Footer from "../components/footer";
import { footerData, footerLinks, footerPayment } from "../data/footer";
import { getData } from "../hooks/useFetch";

const HomePage = () => {
  const homePageQuery = `
  {
  products {
    beforePrice
    name
    price
    documentId
    images {
      url
    }
  }
  features {
    icon {
      url
    }
    documentId
    subtitle
    title
  }
}`;

  const { loading, error, data } = getData(homePageQuery);

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  const { products, features } = data;

  return (
    <>
      <TopAds
        text={"Get 25% OFF on your first order."}
        btnText={"Order Now!"}
        btnHref="ads"
      />
      <Header />
      <Hero
        title="Fresh Arrivals Online"
        subtitle="Discover Our Newest Collection Today."
        btnText="View Collection"
        btnHref=""
        img={bodyImage}
      />
      <CardsSection features={features} />

      <BestSelling products={products} />

      <Hero
        title="Browse Our Fashion Paradise!"
        subtitle="Step into a world of style and explore our diverse collection of clothing categories."
        btnText="Start Browsing"
        btnHref=""
        img={categoryImage}
      />

      <FeaturedAndLatestBtn />
      <Outlet />

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

export default HomePage;
