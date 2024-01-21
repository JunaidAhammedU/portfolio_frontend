import React from 'react'
import { Routes, Route } from "react-router-dom";
import Profile_Routes from './Routes/Profile_Routes';
//-----------------------------------------------

const App = () => {
  return (
    <>
       <Routes>
         {/* profile Routes */}
         <Route path="/*" element={<Profile_Routes />} />
      </Routes>
    </>
  )
}

export default App