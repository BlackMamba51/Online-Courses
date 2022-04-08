import React from "react";
import TransparentButton from "../UI/TransparentButton/TransparentButton";
import HomepageCoursesList from "./HomepageCoursesList";

function HomepageCourses() {

  return (
    <div className="homepage-courses">
      <div className="container">
        <h2 className="subtitle">Ready to learn?</h2>
        <div className="flex-group">
          <div className="title">Featured Courses</div>
          <TransparentButton>View all courses</TransparentButton>
        </div>
        <HomepageCoursesList/>
      </div>
    </div>
  )
  
}

export default HomepageCourses;