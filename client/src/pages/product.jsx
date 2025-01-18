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
import { getData } from "../hooks/useFetch";

const ProductPage = () => {
  const { documentId } = useParams();
  const productPageQuery = `query($id: ID!){
  product(documentId: $id){
  name
  price
  documentId
  beforePrice
  }
  }`;

  const { loading, error, data } = getData(productPageQuery, {
    id: documentId,
  });

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  const { product } = data;
  console.log(product);

  return (
    <>
      <TopAds
        text={"Get 25% OFF on your first order."}
        btnText={"Order Now!"}
        btnHref="ads"
      />
      <Header />

      <ProductDetails product={product} />

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
