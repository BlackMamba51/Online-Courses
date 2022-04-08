import React from "react";

function HomepageCoursesItem({courses}) {

  return (
    <div className="course-card">
      <div className="courseimg">
        <img src={courses.img} alt="course1"/>
      </div>
      <div className="course-description">
        <h2 style={{backgroundColor: courses.color}} className="course-type">{courses.type}</h2>
        <div className="course-name">{courses.name}</div>
        <div className="course-price">{courses.price} | <span>{courses.teacher}</span></div>
      </div>
    </div>
  )
}

export default HomepageCoursesItem;