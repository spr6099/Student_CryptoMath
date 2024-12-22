import React from "react";
import { BaseUrl } from "../constant";
import axios from "axios";

function PaymentComponent({ amount, id }) {
  const HandleSubmit = async (paymentId) => {
    // e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("id", id);

      formData.append("fees[status]", "paid");
      formData.append("fees[amount]", amount);
      formData.append("transactionId", paymentId);

      const res = await axios.post(
        `${BaseUrl}/student/update/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  // Razorpay Payment Handler
  const handlePayment = async () => {
    if (typeof window.Razorpay === "undefined") {
      alert("Razorpay script not loaded!");
      return;
    }

    const options = {
      key: "rzp_test_4Ex6Tyjkp79GFy", // Replace with your Razorpay Key ID
      amount: amount * 100, // Amount in the smallest currency unit (e.g., paise for INR)
      currency: "INR", // Currency code
      name: "Your Company Name", // Your business name
      description: "Payment for services", // Description of the product/service
      // image: "https://your-logo-url.com/logo.png", // Optional: Image to show with payment
      handler: function (response) {
        // Handle success callback
        alert(
          "Payment successful! Payment ID: " + response.razorpay_payment_id
        );
        HandleSubmit(response.razorpay_payment_id);

        // You can send the payment details to your server here
      },
      prefill: {
        id: id,
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Some address",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="col-md-6">
      <h3>Fees: ₹{amount}</h3>
      <button
        className="btn btn-primary"
        onClick={handlePayment} // Trigger Razorpay checkout on button click
      >
        Click to Pay
      </button>
    </div>
  );
}

export default PaymentComponent;
