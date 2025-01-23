import React, { useEffect, useState } from "react";
import ProductDetails from "../components/productDetails";
import ReviewsAndDetails from "../components/outlet/reviewsAndDetails";
import ProductBestSelling from "../components/productBestSelling";
import { Outlet, useParams } from "react-router-dom";
import { getData } from "../hooks/useFetch";
import Error from "../components/loading/error";
import Loading from "../components/loading/loading";
import ScrollToTop from "../hooks/scrollToTop";

const ProductPage = () => {
  const { documentId } = useParams();
  const productPageQuery = `query($id: ID!) {
  product(documentId: $id) {
    price
    name
    info
    images {
      url
    }
    documentId
    genderFor
    detail
    createdAt
    category
    beforePrice
    star
    reviews {
      stars
      publishedAt
      documentId
      description
      author
    }
  }
}
`;

  const { loading, error, data } = getData(productPageQuery, {
    id: documentId,
  });

  if (loading) return <Loading />;
  if (!data.product) return <Error />;

  const { product } = data;
  console.log(product);

  return (
    <>
      <ScrollToTop />

      <ProductDetails
        product={product}
        colorTitle={"AVAILABLE COLORS"}
        sizeTitle={"SELECT SIZE"}
      />

      <ReviewsAndDetails product={product} />

      <ProductBestSelling />
    </>
  );
};

export default ProductPage;
