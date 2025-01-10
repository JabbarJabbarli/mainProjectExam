import React from "react";
import TopAds from "../components/topAds";
import Header from "../components/header";
import Hero from "../components/hero";
import CardsSection from "../components/cardsSection";
import categoryImage from "../assets/global/Category Image.svg";
import bodyImage from "../assets/global/Hero Image.svg";
import BestSelling from "../components/bestSelling";
import { cardsInfo } from "../data/cardsInfo";
import FeaturedAndLatestBtn from "../components/outlet/featuredAndLatest";
import { Outlet } from "react-router-dom";
import { featured } from "../data/featured";
import { latest } from "../data/latest";
import NewsLetter from "../components/newsLetter";
const HomePage = () => {
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
      <CardsSection />

      <BestSelling cardsInfo={cardsInfo} />

      <Hero
        title="Browse Our Fashion Paradise!"
        subtitle="Step into a world of style and explore our diverse collection of clothing categories."
        btnText="Start Browsing"
        btnHref=""
        img={categoryImage}
      />

      <section>
        <FeaturedAndLatestBtn latest={latest} featured={featured} />
        <Outlet />
      </section>

      <NewsLetter
        title="Join Our Newsletter"
        description="We love to surprise our subscribers with occasional gifts"
        btnText="Subscribe"
      />
    </>
  );
};

export default HomePage;
