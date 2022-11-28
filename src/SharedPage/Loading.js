import React from "react";

const Loading = () => {
  return (
    <div className="flex text-blue-400 items-center justify-center h-full my-20">
      <p className="text-4xl font-semibold">L</p>
      <div className="w-5 h-5 border-4 border-dashed rounded-full animate-spin border-blue-400 mt-3"></div>
      <p className="text-4xl font-semibold">ading</p>
      <div className="flex items-center justify-center space-x-2 mt-7">
        <div className="w-1 h-1 rounded-full animate-pulse bg-secondary"></div>
        <div className="w-1 h-1 rounded-full animate-pulse bg-secondary"></div>
        <div className="w-1 h-1 rounded-full animate-pulse bg-secondary"></div>
        <div className="w-1 h-1 rounded-full animate-pulse bg-secondary"></div>
      </div>
    </div>
  );
};

export default Loading;
