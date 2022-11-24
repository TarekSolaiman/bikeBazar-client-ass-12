import React, { useState } from "react";
import AddProductModal from "./AddProductModal";

const MyProducts = () => {
  const [modal, setModal] = useState(true);
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-10">My Product</h1>
      <a
        href="#my-modal-2"
        onClick={() => {
          setModal(true);
        }}
        className="btn btn-primary"
        title="Add your Bike details"
      >
        open modal
      </a>
      {modal && <AddProductModal setModal={setModal}></AddProductModal>}
    </div>
  );
};

export default MyProducts;
