import React, { useEffect, useState } from "react";
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
import Footer from "../components/footer";
import { footerData, footerLinks, footerPayment } from "../data/footer";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:1337/api/products?populate=*");
      const { data } = await res.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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

      <BestSelling products={products} />

      <Hero
        title="Browse Our Fashion Paradise!"
        subtitle="Step into a world of style and explore our diverse collection of clothing categories."
        btnText="Start Browsing"
        btnHref=""
        img={categoryImage}
      />

      <FeaturedAndLatestBtn latest={latest} featured={featured} />
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
