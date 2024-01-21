import React from "react";

const LineSkeleton = ({ style }) => {
  return (
    <>
      {style ? (
        <div className="flex flex-col gap-4 ultraSm:w-52 md:w-[400px] mt-2">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-1/2 mt-8"></div>
          <div className="skeleton h-4 w-1/2"></div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 ultraSm:w-52 md:w-[400px] items-center justify-center">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-1/2"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-1/2"></div>
        </div>
      )}
    </>
  );
};

export default LineSkeleton;
