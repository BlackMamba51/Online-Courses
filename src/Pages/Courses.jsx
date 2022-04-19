import React from "react";
import CoursesHeader from "../Components/Courses/CoursesHeader";
import '../Components/Courses/courses.css';
import CoursesCommentsSlider from "../Components/Courses/CoursesCommentsSlider";
import HomepageCertififcate from '../Components/Homepage/HomepageCertificate';
import HomepageSubscribe from "../Components/Homepage/HomepageSubscribe";
function Courses() {

  return (
    <div>
      <CoursesHeader/>
      <CoursesCommentsSlider/>
      <HomepageCertififcate/>
      <HomepageSubscribe/>
    </div>
  )
}

export default Courses;