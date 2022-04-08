import React from "react";
import '../Components/Homepage/homepage.css';
import HomepageHeader from "../Components/Homepage/HomepageHeader";
import AboutSection from "../Components/Homepage/AboutSection";
import HomepageCourses from "../Components/Homepage/HomepageCourses";
import HomepageBenefits from "../Components/Homepage/HomepageBenefits";
function Homepage() {

  return (
    <div>
      <HomepageHeader/>
      <AboutSection/>
      <HomepageCourses/>
      <HomepageBenefits/>
    </div>
  )
}

export default Homepage;