import React from "react";

const RoundedSkeleton = ({ style }) => {
  return (
    <div
      className={`${
        style ? `skeleton w-64 h-44` : `skeleton w-32 h-32 rounded-full`
      }`}
    ></div>
  );
};

export default RoundedSkeleton;
