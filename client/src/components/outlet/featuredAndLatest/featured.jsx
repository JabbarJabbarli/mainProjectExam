import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const Featured = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Fetch products
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:1337/api/products?populate=*");
      const { data } = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Load favorites from localStorage
  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  };

  // Toggle favorite status
  const toggleFavorite = (documentId) => {
    const updatedFavorites = favorites.includes(documentId)
      ? favorites.filter((id) => id !== documentId) // Remove if already a favorite
      : [...favorites, documentId]; // Add if not a favorite

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    getData();
    loadFavorites();
  }, []);

  return (
    <section className="my-24">
      <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
        {products.map((item, index) => {
          const isFavorite = favorites.includes(item.documentId);

          return (
            <Link
              to={`/products/${item.documentId}`}
              className="flex flex-col relative justify-between"
              key={index}
            >
              <div
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(item.documentId);
                }}
                className="absolute top-4 right-4 cursor-pointer"
              >
                {isFavorite ? (
                  <FaHeart style={{ fill: "red", transform: "scale(1.3)" }} />
                ) : (
                  <FaRegHeart
                    style={{ fill: "gray", transform: "scale(1.3)" }}
                  />
                )}
              </div>
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
          );
        })}
      </div>
    </section>
  );
};

export default Featured;
