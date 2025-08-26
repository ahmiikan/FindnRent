import React, { useState, useEffect } from "react";
import "../CSS/Billing.css";
import { useRental } from "../../Context/RentalContext";
import { useNavigate } from "react-router-dom";

function Billing() {
  const { selectedHouse } = useRental();
  const navigate = useNavigate();
  const [months, setMonths] = useState(1);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  // Redirect if no house is selected
  useEffect(() => {
    if (!selectedHouse) {
      alert("No house selected. Redirecting to home...");
      navigate("/");
    }
  }, [selectedHouse, navigate]);

  if (!selectedHouse) return null;

  // Use actual property names from your house object
  const total = selectedHouse.rent * months;
  const tax = Math.floor(total * 0.05);
  const discount = isCouponApplied ? Math.floor(total * 0.1) : 0;
  const grandTotal = total + tax - discount;

  const applyCoupon = () => {
    if (couponCode.trim().toUpperCase() === "10D") {
      setIsCouponApplied(true);
      alert("Coupon applied! You received a 10% discount.");
    } else {
      alert("Invalid coupon code!");
    }
  };

  return (
    <div className="billing-page">
      <div className="billing-card">
        <h1>Checkout</h1>



        <div className="billing-details">
          <p>
            <span>Title:</span> <span>{selectedHouse.title}</span>
          </p>
          <p>
            <span>City:</span> <span>{selectedHouse.city}</span>
          </p>
          <p>
            <span>Rent (per month):</span>{" "}
            <span>{selectedHouse.rent} PKR</span>
          </p>

          <p>
            <span>No of Months:</span>
            <span className="quantity-controls">
              <button onClick={() => setMonths(months > 1 ? months - 1 : 1)}>
                -
              </button>
              {months}
              <button onClick={() => setMonths(months + 1)}>+</button>
            </span>
          </p>

          <p>
            <span>Total:</span> <span>{total} PKR</span>
          </p>

          <p className="coupon-row">
            <span>Coupon:</span>
            <span className="coupon-controls">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon"
              />
              <button onClick={applyCoupon}>Apply</button>
            </span>
          </p>

          {isCouponApplied && (
            <p className="discount">
              <span>Discount (10%):</span> <span>-{discount} PKR</span>
            </p>
          )}

          <p>
            <span>Tax (5%):</span> <span>{tax} PKR</span>
          </p>

          <p>
            <span>Grand Total:</span> <span>{grandTotal} PKR</span>
          </p>
        </div>

        <button
          className="checkout-btn"
          onClick={() => alert("Checkout successful!")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Billing;
