import React, { useState, useEffect } from "react";
import styled from "./Navbar.module.css";

export default function Navbar(props) {
  const { cartcount, totalprize } = props;

  // State variable to track whether the pop-up should be displayed
  const [showPopup, setShowPopup] = useState(false);

  // State variable to track whether the payment bar should be displayed
  const [showPaymentBar, setShowPaymentBar] = useState(false);

  // Function to handle the cart button click
  const handleCartButtonClick = () => {
    setShowPaymentBar(true);
    setShowPopup(false);
  };

  // Function to handle the close button on the payment bar
  const handleClosePaymentBar = () => {
    setShowPaymentBar(false);
  };

  useEffect(() => {
    if (cartcount >= 10) {
      // Display the pop-up when cartcount is more than or equal to 10
      setShowPopup(true);
      // Automatically close the pop-up after a few seconds (you can adjust the time)
      setTimeout(() => {
        setShowPopup(false);
      }, 5000); // Close the pop-up after 5 seconds (adjust as needed)
    }
  }, [cartcount]);

  return (
    <div className={styled.main}>
      <div className={styled.Title}>
        <img
          src="https://drinkjimmys.com/cdn/shop/files/Logo-3_1.png?v=1662467080&width=220"
          alt="company"
        />
      </div>
      <div className={styled.cartsystem}>
        {/* Cart button */}
        <img
          className="cart-button"
          style={{ height: "90px", width: "90px", cursor: "pointer" }}
          src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png"
          alt="Cart Icon"
          onClick={handleCartButtonClick}
        />
        <span className={cartcount === 0 ? styled.hiddenCout : styled.cout}>
          {cartcount}
        </span>
      </div>
      {showPopup && (
        <div className={styled.popup}>
          <p>You cannot select more than 10 items.</p>
        </div>
      )}
      {showPaymentBar && (
        <div className={styled.paymentBar}>
          <p>Total Items : {cartcount}</p>
          <p>Total Prize : {totalprize}</p>
          <div className="button-container" style={{display: "grid"}}>
          <button onClick={handleClosePaymentBar}>Continoue Shoping</button>
          <button >Continoue Payment</button>
          </div>
        </div>
      )}
    </div>
  );
}
