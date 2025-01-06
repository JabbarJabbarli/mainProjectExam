import React from "react";
import TopAds from "../components/topAds";
import Header from "../components/header";

const HomePage = () => {
  return (
    <>
      <TopAds
        text={"Get 25% OFF on your first order."}
        btnText={"Order Now!"}
        btnHref="ads"
      />
      <Header />
    </>
  );
};

export default HomePage;
