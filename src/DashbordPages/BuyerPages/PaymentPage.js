import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useTitle from "../../hooks/useTitle";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);

const PaymentPage = () => {
  useTitle("Dashbord-Payment");
  const booked = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl">Payment for {booked.productName} </h1>
      <h1 className="text-xl my-3">
        Please pay <strong>$ {booked.price}</strong>
      </h1>
      <div className="w-96 mx-auto mt-10 bg-gray-100 p-3 rounded-lg">
        <Elements stripe={stripePromise}>
          <CheckoutForm booked={booked} />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage;
