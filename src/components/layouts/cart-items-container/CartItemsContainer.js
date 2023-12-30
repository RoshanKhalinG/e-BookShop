import React, { useState, useContext } from "react";
import "./cart-items-container.styles.css";
import CartItemCard from "../../cards/cart-item-card/CartItemCard";
import { CartContext } from "../../../App";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import khaltimain from "../../../khalti/khaltimain";
import config from "../../../khalti/khalti";
import KhaltiCheckout from "khalti-checkout-web";

let checkout = new KhaltiCheckout(config);

const CartItemsContainer = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  const stripeKey = "pk_test_VvWjqy13EI2MSDgDxy3b5jbx00KrrL41yi";
  const navigate = useNavigate();

  const [showStripeForm, setShowStripeForm] = useState(false);
  const [showOtherPaymentForm, setShowOtherPaymentForm] = useState(false);

  const onToken = (token) => {
    console.log(token);
    alert("Your Payment has been processed");
    navigate("/books");
  };

  const handleStripePayment = () => {
    setShowStripeForm(true);
    setShowOtherPaymentForm(false);
  };

  const handleOtherPayment = () => {
    setShowOtherPaymentForm(true);
    setShowStripeForm(false);
  };

  return (
    <section className="cart-items-container">
      <div className="container">
        {totalAmount === 0 ? (
          <h2>Currently your cart is empty</h2>
        ) : (
          <React.Fragment>
            <h2>Cart</h2>

            {cartItems.map((item) => (
              <CartItemCard key={item.id} bookData={item} />
            ))}

            <h2>Total Amount = Rs.{totalAmount}</h2>

            {!showStripeForm && !showOtherPaymentForm && (
              <div className="payment-options">
                <button
                  className="button-primary"
                  onClick={handleStripePayment}
                >
                  Pay with Card
                </button>
                <button
                  className="button-secondary"
                  onClick={handleOtherPayment}
                >
                  Pay with Khalti
                </button>
              </div>
            )}

            {showStripeForm && (
              <StripeCheckout
                name="Book Checkout"
                description="Please fill in the details below"
                amount={totalAmount * 100}
                currency="NRS"
                stripeKey={stripeKey}
                token={onToken}
                billingAddress
              >
                <button className="button-primary">
                  Proceed with Card Payment
                </button>
              </StripeCheckout>
            )}

            {showOtherPaymentForm && (
              <div>
                <button
                  className="button-secondary"
                  onClick={() => checkout.show({ amount: totalAmount * 100})}
                >
                  Proceed with Khalti
                </button>
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    </section>
  );
};
export default CartItemsContainer;
