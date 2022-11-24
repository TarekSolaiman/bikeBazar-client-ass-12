import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full my-40">
      <p className="text-7xl font-bold">L</p>
      <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin border-secondary mt-5"></div>
      <p className="text-7xl font-bold">ading</p>
      <div className="flex items-center justify-center space-x-2 mt-10">
        <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-secondary"></div>
      </div>
    </div>
  );
};

export default Loading;
