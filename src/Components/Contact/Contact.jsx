import React, { useState } from "react";
import { sendMessage } from "../../Service/API/api";
import Loader from "../../Service/Loader/Loader";
//--------------------------------------------------

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [newMessage, setnewMessage] = useState({
    Fname: "",
    Lname: "",
    email: "",
    message: "",
  });

  //handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await sendMessage(newMessage);
      if (data.status) {
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      setnewMessage("");
    } catch (error) {
      setLoading(false);
      alert("somthing went wrong, Refresh the page and submit again.");
    }
  };

  return (
    <>
      <h1 className="text-center font-sans">CONTACT ME</h1>
      <div className="h-[79vh]">
        <div className="flex items-center h-full justify-center">
          <form className="max-w-md mx-auto px-5 py-9 rounded-2xl border" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl text-gray-800 font-sans ">Write a Message</h1>
            <div className="grid md:grid-cols-2 md:gap-6 mt-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="Fname"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={(e) =>
                    setnewMessage({
                      ...newMessage,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <label
                  for="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email "
                  name="Lname"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none resize-none  focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={(e) =>
                    setnewMessage({
                      ...newMessage,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <label
                  for="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email "
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none resize-none  focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) =>
                  setnewMessage({
                    ...newMessage,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                type="text"
                name="message"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none resize-none  focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) =>
                  setnewMessage({
                    ...newMessage,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className={`text-white bg-blue-900 rounded-lg text-sm font-bold w-full sm:w-auto px-10 py-2.5 text-start relative ${
                  loading ? "cursor-not-allowed" : ""
                }`}
              >
                {loading ? <Loader /> : `Submit`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
