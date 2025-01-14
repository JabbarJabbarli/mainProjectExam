import React, { useState } from "react";
import close from "../assets/global/X.svg";
import ChevronDown from "../assets/global/Chevron Down.svg";

const CardSide = ({ listingCard }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items per page
  const totalPages = Math.ceil(listingCard.length / itemsPerPage);

  // Get the items for the current page
  const currentItems = listingCard.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="w-full">
      <div className=" flex flex-col gap-6">
        <div className=" flex flex-col gap-3">
          <h3 className="text-xs font-medium">Applied Filters:</h3>
          <div className="flex gap-3">
            <span className="border h-9 px-4 flex items-center gap-2 rounded-3xl text-xs font-medium">
              Perfume
              <img src={close} alt="" />
            </span>
            <span className="border h-9 px-4 flex items-center gap-2 rounded-3xl text-xs font-medium">
              Perfume
              <img src={close} alt="" />
            </span>
          </div>
        </div>

        <div className=" flex items-center justify-between">
          <p className="text-xs text-neutral-500 font-medium">
            Showing {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, listingCard.length)} of{" "}
            {listingCard.length} results.
          </p>
          <div className="flex items-center">
            <span className="text-xs font-medium text-neutral-600">
              Sort by
            </span>
            <img src={ChevronDown} alt="" />
          </div>
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-8 ">
          {currentItems.map((item, index) => (
            <div className="flex flex-col justify-between" key={index}>
              <img className="w-full h-auto" src={item.img} alt={item.title} />
              <h3 className="text-neutral-900 mt-4">{item.title}</h3>
              <div className="mt-2 flex items-center gap-5">
                <p className="text-neutral-900 px-4 py-2 w-fit shadow-sm text-[12px] font-medium border border-neutral-100 rounded-full">
                  {item.inStock ? "IN STOCK" : "OUT OF STOCK"}
                </p>
                <span className="text-neutral-600 text-sm font-bold">
                  ${item.price}.00
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePreviousPage}
            className="p-2 border rounded-md bg-neutral-100 text-neutral-700"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-neutral-600 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className="p-2 border rounded-md bg-neutral-100 text-neutral-700"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardSide;
