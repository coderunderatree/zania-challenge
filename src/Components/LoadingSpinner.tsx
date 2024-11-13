import React from "react";

const LoadingSpinner = () => {
  return (
    <div
      data-testid="loading-spinner"
      className="flex justify-center items-center"
    >
      <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
