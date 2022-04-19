import React from "react";

function CourseItem({course}) {

  return (
    <div className="course-section-card">
      <div style={{backgroundImage: `url(${course.img})`}} className="course-section-img"></div>
      <div className="course-section-description">
        <h2 style={{backgroundColor: course.color}} className="course-type">{course.type}</h2>
        <div className="course-name">{course.name}</div>
        <div className="course-price">{course.price} | <span>{course.teacher}</span></div>
      </div>
    </div>
  )
}

export default CourseItem;