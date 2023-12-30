// import React from 'react';
// import './productListing.styles.css';
// import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
// import { BookData } from '../../../util/BookData';

// const ProductListing = () => {
//     return(
//         <div className="product-listing-container">
//             <div className="container">
//                 <h2>Here are some <span className="text-primary">books</span> that you might like</h2>

//                 <div className="listing-container">
//                     {BookData.slice(0,4).map((book) => (
//                          <ProductListingCard key={book.id} bookData={book} />
//                     ))}
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default ProductListing;

// import React from 'react';
// import './productListing.styles.css';
// import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
// import { BookData } from '../../../util/BookData';

// const ProductListing = () => {
//   return (
//     <div className="product-listing-container">
//       <div className="container">
//         <h2>
//           Here are some <span className="text-primary">books</span> that you might like
//         </h2>

//         <div className="listing-container">
//           {BookData.slice(0, 4).map((book) => (
//             <div key={book.id} className="book-link-container">
//               <a href={'/book-details'} className="book-link">
//                 <ProductListingCard bookData={book} />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductListing;
import React from "react";
import "./productListing.styles.css";
import { Link } from "react-router-dom";
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { BookData } from "../../../util/BookData";

const ProductListing = () => {
  return (
    <div className="product-listing-container">
      <div className="container">
        <h2>
          Here are some <span className="text-primary">books</span> that you
          might like
        </h2>

        <div className="listing-container">
          {BookData.slice(0, 4).map((book) => (
            <div key={book.id} className="book-link-container">
              <Link to={`/book-details/${book.id}`} className="book-link">
                <ProductListingCard bookData={book} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
