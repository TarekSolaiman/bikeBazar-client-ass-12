import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";

const BookedModal = ({ produtcData, setProdutcData }) => {
  const { user } = useContext(AuthContext);
  const { email, productName, resalePrice, _id, productPhoto } = produtcData;

  const handleBooked = (e) => {
    e.preventDefault();
    const form = e.target;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const buyerMobile = form.buyerMobile.value;
    const meeting = form.meeting.value;
    const bookingData = {
      productName,
      price: resalePrice,
      buyerName,
      buyerEmail,
      buyerMobile,
      meeting,
      productId: _id,
      sellerEmail: email,
      paid: false,
      productPhoto,
    };
    console.log(bookingData);
    fetch("http://localhost:5000/booked", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setProdutcData(null);
          toast.success("Success full Booked", {
            autoClose: 500,
          });
        } else {
          toast.error(data.message, {
            autoClose: 500,
          });
        }
        console.log(data);
      })
      .catch((e) => console.log(e.message));
  };

  const canselBtn = () => {
    setProdutcData(null);
  };
  return (
    <>
      <input type="checkbox" id="bookedModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <form
            onSubmit={handleBooked}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="productName" className="block text-gray-400">
                product name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                readOnly
                value={productName}
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-400">
                price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                readOnly
                value={resalePrice}
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="buyerName" className="block text-gray-400">
                Your name
              </label>
              <input
                type="text"
                id="buyerName"
                name="buyerName"
                readOnly
                value={user?.displayName}
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="buyerEmail" className="block text-gray-400">
                product name
              </label>
              <input
                type="text"
                id="buyerEmail"
                name="buyerEmail"
                readOnly
                value={user?.email}
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="buyerMobile" className="block text-gray-400">
                Mobile Number
              </label>
              <input
                type="text"
                id="buyerMobile"
                name="buyerMobile"
                required
                placeholder="Your Number"
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="meeting" className="block text-gray-400">
                Meeting Location
              </label>
              <input
                type="text"
                id="meeting"
                name="meeting"
                required
                placeholder="Meeting Location"
                className="input input-bordered w-full"
              />
            </div>

            <div className="modal-action flex justify-center">
              <button className="btn btn-success w-24 mr-3">Booked</button>
              <label
                htmlFor="bookedModal"
                onClick={canselBtn}
                className="btn btn-error w-24"
              >
                cansel
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookedModal;
