import React, { useState } from "react";
import { typeOfCoursesList } from "../../utils/coursesTypes";


function CoursesFilters({changeFilter, quertySearch}) {

  // const [filter, setFilter] = useState('All');

  // const changeFilter = (event) => {
  //   setFilter(event.target.value);
  //   console.log(filter);
  // }
  return (
    <div className="courses-filters">
      {typeOfCoursesList.map(course => 
        <button value={course.type} onClick={(event) => changeFilter(event)} className={course.class} key={course.id}>{course.type}</button>
      )}
      <input onChange={(e) => quertySearch(e)} type="text" className="search-course" placeholder="Search course"/>
    </div>
  )
} 

export default CoursesFilters;