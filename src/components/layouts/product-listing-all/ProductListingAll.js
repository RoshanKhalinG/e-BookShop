import React from "react";
import "./productListingAll.styles.css";
import { Link } from "react-router-dom";

import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { BookData } from "../../../util/BookData";

const ProductListingAll = () => {
  return (
    <section className="product-listing-all-container">
      <div className="container">
        <div className="grid-container">
          {BookData.map((book) => {
            return (
              <div key={book.id} className="grid-item">
                <Link to={`/book-details/${book.id}`} className="book-link">
                  <ProductListingCard bookData={book} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductListingAll;
