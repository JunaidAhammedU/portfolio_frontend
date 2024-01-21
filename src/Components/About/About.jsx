import React, { useEffect, useState } from "react";
import { getPortfolioData } from "../../Service/API/api";
import RoundedSkeleton from "../../Service/Skeleton/RoundedSkeleton";
import LineSkeleton from "../../Service/Skeleton/LineSkeleton";
//------------------------------------------------------------------

const About = () => {
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

  console.log(fetchData[0]?.about_pic);

  return (
    <>
      <h1 className="text-center font-sans">ABOUT ME</h1>
      <div className="grid ultraSm:grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center">
          {SLoading ? (
            <RoundedSkeleton style={true} />
          ) : (
            <div className="p-5">
              <img
                src={fetchData[0]?.about_pic}
                alt="codding image"
                className="rounded-3xl"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          {SLoading ? (
            <LineSkeleton style={true} />
          ) : (
            <div className="ultraSm:w-[300px] md:w-[800px] p-5  h-[400px]">
              <p className="text-start text-lg font-abc italic text-gray-600">
                {fetchData[0]?.about}
              </p>
              <div className="h-20 w-full mt-5">
                <h1 className="my-1">Major Projects -</h1>
                <div className="flex items-center mb-3">
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img
                        src="coconut.jpg"
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                  <div className="px-4">
                    <p className="text-start text-xs font-sans font-semibold">
                      I developed an AI Generative Recipe Sharing web app using
                      MERN stack technologies. Integrated real-time chat with
                      Socket.io and applied best practices for efficiency.
                      Explore it at -{" "}
                      <a
                        href="https://coconut-client.vercel.app/login"
                        className="text-blue-800"
                      >
                        coconut.in
                      </a>
                    </p>
                  </div>
                </div>
                {/* ===== */}
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img
                        src="/ecommerce.jpg"
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                  <div className="px-4">
                    <p className="text-start text-xs font-sans font-semibold">
                      I developed an indoor plant e-commerce platform with
                      Node.js, Express, and MongoDB. It features an
                      analytics-rich admin panel, PAYTM integration for seamless
                      payments, and a user-friendly experience with secure
                      authentication and intuitive shopping features. Explore it
                      at -{" "}
                      <a
                        href="https://olea-indoor-plants-shop.onrender.com/"
                        className="text-blue-800"
                      >
                        oleaplants.shop
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
