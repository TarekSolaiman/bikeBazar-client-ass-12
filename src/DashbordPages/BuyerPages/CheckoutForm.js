import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booked }) => {
  const [success, setSuccess] = useState("");
  const [transictionId, setTransictionId] = useState("");
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const {
    price,
    buyerName,
    buyerEmail,
    productName,
    sellerEmail,
    productId,
    _id,
  } = booked;
  // console.log(booked);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setSuccess("");
    setTransictionId("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyerEmail,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      // save payment data in db and update booking db product allso
      const payment = {
        transictionId: paymentIntent.id,
        sellerEmail,
        productName,
        productId,
        price,
        buyerEmail,
        bookingId: _id,
      };
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            // setSuccess("Your payment successful");
            // setTransictionId(paymentIntent.id);
            // setProcessing(false);
          }
        });
      setSuccess("Your payment successful");
      setTransictionId(paymentIntent.id);
      setProcessing(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="mt-2 input pt-4"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="text-sm text-red-600 mt-3">{cardError}</p>
      <button
        className="btn btn-success w-full mt-2"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
      {success && (
        <div>
          <p className="text-green-500 pt-3">{success}</p>
          <p className="text-green-500">
            Your transictionId :{" "}
            <span className="text-red-500 text-sm font-semibold">
              {transictionId}
            </span>
          </p>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
