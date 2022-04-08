import React from "react";
import { coursesList } from "../../utils/coursesList";
import HomepageCoursesItem from "./HomepageCourseItem";
function HomepageCoursesList() {
  return (
    <div className="homepage-courses-list">
      {coursesList.filter(course => course.id < 7).map(courses => <HomepageCoursesItem courses={courses} key={courses.id}/>
       
      )}
    </div>
  )
}

export default HomepageCoursesList;