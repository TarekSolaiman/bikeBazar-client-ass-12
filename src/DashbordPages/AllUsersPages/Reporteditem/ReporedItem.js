import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from "../../../hooks/useTitle";
import Loading from "../../../SharedPage/Loading";
import ReportCard from "./ReportCard";

const ReporedItem = () => {
  useTitle("Dashbord-Rported");
  const {
    data: reportData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "reportData",
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/admin/report", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  // console.log(reportData);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold">All Reported item</h1>
      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full">
          <thead>
            <tr>
              <th>product Name</th>
              <th>seller EmailID</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reportData?.map((report) => (
              <ReportCard
                key={report._id}
                report={report}
                refetch={refetch}
              ></ReportCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReporedItem;
