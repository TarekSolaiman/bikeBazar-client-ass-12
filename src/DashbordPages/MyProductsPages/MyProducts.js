import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Loading from "../../SharedPage/Loading";
import AddProductModal from "./AddProductModal";
import ProductTable from "./ProductTable";

const MyProducts = () => {
  useTitle("Dashbord-MyProduct");
  const [modal, setModal] = useState(true);
  const { user } = useContext(AuthContext);

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "myProducts",
    queryFn: async () => {
      const res = await fetch(
        `https://bike-bazar-server.vercel.app/myProducts`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }

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
      {modal && (
        <AddProductModal
          setModal={setModal}
          refetch={refetch}
        ></AddProductModal>
      )}

      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Product Available</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myProducts?.map((product) => (
              <ProductTable
                key={product._id}
                product={product}
                refetch={refetch}
              ></ProductTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
