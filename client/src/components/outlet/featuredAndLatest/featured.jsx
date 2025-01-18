import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:1337/api/products?populate=*");
      const { data } = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="my-24">
      <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-8 md:gap-16">
        {products.map((item, index) => (
          <Link
            to={`/products/${item.documentId}`}
            className="flex flex-col justify-between"
            key={index}
          >
            <img
              className="w-full h-auto"
              src={`http://localhost:1337${item.images[0].url}`}
              alt={item.name}
            />
            <h3 className="text-neutral-900 mt-4">{item.name}</h3>
            <div className="mt-2 flex items-center gap-5">
              <p className="text-neutral-900 px-4 py-2 w-fit shadow-sm text-[12px] sm:text-[10px] md:text-[12px] font-medium border border-neutral-100 rounded-full">
                {item?.beforePrice ? "IN STOCK" : "OUT OF STOCK"}
              </p>
              <span className="text-neutral-600 text-sm font-bold">
                ${item.price}.00
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Featured;
