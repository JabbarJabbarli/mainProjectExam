import React, { useEffect, useState } from "react";
import TopAds from "../components/topAds";
import Header from "../components/header";
import NewsLetter from "../components/newsLetter";
import { footerData, footerLinks, footerPayment } from "../data/footer";
import Footer from "../components/footer";
import ProductDetails from "../components/productDetails";
import ReviewsAndDetails from "../components/outlet/reviewsAndDetails";
import ProductBestSelling from "../components/productBestSelling";
import { reviewsDetails } from "../data/reviewsDetail";
import { details } from "../data/details";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { documentId } = useParams();
  const [productDetail, setProductDetail] = useState([]);

  const getProductDetail = async () => {
    try {
      const res = await fetch(
        `http://localhost:1337/api/products/${documentId}?populate=*`
      );
      const { data } = await res.json();

      // If `data` is an object, convert it into an array
      setProductDetail(Array.isArray(data) ? data : [data]);
      console.log(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <>
      <TopAds
        text={"Get 25% OFF on your first order."}
        btnText={"Order Now!"}
        btnHref="ads"
      />
      <Header />

      <ProductDetails productDetail={productDetail} />

      <ReviewsAndDetails reviewsDetails={reviewsDetails} details={details} />

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
