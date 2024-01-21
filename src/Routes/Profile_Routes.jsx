import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "../Pages/ProfilePage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
//-----------------------------------------------

const Profile_Routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Profile_Routes;
