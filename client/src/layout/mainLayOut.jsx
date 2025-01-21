import React, { useEffect, useState } from "react";
import TopAds from "../components/topAds";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import NewsLetter from "../components/newsLetter";
import { footerData, footerLinks, footerPayment } from "../data/footer";
import Loading from "../components/loading/loading";
import { useTranslation } from "react-i18next";

const MainLayOut = () => {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [i18n.language]);
                        
  {
    loading ? (
      <Loading />
    ) : (
      <div>
        <TopAds
          text={"Get 25% OFF on your first order."}
          btnText={"Order Now!"}
          btnHref="ads"
        />
        <Header />
        <Outlet />
        <NewsLetter
          title={"Join Our Newsletter"}
          description={
            "We love to surprise our subscribers with occasional gifts."
          }
          btnText={"Subscribe"}
        />
        <Footer
          footerData={footerData}
          footerLinks={footerLinks}
          footerPayment={footerPayment}
        />
      </div>
    );
  }

  return (
    <div>
      <TopAds
        text={"Get 25% OFF on your first order."}
        btnText={"Order Now!"}
        btnHref="ads"
      />
      <Header />
      <Outlet />
      <NewsLetter
        title={"Join Our Newsletter"}
        description={
          "We love to surprise our subscribers with occasional gifts."
        }
        btnText={"Subscribe"}
      />
      <Footer
        footerData={footerData}
        footerLinks={footerLinks}
        footerPayment={footerPayment}
      />
    </div>
  );
};

export default MainLayOut;
