import React, { useEffect, useState } from "react";
import { getPortfolioData } from "../../Service/API/api";
import RoundedSkeleton from "../../Service/Skeleton/RoundedSkeleton";
import LineSkeleton from "../../Service/Skeleton/LineSkeleton";
//-------------------------------------------------------------------

const Profile = () => {
  const [fetchData, setFetchData] = useState({});
  const [SLoading, setSLoading] = useState(false);

  // fuction for get portfolio Data
  const getData = async () => {
    try {
      setSLoading(true);
      setTimeout(async () => {
        const data = await getPortfolioData();
        if (data) {
          setFetchData(data);
          setSLoading(false);
        }
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className=" h-[79vh]">
        <div className="p-5 flex justify-center items-center relative">
          {SLoading ? (
            <RoundedSkeleton />
          ) : (
            <div className="avatar">
              <div className="w-36 rounded-full">
                <img src={fetchData[0]?.profile_pic} />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="ultraSm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-abc font-semibold text-center text-gray-800">
            {fetchData[0]?.name}
          </h1>
        </div>
        <div className="mt-20 flex items-center justify-center">
          {SLoading ? (
            <LineSkeleton />
          ) : (
            <div className="ultraSm:w-[300px] md:w-[800px] p-3">
              <p className="text-center text-xl font-abc italic text-gray-600">
                "{fetchData[0]?.intro}"
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
