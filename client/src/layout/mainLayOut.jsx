import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import TopAds from "../components/topAds";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import NewsLetter from "../components/newsLetter";
import { footerData, footerLinks, footerPayment } from "../data/footer";
import { getData } from "../hooks/useFetch";
import Loading from "../components/loading/loading";
import Error from "../components/loading/error";

const MainLayout = () => {
  const [layoutLoading, setLayoutLoading] = useState(false);
  const { i18n } = useTranslation();

  const layoutQuery = `{
    header(locale:"${i18n.language}"){
      basketIcon {
        url
      }
      darkModeIcon {
        url
      }
      inputIcon {
        url
      }
      inputPlaceHolder
      lightModeIcon {
        url
      }
      links
      logoImg {
        url
      }
      logoText
      userIcon {
        url
      }
      menuIcon{
        url
      }
    }
       emailSection(locale:"${i18n.language}") {
        btnText
        title
        subtitle
        inputPlaceholder
  }
  }`;

  useEffect(() => {
    setLayoutLoading(true);
    setTimeout(() => {
      setLayoutLoading(false);
    }, 2000);
  }, [i18n.language]);

  const { data, loading, error } = getData(layoutQuery);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  {
    return layoutLoading ? (
      <Loading />
    ) : (
      <div>
        <TopAds
          text={"Get 25% OFF on your first order."}
          btnText={"Order Now!"}
          btnHref="ads"
        />
        <Header data={data?.header} />
        <Outlet />
        <NewsLetter emailSection={data?.emailSection} />
        <Footer
          footerData={footerData}
          footerLinks={footerLinks}
          footerPayment={footerPayment}
        />
      </div>
    );
  }
};
export default MainLayout;
