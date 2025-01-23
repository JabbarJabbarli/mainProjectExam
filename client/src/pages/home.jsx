import React from "react";
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
import { useTranslation } from "react-i18next";
import FashionParadise from "../components/fashionParadise";
import ScrollToTop from "../hooks/scrollToTop";

const HomePage = () => {
  const { i18n } = useTranslation();
  const homePageQuery = `{
    products(locale:"${i18n.language}") {
    detail
    documentId
    images {
      url
    }
    name
    price
  }
  features(locale:"${i18n.language}") {
    title
    subtitle
    reviewIcon {
      url
    }
  }
   heroes(locale:"${i18n.language}"){
    btnText
    title
    subtitle
    }
  }`;
  const { loading, error, data } = getData(homePageQuery);

  if (loading) return <Loading />;
  {
    if (data.product) return <Error />;

    const { products, features, heroes } = data;

    return (
      <>
        <ScrollToTop />
        <Hero heroes={heroes[0]} img={bodyImage} />
        <CardsSection features={features} />

        <BestSelling products={products} />

        <FashionParadise heroes={heroes[1]} img={categoryImage} />

        <FeaturedAndLatestBtn />
        <Outlet />
      </>
    );
  }
};

export default HomePage;
