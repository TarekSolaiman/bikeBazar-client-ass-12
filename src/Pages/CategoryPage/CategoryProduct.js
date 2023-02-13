import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../SharedPage/Loading";
import CatagoryCard from "./CatagoryCard";
import useTitle from "../../hooks/useTitle";

const CategoryProduct = () => {
  useTitle("Category");
  const { cat } = useParams();
  const { data: category = [], isLoading } = useQuery({
    queryKey: "category",
    queryFn: async () => {
      const res = await fetch(
        `https://bike-bazar-server.vercel.app/category/${cat}`,
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
  // console.log(category);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-5xl text-center mb-10">Products Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {category.map((product) => (
          <CatagoryCard key={product._id} product={product}></CatagoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
