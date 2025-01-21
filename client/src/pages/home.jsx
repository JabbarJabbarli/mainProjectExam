import React, { useEffect, useState } from "react";
import Hero from "../components/hero";
import CardsSection from "../components/cardsSection";
import categoryImage from "../assets/global/Category Image.svg";
import bodyImage from "../assets/global/Hero Image.svg";
import BestSelling from "../components/bestSelling";
import FeaturedAndLatestBtn from "../components/outlet/featuredAndLatest";
import { Outlet } from "react-router-dom";
import { getData } from "../hooks/useFetch";
import Error from "../components/loading/error";
import Loading from "../components/loading/loading";

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

  if (loading) return <Loading />;
  {
    if (data.product) return <Error />;

    const { products, features } = data;

    return (
      <>
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
      </>
    );
  }
};

export default HomePage;
