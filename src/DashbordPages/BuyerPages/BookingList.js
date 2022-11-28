import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Loading from "../../SharedPage/Loading";
import BookedTable from "./BookedTable";

const BookingList = () => {
  useTitle("Booking");
  const { user } = useContext(AuthContext);
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "booked",
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/booked/${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-20">My Booking List</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>photo</th>
              <th>product Name</th>
              <th>price</th>
              <th>pay now</th>
              <th>delet order</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booked, i) => (
              <BookedTable
                key={booked._id}
                booked={booked}
                i={i}
                refetch={refetch}
              ></BookedTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
