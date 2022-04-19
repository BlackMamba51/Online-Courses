import React from "react";
import HomepageCommentsSlider from '../Homepage/HomepageCommentsSlider';
function CoursesCommentsSlider() {

  return (
    <div className="courses-comments">
      <div className="container">
        <div style={{textAlign: 'center', marginTop: 80}} className="subtitle">TESTIMONIALS</div>
        <div style={{textAlign: 'center'}} className="title">What our students say</div>
        <HomepageCommentsSlider/>
      </div>
    </div>
  )
}

export default CoursesCommentsSlider;