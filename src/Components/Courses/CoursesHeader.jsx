import React, { useState } from "react";
import { coursesList } from "../../utils/coursesList";
import { typeOfCoursesList } from "../../utils/coursesTypes";
import Navbar from '../Navbar/Navbar';
import CourseItem from "./CourseItem";
import CoursesFilters from "./CoursesFilters";
function CoursesHeader() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [allPosts, setAllPosts] = useState(coursesList); 
  const [filteredPosts, setFilteredPosts] = useState([]);

  const changeFilter = (event) => {
    let filteredArray = [];
    setIsFiltered(true);
    if(event.target.value === 'All') {
      setIsFiltered(false);
    }
    typeOfCoursesList.map(course => {
      course.class = 'course-filter';
      if(course.type === event.target.value) {
        course.class += ' active-course-filter';
      }
    })
    allPosts.map(post => {
      console.log(post.class);
      if(post.type === event.target.value) {
        filteredArray.push(post);
      }
    });
    setFilteredPosts(filteredArray);
  }

  const quertySearch = (event) => {
    let searchArray = [];
    setIsFiltered(true);
    if(event.target.value === '') {
      setIsFiltered(false);
    }
    allPosts.map(post => {

      if((post.name).toLowerCase().includes((event.target.value).toLowerCase())) {
        searchArray.push(post);
      }
    })
    setFilteredPosts(searchArray);
  }

  return (
    <div className="courses-header">
      <Navbar/>
      <div className="container">
        <div className="courses-header__body">
          <div style={{textAlign: 'center'}} className="subtitle">Enjoy your studying!</div>
          <div style={{textAlign: 'center'}} className="title">Our online courses</div>
          <CoursesFilters quertySearch={quertySearch} changeFilter={changeFilter}/>
          <div className="course-container">
            {isFiltered
            ? filteredPosts.map(course => <CourseItem course={course} key={course.id}/>)
            : allPosts.map(course => <CourseItem course={course} key={course.id}/>)
            }
           
          </div>
          <div style={{justifyContent: 'center', marginTop: 70, cursor: 'pointer'}} className="flex-group">
            <div className="load-more"></div>
            <div className="load-text">Load more</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesHeader;