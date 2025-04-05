"use client";

import "./Pagination.scss";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const generatePageNumbers: (string | number)[] =  (totalPages <= 5)
    ? Array.from({ length: totalPages }, (_, index) => index + 1)
    : currentPage < 3
    ? [1, 2, 3, "...", totalPages]
    : currentPage > totalPages - 2
    ? [1, "...", totalPages - 2, totalPages - 1, totalPages]
    : [1, "...", currentPage, "...", totalPages];
  
  const handlePageChange = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className={"pagination"}>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={
          "pagination__prev " +
          "pagination__button " +
          (currentPage === 1 ? "pagination__button--disabled " : "")
        }
      >
        {"<"}
      </button>

      {generatePageNumbers.map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            disabled={typeof page === "string" || page === currentPage}
            className={
              "pagination__page " +
              "pagination__button " +
              (typeof page === "number" && page === currentPage ? "pagination__active " : "") +
              (typeof page === "string" ? "pagination__triplet " : "")
            }
          >
            {page}
          </button>
        )
      })}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={
          "pagination__next " +
          "pagination__button " +
          (currentPage === totalPages ? "pagination__button--disabled " : "")
        }
      >
        {">"}
      </button>
    </div>
  );
};
