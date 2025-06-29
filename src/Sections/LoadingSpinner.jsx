import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-75 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-spin"></div>
        </div>
        <div>
          <h1 className="font-semibold text-sm text-center">Loading...</h1>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
