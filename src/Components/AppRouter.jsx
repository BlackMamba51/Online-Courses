import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/Blog";
import Contacts from "../Pages/Contacts";
import Courses from "../Pages/Courses";
import Events from "../Pages/Events";

function AppRouter() {

  return (
    <Routes>
      <Route path="/" element={<AboutUs/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
  )
}

export default AppRouter;